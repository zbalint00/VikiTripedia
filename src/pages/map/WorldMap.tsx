import { useEffect, useState } from "react";
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

const countryZoom: Record<string, number> = {
  MC: 12,
  VA: 12,
  SM: 10,
  LI: 9,
  AD: 8,
  LU: 7,
  MT: 8,
  SG: 8,

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

const getInitialZoom = (selected: WorldMapProps["selected"]) => {
  if (!selected) return 1;

  return countryZoom[selected.alpha2?.toUpperCase() ?? ""] ?? 2.5;
};

const getInitialCenter = (
  selected: WorldMapProps["selected"],
): [number, number] => {
  if (selected?.longitude != null && selected?.latitude != null) {
    return [selected.longitude, selected.latitude];
  }

  return [0, 20];
};

export default function WorldMap({
  selected,
  onSelect,
  isIn,
  destinations,
  selectedCity,
  onCitySelect,
}: WorldMapProps) {
  const [zoom, setZoom] = useState(getInitialZoom(selected));
  const [center, setCenter] = useState<[number, number]>(
    getInitialCenter(selected),
  );

  // Csak akkor állítjuk vissza a fókuszt, ha új országot vagy várost választanak.
  // A kézi pan/zoom nem resetelődik minden rendernél.
  useEffect(() => {
    if (selectedCity) {
      setCenter([selectedCity.longitude, selectedCity.latitude]);
      setZoom(7);
      return;
    }

    if (selected) {
      setCenter(getInitialCenter(selected));
      setZoom(getInitialZoom(selected));
      return;
    }

    setCenter([0, 20]);
    setZoom(1);
  }, [selected?.id, selectedCity?.id]);

  const handleZoomIn = () => {
    setZoom((current) => Math.min(current * 1.5, 14));
  };

  const handleZoomOut = () => {
    setZoom((current) => Math.max(current / 1.5, 1));
  };

  const handleReset = () => {
    if (selectedCity) {
      setCenter([selectedCity.longitude, selectedCity.latitude]);
      setZoom(7);
    } else if (selected) {
      setCenter(getInitialCenter(selected));
      setZoom(getInitialZoom(selected));
    } else {
      setCenter([0, 20]);
      setZoom(1);
    }
  };

  const visibleCities = selected
    ? selectedCity
      ? [selectedCity]
      : destinations
    : [];

  return (
    <div className={styles.mapCanvas}>
      <ComposableMap
        projection="geoEqualEarth"
        width={980}
        height={520}
        style={styles.mapStyle}
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          minZoom={1}
          maxZoom={100}
          onMoveEnd={({ coordinates, zoom: newZoom }) => {
            setCenter(coordinates!);
            setZoom(newZoom!);
          }}
        >
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
                    strokeWidth={isSelected ? 1.8 : 0.6}
                    style={styles.countryDefaultStyle}
                  />
                );
              })
            }
          </Geographies>

          {/* Városjelölők csak ország kiválasztása után */}
          {visibleCities.map((city) => {
            const isCitySelected = selectedCity?.id === city.id;

            return (
              <Marker
                key={city.id}
                coordinates={[city.longitude, city.latitude]}
              >
                {/* A marker méretét kompenzáljuk a zoommal */}
                <g
                  transform={`scale(${1 / (zoom * 0.5)})`}
                  onClick={() => onCitySelect(city)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <circle
                    r={isCitySelected ? 9 : 6}
                    fill={isCitySelected ? "#DB2777" : "#EF476F"}
                    stroke="#FFFFFF"
                    strokeWidth={2}
                  />

                  <text
                    textAnchor="middle"
                    y={isCitySelected ? 3.5 : 2.8}
                    fontSize={isCitySelected ? 11 : 8}
                    fill="#FFFFFF"
                    fontWeight={800}
                    pointerEvents="none"
                  >
                    ♥
                  </text>

                  {(zoom >= 3 || isCitySelected) && (
                    <text
                      textAnchor="middle"
                      y={isCitySelected ? -15 : -12}
                      fontSize={isCitySelected ? 12 : 10}
                      fontWeight={700}
                      fill="#263238"
                      stroke="#FFFFFF"
                      strokeWidth={3}
                      paintOrder="stroke"
                      pointerEvents="none"
                    >
                      {city.name}
                    </text>
                  )}
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Térkép vezérlőgombok */}
      <div className={styles.mapControls}>
        <button
          type="button"
          onClick={handleZoomIn}
          aria-label="Nagyítás"
          title="Nagyítás"
        >
          +
        </button>

        <button
          type="button"
          onClick={handleZoomOut}
          aria-label="Kicsinyítés"
          title="Kicsinyítés"
        >
          −
        </button>

        <button
          type="button"
          onClick={handleReset}
          aria-label="Térkép középre állítása"
          title="Térkép középre állítása"
        >
          ⌖
        </button>
      </div>

      <div className={styles.mapHint}>
        {selectedCity
          ? selectedCity.name
          : selected
            ? `${selected.flag} ${selected.name}`
            : "Válassz egy országot"}
      </div>
    </div>
  );
}
