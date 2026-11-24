
import { css, keyframes } from "@emotion/css";
import { t } from "../../styles/theme";

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const page = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  min-height: 100dvh;
  padding:
    max(24px, env(safe-area-inset-top))
    max(16px, env(safe-area-inset-right))
    max(24px, env(safe-area-inset-bottom))
    max(16px, env(safe-area-inset-left));
  overflow-x: hidden;
  overflow-y: auto;
  isolation: isolate;

  @media (max-width: 480px) {
    align-items: center;
    padding:
      max(20px, env(safe-area-inset-top))
      max(16px, env(safe-area-inset-right))
      max(20px, env(safe-area-inset-bottom))
      max(16px, env(safe-area-inset-left));
  }

  @media (max-height: 600px) {
    align-items: flex-start;
  }
`;

const bg = css`
  position: fixed;
  z-index: -2;
  inset: 0;
  overflow: hidden;
  background: #26364a;
`;

const bgImg = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 600px) {
    object-position: 58% center;
  }
`;

const bgOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 24, 43, 0.72) 0%,
    rgba(58, 83, 196, 0.32) 50%,
    rgba(15, 33, 43, 0.68) 100%
  );
`;

const cardWrap = css`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  min-width: 0;
  margin: auto;
`;

const cardWrapShake = css`
  animation: ${shake} 0.5s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const card = css`
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  overflow: hidden;
  border: 1px solid ${t.border};
  border-radius: 20px;
  background: rgba(255, 249, 245, 0.95);
  box-shadow: 0 25px 60px -16px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 480px) {
    padding: 32px 24px;
    border-radius: 18px;
  }

  @media (max-width: 360px) {
    padding: 28px 20px;
  }

  @media (max-height: 600px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const iconWrap = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;

const icon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${t.primary};
  color: ${t.card};
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(58, 129, 196, 0.35);

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const heading = css`
  margin: 0 0 4px;
  color: ${t.fg};
  font-family: ${t.fontDisplay};
  font-size: clamp(1.6rem, 6vw, 1.875rem);
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

const subheading = css`
  margin: 0 0 30px;
  color: ${t.mutedFg};
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  min-width: 0;
`;

const field = css`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const label = css`
  display: block;
  margin-bottom: 7px;
  color: ${t.secondaryFg};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const input = css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 46px;
  padding: 12px 14px;
  border: 1px solid ${t.border};
  border-radius: 12px;
  outline: none;
  background: ${t.bg};
  color: ${t.fg};
  font-family: ${t.fontBody};
  font-size: 16px;
  line-height: 1.4;
  appearance: none;
  -webkit-appearance: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: ${t.mutedFg};
    opacity: 0.65;
  }

  &:focus {
    border-color: ${t.primary};
    background: ${t.card};
    box-shadow: 0 0 0 3px rgba(58, 134, 196, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

const errorContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  border: 1px solid rgba(196, 96, 58, 0.2);
  border-radius: 10px;
  background: rgba(196, 96, 58, 0.07);
`;

const errorMsg = css`
  margin: 0;
  color: ${t.primary};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
  overflow-wrap: anywhere;
`;

const errorHint = css`
  margin: 0;
  color: ${t.secondaryFg};
  font-size: 0.8rem;
  line-height: 1.45;
  text-align: center;
`;

const submitBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  margin-top: 4px;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background: ${t.primary};
  color: ${t.card};
  font-family: ${t.fontBody};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(58, 134, 196, 0.3);
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${t.primaryHover};
    box-shadow: 0 6px 16px rgba(196, 96, 58, 0.3);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    box-shadow: none;
  }
`;

const spinner = css`
  display: inline-block;
  width: 15px;
  height: 15px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: ${t.card};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const footer = css`
  margin: 24px 0 0;
  color: ${t.mutedFg};
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: center;
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
  field,
  label,
  input,
  errorContainer,
  errorMsg,
  errorHint,
  submitBtn,
  spinner,
  footer,
};
