//TEMP FILE - MOVE INTERFACES TO TYPES.TSX

export type Page = "home" | "map" | "lists" | "memories" | "soon4" | "soon5";

export interface NavBarProps {
  current: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export interface HomePageProps {
  onNavigate: (page: Page) => void;
}