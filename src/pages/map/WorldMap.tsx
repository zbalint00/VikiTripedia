import { css } from "@emotion/css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { countryData } from "../../data/countryData";
import type { WorldMapProps } from "./type";
import { styles } from "./styles";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryByNumericCode = new Map(
  Object.values(countryData)
    .filter((country) => country.numericCode)
    .map((country) => [country.numericCode, country]),
);

const selectedPulse = css`
  @keyframes selected-country-pulse {
    0%,
    100% {
      stroke: #2563eb;
      stroke-width: 2px;
      stroke-opacity: 1;
    }
    50% {
      stroke: #60a5fa;
      stroke-width: 4px;
      stroke-opacity: 0.55;
    }
  }

  animation: selected-country-pulse 2.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    stroke: #2563eb;
    stroke-width: 3px;
    stroke-opacity: 1;
  }
`;

function getCountryColor(
  countryId: string,
  isIn: WorldMapProps["isIn"],
): string {
  if (isIn("beenThere", countryId)) return "#78C69A";
  if (isIn("nextTrip", countryId)) return "#8CCBFA";
  if (isIn("favorites", countryId)) return "#EF7777";
  if (isIn("wishlist", countryId)) return "#F2CD62";

  return "#E8D5B0";
}

export default function WorldMap({ selected, onSelect, isIn }: WorldMapProps) {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      width={980}
      height={520}
      style={styles.mapStyle}
    >
      <ZoomableGroup>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const numericCode = String(geo.id ?? "").padStart(3, "0");
              const country = countryByNumericCode.get(numericCode);

              const isSelected = selected?.id === country?.id;
              const countryColor = country
                ? getCountryColor(country.id, isIn)
                : "#E8D5B0";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (country) onSelect(country);
                  }}
                  className={isSelected ? selectedPulse : undefined}
                  fill={countryColor}
                  stroke={isSelected ? "#2563EB" : "#FFFFFF"}
                  strokeWidth={isSelected ? 2 : 0.6}
                  style={styles.countryDefaultStyle}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}
