import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
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

export default function WorldMap({
  selected,
  onSelect,
  isIn,
  destinations,
  selectedCity,
  onCitySelect,
}: WorldMapProps) {
  const center: [number, number] = selectedCity
    ? [selectedCity.longitude, selectedCity.latitude]
    : selected?.latitude != null && selected?.longitude != null
      ? [selected.longitude, selected.latitude]
      : [0, 20];

  const countryZoom: Record<string, number> = {
    // Nagyon kicsi országok
    MC: 12,
    VA: 12,
    SM: 10,
    LI: 9,
    AD: 8,
    LU: 7,
    MT: 8,
    SG: 8,

    // Kisebb országok
    BE: 5,
    NL: 4.5,
    CH: 4.5,
    AT: 3.8,
    CZ: 3.8,
    HU: 3.8,
    SK: 4,
    SI: 5,
    HR: 3.5,
    DK: 3.5,

    // Nagyobb országok
    FR: 2.5,
    DE: 2.7,
    ES: 2.2,
    IT: 2.5,
    GB: 2.7,
    PL: 2.5,
    TR: 2.2,
    US: 1.8,
    CN: 1.7,
    BR: 1.7,
    RU: 1.2,
  };

  const zoom = selectedCity
    ? 5
    : selected
      ? (countryZoom[selected.alpha2?.toUpperCase() ?? ""] ?? 2.5)
      : 1;

  return (
    <ComposableMap
      projection="geoEqualEarth"
      width={980}
      height={520}
      style={styles.mapStyle}
    >
      <ZoomableGroup center={center} zoom={zoom} minZoom={1} maxZoom={14}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const numericCode = String(geo.id ?? "").padStart(3, "0");
              const country = countryByNumericCode.get(numericCode);

              const isSelected = Boolean(
                selected && country && selected.id === country.id,
              );

              const countryColor = country
                ? getCountryColor(country.id, isIn)
                : "#E8D5B0";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (country) {
                      onSelect(country);
                    }
                  }}
                  className={isSelected ? styles.selectedPulse : undefined}
                  fill={countryColor}
                  stroke={isSelected ? "#2563EB" : "#FFFFFF"}
                  strokeWidth={isSelected ? 2 : 0.6}
                  style={styles.countryDefaultStyle}
                />
              );
            })
          }
        </Geographies>

        {/* Városjelölők kizárólag kiválasztott ország esetén */}
        {selected &&
          destinations.map((city) => (
            <Marker key={city.id} coordinates={[city.longitude, city.latitude]}>
              <g
                onClick={() => onCitySelect(city)}
                style={{ cursor: "pointer" }}
              >
                <text
                  textAnchor="middle"
                  y={0}
                  fontSize={8}
                  fill="#EF476F"
                  stroke="#FFFFFF"
                  strokeWidth={0.7}
                  paintOrder="stroke"
                >
                  ♥
                </text>

                <text
                  textAnchor="middle"
                  y={11}
                  fontSize={4}
                  fontWeight={600}
                  fill="#263238"
                  stroke="#FFFFFF"
                  strokeWidth={1.5}
                  paintOrder="stroke"
                >
                  {city.name}
                </text>
              </g>
            </Marker>
          ))}
      </ZoomableGroup>
    </ComposableMap>
  );
}
