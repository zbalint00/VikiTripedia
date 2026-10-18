import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  min-height: 100vh;
  padding-top: 56px;
  background: linear-gradient(135deg, #3c6ee0 0%, ${t.bg} 100%);
`;
const heroSection = css`
  position: relative;
  overflow: hidden;
  padding: 64px 24px;
  text-align: center;
  border-bottom: 1px solid ${t.border};
  background: linear-gradient(135deg, ${t.bg} 40%, #3c6ee0 100%);
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
`;
const heroLabel = css`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${t.mutedFg};
  margin: 0 0 12px;
`;
const heroTitle = css`
  font-family: ${t.fontDisplay};
  font-size: clamp(2.5rem, 6vw, 3rem);
  color: ${t.fg};
  margin: 0 0 16px;
`;
const heroQuote = css`
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 1.125rem;
  color: ${t.secondaryFg};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
`;
const quoteStrip = css`
  overflow-x: auto;
  white-space: nowrap;
  padding: 16px 24px;
  border-bottom: 1px solid ${t.border};
  background: ${t.card};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const quoteItem = css`
  display: inline-block;
  margin-right: 32px;
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 0.875rem;
  color: ${t.mutedFg};
`;
const gridSection = css`
  max-width: 1152px;
  margin: 0 auto;
  padding: 40px 24px;
`;
const gridHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const gridTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.25rem;
  color: #f0f7fa;
  margin: 0;
`;
const addBtn = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${t.radiusFull};
  background: ${t.primary};
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${t.fontBody};
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${t.primaryHover};
  }
`;
const addForm = css`
  margin-bottom: 32px;
  padding: 24px;
  border-radius: 16px;
  background: ${t.card};
  border: 1px solid ${t.border};
`;
const addFormTitle = css`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${t.secondaryFg};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px;
`;
const addFormInputs = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const formInput = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${t.border};
  background: ${t.bg};
  color: ${t.fg};
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;
  &::placeholder {
    color: ${t.border};
  }
  &:focus {
    border-color: ${t.primary};
    box-shadow: 0 0 0 3px rgba(196, 96, 58, 0.12);
  }
`;
const formActions = css`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;
const formSubmit = css`
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
`;
const formCancel = css`
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
`;
const masonry = css`
  columns: 1;
  gap: 16px;
  @media (min-width: 640px) {
    columns: 2;
  }
  @media (min-width: 1024px) {
    columns: 3;
  }
`;
const photoWrap = css`
  break-inside: avoid;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${t.border};
  background: ${t.muted};
  margin-bottom: 16px;
`;
const photoImg = css`
  width: 100%;
  object-fit: cover;
  display: block;
`;
const photoOverlay = css`
  position: absolute;
  inset-x: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(43, 26, 15, 0.7), transparent);
  padding: 16px;
  transform: translateY(4px);
  transition: transform 0.3s;
`;
const photoOverlayVisible = css`
  transform: translateY(0);
`;
const photoCaption = css`
  font-family: ${t.fontDisplay};
  font-style: italic;
  font-size: 0.875rem;
  color: white;
  margin: 0;
`;
const photoRemove = css`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(43, 26, 15, 0.5);
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
`;
const photoRemoveVisible = css`
  opacity: 1;
`;
const footer = css`
  padding: 48px 24px;
  text-align: center;
  border-top: 1px solid ${t.border};
  background: ${t.secondary};
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
  color: ${t.secondaryFg};
  max-width: 480px;
  margin: 0 auto;
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
