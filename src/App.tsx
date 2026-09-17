import { useState } from 'react'
import { css } from "@emotion/css";
import type { Page } from './types'
import { TravelProvider } from './travelStore';
import NavBar from './pages/navBar';
import HomePage from './pages/home';
import LoginPage from './pages/login/Login';

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
      </div>
    </TravelProvider>
  )
}

export default App
