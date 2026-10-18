import { useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { styles } from "./styles";

const tabs: { key: ListName; label: string; icon: string; emptyMsg: string }[] = [
  { key: "favorites", label: "Kedvencek", icon: "❤️", emptyMsg: "Még nincs kedvenc helyed — fedezd fel a térképet és adj hozzá pár helyet!" },
  { key: "beenThere", label: "Már voltunk itt", icon: "✅", emptyMsg: "Jelöld meg azokat a helyeket, ahol már voltál!" },
  { key: "wishlist", label: "Kívánságlista", icon: "🌟", emptyMsg: "Kezdj el álmodni — adj hozzá célkitűzéseket a kívánságlistádhoz!" },
  { key: "nextTrip", label: "Következő kaland", icon: "✈️", emptyMsg: "Hová utazunk legközelebb? Adj hozzá itt!" },
];

export default function ListsPage() {
  const [activeTab, setActiveTab] = useState<ListName>("favorites");
  const { state, remove, moveUp, moveDown } = useTravel();
  const items = state[activeTab];

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>A Mi kis álom listánk</h1>
        <p className={styles.subtitle}>Az összes hely, amit szeretnénk látni, és ahova tervezünk elutazni</p>

        <div className={styles.tabRow}>
          {tabs.map(({ key, label, icon }) => {
            const count = state[key].length;
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cx(styles.tabBase, active ? styles.tabActive : styles.tabInactive)}
              >
                <span>{icon}</span>
                <span>{label}</span>
                {count > 0 && (
                  <span className={`${styles.tabBadge} ${active ? styles.tabBadgeActive : styles.tabBadgeInactive}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>{tabs.find(t => t.key === activeTab)?.icon}</div>
            <p className={styles.emptyMsg}>{tabs.find(t => t.key === activeTab)?.emptyMsg}</p>
            <p className={styles.emptyHint}>Menj a Felfedezés oldalra, hogy hozzáadj helyeket</p>
          </div>
        ) : (
          <div className={styles.list}>
            {items.map((place, index) => (
              <div key={place.id} className={styles.item}>
                <div className={styles.rank}>{index + 1}</div>
                <span className={styles.flag}>{place.flag}</span>
                <div className={styles.info}>
                  <p className={styles.name}>{place.name}</p>
                  <p className={styles.region}>{place.region}</p>
                </div>
                <div className={styles.reorderCol}>
                  <button
                    className={styles.reorderBtn}
                    onClick={() => moveUp(activeTab, index)}
                    disabled={index === 0}
                  >▲</button>
                  <button
                    className={styles.reorderBtn}
                    onClick={() => moveDown(activeTab, index)}
                    disabled={index === items.length - 1}
                  >▼</button>
                </div>
                <button className={styles.removeBtn} onClick={() => remove(activeTab, place.id)}>✕</button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <p className={styles.hint}>Mozgasd az elemeket a nyilakkal a sorrend megváltoztatásához vagy távolítsd el őket</p>
        )}
      </div>
    </div>
  );
}
