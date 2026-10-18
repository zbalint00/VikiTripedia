import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  padding-top: 56px;
  overflow-x: clip;
  background: linear-gradient(135deg, #3c6ee0 0%, ${t.bg} 100%);

  @media (max-width: 760px) {
    padding-top: 100px;
    min-height: 100svh;
  }
`;

const heroSection = css`
  position: relative;
  overflow: hidden;
  padding: 64px 24px;
  text-align: center;
  border-bottom: 1px solid ${t.border};
  background: linear-gradient(135deg, ${t.bg} 40%, #3c6ee0 100%);

  @media (max-width: 760px) {
    padding: 42px 16px;
  }

  @media (max-width: 420px) {
    padding: 32px 14px;
  }
`;

const heroBg = css`
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background:
    radial-gradient(circle at 20% 50%, ${t.primary} 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${t.accent} 0%, transparent 50%);
  pointer-events: none;
`;

const heroInner = css`
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  overflow-wrap: anywhere;
`;

const heroLabel = css`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  line-height: 1.6;
  color: ${t.mutedFg};
  margin: 0 0 12px;

  @media (max-width: 420px) {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
  }
`;

const heroTitle = css`
  font-family: ${t.fontDisplay};
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: 1.2;
  color: ${t.fg};
  margin: 0 0 16px;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: clamp(2rem, 9vw, 2.75rem);
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const heroQuote = css`
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 1.125rem;
  color: ${t.secondaryFg};
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
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
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 16px 24px;
  border-bottom: 1px solid ${t.border};
  background: ${t.card};
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 760px) {
    padding: 12px 16px;
  }
`;

const quoteItem = css`
  display: inline-block;
  max-width: 85%;
  margin-right: 32px;
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${t.mutedFg};
  white-space: normal;
  vertical-align: middle;

  @media (max-width: 760px) {
    max-width: 80%;
    margin-right: 20px;
    font-size: 0.8rem;
  }
`;

const gridSection = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-width: 0;
  margin: 0 auto;
  padding: 40px 24px;

  @media (max-width: 760px) {
    padding: 28px 14px;
  }

  @media (max-width: 420px) {
    padding: 24px 12px;
  }
`;

const gridHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  min-width: 0;

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
  font-family: ${t.fontDisplay};
  font-size: 1.25rem;
  line-height: 1.4;
  color: #f0f7fa;
  margin: 0;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: 1.15rem;
  }
`;

const addBtn = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  max-width: 100%;
  padding: 10px 16px;
  border-radius: ${t.radiusFull};
  background: ${t.primary};
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  line-height: 1.4;
  border: none;
  cursor: pointer;
  overflow-wrap: anywhere;
  transition: background 0.2s;

  &:hover {
    background: ${t.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${t.fg};
    outline-offset: 3px;
  }

  @media (max-width: 760px) {
    padding: 10px 13px;
    white-space: normal;
    text-align: center;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const addForm = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin-bottom: 32px;
  padding: 24px;
  border-radius: 16px;
  background: ${t.card};
  border: 1px solid ${t.border};

  @media (max-width: 760px) {
    padding: 16px;
    margin-bottom: 24px;
  }

  @media (max-width: 360px) {
    padding: 12px;
  }
`;

const addFormTitle = css`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  color: ${t.secondaryFg};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px;
  overflow-wrap: anywhere;
`;

const addFormInputs = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const formInput = css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${t.border};
  background: ${t.bg};
  color: ${t.fg};
  font-family: ${t.fontBody};
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &::placeholder {
    color: ${t.mutedFg};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${t.primary};
    box-shadow: 0 0 0 3px rgba(196, 96, 58, 0.12);
  }

  @media (max-width: 420px) {
    padding: 11px 12px;
  }
`;

const formActions = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const formSubmit = css`
  min-height: 42px;
  padding: 8px 20px;
  border-radius: 12px;
  background: ${t.primary};
  color: white;
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${t.primaryHover};
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const formCancel = css`
  min-height: 42px;
  padding: 8px 20px;
  border-radius: 12px;
  background: transparent;
  color: ${t.mutedFg};
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${t.border};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${t.secondary};
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const masonry = css`
  width: 100%;
  min-width: 0;
  columns: 1;
  column-gap: 16px;

  @media (min-width: 421px) {
    columns: 2;
  }

  @media (min-width: 1024px) {
    columns: 3;
  }

  @media (max-width: 420px) {
    columns: 1;
    column-gap: 0;
  }
`;

const photoWrap = css`
  position: relative;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${t.border};
  background: ${t.muted};
  margin: 0 0 16px;

  @media (max-width: 760px) {
    border-radius: 12px;
    margin-bottom: 10px;
  }
`;

const photoImg = css`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const photoOverlay = css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 16px;
  background: linear-gradient(
    to top,
    rgba(43, 26, 15, 0.82),
    rgba(43, 26, 15, 0.08)
  );
  transform: translateY(4px);
  transition: transform 0.3s;

  @media (max-width: 760px) {
    padding: 10px;
    transform: translateY(0);
  }
`;

const photoOverlayVisible = css`
  transform: translateY(0);
`;

const photoCaption = css`
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.5;
  color: white;
  margin: 0;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

const photoRemove = css`
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(43, 26, 15, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.2s,
    background 0.2s;

  &:hover {
    background: #ef4444;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid white;
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    top: 8px;
    right: 8px;
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
  text-align: center;
  border-top: 1px solid ${t.border};
  background: ${t.secondary};

  @media (max-width: 760px) {
    padding: 32px 16px;
  }
`;

const footerHeart = css`
  font-size: 1.5rem;
  color: ${t.primary};
  margin: 0 0 8px;
`;

const footerQuote = css`
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${t.secondaryFg};
  max-width: 480px;
  margin: 0 auto;
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
  addForm,
  addFormTitle,
  addFormInputs,
  formInput,
  formActions,
  formSubmit,
  formCancel,
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
