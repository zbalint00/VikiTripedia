import { countryBaseData, type CountryBaseInfo } from "./countryBaseData";

export interface CountryInfo extends CountryBaseInfo {
  weather: string;
  weatherIcon: string;
  beach: number;
  beachDesc: string;
  flightHours: string;
  flightCost: string;
  hotelPerNight: string;
  tripTotal: string;
  tip: string;
}

export const countryData: Record<string, CountryInfo> = Object.fromEntries(
  Object.values(countryBaseData).map((country) => [
    country.id,
    {
      ...country,
      weather: "Nincs még időjárási adat.",
      weatherIcon: "🌍",
      beach: 0,
      beachDesc: "Nincs még strandadat.",
      flightHours: "Nincs adat",
      flightCost: "Nincs adat",
      hotelPerNight: "Nincs adat",
      tripTotal: "Nincs adat",
      tip: "Az utazási információk később automatikusan töltődnek be.",
    },
  ]),
);
