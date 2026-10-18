import type { Page } from "../../types";
import { styles } from "./styles";
import type { HomePageProps } from "./type";
import HomeBg from "../../assets/home_bg.jpg";
import mapCardImg from "../../assets/map_home_page.jpg";
import DreamListCardImg from "../../assets/dream_list.jpg";
import MemoriesCardImg from "../../assets/memories_card.jpg";

//TODO - Kicserélni a képet
const cards = [
  {
    page: "map" as Page,
    icon: "🗺",
    title: "A világ felfedezése",
    desc: "Kattints bármely országra, hogy felfedezd a tengerpartokat, az időjárást és az utazási költségeket Budapestről",
    img: mapCardImg,
  },
  {
    page: "lists" as Page,
    icon: "✦",
    title: "Az álom listánk",
    desc: "Kedvencek, kívánságlista, látogatott helyek és a következő kalandunk",
    img: DreamListCardImg,
  },
  {
    page: "memories" as Page,
    icon: "♡",
    title: "Közös emlékeink",
    desc: "Fényképek, történetek és azok a kis pillanatok, amelyek mi vagyunk",
    img: MemoriesCardImg,
  }
];

//TODO - Kicserélni a képet + Emotion css-re átírni, átláthatóbb legyen neked. 
// Szövekeget magyarra átírni, a gombokat is.
const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <img
          src={HomeBg}
          alt="Antalya beach, Turkey"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroLabel}>Üdv újra itt,</p>
          <h1
            className={styles.heroTitle}
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Viki ♡
          </h1>
          <p className={styles.heroSub}>
            A világ csak ránk vár — Tervezzük meg a következő közös utunkat.
          </p>
        </div>
      </div>

      {/* Nav cards */}
      <div className={styles.grid}>
        <p className={styles.gridLabel}>Hová szeretnél menni?</p>
        <div className={styles.cardGrid}>
          {cards.map(({ page, icon, title, desc, img }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={styles.cardBtn}
            >
              <div className={styles.cardImgWrap}>
                <img
                  src={img}
                  alt={title}
                  className={styles.cardImg}
                />
                <div className={styles.cardImgOverlay} />
                <div className={styles.cardIconBadge}>
                  {icon}
                </div>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  {title}
                </h2>
                <p className={styles.cardDesc}>
                  {desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;