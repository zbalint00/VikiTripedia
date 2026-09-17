import { css, keyframes } from "@emotion/css";
import { t } from "../../styles/theme";


const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
`;

const page = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const bg = css`
  position: absolute;
  inset: 0;
`;

const bgImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const bgOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(43,26,15,0.7) 0%, rgba(196,96,58,0.3) 50%, rgba(43,26,15,0.6) 100%);
`;

const cardWrap = css`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 384px;
  margin: 0 16px;
`;

const cardWrapShake = css`
  animation: ${shake} 0.5s ease-in-out;
`;

const card = css`
  background: rgba(255, 249, 245, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
  border: 1px solid ${t.border};
`;

const iconWrap = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const icon = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${t.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(196,96,58,0.4);
`;

const heading = css`
  font-family: ${t.fontDisplay};
  font-size: 1.875rem;
  text-align: center;
  color: ${t.fg};
  margin: 0 0 4px;
`;

const subheading = css`
  text-align: center;
  color: ${t.mutedFg};
  font-size: 0.875rem;
  margin: 0 0 32px;
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const label = css`
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${t.secondaryFg};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const input = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${t.border};
  background: ${t.bg};
  color: ${t.fg};
  font-family: ${t.fontBody};
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: ${t.border}; }
  &:focus {
    border-color: ${t.primary};
    box-shadow: 0 0 0 3px rgba(196,96,58,0.15);
  }
`;

const errorMsg = css`
  color: ${t.primary};
  font-size: 0.875rem;
  text-align: center;
  animation: pulse 2s ease-in-out infinite;
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
`;

const submitBtn = css`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: ${t.primary};
  color: ${t.card};
  font-family: ${t.fontBody};
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(196,96,58,0.3);
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
  margin-top: 8px;
  &:hover { background: ${t.primaryHover}; box-shadow: 0 6px 16px rgba(196,96,58,0.4); }
  &:active { transform: scale(0.97); }
`;

const footer = css`
  text-align: center;
  color: ${t.border};
  font-size: 0.75rem;
  margin-top: 24px;
`;

export const styles = {
  page,
  bg,
  bgImg,
  bgOverlay,
  cardWrap,
  cardWrapShake,
  card,
  iconWrap,
  icon,
  heading,
  subheading,
  form,
  label,
  input,
  errorMsg,
  submitBtn,
  footer
};