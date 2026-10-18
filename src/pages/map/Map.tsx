import { useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { countryData, type CountryInfo } from "../../data/countryData";
import { styles } from "./styles";
import { t } from "../../styles/theme";

const COUNTRIES_SVG: { id: string; name: string; d: string }[] = [
  { id: "GRC", name: "Greece", d: "M 520 220 L 525 215 L 530 218 L 535 224 L 530 228 L 525 226 Z M 533 228 L 537 225 L 540 228 L 537 232 Z" },
  { id: "ITA", name: "Italy", d: "M 490 200 L 495 195 L 500 197 L 502 205 L 505 215 L 508 225 L 505 228 L 500 222 L 495 210 Z" },
  { id: "HRV", name: "Croatia", d: "M 505 205 L 512 202 L 518 206 L 516 212 L 510 214 L 506 210 Z" },
  { id: "ESP", name: "Spain", d: "M 450 210 L 470 205 L 480 210 L 478 225 L 465 228 L 452 222 Z" },
  { id: "PRT", name: "Portugal", d: "M 440 210 L 450 208 L 450 222 L 440 222 Z" },
  { id: "FRA", name: "France", d: "M 470 195 L 485 190 L 495 195 L 493 208 L 480 210 L 468 206 Z" },
  { id: "TUR", name: "Turkey", d: "M 540 215 L 565 210 L 572 215 L 568 225 L 545 228 L 538 222 Z" },
  { id: "EGY", name: "Egypt", d: "M 545 240 L 565 238 L 568 255 L 545 256 Z" },
  { id: "MAR", name: "Morocco", d: "M 450 235 L 468 232 L 470 248 L 450 250 Z" },
  { id: "USA", name: "United States", d: "M 150 190 L 250 185 L 255 200 L 255 220 L 150 225 Z" },
  { id: "BRA", name: "Brazil", d: "M 220 270 L 270 265 L 275 310 L 220 315 Z" },
  { id: "CUB", name: "Cuba", d: "M 190 230 L 215 227 L 217 235 L 192 237 Z" },
  { id: "NOR", name: "Norway", d: "M 490 155 L 510 148 L 515 170 L 495 172 Z" },
  { id: "ISL", name: "Iceland", d: "M 430 148 L 450 145 L 452 158 L 430 160 Z" },
  { id: "THA", name: "Thailand", d: "M 700 255 L 715 250 L 718 270 L 710 278 L 700 270 Z" },
  { id: "IDN", name: "Indonesia", d: "M 720 295 L 780 290 L 782 308 L 720 310 Z" },
  { id: "JPN", name: "Japan", d: "M 760 195 L 775 190 L 780 205 L 770 215 L 758 208 Z" },
  { id: "AUS", name: "Australia", d: "M 720 330 L 800 325 L 805 385 L 720 390 Z" },
  { id: "NZL", name: "New Zealand", d: "M 820 370 L 835 365 L 840 390 L 825 395 Z" },
  { id: "MDV", name: "Maldives", d: "M 665 278 L 670 275 L 672 285 L 665 286 Z" },
];

const listConfig: { key: ListName; label: string; icon: string }[] = [
  { key: "favorites", label: "Kedvencek", icon: "❤️" },
  { key: "beenThere", label: "Már voltunk itt", icon: "✅" },
  { key: "wishlist", label: "Kívánságlista", icon: "🌟" },
  { key: "nextTrip", label: "Következő kaland", icon: "✈️" },
];

function BeachStars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1,2,3,4,5].map((i) => (
        <span key={i} style={{ color: i <= rating ? "#D4A017" : t.border }}>★</span>
      ))}
    </div>
  );
}

