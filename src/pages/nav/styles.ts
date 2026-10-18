import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const nav = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid ${t.border};
  background: rgba(245, 247, 255, 0.9);
  backdrop-filter: blur(12px);
`;

const logo = css`
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  color: ${t.primary};
  letter-spacing: -0.025em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const linkRow = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const linkBase = css`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: ${t.radiusFull};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: none;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
`;

const linkActive = css`
  background: ${t.primary};
  color: ${t.card};
`;

const linkInactive = css`
  color: ${t.secondaryFg};
  background: transparent;
  &:hover {
    background: ${t.secondary};
  }
`;

const logoutBtn = css`
  margin-left: 12px;
  padding: 6px 12px;
  border-radius: ${t.radiusFull};
  font-size: 0.75rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${t.secondary};
  }
`;

export const styles = {
  nav,
  logo,
  linkRow,
  linkBase,
  linkActive,
  linkInactive,
  logoutBtn,
};
