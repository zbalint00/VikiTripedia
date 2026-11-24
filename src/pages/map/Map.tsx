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
import { CityBadges } from "./CityBadges";
import { getCityPhotos, type CityPhoto } from "../../services/cityPhotoService";

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
  // Kiválasztott város
  const [selectedCity, setSelectedCity] = useState<Destination | null>(null);
  // Városfotók betöltése
  const [cityPhotos, setCityPhotos] = useState<CityPhoto[]>([]);
  const [cityPhotosLoading, setCityPhotosLoading] = useState(false);
  const [cityPhotosError, setCityPhotosError] = useState<string | null>(null);

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

  useEffect(() => {
    if (!selectedCity || !selected) {
      setCityPhotos([]);
      setCityPhotosError(null);
      setCityPhotosLoading(false);
      return;
    }

    let cancelled = false;

    async function loadPhotos() {
      setCityPhotosLoading(true);
      setCityPhotosError(null);
      setCityPhotos([]);

      try {
        const photos = await getCityPhotos(
          selectedCity!.name,
          selected!.name,
          selectedCity!.isCoastal,
        );

        if (!cancelled) {
          setCityPhotos(photos);
        }
      } catch (error) {
        console.error("Városfotók betöltési hiba:", error);

        if (!cancelled) {
          setCityPhotosError("A városfotók most nem érhetők el.");
        }
      } finally {
        if (!cancelled) {
          setCityPhotosLoading(false);
        }
      }
    }

    loadPhotos();

    return () => {
      cancelled = true;
    };
  }, [selectedCity, selected]);

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
            onSelect={(country) => {
              setSelectedCity(null);
              setSelected(country);
            }}
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
                    setSelectedCity(null);
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
                          setSelectedCity(null);
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
          {selected &&
            (selectedCity ? (
              <div className={styles.panelInner}>
                {/* VÁROS PANEL */}
                <div style={{ marginBottom: 18 }}>
                  <button
                    type="button"
                    onClick={() => setSelectedCity(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      marginBottom: 16,
                      border: `1px solid ${t.border}`,
                      borderRadius: 9,
                      background: t.card,
                      color: t.fg,
                      cursor: "pointer",
                      font: "inherit",
                    }}
                  >
                    ← Vissza az ország adataihoz
                  </button>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          color: t.mutedFg,
                          marginBottom: 5,
                        }}
                      >
                        {selected.flag} {selected.name}
                      </div>

                      <h2 className={styles.panelTitle} style={{ margin: 0 }}>
                        {selectedCity.name}
                      </h2>
                    </div>

                    <button
                      className={styles.closeBtn}
                      onClick={() => {
                        setSelectedCity(null);
                        setSelected(null);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Város jelvényei */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <CityBadges city={selectedCity} />

                  {selectedCity.isCapital && (
                    <span
                      style={{
                        padding: "5px 9px",
                        borderRadius: 20,
                        fontSize: 12,
                        background: t.secondary,
                        color: t.primary,
                      }}
                    >
                      👑 Főváros
                    </span>
                  )}

                  {selectedCity.population > 0 && (
                    <span
                      style={{
                        padding: "5px 9px",
                        borderRadius: 20,
                        fontSize: 12,
                        background: t.secondary,
                        color: t.fg,
                      }}
                    >
                      👥 {selectedCity.population.toLocaleString("hu-HU")} fő
                    </span>
                  )}
                </div>

                {/* VÁROSFOTÓK */}
                <div style={{ marginTop: 24 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 16,
                    }}
                  >
                    Fedezd fel a várost
                  </h3>

                  {cityPhotosLoading && (
                    <p style={{ opacity: 0.7 }}>Városfotók betöltése...</p>
                  )}

                  {cityPhotosError && (
                    <p style={{ color: "#dc6868" }}>{cityPhotosError}</p>
                  )}

                  {!cityPhotosLoading &&
                    !cityPhotosError &&
                    cityPhotos.length === 0 && (
                      <p style={{ opacity: 0.7 }}>
                        Ehhez a városhoz jelenleg nem található fotó.
                      </p>
                    )}

                  {!cityPhotosLoading &&
                    !cityPhotosError &&
                    (
                      [
                        {
                          key: "city",
                          title: "A város",
                          description: "Utcák, panorámák és építészet",
                        },
                        {
                          key: "beach",
                          title: "Tengerpartok",
                          description: "Strandok, öblök és tengerparti helyek",
                        },
                        {
                          key: "attractions",
                          title: "Látnivalók",
                          description:
                            "Nevezetességek és kihagyhatatlan helyek",
                        },
                      ] as const
                    ).map((section) => {
                      const sectionPhotos = cityPhotos.filter(
                        (photo) => photo.category === section.key,
                      );

                      if (sectionPhotos.length === 0) {
                        return null;
                      }

                      return (
                        <section key={section.key} style={{ marginBottom: 24 }}>
                          <div style={{ marginBottom: 10 }}>
                            <h4
                              style={{
                                fontSize: 15,
                                fontWeight: 700,
                                margin: 0,
                              }}
                            >
                              {section.title}
                            </h4>

                            <p
                              style={{
                                fontSize: 12,
                                opacity: 0.65,
                                margin: "4px 0 0",
                              }}
                            >
                              {section.description}
                            </p>
                          </div>

                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                              gap: 12,
                            }}
                          >
                            {sectionPhotos.map((photo) => (
                              <article
                                key={photo.id}
                                style={{
                                  minWidth: 0,
                                  overflow: "hidden",
                                  borderRadius: 12,
                                  background: "rgba(128,128,128,0.08)",
                                }}
                              >
                                <a
                                  href={photo.photoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: "block",
                                    color: "inherit",
                                    textDecoration: "none",
                                  }}
                                >
                                  <img
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    loading="lazy"
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: 125,
                                      objectFit: "cover",
                                    }}
                                  />
                                </a>

                                <div style={{ padding: 9 }}>
                                  <p
                                    style={{
                                      fontSize: 12,
                                      fontWeight: 600,
                                      margin: "0 0 6px",
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    {photo.title}
                                  </p>

                                  <p
                                    style={{
                                      fontSize: 10,
                                      opacity: 0.7,
                                      margin: 0,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    Photo by{" "}
                                    <a
                                      href={`${photo.photographerUrl}?utm_source=vikitripedia&utm_medium=referral`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "inherit",
                                        textDecoration: "underline",
                                      }}
                                    >
                                      {photo.photographerName}
                                    </a>{" "}
                                    on{" "}
                                    <a
                                      href={`${photo.unsplashUrl}?utm_source=vikitripedia&utm_medium=referral`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "inherit",
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Unsplash
                                    </a>
                                  </p>
                                </div>
                              </article>
                            ))}
                          </div>
                        </section>
                      );
                    })}
                </div>

                {/* Város információk */}
                <div className={styles.infoCard}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>📍</span>
                    <span className={styles.infoLabel}>Város adatai</span>
                  </div>

                  <div className={styles.costRow}>
                    <span className={styles.costLabel}>Ország</span>
                    <strong>{selected.name}</strong>
                  </div>

                  <div className={styles.costRow}>
                    <span className={styles.costLabel}>Lakosság</span>
                    <strong>
                      {selectedCity.population > 0
                        ? selectedCity.population.toLocaleString("hu-HU")
                        : "Nincs adat"}
                    </strong>
                  </div>

                  <div className={styles.costRow}>
                    <span className={styles.costLabel}>Repülőtér</span>
                    <strong>
                      {selectedCity.airportCodes.length > 0
                        ? selectedCity.airportCodes.join(", ")
                        : "Nincs hozzárendelve"}
                    </strong>
                  </div>

                  <div className={styles.costRow}>
                    <span className={styles.costLabel}>Koordináták</span>
                    <strong style={{ fontSize: 12 }}>
                      {selectedCity.latitude.toFixed(4)},{" "}
                      {selectedCity.longitude.toFixed(4)}
                    </strong>
                  </div>

                  {selectedCity.isCoastal && (
                    <div
                      style={{
                        marginTop: 12,
                        padding: 12,
                        borderRadius: 9,
                        background: t.secondary,
                        color: t.fg,
                        fontSize: 13,
                      }}
                    >
                      🌊 Tengerparti város, strandolási lehetőségekkel a
                      közelben.
                    </div>
                  )}
                </div>

                {/* Külső térkép */}
                <div className={styles.infoCard}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>🗺️</span>
                    <span className={styles.infoLabel}>
                      Fedezd fel a várost
                    </span>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedCity.latitude},${selectedCity.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      padding: 12,
                      borderRadius: 9,
                      background: t.secondary,
                      color: t.fg,
                      textDecoration: "none",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    Megnyitás Google Mapsben ↗
                  </a>
                </div>

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
            ) : (
              <div className={styles.panelInner}>
                <div className={styles.panelTop}>
                  <div>
                    <div className={styles.panelFlag}>
                      <span>
                        {selected.alpha2
                          ? [...selected.alpha2.toUpperCase()]
                              .map((char) =>
                                String.fromCodePoint(
                                  127397 + char.charCodeAt(0),
                                ),
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

                  {!climateLoading &&
                    !climateError &&
                    climateData.length > 0 && (
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
                        borderColor: t.border,
                        borderRadius: 9,
                        background: t.card,
                        color: t.fg,
                        cursor: "pointer",
                        textAlign: "left",
                        font: "inherit",
                      }}
                    >
                      <span>
                        <span style={{ marginRight: 9 }}>❤️</span>
                        <strong>{city.name}</strong>
                        <CityBadges city={city} />
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
            ))}
        </div>
      </div>

      {toastMsg && <div className={styles.toast}>{toastMsg}</div>}
    </div>
  );
}
