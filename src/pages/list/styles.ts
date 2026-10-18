import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  padding-top: 56px;
  overflow-x: clip;
  background: linear-gradient(135deg, ${t.bg} 40%, #3c6ee0 100%);

  @media (max-width: 760px) {
    padding-top: 100px;
    min-height: 100svh;
  }
`;

const inner = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-width: 0;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: 600px) {
    padding: 24px 14px;
  }

  @media (max-width: 360px) {
    padding: 20px 10px;
  }
`;

const title = css`
  font-family: ${t.fontDisplay};
  font-size: 1.875rem;
  line-height: 1.25;
  color: ${t.fg};
  overflow-wrap: anywhere;
  margin: 0 0 8px;

  @media (max-width: 600px) {
    font-size: clamp(1.5rem, 7vw, 1.875rem);
  }
`;

const subtitle = css`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  margin: 0 0 32px;

  @media (max-width: 600px) {
    margin-bottom: 24px;
  }
`;

const tabRow = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 32px;
  min-width: 0;

  @media (min-width: 761px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

const tabBase = css`
  box-sizing: border-box;
  min-width: 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 12px;
  border-radius: ${t.radiusFull};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  line-height: 1.35;
  text-align: center;
  overflow-wrap: anywhere;
  border: 1px solid ${t.border};
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;

  @media (min-width: 761px) {
    flex: 0 1 auto;
    padding: 10px 20px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 10px 8px;
    gap: 5px;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
    padding: 9px 5px;
    gap: 4px;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }
`;

const tabActive = css`
  background: ${t.primary};
  color: white;
  border-color: ${t.primary};
  box-shadow: 0 4px 12px rgba(196, 96, 58, 0.25);
`;

const tabInactive = css`
  background: ${t.card};
  color: ${t.secondaryFg};

  &:hover {
    border-color: ${t.primary};
  }
`;

const tabBadge = css`
  flex-shrink: 0;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const tabBadgeActive = css`
  background: rgba(255, 255, 255, 0.3);
  color: white;
`;

const tabBadgeInactive = css`
  background: ${t.secondary};
  color: ${t.primary};
`;

const empty = css`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 64px 12px;

  @media (max-width: 600px) {
    padding: 44px 8px;
  }
`;

const emptyIcon = css`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const emptyMsg = css`
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  overflow-wrap: anywhere;
  margin: 0 0 8px;
`;

const emptyHint = css`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  margin: 0;
`;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const item = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 16px;
  border-radius: 16px;
  background: ${t.card};
  border: 1px solid ${t.border};
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: rgba(60, 58, 196, 0.3);
    box-shadow: 0 2px 8px rgba(16, 15, 43, 0.06);
  }

  @media (max-width: 600px) {
    gap: 9px;
    padding: 12px 10px;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    gap: 7px;
    padding: 10px 8px;
  }
`;

const rank = css`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${t.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${t.mutedFg};
  flex-shrink: 0;

  @media (max-width: 360px) {
    width: 24px;
    height: 24px;
    font-size: 0.7rem;
  }
`;

const flag = css`
  font-size: 1.875rem;
  flex-shrink: 0;

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const info = css`
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
`;

const name = css`
  font-family: ${t.fontDisplay};
  font-weight: 600;
  line-height: 1.4;
  font-size: 0.95rem;
  color: ${t.fg};
  margin: 0 0 3px;
  overflow-wrap: anywhere;

  @media (min-width: 601px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

const region = css`
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${t.mutedFg};
  overflow-wrap: anywhere;
  margin: 0;

  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;

const reorderCol = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 2px;
`;

const reorderBtn = css`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${t.secondary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 1px;
  }

  @media (max-width: 360px) {
    width: 27px;
    height: 29px;
  }
`;

const removeBtn = css`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: #fef2f2;
    color: #f87171;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 1px;
  }

  @media (max-width: 360px) {
    width: 28px;
    height: 28px;
  }
`;

const hint = css`
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  text-align: center;
  margin: 24px 0 0;
  overflow-wrap: anywhere;
`;

export const styles = {
  page,
  inner,
  title,
  subtitle,
  tabRow,
  tabBase,
  tabActive,
  tabInactive,
  tabBadge,
  tabBadgeActive,
  tabBadgeInactive,
  empty,
  emptyIcon,
  emptyMsg,
  emptyHint,
  list,
  item,
  rank,
  flag,
  info,
  name,
  region,
  reorderCol,
  reorderBtn,
  removeBtn,
  hint,
};
