import type { CountryInfo } from "../../data/countryData";
import type { ListName } from "../../travelStore";

export interface WorldMapProps {
  selected: CountryInfo | null;
  onSelect: (country: CountryInfo) => void;
  isIn: (list: ListName, id: string) => boolean;
}
