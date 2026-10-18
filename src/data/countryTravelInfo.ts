export interface CountryInfo {
  id: string;
  name: string;
  flag: string;
  region: string;
  weather: string;
  weatherIcon: string;
  beach: number; // 1-5
  beachDesc: string;
  flightHours: string;
  flightCost: string;
  hotelPerNight: string;
  tripTotal: string; // 7 nights estimate
  tip: string;
  officialName?: string;
  numericCode?: string;
  flagUrl?: string;
  continent?: string;
  capital?: string;
  currencies?: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages?: string[];
  continents?: string[];
  alpha2?: string;
}