export default function MapPage() {
  const [selected, setSelected] = useState<CountryInfo | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const { add, remove, isIn } = useTravel();

  function showToast(msg: string) {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  }

  function handleListToggle(list: ListName, country: CountryInfo) {
    const cfg = listConfig.find(l => l.key === list)!;
    if (isIn(list, country.id)) {
      remove(list, country.id);
      showToast(`Removed from ${cfg.label}`);
    } else {
      add(list, { id: country.id, name: country.name, flag: country.flag, region: country.region });
      showToast(`Added to ${cfg.label}! ${country.flag}`);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Fedezzük fel a világot</h1>
        <p className={styles.headerSub}>Kattints egy országra, hogy felfedezd a strandokat, az időjárást és az utazási költségeket Budapesten</p>
      </div>

      <div className={styles.body}>
        <div className={styles.mapArea}>
          <svg viewBox="0 0 980 520" className={styles.svgMap}>
            <defs>
              <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#c8e8f5" />
                <stop offset="100%" stopColor="#8bc4e0" />
              </radialGradient>
            </defs>
            <rect width="980" height="520" fill="url(#oceanGrad)" />
            <path d="M 110 140 L 270 130 L 280 160 L 270 240 L 200 250 L 160 260 L 140 240 L 120 200 Z" fill="#e8d5b0" opacity="0.6" />
            <path d="M 195 255 L 290 250 L 295 380 L 230 395 L 195 350 Z" fill="#e8d5b0" opacity="0.6" />
            <path d="M 430 140 L 580 135 L 585 240 L 430 245 Z" fill="#e8d5b0" opacity="0.6" />
            <path d="M 450 245 L 590 240 L 595 420 L 450 425 Z" fill="#e8d5b0" opacity="0.6" />
            <path d="M 575 130 L 810 125 L 815 300 L 575 305 Z" fill="#e8d5b0" opacity="0.6" />
            <path d="M 710 320 L 820 315 L 825 400 L 710 405 Z" fill="#e8d5b0" opacity="0.6" />
            {COUNTRIES_SVG.map(({ id, d }) => {
              const isSelected = selected?.id === id;
              const isHov = hovered === id;
              return (
                <path
                  key={id}
                  d={d}
                  fill={isSelected ? t.primary : isHov ? t.accent : "#d4a574"}
                  stroke="#FFF9F5"
                  strokeWidth="1.5"
                  style={{ cursor: "pointer", transition: "fill 0.15s" }}
                  onClick={() => { const info = countryData[id]; if (info) setSelected(info); }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  opacity={isSelected ? 1 : 0.85}
                />
              );
            })}
            {hovered && (
              <text x="490" y="500" textAnchor="middle" fill={t.fg} fontSize="12" fontFamily="Outfit, sans-serif">
                {countryData[hovered]?.name} — kattints a felfedezéshez
              </text>
            )}
          </svg>

          <div className={styles.pickerBar}>
            <p className={styles.pickerLabel}>Válassz ki egy célpontot:</p>
            <div className={styles.pickerRow}>
              {Object.values(countryData).map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={cx(styles.pickerBtnBase, selected?.id === c.id ? styles.pickerBtnActive : styles.pickerBtnInactive)}
                >
                  {c.flag} {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.panel} style={{ width: selected ? 360 : 0, minWidth: selected ? 360 : 0 }}>
          {selected && (
            <div className={styles.panelInner}>
              <div className={styles.panelTop}>
                <div>
                  <div className={styles.panelFlag}>{selected.flag}</div>
                  <h2 className={styles.panelTitle}>{selected.name}</h2>
                  <p className={styles.panelRegion}>{selected.region}</p>
                </div>
                <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>{selected.weatherIcon}</span>
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
                <div className={styles.costRow}><span className={styles.costLabel}>Flight time</span><span>{selected.flightHours}</span></div>
                <div className={styles.costRow}><span className={styles.costLabel}>Return flights</span><span>{selected.flightCost}</span></div>
                <div className={styles.costRow}><span className={styles.costLabel}>Hotel/night</span><span>{selected.hotelPerNight}</span></div>
                <div className={styles.costTotal}>
                  <span className={styles.costTotalLabel}>7-night estimate</span>
                  <span className={styles.costTotalValue}>{selected.tripTotal}</span>
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
                        className={cx(styles.listBtnBase, active ? styles.listBtnActive : styles.listBtnInactive)}
                      >
                        <span>{icon}</span>
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {active ? "✓ " : ""}{label}
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
