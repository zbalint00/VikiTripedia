
import { supabase } from "../lib/supabase";

export type PhotoCategory =
  | "city"
  | "beach"
  | "attractions";

export interface CityPhoto {
  id: string;
  category: PhotoCategory;
  title: string;
  imageUrl: string;
  photoUrl: string;
  photographerName: string;
  photographerUrl: string;
  unsplashUrl: string;
}

interface CityPhotosResponse {
  city: string;
  country: string;
  photos: CityPhoto[];
  error?: string;
}

interface CachedPhotos {
  timestamp: number;
  photos: CityPhoto[];
}

const CACHE_PREFIX = "vikitripedia:city-photos:v2:";
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

function normalizeName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCacheKey(
  city: string,
  country: string,
  isCoastal: boolean,
): string {
  return (
    CACHE_PREFIX +
    `${normalizeName(country)}:` +
    `${normalizeName(city)}:` +
    `${isCoastal ? "coastal" : "inland"}`
  );
}

function getCachedPhotos(
  city: string,
  country: string,
  isCoastal: boolean,
): CityPhoto[] | null {
  try {
    const raw = localStorage.getItem(
      getCacheKey(city, country, isCoastal),
    );

    if (!raw) return null;

    const cache = JSON.parse(raw) as CachedPhotos;

    if (
      !cache.timestamp ||
      !Array.isArray(cache.photos) ||
      Date.now() - cache.timestamp > CACHE_DURATION
    ) {
      localStorage.removeItem(
        getCacheKey(city, country, isCoastal),
      );

      return null;
    }

    return cache.photos;
  } catch {
    return null;
  }
}

function saveCachedPhotos(
  city: string,
  country: string,
  isCoastal: boolean,
  photos: CityPhoto[],
): void {
  try {
    const cache: CachedPhotos = {
      timestamp: Date.now(),
      photos,
    };

    localStorage.setItem(
      getCacheKey(city, country, isCoastal),
      JSON.stringify(cache),
    );
  } catch (error) {
    console.warn(
      "A városfotók cache-elése nem sikerült:",
      error,
    );
  }
}


export async function getCityPhotos(
  city: string,
  country: string,
  isCoastal: boolean,
): Promise<CityPhoto[]> {
  if (!city.trim() || !country.trim()) {
    return [];
  }

  const cached = getCachedPhotos(
    city,
    country,
    isCoastal,
  );

  if (cached) {
    console.log("Városfotók cache-ből:", cached);
    return cached;
  }

  const { data, error } = await supabase.functions.invoke(
    "city-photos",
    {
      body: {
        city,
        country,
        isCoastal,
      },
    },
  );

  console.log("CITY PHOTOS RESPONSE:", data);
  console.log("CITY PHOTOS ERROR:", error);

  if (error) {
    console.error("Supabase Edge Function hiba:", error);

    // A szerver válaszának megpróbálása kiolvasni.
    if ("context" in error && error.context instanceof Response) {
      const responseText = await error.context.clone().text();
      console.error("Edge Function nyers válasza:", responseText);
    }

    throw new Error(
      "A városfotók betöltése nem sikerült.",
    );
  }

  if (!data || typeof data !== "object") {
    console.error("Érvénytelen válasz:", data);
    throw new Error("A Supabase nem adott vissza érvényes adatot.");
  }

  const result = data as CityPhotosResponse;
console.log(
  "FOTÓK KATEGÓRIÁNKÉNT:",
  JSON.stringify(
    result?.photos?.map((photo) => ({
      id: photo.id,
      category: photo.category,
      title: photo.title,
    })),
    null,
    2,
  ),
);
  if (result.error) {
    console.error("Edge Function üzenet:", result.error);
    throw new Error(result.error);
  }

  if (!Array.isArray(result.photos)) {
    console.error(
      "A válaszból hiányzik a photos tömb:",
      result,
    );

    throw new Error(
      "A Supabase válaszából hiányzik a photos tömb.",
    );
  }

  const photos = result.photos;

  saveCachedPhotos(
    city,
    country,
    isCoastal,
    photos,
  );

  return photos;
}

