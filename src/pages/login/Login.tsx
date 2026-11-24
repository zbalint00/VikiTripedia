import { useEffect, useRef, useState, type SyntheticEvent } from "react";
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

  const shakeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (shakeTimeout.current) {
        clearTimeout(shakeTimeout.current);
      }
    };
  }, []);

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

  function triggerShake() {
    if (shakeTimeout.current) {
      clearTimeout(shakeTimeout.current);
    }

    setShake(false);

    requestAnimationFrame(() => {
      setShake(true);

      shakeTimeout.current = setTimeout(() => {
        setShake(false);
      }, 550);
    });
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

      triggerShake();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <img
          src={loginBg}
          alt=""
          className={styles.bgImg}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.cardWrap}>
        <div className={`${styles.card} ${shake ? styles.cardWrapShake : ""}`}>
          <div className={styles.iconWrap}>
            <div className={styles.icon} aria-hidden="true">
              ♡
            </div>
          </div>

          <h1 className={styles.heading}>A Mi Világunk</h1>
          <p className={styles.subheading}>Egy kis sarok csak nekünk</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="login-username" className={styles.label}>
                Felhasználónév
              </label>

              <input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                placeholder="Felhasználónév"
                className={styles.input}
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="login-password" className={styles.label}>
                Jelszó
              </label>

              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••"
                className={styles.input}
                autoComplete="current-password"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className={styles.errorContainer} role="alert">
                <p className={styles.errorMsg}>{error}</p>

                {error === "Hibás felhasználónév vagy jelszó." && (
                  <p className={styles.errorHint}>
                    Hmm, vajon mi lehet a jelszó... Melyik évben is születtél?
                    Mikor is jöttünk össze?
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading || !username.trim() || !password}
            >
              {loading ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Belépés...
                </>
              ) : (
                "Belépés a világunkba"
              )}
            </button>
          </form>

          <p className={styles.footer}>Készült sok ♡ csak neked</p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
