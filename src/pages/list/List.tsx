import { useState } from "react";
import { cx } from "@emotion/css";
import { useTravel, type ListName } from "../../travelStore";
import { styles } from "./styles";

const tabs: { key: ListName; label: string; icon: string; emptyMsg: string }[] = [
  { key: "favorites", label: "Favorites", icon: "❤️", emptyMsg: "No favorites yet — explore the map and add some!" },
  { key: "beenThere", label: "Been There", icon: "✅", emptyMsg: "Mark the places you've already visited!" },
  { key: "wishlist", label: "Wishlist", icon: "🌟", emptyMsg: "Start dreaming — add destinations to your wishlist!" },
  { key: "nextTrip", label: "Next Trip", icon: "✈️", emptyMsg: "Where are we going next? Add it here!" },
];

export default function ListsPage() {
  const [activeTab, setActiveTab] = useState<ListName>("favorites");
  const { state, remove, moveUp, moveDown } = useTravel();
  const items = state[activeTab];

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Our Dream Lists</h1>
        <p className={styles.subtitle}>All the places we love, want to see, and are planning to visit</p>

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
            <p className={styles.emptyHint}>Go to the Explore page to add destinations</p>
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
          <p className={styles.hint}>Hover over a destination to reorder or remove it</p>
        )}
      </div>
    </div>
  );
}
