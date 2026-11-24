
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
  height: 56px;
  min-height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 0 24px;

  border-bottom: 1px solid ${t.border};

  background: rgba(245, 247, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: 760px) {
    height: 96px;
    min-height: 96px;

    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: 38px 42px;
    align-content: center;

    gap: 4px 8px;
    padding: 5px 12px 6px;
  }
`;

const logo = css`
  flex: 0 0 auto;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 4px 0;

  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.025em;

  color: #243f86;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);

  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  span {
    color: #e76c91;
  }

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
  justify-content: flex-end;
  gap: 4px;
  min-width: 0;

  @media (max-width: 760px) {
    grid-column: 1 / -1;
    grid-row: 2;

    width: 100%;
    min-width: 0;
    height: 42px;

    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;

    padding: 2px 0 4px;

    scrollbar-width: none;
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
  border: none;

  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:active {
    transform: scale(0.97);
  }

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

  margin-left: 8px;
  padding: 7px 12px;

  border-radius: ${t.radiusFull};
  border: none;

  font-size: 0.75rem;
  font-weight: 500;
  font-family: ${t.fontBody};

  color: ${t.mutedFg};
  background: transparent;

  cursor: pointer;
  white-space: nowrap;

  transition: background 0.2s ease;

  &:hover {
    background: ${t.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    grid-column: 2;
    grid-row: 1;

    justify-self: end;

    margin: 0;
    padding: 7px 10px;
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
