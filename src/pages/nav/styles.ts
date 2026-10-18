import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const nav = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  box-sizing: border-box;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  gap: 16px;
  border-bottom: 1px solid ${t.border};
  background: rgba(245, 247, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 760px) {
    min-height: 0;
    padding: 10px 12px 8px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
  }
`;

const logo = css`
  flex-shrink: 0;
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-weight: 700;
  color: #243f86;
  letter-spacing: -0.025em;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  white-space: nowrap;

  &:hover {
    color: #172e6a;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const linkRow = css`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;

  @media (max-width: 760px) {
    grid-column: 1 / -1;
    width: 100%;
    min-width: 0;
    overflow-x: auto;
    padding: 2px 0 4px;
    scrollbar-width: none;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const linkBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 0 0 auto;
  padding: 8px 14px;
  white-space: nowrap;
  border-radius: ${t.radiusFull};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: none;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }

  @media (max-width: 360px) {
    gap: 4px;
    font-size: 0.75rem;
    padding: 8px 10px;
  }
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
  flex: 0 0 auto;
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
  white-space: nowrap;

  &:hover {
    background: ${t.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    margin-left: 0;
    padding: 8px 10px;
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
