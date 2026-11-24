import type { CountryInfo } from "../data/countryData";
import { airportCitiesByCountry } from "../data/airportCities";
import { point, lineString } from "@turf/helpers";
import pointToLineDistance from "@turf/point-to-line-distance";

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
  isCoastal: boolean;
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

interface CoastlineGeoJSON {
  type: "FeatureCollection";
  features: {
    geometry: {
      type: "LineString" | "MultiLineString";
      coordinates: number[][] | number[][][];
    };
  }[];
}

interface CoastSegment {
  line: ReturnType<typeof lineString>;
  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;
}

const CACHE_PREFIX = "vikitripedia:destinations:v3:";
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000;

const COAST_RADIUS_KM = 20;
const COASTAL_BONUS = 800;
const GRID_SIZE = 0.5;

let coastlinePromise: Promise<CoastSegment[]> | null = null;

const coastlineGrid = new Map<string, CoastSegment[]>();

function normalizeCityName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
}

function getGridKey(lat: number, lng: number): string {
  const x = Math.floor(lng / GRID_SIZE);
  const y = Math.floor(lat / GRID_SIZE);

  return `${x}:${y}`;
}

function addSegmentToGrid(segment: CoastSegment) {
  const minX = Math.floor(segment.minLng / GRID_SIZE);
  const maxX = Math.floor(segment.maxLng / GRID_SIZE);
  const minY = Math.floor(segment.minLat / GRID_SIZE);
  const maxY = Math.floor(segment.maxLat / GRID_SIZE);

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      const key = `${x}:${y}`;

      const list = coastlineGrid.get(key) ?? [];
      list.push(segment);
      coastlineGrid.set(key, list);
    }
  }
}

async function getCoastlineSegments(): Promise<CoastSegment[]> {
  if (!coastlinePromise) {
    coastlinePromise = fetch(
      `${import.meta.env.BASE_URL}data/coastline.geojson`,
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Partvonal betöltési hiba: ${response.status}`);
        }

        const geojson = (await response.json()) as CoastlineGeoJSON;
        const segments: CoastSegment[] = [];

        for (const feature of geojson.features) {
          const geometry = feature.geometry;

          const lines =
            geometry.type === "LineString"
              ? [geometry.coordinates as number[][]]
              : (geometry.coordinates as number[][][]);

          for (const coordinates of lines) {
            for (let i = 0; i < coordinates.length - 1; i++) {
              const a = coordinates[i];
              const b = coordinates[i + 1];

              const segment: CoastSegment = {
                line: lineString([a, b]),
                minLng: Math.min(a[0], b[0]),
                maxLng: Math.max(a[0], b[0]),
                minLat: Math.min(a[1], b[1]),
                maxLat: Math.max(a[1], b[1]),
              };

              segments.push(segment);
              addSegmentToGrid(segment);
            }
          }
        }

        return segments;
      })
      .catch((error) => {
        coastlinePromise = null;
        coastlineGrid.clear();
        throw error;
      });
  }

  return coastlinePromise;
}

async function isCoastalCity(
  latitude: number,
  longitude: number,
): Promise<boolean> {
  await getCoastlineSegments();

  const x = Math.floor(longitude / GRID_SIZE);
  const y = Math.floor(latitude / GRID_SIZE);

  const cityPoint = point([longitude, latitude]);

  const nearbySegments = new Set<CoastSegment>();

  // A város körüli 3×3 rácsot ellenőrizzük.
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const key = `${x + dx}:${y + dy}`;

      const segments = coastlineGrid.get(key);

      if (!segments) continue;

      segments.forEach((segment) => nearbySegments.add(segment));
    }
  }

  for (const segment of nearbySegments) {
    const latDistance = Math.abs(latitude - segment.minLat);

    if (latDistance > 1) continue;

    const distance = pointToLineDistance(cityPoint, segment.line, {
      units: "kilometers",
    });

    if (distance <= COAST_RADIUS_KM) {
      return true;
    }
  }

  return false;
}

function calculateCityScore(
  population: number,
  isCapital: boolean,
  airportRank: number,
  isCoastal: boolean,
): number {
  let score = 0;

  if (isCapital) score += 1000;

  if (airportRank === 3) score += 300;
  else if (airportRank === 2) score += 200;
  else if (airportRank === 1) score += 50;

  // Tengerparti célpontokat erősen preferálunk.
  if (isCoastal) score += COASTAL_BONUS;

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

  const candidates: Destination[] = places
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
        isCoastal: false,
        score: calculateCityScore(population, isCapital, airportRank, false),
      };
    });

  candidates.sort((a, b) => b.score - a.score);

  // A partvonal ellenőrzéséhez csak a legjobb 150 várost vizsgáljuk.
  // Ez jelentősen csökkenti a számításokat.
  const coastalCandidates = candidates.slice(0, 150);

  await Promise.all(
    coastalCandidates.map(async (city) => {
      city.isCoastal = await isCoastalCity(city.latitude, city.longitude);

      city.score = calculateCityScore(
        city.population,
        city.isCapital,
        city.airportRank,
        city.isCoastal,
      );
    }),
  );

  candidates.sort((a, b) => b.score - a.score);

  const selectedCities: Destination[] = [];

  // Főváros mindig benne legyen.
  const capital = candidates.find((city) => city.isCapital);

  if (capital) {
    selectedCities.push(capital);
  }

  // Tengerparti városokat előnyben részesítjük.
  const coastalCities = candidates.filter((city) => city.isCoastal);

  for (const city of coastalCities) {
    if (selectedCities.length >= 5) break;

    if (!selectedCities.some((item) => item.id === city.id)) {
      selectedCities.push(city);
    }
  }

  // A fennmaradó helyeket a pontszám alapján töltjük fel.
  for (const city of candidates) {
    if (selectedCities.length >= 5) break;

    if (!selectedCities.some((item) => item.id === city.id)) {
      selectedCities.push(city);
    }
  }

  saveDestinations(country.alpha2, selectedCities);

  return selectedCities;
}
