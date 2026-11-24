
import { css } from "@emotion/css";
import { t } from "../../styles/theme";


const page = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: clip;
  background: linear-gradient(
    135deg,
    ${t.bg} 0%,
    #8ea3d4 55%,
    #263f83 100%
  );

  @media (max-width: 760px) {
    min-height: 100vh;
    min-height: 100dvh;
  }
`;


const inner = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  min-width: 0;
  margin: 0 auto;
  padding: 44px 28px 64px;

  @media (max-width: 760px) {
    padding: 32px 20px 48px;
  }

  @media (max-width: 600px) {
    padding: 26px 14px 40px;
  }

  @media (max-width: 360px) {
    padding: 22px 10px 32px;
  }
`;

const header = css`
  margin-bottom: 32px;

  @media (max-width: 600px) {
    margin-bottom: 24px;
  }
`;

const eyebrow = css`
  display: block;
  margin-bottom: 12px;
  color: ${t.primary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 0.65rem;
    margin-bottom: 8px;
  }
`;

const title = css`
  font-family: ${t.fontDisplay};
  font-size: clamp(1.7rem, 4vw, 2.25rem);
  line-height: 1.2;
  color: ${t.fg};
  overflow-wrap: anywhere;
  margin: 0 0 10px;
`;

const subtitle = css`
  max-width: 620px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${t.mutedFg};
  margin: 0;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const tabContainer = css`
  width: 100%;
  min-width: 0;
  margin-bottom: 28px;
`;

const tabRow = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
  min-width: 0;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
  }

  @media (max-width: 360px) {
    gap: 7px;
  }
`;

const tabBase = css`
  box-sizing: border-box;
  min-width: 0;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 14px;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: ${t.fontBody};
  line-height: 1.3;
  text-align: center;
  border: 1px solid ${t.border};
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    min-height: 50px;
    gap: 6px;
    padding: 9px 8px;
    font-size: 0.78rem;
  }

  @media (max-width: 360px) {
    min-height: 46px;
    gap: 5px;
    padding: 8px 5px;
    font-size: 0.72rem;
  }
`;

const tabActive = css`
  background: ${t.primary};
  color: white;
  border-color: ${t.primary};
  box-shadow: 0 4px 12px rgba(196, 96, 58, 0.2);
`;

const tabInactive = css`
  background: ${t.card};
  color: ${t.secondaryFg};

  &:hover {
    border-color: ${t.primary};
    background: ${t.secondary};
  }
`;

const tabIcon = css`
  flex-shrink: 0;
  font-size: 1rem;
  line-height: 1;
`;

const tabLabel = css`
  min-width: 0;
  overflow-wrap: anywhere;
`;

const tabBadge = css`
  box-sizing: border-box;
  flex-shrink: 0;
  min-width: 21px;
  height: 21px;
  padding: 0 5px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

const tabBadgeActive = css`
  background: rgba(255, 255, 255, 0.25);
  color: white;
`;

const tabBadgeInactive = css`
  background: ${t.secondary};
  color: ${t.primary};
`;

const content = css`
  width: 100%;
  min-width: 0;
`;

const listHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const listTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${t.fg};
  margin: 0 0 3px;
`;

const listCount = css`
  font-size: 0.78rem;
  line-height: 1.5;
  color: ${t.mutedFg};
  margin: 0;
`;

const empty = css`
  box-sizing: border-box;
  width: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 52px 24px;
  border: 1px dashed ${t.border};
  border-radius: 20px;
  background: rgba(205, 235, 243, 0.75);

  @media (max-width: 600px) {
    min-height: 220px;
    padding: 36px 16px;
    border-radius: 16px;
  }
`;

const emptyIcon = css`
  font-size: 2.8rem;
  line-height: 1;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 2.4rem;
    margin-bottom: 14px;
  }
`;

const emptyMsg = css`
  max-width: 440px;
  font-family: ${t.fontDisplay};
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  overflow-wrap: anywhere;
  margin: 0 0 8px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const emptyHint = css`
  font-size: 0.82rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  margin: 0;
`;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  min-width: 0;
`;

const item = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 13px;
  width: 100%;
  min-width: 0;
  padding: 14px 16px;
  border-radius: 15px;
  background: ${t.card};
  border: 1px solid ${t.border};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(60, 58, 196, 0.3);
    box-shadow: 0 3px 12px rgba(16, 15, 43, 0.07);
  }

  @media (max-width: 600px) {
    gap: 9px;
    padding: 12px 10px;
    border-radius: 13px;
  }

  @media (max-width: 360px) {
    gap: 7px;
    padding: 10px 8px;
  }
`;

const rank = css`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: ${t.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${t.mutedFg};
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;

  @media (max-width: 360px) {
    width: 24px;
    height: 24px;
    font-size: 0.68rem;
  }
`;

const flag = css`
  flex-shrink: 0;
  font-size: 1.85rem;
  line-height: 1;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 360px) {
    font-size: 1.35rem;
  }
`;

const info = css`
  flex: 1 1 0;
  min-width: 0;
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
    font-size: 0.82rem;
  }
`;

const region = css`
  font-size: 0.76rem;
  line-height: 1.4;
  color: ${t.mutedFg};
  overflow-wrap: anywhere;
  margin: 0;

  @media (max-width: 360px) {
    font-size: 0.68rem;
  }
`;

const actions = css`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;

const reorderCol = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1px;
`;

const reorderBtn = css`
  width: 34px;
  height: 27px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover:not(:disabled) {
    background: ${t.secondary};
    color: ${t.primary};
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 1px;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 25px;
  }

  @media (max-width: 360px) {
    width: 26px;
    height: 24px;
  }
`;

const removeBtn = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #fef2f2;
    color: #dc4444;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 1px;
  }

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 360px) {
    width: 32px;
    height: 32px;
  }
`;

const hint = css`
  font-size: 0.76rem;
  line-height: 1.6;
  color: ${t.mutedFg};
  text-align: center;
  margin: 22px 0 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    margin-top: 18px;
    font-size: 0.72rem;
  }
`;

export const styles = {
  page,
  inner,
  header,
  eyebrow,
  title,
  subtitle,
  tabContainer,
  tabRow,
  tabBase,
  tabActive,
  tabInactive,
  tabIcon,
  tabLabel,
  tabBadge,
  tabBadgeActive,
  tabBadgeInactive,
  content,
  listHeader,
  listTitle,
  listCount,
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
  actions,
  reorderCol,
  reorderBtn,
  removeBtn,
  hint,
};
