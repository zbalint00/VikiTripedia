import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  min-height: 100vh;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  background: ${t.bg};
`;

const header = css`
  padding: 24px;
  border-bottom: 1px solid ${t.border};
`;
const headerTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.5rem;
  color: ${t.fg};
  margin: 0 0 4px;
`;
const headerSub = css`
  font-size: 0.875rem;
  color: ${t.mutedFg};
  margin: 0;
`;
const body = css`
  display: flex;
  flex: 1;
  overflow: hidden;
`;
const mapArea = css`
  flex: 1;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #d4eaf7 0%, #b8d9f0 50%, #c8e8f5 100%);
`;
const svgMap = css`
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const panel = css`
  border-left: 1px solid ${t.border};
  overflow-y: auto;
  background: ${t.card};
  transition:
    width 0.3s,
    min-width 0.3s;
`;
const panelInner = css`
  padding: 24px;
`;
const panelTop = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const panelFlag = css`
  font-size: 2.5rem;
  margin-bottom: 8px;
`;
const panelTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.5rem;
  color: ${t.fg};
  margin: 0 0 2px;
`;
const panelRegion = css`
  font-size: 0.75rem;
  color: ${t.mutedFg};
  margin: 0;
`;
const closeBtn = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.mutedFg};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.875rem;
  &:hover {
    background: ${t.secondary};
  }
`;
const infoCard = css`
  padding: 16px;
  border-radius: 12px;
  background: ${t.bg};
  border: 1px solid ${t.border};
  margin-bottom: 12px;
`;
const infoCardAccent = css`
  padding: 16px;
  border-radius: 12px;
  background: ${t.secondary};
  border: 1px solid ${t.border};
  margin-bottom: 12px;
`;
const infoRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;
const infoIcon = css`
  font-size: 1.125rem;
`;
const infoLabel = css`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${t.secondaryFg};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const infoText = css`
  font-size: 0.875rem;
  color: ${t.fg};
  margin: 4px 0 0;
`;
const costRow = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${t.fg};
  margin-bottom: 6px;
`;
const costLabel = css`
  color: ${t.mutedFg};
`;
const costTotal = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  padding-top: 8px;
  border-top: 1px solid ${t.border};
  margin-top: 4px;
`;
const costTotalLabel = css`
  font-weight: 600;
  color: ${t.secondaryFg};
`;
const costTotalValue = css`
  font-weight: 700;
  color: ${t.primary};
`;
const stars = css`
  display: flex;
  gap: 2px;
`;
const listSection = css`
  margin-top: 24px;
`;
const listSectionLabel = css`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${t.secondaryFg};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 12px;
`;
const listGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
const listBtnBase = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: 1px solid ${t.border};
  cursor: pointer;
  transition: all 0.15s;
  overflow: hidden;
`;
const listBtnActive = css`
  background: ${t.primary};
  color: white;
  border-color: ${t.primary};
`;
const listBtnInactive = css`
  background: ${t.card};
  color: ${t.fg};
  &:hover {
    border-color: ${t.primary};
    background: ${t.bg};
  }
`;
const toast = css`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  border-radius: ${t.radiusFull};
  background: ${t.fg};
  color: ${t.card};
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const pickerBar = css`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  width: min(320px, calc(100% - 40px));
`;

const pickerInput = css`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 14px;
  background: rgba(255, 249, 245, 0.96);
  color: ${t.fg};
  font: inherit;
  font-size: 0.875rem;
  outline: none;
  box-shadow: 0 8px 28px rgba(40, 60, 80, 0.12);
  backdrop-filter: blur(12px);

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

const pickerBackdrop = css`
  position: fixed;
  inset: 0;
  z-index: -1;
  border: 0;
  background: transparent;
`;

const pickerResults = css`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  width: 100%;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  padding: 6px;
  border: 1px solid ${t.border};
  border-radius: 14px;
  background: ${t.card};
  box-shadow: 0 12px 32px rgba(40, 60, 80, 0.16);
`;

const pickerResult = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: ${t.fg};
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${t.bg};
  }

  span:last-child {
    margin-left: auto;
  }
`;

const pickerEmpty = css`
  padding: 8px 12px;
  color: ${t.mutedFg};
  font-size: 0.875rem;
`;
const mapStyle = {
  width: "100%",
  height: "auto",
  display: "block",
} as const;

const countryStyle = {
  outline: "none",
  cursor: "pointer",
} as const;

const countryHoverStyle = {
  outline: "none",
  cursor: "pointer",
  filter: "brightness(0.94)",
} as const;

const countryPressedStyle = {
  outline: "none",
} as const;

const countryDefaultStyle = {
  outline: "none",
} as const;

export const styles = {
  page,
  header,
  headerTitle,
  headerSub,
  body,
  mapArea,
  svgMap,
  pickerBar,
  pickerInput,
  pickerBackdrop,
  pickerResults,
  pickerResult,
  pickerEmpty,
  panel,
  panelInner,
  panelTop,
  panelFlag,
  panelTitle,
  panelRegion,
  closeBtn,
  infoCard,
  infoCardAccent,
  infoRow,
  infoIcon,
  infoLabel,
  infoText,
  costRow,
  costLabel,
  costTotal,
  costTotalLabel,
  costTotalValue,
  stars,
  listSection,
  listSectionLabel,
  listGrid,
  listBtnBase,
  listBtnActive,
  listBtnInactive,
  toast,
  mapStyle,
  countryStyle,
  countryHoverStyle,
  countryPressedStyle,
  countryDefaultStyle,
};
