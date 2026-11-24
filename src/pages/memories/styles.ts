
import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  overflow-x: clip;
  background: linear-gradient(135deg, #3c6ee0 0%, ${t.bg} 420px);
`;

const heroSection = css`
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: clamp(42px, 6vw, 68px) 24px;
  text-align: center;
  border-bottom: 1px solid ${t.border};
  background: linear-gradient(135deg, ${t.bg} 40%, #3c6ee0 100%);

  @media (max-width: 760px) {
    padding: 42px 18px;
  }

  @media (max-width: 420px) {
    padding: 34px 14px;
  }
`;

const heroBg = css`
  position: absolute;
  z-index: 0;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 50%, ${t.primary} 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${t.accent} 0%, transparent 50%);
`;

const heroInner = css`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  overflow-wrap: anywhere;
`;

const heroLabel = css`
  margin: 0 0 12px;
  color: ${t.mutedFg};
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media (max-width: 420px) {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
  }
`;

const heroTitle = css`
  margin: 0 0 16px;
  color: ${t.fg};
  font-family: ${t.fontDisplay};
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: clamp(2rem, 9vw, 2.75rem);
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const heroQuote = css`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  color: ${t.secondaryFg};
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.6;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const quoteStrip = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 24px;
  border-bottom: 1px solid ${t.border};
  background: ${t.card};
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 760px) {
    gap: 20px;
    padding: 12px 16px;
  }
`;

const quoteItem = css`
  flex: 0 0 auto;
  max-width: min(420px, 80vw);
  color: ${t.mutedFg};
  font-family: ${t.fontDisplay};
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.5;
  white-space: normal;

  @media (max-width: 760px) {
    max-width: 80vw;
    font-size: 0.8rem;
  }
`;

const gridSection = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-width: 0;
  margin: 0 auto;
  padding: 40px 24px 48px;

  @media (max-width: 760px) {
    padding: 30px 16px 36px;
  }

  @media (max-width: 420px) {
    padding: 24px 12px 32px;
  }
`;

const gridHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;
  margin-bottom: 24px;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const gridTitle = css`
  min-width: 0;
  margin: 0;
  color: #120f2b;
  font-family: ${t.fontDisplay};
  font-size: 1.35rem;
  line-height: 1.4;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
`;

const addBtn = css`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  max-width: 100%;
  min-height: 42px;
  padding: 10px 16px;
  border: none;
  border-radius: ${t.radiusFull};
  background: ${t.primary};
  color: white;
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;
  overflow-wrap: anywhere;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${t.primaryHover};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${t.fg};
    outline-offset: 3px;
  }

  @media (max-width: 760px) {
    padding: 10px 13px;
    white-space: normal;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const errorBanner = css`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0 0 20px;
  padding: 13px 16px;
  border: 1px solid rgba(196, 96, 58, 0.3);
  border-radius: 12px;
  background: rgba(255, 249, 245, 0.96);
  color: ${t.primary};
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-wrap: anywhere;

  button {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: ${t.primary};
    cursor: pointer;
  }

  button:hover {
    background: rgba(196, 96, 58, 0.1);
  }

  button:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }
`;

const addForm = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin-bottom: 32px;
  padding: 24px;
  border: 1px solid ${t.border};
  border-radius: 16px;
  background: ${t.card};
  box-shadow: 0 8px 24px rgba(43, 26, 15, 0.06);

  @media (max-width: 760px) {
    margin-bottom: 24px;
    padding: 18px;
  }

  @media (max-width: 360px) {
    padding: 14px;
  }
`;

const addFormTitle = css`
  margin: 0 0 16px;
  color: ${t.secondaryFg};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const addFormInputs = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const fileLabel = css`
  color: ${t.secondaryFg};
  font-size: 0.875rem;
  font-weight: 600;
`;

const formInput = css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 46px;
  padding: 11px 14px;
  border: 1px solid ${t.border};
  border-radius: 12px;
  outline: none;
  background: ${t.bg};
  color: ${t.fg};
  font-family: ${t.fontBody};
  font-size: 16px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${t.mutedFg};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${t.primary};
    box-shadow: 0 0 0 3px rgba(196, 96, 58, 0.12);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &[type="file"] {
    padding: 8px;
    font-size: 0.875rem;
  }

  &[type="file"]::file-selector-button {
    margin-right: 12px;
    padding: 7px 12px;
    border: none;
    border-radius: 8px;
    background: ${t.secondary};
    color: ${t.secondaryFg};
    font-family: ${t.fontBody};
    font-weight: 500;
    cursor: pointer;
  }
`;

const selectedFile = css`
  margin: -4px 0 0;
  color: ${t.secondaryFg};
  font-size: 0.8rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const formHint = css`
  color: ${t.mutedFg};
  font-size: 0.78rem;
  line-height: 1.5;
`;

const formActions = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const formSubmit = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 9px 20px;
  border: none;
  border-radius: 12px;
  background: ${t.primary};
  color: white;
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${t.primaryHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 3px;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const formCancel = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 9px 20px;
  border: 1px solid ${t.border};
  border-radius: 12px;
  background: transparent;
  color: ${t.mutedFg};
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: ${t.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const loadingMessage = css`
  margin: 0 0 18px;
  color: #f0f7fa;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
`;

const masonry = css`
  width: 100%;
  min-width: 0;
  columns: 3;
  column-gap: 18px;

  @media (max-width: 1023px) {
    columns: 2;
    column-gap: 16px;
  }

  @media (max-width: 600px) {
    columns: 1;
    column-gap: 0;
  }
`;

const photoWrap = css`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  margin: 0 0 18px;
  overflow: hidden;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  border: 1px solid ${t.border};
  border-radius: 16px;
  background: ${t.muted};
  vertical-align: top;

  @media (max-width: 760px) {
    margin-bottom: 14px;
    border-radius: 13px;
  }
`;

const photoImg = css`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  object-fit: cover;
`;

const photoOverlay = css`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 18px 16px 14px;
  background: linear-gradient(
    to top,
    rgba(43, 26, 15, 0.86) 0%,
    rgba(43, 26, 15, 0.3) 65%,
    transparent 100%
  );
  opacity: 0;
  transform: translateY(5px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
  pointer-events: none;

  @media (hover: none), (max-width: 760px) {
    padding: 24px 12px 11px;
    opacity: 1;
    transform: none;
  }
`;

const photoOverlayVisible = css`
  opacity: 1;
  transform: translateY(0);
`;

const photoCaption = css`
  margin: 0;
  color: white;
  font-family: ${t.fontDisplay};
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);

  @media (max-width: 760px) {
    font-size: 0.82rem;
  }

  @media (max-width: 360px) {
    font-size: 0.78rem;
  }
`;

const photoRemove = css`
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(43, 26, 15, 0.76);
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #ef4444;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid white;
    outline-offset: 2px;
  }

  @media (hover: none), (max-width: 760px) {
    opacity: 1;
  }
`;

const photoRemoveVisible = css`
  opacity: 1;
`;

const footer = css`
  box-sizing: border-box;
  width: 100%;
  padding: 48px 24px;
  border-top: 1px solid ${t.border};
  background: ${t.secondary};
  text-align: center;

  @media (max-width: 760px) {
    padding: 34px 16px;
  }

  @media (max-width: 420px) {
    padding: 28px 14px;
  }
`;

const footerHeart = css`
  margin: 0 0 8px;
  color: ${t.primary};
  font-size: 1.5rem;
`;

const footerQuote = css`
  max-width: 480px;
  margin: 0 auto;
  color: ${t.secondaryFg};
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.6;
  overflow-wrap: anywhere;

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const styles = {
  page,
  heroSection,
  heroBg,
  heroInner,
  heroLabel,
  heroTitle,
  heroQuote,
  quoteStrip,
  quoteItem,
  gridSection,
  gridHeader,
  gridTitle,
  addBtn,
  errorBanner,
  addForm,
  addFormTitle,
  addFormInputs,
  fileLabel,
  formInput,
  selectedFile,
  formHint,
  formActions,
  formSubmit,
  formCancel,
  loadingMessage,
  masonry,
  photoWrap,
  photoImg,
  photoOverlay,
  photoOverlayVisible,
  photoCaption,
  photoRemove,
  photoRemoveVisible,
  footer,
  footerHeart,
  footerQuote,
};
