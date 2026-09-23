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
const pickerBar = css`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`;
const pickerLabel = css`
  font-size: 0.75rem;
  color: rgba(43, 26, 15, 0.6);
  text-align: center;
  margin: 0 0 8px;
`;
const pickerRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;
const pickerBtnBase = css`
  padding: 6px 12px;
  border-radius: ${t.radiusFull};
  font-size: 0.75rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: 1px solid ${t.border};
  cursor: pointer;
  transition: all 0.15s;
`;
const pickerBtnActive = css`
  background: ${t.primary};
  color: white;
  border-color: ${t.primary};
`;
const pickerBtnInactive = css`
  background: rgba(255, 249, 245, 0.92);
  color: ${t.fg};
  &:hover {
    border-color: ${t.primary};
    color: ${t.primary};
  }
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

export const styles = {
  page,
  header,
  headerTitle,
  headerSub,
  body,
  mapArea,
  svgMap,
  pickerBar,
  pickerLabel,
  pickerRow,
  pickerBtnBase,
  pickerBtnActive,
  pickerBtnInactive,
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
};
