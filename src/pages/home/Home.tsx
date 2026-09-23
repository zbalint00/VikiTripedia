import type { Page } from "../../types";
import { styles } from "./styles";
import type { HomePageProps } from "./type";

//TODO - Kicserélni a képet
const cards = [
  {
    page: "map" as Page,
    icon: "🗺",
    title: "Explore the World",
    desc: "Click any country to discover beaches, weather & trip costs from Budapest",
    img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "lists" as Page,
    icon: "✦",
    title: "Our Dream Lists",
    desc: "Favorites, wishlist, places we've been & our next adventure",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "memories" as Page,
    icon: "♡",
    title: "Our Memories",
    desc: "Photos, stories & the little moments that make us us",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "soon4" as Page,
    icon: "✈",
    title: "Coming Soon",
    desc: "Something beautiful is being planned for this spot",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "soon5" as Page,
    icon: "★",
    title: "Coming Soon",
    desc: "More magic on the way — watch this space",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=400&fit=crop&auto=format",
  },
];

//TODO - Kicserélni a képet + Emotion css-re átírni, átláthatóbb legyen neked. 
// Szövekeget magyarra átírni, a gombokat is.
const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop&auto=format"
          alt="Travel landscape"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroLabel}>Welcome back,</p>
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
        <p className={styles.gridLabel}>Where would you like to go?</p>
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