import { useState, type SyntheticEvent } from "react";
import type { LoginProps } from "./type";
import { styles } from "./styles";
import loginBg from "../../assets/login.jpg";
import { supabase } from "../../lib/supabase";

const LoginPage = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(username: string, password: string) {
    if (username.trim().toLowerCase() !== "vicky98") {
      throw new Error("Hibás felhasználónév vagy jelszó.");
    }

    const email = import.meta.env.VITE_SUPABASE_AUTH_EMAIL;

    if (!email) {
      throw new Error(
        "Hiányzik a Supabase bejelentkezési email konfigurációja.",
      );
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error("Hibás felhasználónév vagy jelszó.");
    }
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      await login(username, password);
      onLogin();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Nem sikerült bejelentkezni.",
      );
      setShake(true);
      window.setTimeout(() => setShake(false), 600);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.bg}>
        <img src={loginBg} alt="login background" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Card */}
      <div
        className={`${styles.cardWrap} ${shake ? styles.cardWrapShake : ""}`}
      >
        <div className={styles.card}>
          {/* Heart icon */}
          <div className={styles.iconWrap}>
            <div className={styles.icon}>♡</div>
          </div>

          <h1 className={styles.heading}>A Mi Világunk</h1>
          <p className={styles.subheading}>Egy kis sarok csak nekünk</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>Felhasználónév</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                placeholder="your name"
                className={styles.input}
              />
            </div>
            <div>
              <label className={styles.label}>Jelszó</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••"
                className={styles.input}
                required
              />
            </div>

            {error && (
              <>
                <p className={styles.errorMsg}>
                  {error}
                  Hmm, vajon mi lehet a jelszó...
                </p>
                <p className={styles.errorMsg}>Melyik évben is születtél?</p>
              </>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Belépés..." : "Belépés a világunkba"}
            </button>
          </form>

          <p className={styles.footer}>Készült sok ♡ csak neked</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
