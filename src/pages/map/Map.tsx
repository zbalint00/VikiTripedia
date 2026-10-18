import { useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { countryData, type CountryInfo } from "../../data/countryData";
import { styles } from "./styles";
import { t } from "../../styles/theme";
import WorldMap from "./WorldMap";

const listConfig: { key: ListName; label: string; icon: string }[] = [
  { key: "favorites", label: "Kedvencek", icon: "❤️" },
  { key: "beenThere", label: "Már voltunk itt", icon: "✅" },
  { key: "wishlist", label: "Kívánságlista", icon: "🌟" },
  { key: "nextTrip", label: "Következő kaland", icon: "✈️" },
];

function BeachStars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= rating ? "#D4A017" : t.border }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function MapPage() {
  const [selected, setSelected] = useState<CountryInfo | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [countryQuery, setCountryQuery] = useState("");
  const [showCountryPicker, setShowCountryPicker] = useState(false);
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
          Kattints egy országra, hogy felfedezd a strandokat, az időjárást és az
          utazási költségeket Budapesten
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.mapArea}>
          <WorldMap selected={selected} onSelect={setSelected} isIn={isIn} />

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
                  <div className={styles.panelFlag}>{selected.flag}</div>
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

              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>
                    {selected.weatherIcon}
                  </span>
                  <span className={styles.infoLabel}>Weather</span>
                </div>
                <p className={styles.infoText}>{selected.weather}</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>🏖</span>
                  <span className={styles.infoLabel}>Beaches</span>
                  <BeachStars rating={selected.beach} />
                </div>
                <p className={styles.infoText}>{selected.beachDesc}</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>✈️</span>
                  <span className={styles.infoLabel}>Trip from Budapest</span>
                </div>
                <div className={styles.costRow}>
                  <span className={styles.costLabel}>Flight time</span>
                  <span>{selected.flightHours}</span>
                </div>
                <div className={styles.costRow}>
                  <span className={styles.costLabel}>Return flights</span>
                  <span>{selected.flightCost}</span>
                </div>
                <div className={styles.costRow}>
                  <span className={styles.costLabel}>Hotel/night</span>
                  <span>{selected.hotelPerNight}</span>
                </div>
                <div className={styles.costTotal}>
                  <span className={styles.costTotalLabel}>
                    7-night estimate
                  </span>
                  <span className={styles.costTotalValue}>
                    {selected.tripTotal}
                  </span>
                </div>
              </div>

              <div className={styles.infoCardAccent}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>💡</span>
                  <span className={styles.infoLabel}>Travel tip</span>
                </div>
                <p className={styles.infoText}>{selected.tip}</p>
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
