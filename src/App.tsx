import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import type { Page } from "./types";
import { TravelProvider } from "./travelStore";
import NavBar from "./pages/nav/NavBar";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import MapPage from "./pages/map/Map";
import MemoriesPage from "./pages/memories/Memories";
import ListsPage from "./pages/list/List";
import { supabase } from "./lib/supabase";

const shell = css`
  --nav-height: 56px;

  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: clip;
  background: #faf6f1;

  @media (max-width: 760px) {
    --nav-height: 96px;
  }
`;

const appContent = css`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: calc(100vh - var(--nav-height));
  min-height: calc(100dvh - var(--nav-height));
  padding-top: var(--nav-height);
`;

const loadingScreen = css`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #faf6f1;
  color: #6b4935;
  font-family: "Outfit", system-ui, sans-serif;
  font-size: 15px;
`;

const validPages: Page[] = ["home", "map", "lists", "memories"];

function App() {
  const [authed, setAuthed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const [page, setPage] = useState<Page>(() => {
    try {
      const savedPage = localStorage.getItem("vikinerary-page");

      if (savedPage && validPages.includes(savedPage as Page)) {
        return savedPage as Page;
      }
    } catch (error) {
      console.error("Nem sikerült betölteni a mentett oldalt:", error);
    }

    return "home";
  });

  useEffect(() => {
    try {
      localStorage.setItem("vikinerary-page", page);
    } catch (error) {
      console.error("Nem sikerült elmenteni az aktuális oldalt:", error);
    }
  }, [page]);

  useEffect(() => {
    let mounted = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;

      setAuthed(!!session);
      setAuthLoading(false);
    });

    supabase.auth
      .getSession()
      .then(({ data: { session }, error }) => {
        if (!mounted) return;

        if (error) {
          console.error("Session ellenőrzési hiba:", error);
        }

        setAuthed(!!session);
        setAuthLoading(false);
      })
      .catch((error) => {
        if (!mounted) return;

        console.error("Session ellenőrzési hiba:", error);
        setAuthed(false);
        setAuthLoading(false);
      });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Nem sikerült kijelentkezni:", error);
      return;
    }

    setPage("home");
    setAuthed(false);
  }

  if (authLoading) {
    return <div className={loadingScreen}>Betöltés...</div>;
  }

  if (!authed) {
    return <LoginPage onLogin={() => setAuthed(true)} />;
  }

  return (
    <TravelProvider>
      <div className={shell}>
        <NavBar current={page} onNavigate={setPage} onLogout={handleLogout} />

        <main className={appContent}>
          {page === "home" && <HomePage onNavigate={setPage} />}
          {page === "map" && <MapPage />}
          {page === "lists" && <ListsPage />}
          {page === "memories" && <MemoriesPage />}
        </main>
      </div>
    </TravelProvider>
  );
}

export default App;
