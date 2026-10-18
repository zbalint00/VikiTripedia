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
  min-height: 100vh;
  background: #faf6f1;
`;
const validPages: Page[] = ["home", "map", "lists", "memories"];

function App() {
  const [authed, setAuthed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [page, setPage] = useState<Page>(() => {
    const savedPage = localStorage.getItem("vikinerary-page");

    if (savedPage && validPages.includes(savedPage as Page)) {
      return savedPage as Page;
    }

    return "home";
  });

  useEffect(() => {
    localStorage.setItem("vikinerary-page", page);
  }, [page]);

  useEffect(() => {
    let mounted = true;

    // Figyeljük a bejelentkezést és kijelentkezést.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setAuthed(!!session);
        setAuthLoading(false);
      }
    });

    // Ellenőrizzük, van-e már érvényes munkamenet.
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (!mounted) return;

      if (error) {
        console.error("Session ellenőrzési hiba:", error);
      }

      setAuthed(!!session);
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
  }

  if (authLoading) {
    return <div className={shell}>Betöltés...</div>;
  }

  if (!authed) {
    return <LoginPage onLogin={() => setAuthed(true)} />;
  }

  return (
    <TravelProvider>
      <div className={shell}>
        <NavBar
          current={page}
          onNavigate={setPage}
          onLogout={() => {
            handleLogout();
          }}
        />
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "map" && <MapPage />}
        {page === "lists" && <ListsPage />}
        {page === "memories" && <MemoriesPage />}
      </div>
    </TravelProvider>
  );
}

export default App;
