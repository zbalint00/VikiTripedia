import { writeFile } from "node:fs/promises";

const API_URL =
  "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

async function main() {
  console.log("Országadatok letöltése...");

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Az API hibát adott vissza: ${response.status} ${response.statusText}`,
    );
  }

  const countries = await response.json();

  if (!Array.isArray(countries) || countries.length < 200) {
    throw new Error(
      `Váratlan API-válasz. A kapott rekordok száma: ${
        Array.isArray(countries) ? countries.length : 0
      }`,
    );
  }

  const result = countries
    .filter((country) => country.cca3 && country.name?.common)
    .map((country) => ({
      id: country.cca3,
      name: country.name.common,
      numericCode: country.ccn3 ?? "",
      officialName: country.name.official ?? country.name.common,
      flag: country.flag ?? "",
      flagUrl: country.flags?.svg ?? country.flags?.png ?? "",
      region: country.subregion || country.region || "Other",
      continent: country.region || "Other",
      capital: country.capital?.[0] ?? "",
      currencies: Object.entries(country.currencies ?? {}).map(
        ([code, currency]) => ({
          code,
          name: currency.name ?? code,
          symbol: currency.symbol ?? "",
        }),
      ),
      languages: Object.values(country.languages ?? {}),
      continents: country.continents ?? [],
      alpha2: country.cca2 ?? "",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const output = `// GENERATED FILE. Do not edit manually.
// Source: REST Countries v3.1
// Regenerate with: npm run countries:generate

export interface CountryBaseInfo {
  id: string;
  name: string;
  numericCode: string;
  officialName: string;
  flag: string;
  flagUrl: string;
  region: string;
  continent: string;
  capital: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: string[];
  continents: string[];
  alpha2: string;
}

export const countryBaseData: Record<string, CountryBaseInfo> = ${JSON.stringify(
    Object.fromEntries(result.map((country) => [country.id, country])),
    null,
    2,
  )};
`;

  await writeFile("src/data/countryBaseData.ts", output, "utf8");

  console.log(
    `Kész! ${result.length} ország mentve ide: src/data/countryBaseData.ts`,
  );
}

main().catch((error) => {
  console.error("Az országadatok generálása sikertelen:", error);
  process.exitCode = 1;
});
