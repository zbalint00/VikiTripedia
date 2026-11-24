import { cx } from "@emotion/css";
import type { Page } from "../../types";
import { styles } from "./styles";
import type { NavBarProps } from "./types";

const links: { page: Page; label: string; icon: string }[] = [
  { page: "home", label: "Főoldal", icon: "⌂" },
  { page: "map", label: "Felfedezés", icon: "🗺" },
  { page: "lists", label: "Úti Lista", icon: "✦" },
  { page: "memories", label: "Emlékek", icon: "♡" },
];

const NavBar = ({ current, onNavigate, onLogout }: NavBarProps) => {
  return (
    <nav className={styles.nav} aria-label="Fő navigáció">
      <button
        type="button"
        onClick={() => onNavigate("home")}
        className={styles.logo}
        aria-label="VikiTripedia, főoldal"
      >
        VikiTripedia <span>♡</span>
      </button>

      <div className={styles.linkRow}>
        {links.map(({ page, label, icon }) => (
          <button
            type="button"
            key={page}
            onClick={() => onNavigate(page)}
            aria-current={current === page ? "page" : undefined}
            className={cx(
              styles.linkBase,
              current === page ? styles.linkActive : styles.linkInactive,
            )}
          >
            <span aria-hidden="true">{icon}</span>
            {label}
          </button>
        ))}

        <button type="button" onClick={onLogout} className={styles.logoutBtn}>
          Kilépés :(
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
