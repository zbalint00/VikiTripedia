import { useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { styles } from "./styles";

const tabs: {
  key: ListName;
  label: string;
  icon: string;
  emptyMsg: string;
}[] = [
  {
    key: "favorites",
    label: "Kedvencek",
    icon: "❤️",
    emptyMsg:
      "Még nincs kedvenc helyed — fedezd fel a térképet és adj hozzá pár helyet!",
  },
  {
    key: "beenThere",
    label: "Már voltunk itt",
    icon: "✅",
    emptyMsg: "Jelöld meg azokat a helyeket, ahol már voltál!",
  },
  {
    key: "wishlist",
    label: "Kívánságlista",
    icon: "🌟",
    emptyMsg:
      "Kezdj el álmodni — adj hozzá célkitűzéseket a kívánságlistádhoz!",
  },
  {
    key: "nextTrip",
    label: "Következő kaland",
    icon: "✈️",
    emptyMsg: "Hová utazunk legközelebb? Adj hozzá itt!",
  },
];

export default function ListsPage() {
  const [activeTab, setActiveTab] = useState<ListName>("favorites");
  const { state, remove, moveUp, moveDown } = useTravel();

  const items = state[activeTab];
  const activeTabInfo = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>VIKITRIPEDIA · KÖZÖS TERVEK</span>

          <h1 className={styles.title}>A Mi kis álom listánk</h1>

          <p className={styles.subtitle}>
            Az összes hely, amit szeretnénk látni, és ahova tervezünk elutazni.
          </p>
        </header>

        <div className={styles.tabContainer}>
          <div
            className={styles.tabRow}
            role="tablist"
            aria-label="Utazási listák"
          >
            {tabs.map(({ key, label, icon }) => {
              const count = state[key].length;
              const active = activeTab === key;

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(key)}
                  className={cx(
                    styles.tabBase,
                    active ? styles.tabActive : styles.tabInactive,
                  )}
                >
                  <span className={styles.tabIcon} aria-hidden="true">
                    {icon}
                  </span>

                  <span className={styles.tabLabel}>{label}</span>

                  <span
                    className={cx(
                      styles.tabBadge,
                      active ? styles.tabBadgeActive : styles.tabBadgeInactive,
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon} aria-hidden="true">
                {activeTabInfo?.icon}
              </div>

              <p className={styles.emptyMsg}>{activeTabInfo?.emptyMsg}</p>

              <p className={styles.emptyHint}>
                Menj a Felfedezés oldalra, hogy hozzáadj helyeket.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.listHeader}>
                <div>
                  <h2 className={styles.listTitle}>{activeTabInfo?.label}</h2>
                  <p className={styles.listCount}>
                    {items.length} {items.length === 1 ? "hely" : "hely"} a
                    listán
                  </p>
                </div>
              </div>

              <div className={styles.list}>
                {items.map((place, index) => (
                  <div key={place.id} className={styles.item}>
                    <div className={styles.rank}>{index + 1}</div>

                    <span className={styles.flag} aria-hidden="true">
                      {place.flag}
                    </span>

                    <div className={styles.info}>
                      <p className={styles.name}>{place.name}</p>
                      <p className={styles.region}>{place.region}</p>
                    </div>

                    <div className={styles.actions}>
                      <div className={styles.reorderCol}>
                        <button
                          type="button"
                          className={styles.reorderBtn}
                          onClick={() => moveUp(activeTab, index)}
                          disabled={index === 0}
                          aria-label={`${place.name} mozgatása feljebb`}
                          title="Mozgatás fel"
                        >
                          ▲
                        </button>

                        <button
                          type="button"
                          className={styles.reorderBtn}
                          onClick={() => moveDown(activeTab, index)}
                          disabled={index === items.length - 1}
                          aria-label={`${place.name} mozgatása lejjebb`}
                          title="Mozgatás le"
                        >
                          ▼
                        </button>
                      </div>

                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => remove(activeTab, place.id)}
                        aria-label={`${place.name} eltávolítása a listáról`}
                        title="Eltávolítás"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <p className={styles.hint}>
                A nyilakkal módosíthatod a sorrendet, az X gombbal pedig
                eltávolíthatod az adott helyet.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
