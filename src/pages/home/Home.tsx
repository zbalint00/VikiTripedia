import type { Page } from "../../types";
import { styles } from "./styles";
import type { HomePageProps } from "./type";
import HomeBg from "../../assets/home_bg.jpg";
import mapCardImg from "../../assets/map_home_page.jpg";
import DreamListCardImg from "../../assets/dream_list.jpg";
import MemoriesCardImg from "../../assets/memories_card.jpg";

const cards = [
  {
    page: "map" as Page,
    icon: "🗺",
    title: "A világ felfedezése",
    desc: "Kattints bármely országra, hogy felfedezd a tengerpartokat, az időjárást és az utazási költségeket Budapestről.",
    img: mapCardImg,
  },
  {
    page: "lists" as Page,
    icon: "✦",
    title: "Az álom listánk",
    desc: "Kedvencek, kívánságlista, látogatott helyek és a következő közös kalandunk.",
    img: DreamListCardImg,
  },
  {
    page: "memories" as Page,
    icon: "♡",
    title: "Közös emlékeink",
    desc: "Fényképek, történetek és azok a kis pillanatok, amelyek csak a mieink.",
    img: MemoriesCardImg,
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          src={HomeBg}
          alt="Tengerpart Antalyában"
          className={styles.heroImg}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroText}>
          <p className={styles.heroLabel}>Üdv újra itt,</p>

          <h1 className={styles.heroTitle}>
            Viki <span aria-hidden="true">♡</span>
          </h1>

          <p className={styles.heroSub}>
            A világ csak ránk vár. Tervezzük meg a következő közös utunkat!
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <p className={styles.gridLabel}>Hová szeretnél menni?</p>

        <div className={styles.cardGrid}>
          {cards.map(({ page, icon, title, desc, img }) => (
            <button
              key={page}
              type="button"
              onClick={() => onNavigate(page)}
              className={styles.cardBtn}
              aria-label={`${title} megnyitása`}
            >
              <div className={styles.cardImgWrap}>
                <img
                  src={img}
                  alt=""
                  className={styles.cardImg}
                  loading="lazy"
                />

                <div className={styles.cardImgOverlay} />

                <div className={styles.cardIconBadge} aria-hidden="true">
                  {icon}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
