import type { Page } from "../../types";

export interface NavBarProps {
  current: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}
