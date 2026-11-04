import { parse } from "csv-parse/sync";
import { mkdir, writeFile } from "node:fs/promises";

const AIRPORTS_URL =
  "https://davidmegginson.github.io/ourairports-data/airports.csv";

console.log("Repülőtér-adatok letöltése...");

const response = await fetch(AIRPORTS_URL);

if (!response.ok) {
  throw new Error(`Letöltési hiba: ${response.status}`);
}

const csv = await response.text();

const rows = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
});

const countries = {};

const rankByType = {
  large_airport: 3,
  medium_airport: 2,
  small_airport: 1,
};

for (const airport of rows) {
  const country = airport.iso_country;
  const municipality = airport.municipality?.trim();
  const iata = airport.iata_code?.trim();
  const rank = rankByType[airport.type];

  if (
    !country ||
    !municipality ||
    !iata ||
    !rank ||
    airport.scheduled_service !== "yes"
  ) {
    continue;
  }

  countries[country] ??= {};

  const key = municipality.toLowerCase();

  countries[country][key] ??= {
    municipality,
    iataCodes: [],
    airportCount: 0,
    airportRank: 0,
  };

  const city = countries[country][key];

  city.airportCount += 1;
  city.airportRank = Math.max(city.airportRank, rank);

  if (!city.iataCodes.includes(iata)) {
    city.iataCodes.push(iata);
  }
}

for (const country of Object.values(countries)) {
  for (const city of Object.values(country)) {
    city.iataCodes.sort();
  }
}

const result = Object.fromEntries(
  Object.entries(countries).map(([code, cities]) => [
    code,
    Object.values(cities).sort(
      (a, b) =>
        b.airportRank - a.airportRank || b.airportCount - a.airportCount,
    ),
  ]),
);

await mkdir("src/data", { recursive: true });

const output = `
// Automatikusan generált fájl az OurAirports adatbázisból.
// Ne szerkeszd kézzel!

export interface AirportCityInfo {
  municipality: string;
  iataCodes: string[];
  airportCount: number;
  airportRank: number;
}

export const airportCitiesByCountry: Record<
  string,
  AirportCityInfo[]
> = ${JSON.stringify(result, null, 2)};
`;

await writeFile("src/data/airportCities.ts", output, "utf8");

console.log(
  `Kész! ${Object.keys(result).length} ország repülőtér-adata feldolgozva.`,
);
