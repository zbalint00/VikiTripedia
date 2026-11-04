import type { CountryInfo } from "../data/countryData";

const API_URL = "https://archive-api.open-meteo.com/v1/archive";

function getClimateDateRange(): { startDate: string; endDate: string } {
  const currentYear = new Date().getFullYear();

  // Az utolsó 5 teljes naptári év
  const endYear = currentYear - 1;
  const startYear = endYear - 4;

  return {
    startDate: `${startYear}-01-01`,
    endDate: `${endYear}-12-31`,
  };
}

const CACHE_PREFIX = "vikitripedia:climate:v2:";
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 30;

const MONTH_NAMES = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
];

export interface MonthlyClimate {
  month: number;
  monthName: string;
  averageTemperature: number;
  averageMaxTemperature: number;
  averageMinTemperature: number;
  averagePrecipitation: number;
}

interface OpenMeteoResponse {
  daily: {
    time: string[];
    temperature_2m_max: (number | null)[];
    temperature_2m_min: (number | null)[];
    precipitation_sum: (number | null)[];
  };
}

interface ClimateCache {
  savedAt: number;
  latitude: number;
  longitude: number;
  data: MonthlyClimate[];
}

interface MonthlyAccumulator {
  temperatureSum: number;
  temperatureCount: number;
  maxTemperatureSum: number;
  maxTemperatureCount: number;
  minTemperatureSum: number;
  minTemperatureCount: number;
  precipitationByYear: Map<number, number>;
}

function round(value: number): number {
  return Math.round(value * 10) / 10;
}

function getCacheKey(
  countryId: string,
  startDate: string,
  endDate: string,
): string {
  return `${CACHE_PREFIX}${countryId}:${startDate}:${endDate}`;
}

function getCachedClimate(
  countryId: string,
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string,
): MonthlyClimate[] | null {
  try {
    const rawCache = localStorage.getItem(
      getCacheKey(countryId, startDate, endDate),
    );

    if (!rawCache) return null;

    const cache: ClimateCache = JSON.parse(rawCache);

    const isExpired = Date.now() - cache.savedAt > CACHE_DURATION;

    const coordinatesChanged =
      cache.latitude !== latitude || cache.longitude !== longitude;

    if (isExpired || coordinatesChanged) {
      localStorage.removeItem(getCacheKey(countryId, startDate, endDate));
      return null;
    }

    return cache.data;
  } catch {
    return null;
  }
}

function saveClimateCache(
  countryId: string,
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string,
  data: MonthlyClimate[],
): void {
  try {
    const cache: ClimateCache = {
      savedAt: Date.now(),
      latitude,
      longitude,
      data,
    };

    localStorage.setItem(
      getCacheKey(countryId, startDate, endDate),
      JSON.stringify(cache),
    );
  } catch {
    // Ha a böngésző tárhelye megtelt vagy nem elérhető,
    // az alkalmazás ettől még működhet tovább.
  }
}

function calculateMonthlyAverages(
  daily: OpenMeteoResponse["daily"],
): MonthlyClimate[] {
  const accumulators: MonthlyAccumulator[] = Array.from({ length: 12 }, () => ({
    temperatureSum: 0,
    temperatureCount: 0,
    maxTemperatureSum: 0,
    maxTemperatureCount: 0,
    minTemperatureSum: 0,
    minTemperatureCount: 0,
    precipitationByYear: new Map<number, number>(),
  }));

  daily.time.forEach((date, index) => {
    const parsedDate = new Date(`${date}T12:00:00`);

    const month = parsedDate.getMonth();
    const year = parsedDate.getFullYear();

    const accumulator = accumulators[month];

    const max = daily.temperature_2m_max[index];
    const min = daily.temperature_2m_min[index];

    const mean =
      max !== null && max !== undefined && min !== null && min !== undefined
        ? (max + min) / 2
        : null;
    const precipitation = daily.precipitation_sum[index];

    if (mean !== null && mean !== undefined) {
      accumulator.temperatureSum += mean;
      accumulator.temperatureCount++;
    }

    if (max !== null && max !== undefined) {
      accumulator.maxTemperatureSum += max;
      accumulator.maxTemperatureCount++;
    }

    if (min !== null && min !== undefined) {
      accumulator.minTemperatureSum += min;
      accumulator.minTemperatureCount++;
    }

    if (precipitation !== null && precipitation !== undefined) {
      const current = accumulator.precipitationByYear.get(year) ?? 0;

      accumulator.precipitationByYear.set(year, current + precipitation);
    }
  });

  return accumulators.map((accumulator, index) => {
    const precipitationValues = Array.from(
      accumulator.precipitationByYear.values(),
    );

    const averagePrecipitation =
      precipitationValues.length > 0
        ? precipitationValues.reduce((sum, value) => sum + value, 0) /
          precipitationValues.length
        : 0;

    return {
      month: index + 1,
      monthName: MONTH_NAMES[index],

      averageTemperature:
        accumulator.temperatureCount > 0
          ? round(accumulator.temperatureSum / accumulator.temperatureCount)
          : 0,

      averageMaxTemperature:
        accumulator.maxTemperatureCount > 0
          ? round(
              accumulator.maxTemperatureSum / accumulator.maxTemperatureCount,
            )
          : 0,

      averageMinTemperature:
        accumulator.minTemperatureCount > 0
          ? round(
              accumulator.minTemperatureSum / accumulator.minTemperatureCount,
            )
          : 0,

      averagePrecipitation: round(averagePrecipitation),
    };
  });
}

export async function getClimateData(
  country: CountryInfo,
): Promise<MonthlyClimate[]> {
  const { id, latitude, longitude } = country;

  if (
    latitude === null ||
    longitude === null ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      `Nincsenek érvényes koordináták ehhez az országhoz: ${country.name}`,
    );
  }

  const { startDate, endDate } = getClimateDateRange();

  const cachedData = getCachedClimate(
    id,
    latitude,
    longitude,
    startDate,
    endDate,
  );

  if (cachedData) {
    return cachedData;
  }

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    start_date: startDate,
    end_date: endDate,
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
    ].join(","),
    timezone: "auto",
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Az időjárási API hibát adott vissza: ${response.status}`);
  }

  const result = (await response.json()) as OpenMeteoResponse;

  if (!result.daily?.time?.length) {
    throw new Error("Az API nem adott vissza időjárási adatokat.");
  }

  const monthlyData = calculateMonthlyAverages(result.daily);

  saveClimateCache(id, latitude, longitude, startDate, endDate, monthlyData);

  return monthlyData;
}
