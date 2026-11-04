import type { CountryInfo } from "../data/countryData";
import { airportCitiesByCountry } from "../data/airportCities";

export interface Destination {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  population: number;
  isCapital: boolean;
  isAirportCity: boolean;
  airportCodes: string[];
  airportRank: number;
  score: number;
}

interface GeoNamesPlace {
  geonameId: number;
  name: string;
  lat: number | string;
  lng: number | string;
  population?: number;
  fcode?: string;
}

interface GeoNamesResponse {
  geonames?: GeoNamesPlace[];
  status?: {
    message?: string;
    value?: number;
  };
}

const CACHE_PREFIX = "vikitripedia:destinations:v2:";
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000;

function normalizeCityName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
}

function calculateCityScore(
  population: number,
  isCapital: boolean,
  airportRank: number,
): number {
  let score = 0;

  if (isCapital) score += 1000;

  if (airportRank === 3) score += 300;
  else if (airportRank === 2) score += 200;
  else if (airportRank === 1) score += 50;

  // A népesség kiegészítő súlyozás.
  score += Math.log10(Math.max(population, 1)) * 10;

  return score;
}

function getUsername(): string {
  const username = import.meta.env.VITE_GEONAMES_USERNAME;

  if (!username) {
    throw new Error("Hiányzik a VITE_GEONAMES_USERNAME a .env.local fájlból.");
  }

  return username;
}

function getCacheKey(countryCode: string): string {
  return `${CACHE_PREFIX}${countryCode}`;
}

function getCachedDestinations(countryCode: string): Destination[] | null {
  try {
    const raw = localStorage.getItem(getCacheKey(countryCode));

    if (!raw) return null;

    const cache = JSON.parse(raw) as {
      timestamp: number;
      data: Destination[];
    };

    if (Date.now() - cache.timestamp > CACHE_DURATION) {
      localStorage.removeItem(getCacheKey(countryCode));
      return null;
    }

    return cache.data;
  } catch {
    return null;
  }
}

function saveDestinations(
  countryCode: string,
  destinations: Destination[],
): void {
  try {
    localStorage.setItem(
      getCacheKey(countryCode),
      JSON.stringify({
        timestamp: Date.now(),
        data: destinations,
      }),
    );
  } catch (error) {
    console.warn("A városadatok cache-elése nem sikerült:", error);
  }
}

async function searchPlaces(
  params: Record<string, string>,
): Promise<GeoNamesPlace[]> {
  const url = new URL("https://secure.geonames.org/searchJSON");

  Object.entries({
    ...params,
    username: getUsername(),
    style: "FULL",
    lang: "en",
  }).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`GeoNames API hiba: ${response.status}`);
  }

  const result = (await response.json()) as GeoNamesResponse;

  if (result.status) {
    throw new Error(result.status.message ?? "GeoNames API hiba történt.");
  }

  return result.geonames ?? [];
}

export async function getCountryDestinations(
  country: CountryInfo,
): Promise<Destination[]> {
  if (!country.alpha2) {
    throw new Error(`Hiányzik az ország ISO kódja: ${country.name}`);
  }

  const cached = getCachedDestinations(country.alpha2);

  if (cached) {
    return cached;
  }

  const places = await searchPlaces({
    country: country.alpha2,
    featureClass: "P",
    maxRows: "1000",
  });

  let capitalPlace: GeoNamesPlace | undefined;

  if (country.capital) {
    const capitals = await searchPlaces({
      country: country.alpha2,
      featureClass: "P",
      featureCode: "PPLC",
      maxRows: "5",
    });

    capitalPlace =
      capitals.find(
        (place) =>
          normalizeCityName(place.name) === normalizeCityName(country.capital),
      ) ?? capitals[0];
  }

  const airportCities =
    airportCitiesByCountry[country.alpha2.toUpperCase()] ?? [];

  const airportMap = new Map(
    airportCities.map((airport) => [
      normalizeCityName(airport.municipality),
      airport,
    ]),
  );

  const candidates = places
    .filter(
      (place) =>
        Number.isFinite(Number(place.lat)) &&
        Number.isFinite(Number(place.lng)),
    )
    .map((place) => {
      const isCapital =
        place.geonameId === capitalPlace?.geonameId ||
        (country.capital != null &&
          normalizeCityName(place.name) === normalizeCityName(country.capital));

      const airport = airportMap.get(normalizeCityName(place.name));

      const population = Number(place.population ?? 0);
      const airportRank = airport?.airportRank ?? 0;

      return {
        id: place.geonameId,
        name: place.name,
        latitude: Number(place.lat),
        longitude: Number(place.lng),
        population,
        isCapital,
        isAirportCity: Boolean(airport),
        airportCodes: airport?.iataCodes ?? [],
        airportRank,
        score: calculateCityScore(population, isCapital, airportRank),
      };
    });

  candidates.sort((a, b) => b.score - a.score);

  const selectedCities: Destination[] = [];

  // A főváros mindig első.
  const capital = candidates.find((city) => city.isCapital);

  if (capital) {
    selectedCities.push(capital);
  }

  // A többi város a pontszám alapján kerül be.
  for (const city of candidates) {
    if (selectedCities.length >= 5) break;

    if (selectedCities.some((item) => item.id === city.id)) {
      continue;
    }

    selectedCities.push(city);
  }

  saveDestinations(country.alpha2, selectedCities);

  return selectedCities;
}
