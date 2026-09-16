import { useState } from "react";
import type { LoginProps } from "./type";
import { styles } from "./styles";


export default function LoginPage({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === "viki" && password === "1998") {
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.bg}>
        {/* TODO - Kicserélni a képet */}
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=1000&fit=crop&auto=format"
          alt="Mountain landscape"
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Card */}
      <div
        className={`${styles.cardWrap} ${shake ? styles.cardWrapShake : ""}`}
      >
        <div className={styles.card}>
          {/* Heart icon */}
          <div className={styles.iconWrap}>
            <div className={styles.icon}>
              ♡
            </div>
          </div>

          <h1 className={styles.heading}>
            A Mi Világunk
          </h1>
          <p className={styles.subheading}>
            Egy kis sarok csak nekünk
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(false); }}
                placeholder="your name"
                className={styles.input}
              />
            </div>
            <div>
              <label className={styles.label}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="••••••••"
                className={styles.input}
              />
            </div>

            {error && (
              <>
              <p className={styles.errorMsg}>
                Hmm, vajon mi lehet a jelszó...
              </p>
              <p className={styles.errorMsg}>
                Melyik évben is születtél?
              </p>
              </>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
            >
                Belépés a világunkba
            </button>
          </form>

          <p className={styles.footer}>
            Készült sok ♡ csak neked
          </p>
        </div>
      </div>
    </div>
  );
}
