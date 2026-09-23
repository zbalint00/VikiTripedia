import { useState } from 'react'
import { css } from "@emotion/css";
import type { Page } from './types'
import { TravelProvider } from './travelStore';
import NavBar from './pages/nav/NavBar';
import HomePage from './pages/home/Home';
import LoginPage from './pages/login/Login';
import MapPage from './pages/map/Map';
import MemoriesPage from './pages/memories/Memories';
import ListsPage from './pages/list/List';

const shell = css`
  min-height: 100vh;
  background: #FAF6F1;
`;

function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState<Page>("home");
  
    if (!authed) {
    return <LoginPage onLogin={() => setAuthed(true)} />;
  }
  return (
    <TravelProvider>
      <div className={shell}>
        <NavBar current={page} onNavigate={setPage} onLogout={() => { setAuthed(false); setPage("home"); }} />
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "map" && <MapPage />}
        {page === "lists" && <ListsPage />}
        {page === "memories" && <MemoriesPage />}
      </div>
    </TravelProvider>
  )
}

export default App
