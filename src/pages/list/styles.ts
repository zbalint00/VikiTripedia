import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  min-height: 100vh;
  padding-top: 56px;
  background: linear-gradient(135deg, ${t.bg} 40%, #3c6ee0 100%);
`;
const inner = css`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 24px;
`;
const title = css`
  font-family: ${t.fontDisplay};
  font-size: 1.875rem;
  color: ${t.fg};
  margin: 0 0 4px;
`;
const subtitle = css`
  font-size: 0.875rem;
  color: ${t.mutedFg};
  margin: 0 0 32px;
`;
const tabRow = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;
const tabBase = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${t.radiusFull};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: 1px solid ${t.border};
  cursor: pointer;
  transition: all 0.2s;
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
  text-align: center;
  padding: 80px 0;
`;
const emptyIcon = css`
  font-size: 3rem;
  margin-bottom: 16px;
`;
const emptyMsg = css`
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  color: ${t.mutedFg};
  margin: 0 0 8px;
`;
const emptyHint = css`
  font-size: 0.875rem;
  color: ${t.border};
  margin: 0;
`;
const list = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const item = css`
  display: flex;
  align-items: center;
  gap: 16px;
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
`;
const flag = css`
  font-size: 1.875rem;
  flex-shrink: 0;
`;
const info = css`
  flex: 1;
  min-width: 0;
`;
const name = css`
  font-family: ${t.fontDisplay};
  font-weight: 600;
  color: ${t.fg};
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const region = css`
  font-size: 0.75rem;
  color: ${t.mutedFg};
  margin: 0;
`;
const reorderCol = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const reorderBtn = css`
  width: 28px;
  height: 28px;
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
  &:hover {
    background: ${t.secondary};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
const removeBtn = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.border};
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
`;
const hint = css`
  font-size: 0.75rem;
  color: ${t.border};
  text-align: center;
  margin-top: 24px;
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
