import { cx } from "@emotion/css";
import type { Page } from "../../types";
import { styles } from "./styles";
import type { NavBarProps } from "./types";

const links: { page: Page; label: string; icon: string }[] = [
  { page: "home", label: "Home", icon: "⌂" },
  { page: "map", label: "Explore", icon: "🗺" },
  { page: "lists", label: "Lists", icon: "✦" },
  { page: "memories", label: "Us", icon: "♡" },
];

const NavBar = ({ current, onNavigate, onLogout }: NavBarProps) => {
  return (
    <nav className={styles.nav}>
      <button
        onClick={() => onNavigate("home")}
        className={styles.logo}
      >
        VikiTripedia ♡
      </button>

      <div className={styles.linkRow}>
        {links.map(({ page, label, icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={cx(styles.linkBase, current === page ? styles.linkActive : styles.linkInactive)}
          >
            <span>{icon}</span>{label}
          </button>
        ))}
        <button
          onClick={onLogout}
          className={styles.logoutBtn}
        >
          {"Kilépés :("}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;