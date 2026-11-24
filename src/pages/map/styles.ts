import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  width: 100%;
  height: calc(100vh - var(--nav-height, 56px));
  height: calc(100dvh - var(--nav-height, 56px));
  min-height: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${t.bg};
`;

const header = css`
  flex: 0 0 auto;
  padding: 14px 24px;
  border-bottom: 1px solid ${t.border};
  background: ${t.card};

  @media (max-width: 760px) {
    display: none;
  }
`;


const headerTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.35rem;
  color: ${t.fg};
  margin: 0 0 4px;
`;

const headerSub = css`
  font-size: 0.875rem;
  color: ${t.mutedFg};
  margin: 0;
  line-height: 1.5;
`;

const body = css`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 760px) {
    display: block;
  }
`;

const mapArea = css`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #d4eaf7 0%,
    #b8d9f0 50%,
    #c8e8f5 100%
  );

  @media (max-width: 760px) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;


const mapCanvas = css`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
    touch-action: none;
  }
`;


const svgMap = css`
  width: 100%;
  height: 100%;
  display: block;
`;

const mapControls = css`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 5;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    box-shadow: 0 3px 12px rgba(30, 50, 70, 0.12);
    color: #243447;
    font-size: 23px;
    font-weight: 600;
    cursor: pointer;
    touch-action: manipulation;
    transition:
      transform 0.15s,
      background 0.15s;

    &:hover {
      background: white;
      transform: scale(1.04);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 760px) {
    top: 70px;
    right: 12px;

    button {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 380px) {
    top: 66px;
    right: 8px;

    button {
      width: 36px;
      height: 36px;
    }
  }
`;

const mapHint = css`
  position: absolute;
  top: 16px;
  left: 16px;
  max-width: calc(100% - 100px);
  padding: 9px 13px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(30, 50, 70, 0.08);
  color: #243447;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;

  @media (max-width: 760px) {
    top: 12px;
    left: 12px;
  }

  @media (max-width: 380px) {
    max-width: calc(100% - 76px);
    padding: 8px 10px;
    font-size: 12px;
  }
`;

const panel = css`
  width: clamp(300px, 31vw, 400px);
  min-width: 300px;
  max-width: 42vw;
  flex: 0 0 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  background: ${t.card};
  border-left: 1px solid ${t.border};

  transition:
    width 0.25s ease,
    min-width 0.25s ease;

  @media (max-width: 900px) and (min-width: 761px) {
    width: 320px;
    min-width: 280px;
  }

  @media (max-width: 760px) {
    position: absolute;
    z-index: 20;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    min-width: 0;
    max-width: none;
    height: 43%;
    max-height: 82%;
    border: none;
    border-top: 1px solid ${t.border};
    border-radius: 22px 22px 0 0;

    box-shadow: 0 -8px 32px rgba(30, 50, 70, 0.16);

    transition: height 0.25s ease;
  }
`;

const panelExpanded = css`
  @media (max-width: 760px) {
    height: 78%;
  }
`;

const panelCollapsed = css`
  @media (max-width: 760px) {
    height: 76px;
    overflow: hidden;
  }
`;

const panelHandle = css`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 54px;
    padding: 7px 16px;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${t.fg};
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;

const handleBar = css`
  width: 38px;
  height: 5px;
  border-radius: 999px;
  background: ${t.border};
  margin-bottom: 8px;
`;

const handleText = css`
  font-size: 12px;
  font-weight: 600;
  color: ${t.secondaryFg};
`;

const panelInner = css`
  padding: 24px;
  box-sizing: border-box;

  @media (max-width: 760px) {
    padding: 8px 16px 32px;
  }
`;

const panelTop = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const panelFlag = css`
  position: relative;
  width: 68px;
  height: 46px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${t.bg};
  font-size: 2.5rem;
  overflow: hidden;
`;

const panelFlagImage = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
  background: ${t.card};
`;

const panelTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.5rem;
  color: ${t.fg};
  margin: 0 0 2px;
  overflow-wrap: anywhere;
`;

const panelRegion = css`
  font-size: 0.75rem;
  color: ${t.mutedFg};
  margin: 0;
`;

const closeBtn = css`
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
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

const climateCard = css`
  padding: 16px;
  border-radius: 12px;
  background: ${t.bg};
  border: 1px solid ${t.border};
  margin-bottom: 12px;
`;

const climateDescription = css`
  margin: 4px 0 14px;
  font-size: 0.75rem;
  color: ${t.mutedFg};
  line-height: 1.5;
`;

const climateStatus = css`
  padding: 12px;
  border-radius: 10px;
  background: ${t.secondary};
  color: ${t.secondaryFg};
  font-size: 0.8rem;
  line-height: 1.5;
`;

const climateError = css`
  padding: 12px;
  border-radius: 10px;
  background: #fff0f0;
  color: #a83232;
  font-size: 0.8rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const climateSummary = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const climateSummaryItem = css`
  padding: 10px;
  border-radius: 10px;
  background: ${t.card};
  border: 1px solid ${t.border};
`;

const climateSummaryLabel = css`
  display: block;
  font-size: 0.68rem;
  color: ${t.mutedFg};
  margin-bottom: 4px;
`;

const climateSummaryValue = css`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${t.fg};
`;

const climateChart = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const climateMonth = css`
  display: grid;
  grid-template-columns: 55px minmax(0, 1fr) 42px;
  align-items: center;
  gap: 8px;
`;

const climateMonthName = css`
  font-size: 0.75rem;
  color: ${t.secondaryFg};
`;

const climateBarTrack = css`
  height: 9px;
  border-radius: 20px;
  background: ${t.border};
  overflow: hidden;
`;

const climateBar = css`
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, #60a5fa, #f59e0b);
  transition: width 0.3s ease;
`;

const climateTemperature = css`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${t.fg};
  text-align: right;
`;

const climateDetails = css`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${t.border};
`;

const climateDetailRow = css`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.75rem;
  color: ${t.fg};
`;

const climateDetailLabel = css`
  color: ${t.mutedFg};
`;

const climateAttribution = css`
  margin-top: 14px;
  font-size: 0.68rem;
  color: ${t.mutedFg};
  line-height: 1.5;

  a {
    color: ${t.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
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
  line-height: 1.5;
`;

const costRow = css`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.875rem;
  color: ${t.fg};
  margin-bottom: 6px;

  strong {
    text-align: right;
    overflow-wrap: anywhere;
  }
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

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
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
  min-width: 0;
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
  max-width: calc(100% - 32px);
  padding: 12px 20px;
  border-radius: ${t.radiusFull};
  background: ${t.fg};
  color: ${t.card};
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 100;
  text-align: center;

  @media (max-width: 760px) {
    bottom: 95px;
  }
`;

const pickerBar = css`
  position: absolute;
  z-index: 30;
  top: 16px;
  left: 16px;
  width: min(340px, calc(100% - 88px));

  @media (max-width: 760px) {
    top: 12px;
    left: 12px;
    width: calc(100% - 76px);
  }
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
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  box-sizing: border-box;
  max-height: min(45vh, 360px);
  overflow-y: auto;
  overscroll-behavior: contain;
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
  height: "100%",
  display: "block",
} as const;

const selectedPulse = css`
  @keyframes selected-country-pulse {
    0%,
    100% {
      stroke: #2563eb;
      stroke-width: 2px;
      stroke-opacity: 1;
    }

    50% {
      stroke: #60a5fa;
      stroke-width: 4px;
      stroke-opacity: 0.55;
    }
  }

  animation: selected-country-pulse 2.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    stroke: #2563eb;
    stroke-width: 3px;
    stroke-opacity: 1;
  }
`;

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
  cursor: "pointer",
} as const;

export const styles = {
  page,
  header,
  headerTitle,
  headerSub,
  body,
  mapArea,
  mapCanvas,
  mapControls,
  mapHint,
  svgMap,
  pickerBar,
  pickerInput,
  pickerBackdrop,
  pickerResults,
  pickerResult,
  pickerEmpty,
  panel,
  panelExpanded,
  panelCollapsed,
  panelHandle,
  handleBar,
  handleText,
  panelInner,
  panelTop,
  panelFlag,
  panelFlagImage,
  panelTitle,
  panelRegion,
  closeBtn,
  infoCard,
  infoCardAccent,
  climateCard,
  climateDescription,
  climateStatus,
  climateError,
  climateSummary,
  climateSummaryItem,
  climateSummaryLabel,
  climateSummaryValue,
  climateChart,
  climateMonth,
  climateMonthName,
  climateBarTrack,
  climateBar,
  climateTemperature,
  climateDetails,
  climateDetailRow,
  climateDetailLabel,
  climateAttribution,
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
  selectedPulse,
  countryStyle,
  countryHoverStyle,
  countryPressedStyle,
  countryDefaultStyle,
};