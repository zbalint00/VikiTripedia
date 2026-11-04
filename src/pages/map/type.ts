import type { CountryInfo } from "../../data/countryData";
import type { ListName } from "../../travelStore";
import type { Destination } from "../../services/destinationService";

export interface WorldMapProps {
  selected: CountryInfo | null;
  onSelect: (country: CountryInfo) => void;
  isIn: (list: ListName, id: string) => boolean;

  destinations: Destination[];
  selectedCity: Destination | null;
  onCitySelect: (city: Destination) => void;
}
