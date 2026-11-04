import { useEffect, useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { countryData, type CountryInfo } from "../../data/countryData";
import { styles } from "./styles";
import WorldMap from "./WorldMap";
import {
  getClimateData,
  type MonthlyClimate,
} from "../../services/climateService";
import {
  getCountryDestinations,
  type Destination,
} from "../../services/destinationService";
import { t } from "../../styles/theme";

const listConfig: { key: ListName; label: string; icon: string }[] = [
  { key: "favorites", label: "Kedvencek", icon: "❤️" },
  { key: "beenThere", label: "Már voltunk itt", icon: "✅" },
  { key: "wishlist", label: "Kívánságlista", icon: "🌟" },
  { key: "nextTrip", label: "Következő kaland", icon: "✈️" },
];

export default function MapPage() {
  const [selected, setSelected] = useState<CountryInfo | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [countryQuery, setCountryQuery] = useState("");
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  // Éghajlati adatok betöltése
  const [climateData, setClimateData] = useState<MonthlyClimate[]>([]);
  const [climateLoading, setClimateLoading] = useState(false);
  const [climateError, setClimateError] = useState<string | null>(null);
  // Városok betöltése
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destinationsLoading, setDestinationsLoading] = useState(false);
  const [destinationsError, setDestinationsError] = useState<string | null>(
    null,
  );
  const [selectedCity, setSelectedCity] = useState<Destination | null>(null);

  useEffect(() => {
    if (!selected) {
      setClimateData([]);
      setClimateError(null);
      setClimateLoading(false);
      return;
    }

    let cancelled = false;

    async function loadClimate() {
      setClimateLoading(true);
      setClimateError(null);
      setClimateData([]);

      try {
        const data = await getClimateData(selected!);

        if (!cancelled) {
          setClimateData(data);
        }
      } catch (error) {
        console.error("Climate data loading failed:", error);

        if (!cancelled) {
          setClimateError(
            error instanceof Error
              ? error.message
              : "Ismeretlen hiba történt az időjárási adatok betöltésekor.",
          );
        }
      } finally {
        if (!cancelled) {
          setClimateLoading(false);
        }
      }
    }

    loadClimate();

    return () => {
      cancelled = true;
    };
  }, [selected]);

  useEffect(() => {
    setSelectedCity(null);

    if (!selected) {
      setDestinations([]);
      setDestinationsError(null);
      setDestinationsLoading(false);
      return;
    }

    let cancelled = false;

    async function loadDestinations() {
      setDestinationsLoading(true);
      setDestinationsError(null);
      setDestinations([]);

      try {
        const data = await getCountryDestinations(selected!);

        if (!cancelled) {
          setDestinations(data);
        }
      } catch (error) {
        console.error("Destination loading failed:", error);

        if (!cancelled) {
          setDestinationsError(
            error instanceof Error
              ? error.message
              : "Nem sikerült betölteni a városokat.",
          );
        }
      } finally {
        if (!cancelled) {
          setDestinationsLoading(false);
        }
      }
    }

    loadDestinations();

    return () => {
      cancelled = true;
    };
  }, [selected]);

  const warmestMonth =
    climateData.length > 0
      ? [...climateData].sort(
          (a, b) => b.averageTemperature - a.averageTemperature,
        )[0]
      : null;

  const wettestMonth =
    climateData.length > 0
      ? [...climateData].sort(
          (a, b) => b.averagePrecipitation - a.averagePrecipitation,
        )[0]
      : null;

  const { add, remove, isIn } = useTravel();

  function showToast(msg: string) {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  }

  function handleListToggle(list: ListName, country: CountryInfo) {
    const cfg = listConfig.find((l) => l.key === list)!;
    if (isIn(list, country.id)) {
      remove(list, country.id);
      showToast(`Removed from ${cfg.label}`);
    } else {
      add(list, {
        id: country.id,
        name: country.name,
        flag: country.flag,
        region: country.region,
      });
      showToast(`Added to ${cfg.label}! ${country.flag}`);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Fedezzük fel a világot</h1>
        <p className={styles.headerSub}>
          Válassz egy országot, nézd meg az éghajlatát, a repülési lehetőségeket
          és a legérdekesebb úti célokat.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.mapArea}>
          <WorldMap
            selected={selected}
            onSelect={setSelected}
            isIn={isIn}
            destinations={destinations}
            selectedCity={selectedCity}
            onCitySelect={setSelectedCity}
          />
          <div className={styles.pickerBar}>
            <input
              type="text"
              value={countryQuery}
              onChange={(event) => {
                setCountryQuery(event.target.value);
                setShowCountryPicker(true);
              }}
              onFocus={() => setShowCountryPicker(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setShowCountryPicker(false);
                }

                if (event.key === "Enter") {
                  const firstMatch = Object.values(countryData).find(
                    (country) =>
                      country.name
                        .toLowerCase()
                        .includes(countryQuery.trim().toLowerCase()),
                  );

                  if (firstMatch) {
                    setSelected(firstMatch);
                    setCountryQuery("");
                    setShowCountryPicker(false);
                  }
                }
              }}
              placeholder="🔎  Ország keresése..."
              aria-label="Ország keresése"
              className={styles.pickerInput}
            />

            {showCountryPicker && (
              <>
                <button
                  type="button"
                  aria-label="Kereső bezárása"
                  className={styles.pickerBackdrop}
                  onClick={() => setShowCountryPicker(false)}
                />

                <div className={styles.pickerResults}>
                  {Object.values(countryData)
                    .filter((country) =>
                      country.name
                        .toLowerCase()
                        .includes(countryQuery.trim().toLowerCase()),
                    )
                    .slice(0, 8)
                    .map((country) => (
                      <button
                        type="button"
                        key={country.id}
                        className={styles.pickerResult}
                        onClick={() => {
                          setSelected(country);
                          setCountryQuery("");
                          setShowCountryPicker(false);
                        }}
                      >
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                        {selected?.id === country.id && <span>✓</span>}
                      </button>
                    ))}

                  {Object.values(countryData).filter((country) =>
                    country.name
                      .toLowerCase()
                      .includes(countryQuery.trim().toLowerCase()),
                  ).length === 0 && (
                    <p className={styles.pickerEmpty}>Nincs ilyen ország.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className={styles.panel}
          style={{ width: selected ? 360 : 0, minWidth: selected ? 360 : 0 }}
        >
          {selected && (
            <div className={styles.panelInner}>
              <div className={styles.panelTop}>
                <div>
                  <div className={styles.panelFlag}>
                    <span>
                      {selected.alpha2
                        ? [...selected.alpha2.toUpperCase()]
                            .map((char) =>
                              String.fromCodePoint(127397 + char.charCodeAt(0)),
                            )
                            .join("")
                        : "🌍"}
                    </span>

                    {selected.alpha2 && (
                      <img
                        src={`https://flags.restcountries.com/v5/w160/${selected.alpha2.toLowerCase()}.png`}
                        alt={`${selected.name} zászlaja`}
                        className={styles.panelFlagImage}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>
                  <h2 className={styles.panelTitle}>{selected.name}</h2>
                  <p className={styles.panelRegion}>{selected.region}</p>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>
              <div className={styles.climateCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>🌡️</span>
                  <span className={styles.infoLabel}>
                    Havi éghajlati adatok
                  </span>
                </div>

                <p className={styles.climateDescription}>
                  Az elmúlt 5 teljes év időjárási adatainak havi átlagai.
                </p>

                {climateLoading && (
                  <div className={styles.climateStatus}>
                    Időjárási adatok betöltése...
                  </div>
                )}

                {climateError && (
                  <div className={styles.climateError}>
                    Nem sikerült betölteni az időjárási adatokat:
                    <br />
                    {climateError}
                  </div>
                )}

                {!climateLoading && !climateError && climateData.length > 0 && (
                  <>
                    <div className={styles.climateSummary}>
                      <div className={styles.climateSummaryItem}>
                        <span className={styles.climateSummaryLabel}>
                          Legmelegebb hónap
                        </span>
                        <span className={styles.climateSummaryValue}>
                          {warmestMonth?.monthName}
                        </span>
                        <span className={styles.climateSummaryLabel}>
                          {warmestMonth?.averageTemperature.toFixed(1)} °C
                        </span>
                      </div>

                      <div className={styles.climateSummaryItem}>
                        <span className={styles.climateSummaryLabel}>
                          Legcsapadékosabb hónap
                        </span>
                        <span className={styles.climateSummaryValue}>
                          {wettestMonth?.monthName}
                        </span>
                        <span className={styles.climateSummaryLabel}>
                          {wettestMonth?.averagePrecipitation.toFixed(0)} mm
                        </span>
                      </div>
                    </div>

                    <div className={styles.climateChart}>
                      {climateData.map((month) => {
                        const barWidth = Math.max(
                          0,
                          Math.min(
                            100,
                            ((month.averageTemperature + 10) / 50) * 100,
                          ),
                        );

                        return (
                          <div
                            key={month.month}
                            className={styles.climateMonth}
                          >
                            <span className={styles.climateMonthName}>
                              {month.monthName.slice(0, 3)}
                            </span>

                            <div className={styles.climateBarTrack}>
                              <div
                                className={styles.climateBar}
                                style={{ width: `${barWidth}%` }}
                              />
                            </div>

                            <span className={styles.climateTemperature}>
                              {month.averageTemperature.toFixed(1)}°
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className={styles.climateDetails}>
                      {climateData.map((month) => (
                        <div
                          key={month.month}
                          className={styles.climateDetailRow}
                        >
                          <span className={styles.climateDetailLabel}>
                            {month.monthName}
                          </span>

                          <span>
                            {month.averageMinTemperature.toFixed(1)}°{" – "}
                            {month.averageMaxTemperature.toFixed(1)}°{" · "}
                            {month.averagePrecipitation.toFixed(0)} mm
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className={styles.climateAttribution}>
                      Időjárási adatok:{" "}
                      <a
                        href="https://open-meteo.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open-Meteo
                      </a>
                    </p>
                  </>
                )}
              </div>

              {/* Repülőjegyek */}
              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>✈️</span>
                  <span className={styles.infoLabel}>
                    Repülőjegyek Budapestről
                  </span>
                </div>

                <p className={styles.infoText}>
                  Itt később valós repülőjegy-ajánlatokat jelenítünk meg a
                  kiválasztott utazási dátumok alapján.
                </p>

                <div className={styles.costRow}>
                  <span className={styles.costLabel}>Indulás</span>
                  <strong>Budapest (BUD)</strong>
                </div>

                <div className={styles.costRow}>
                  <span className={styles.costLabel}>Utasok</span>
                  <strong>2 fő</strong>
                </div>

                <p className={styles.climateDescription}>
                  A kereséshez később dátumválasztót és valós árlekérdezést
                  adunk hozzá.
                </p>
              </div>

              {/* Városok */}

              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📍</span>
                  <span className={styles.infoLabel}>Ajánlott városok</span>
                </div>

                {destinationsLoading && (
                  <p className={styles.infoText}>Városok betöltése...</p>
                )}

                {destinationsError && (
                  <p className={styles.climateError}>
                    Nem sikerült betölteni a városokat:
                    <br />
                    {destinationsError}
                  </p>
                )}

                {!destinationsLoading &&
                  !destinationsError &&
                  destinations.length === 0 && (
                    <p className={styles.infoText}>
                      Ehhez az országhoz nem találhatók városadatok.
                    </p>
                  )}

                {destinations.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "11px 10px",
                      marginTop: 6,
                      border: "1px solid",
                      borderColor:
                        selectedCity?.id === city.id ? t.primary : t.border,
                      borderRadius: 9,
                      background:
                        selectedCity?.id === city.id ? t.secondary : t.card,
                      color: t.fg,
                      cursor: "pointer",
                      textAlign: "left",
                      font: "inherit",
                    }}
                  >
                    <span>
                      <span style={{ marginRight: 9 }}>❤️</span>
                      <strong>{city.name}</strong>
                      {city.isCapital && (
                        <span
                          style={{
                            marginLeft: 7,
                            fontSize: 11,
                            color: t.primary,
                          }}
                        >
                          Főváros
                        </span>
                      )}
                      {city.population > 0 && (
                        <span
                          style={{
                            display: "block",
                            marginLeft: 27,
                            marginTop: 3,
                            fontSize: 11,
                            color: t.mutedFg,
                          }}
                        >
                          Lakosság: {city.population.toLocaleString("hu-HU")}
                        </span>
                      )}
                    </span>

                    <span style={{ color: t.mutedFg }}>›</span>
                  </button>
                ))}
                <p className={styles.climateAttribution}>
                  Városadatok:{" "}
                  <a
                    href="https://www.geonames.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GeoNames
                  </a>{" "}
                  (CC BY 4.0)
                </p>
              </div>

              <div className={styles.listSection}>
                <p className={styles.listSectionLabel}>Add to my lists</p>
                <div className={styles.listGrid}>
                  {listConfig.map(({ key, label, icon }) => {
                    const active = isIn(key, selected.id);
                    return (
                      <button
                        key={key}
                        onClick={() => handleListToggle(key, selected)}
                        className={cx(
                          styles.listBtnBase,
                          active
                            ? styles.listBtnActive
                            : styles.listBtnInactive,
                        )}
                      >
                        <span>{icon}</span>
                        <span
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {active ? "✓ " : ""}
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {toastMsg && <div className={styles.toast}>{toastMsg}</div>}
    </div>
  );
}
