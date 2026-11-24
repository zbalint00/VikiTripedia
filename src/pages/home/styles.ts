
import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  overflow-x: clip;
  background: ${t.bg};
`;

const hero = css`
  position: relative;
  isolation: isolate;
  width: 100%;
  height: clamp(340px, 55vh, 620px);
  min-height: 340px;
  overflow: hidden;
  background: ${t.muted};

  @media (max-width: 760px) {
    height: clamp(300px, 58svh, 520px);
    min-height: 300px;
  }

  @media (max-width: 380px) {
    height: clamp(270px, 48svh, 420px);
    min-height: 270px;
  }
`;

const heroImg = css`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`;

const heroOverlay = css`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(
      to bottom,
      rgba(43, 26, 15, 0.12) 0%,
      rgba(43, 26, 15, 0.02) 35%,
      rgba(43, 26, 15, 0.12) 65%,
      ${t.bg} 100%
    );
`;

const heroText = css`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: clamp(28px, 5vh, 52px);
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  text-align: center;

  @media (max-width: 760px) {
    bottom: 28px;
    padding-inline: 20px;
  }

  @media (max-width: 380px) {
    bottom: 20px;
    padding-inline: 14px;
  }
`;

const heroLabel = css`
  margin: 0 0 8px;
  color: ${t.mutedFg};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media (max-width: 760px) {
    font-size: 0.7rem;
    letter-spacing: 0.14em;
  }
`;

const heroTitle = css`
  margin: 0 0 12px;
  color: ${t.fg};
  font-family: ${t.fontDisplay};
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 600;
  line-height: 1.1;
  overflow-wrap: anywhere;

  span {
    display: inline-block;
  }

  @media (max-width: 760px) {
    font-size: clamp(2.2rem, 9vw, 3rem);
  }
`;

const heroSub = css`
  max-width: 440px;
  margin: 0 auto;
  color: ${t.secondaryFg};
  font-size: 1.125rem;
  line-height: 1.6;
  text-wrap: pretty;

  @media (max-width: 760px) {
    max-width: 34rem;
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    font-size: 0.9rem;
  }
`;

const grid = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-width: 0;
  margin: 0 auto;
  padding: clamp(32px, 5vw, 52px) 24px 64px;

  @media (max-width: 760px) {
    padding: 32px 16px 44px;
  }

  @media (max-width: 380px) {
    padding: 28px 12px 36px;
  }
`;

const gridLabel = css`
  margin: 0 0 24px;
  color: ${t.mutedFg};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 760px) {
    margin-bottom: 18px;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
  }
`;

const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 20px;
  width: 100%;
  min-width: 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

const cardBtn = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  padding: 0;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid ${t.border};
  border-radius: 16px;
  background: ${t.card};
  color: ${t.fg};
  font: inherit;
  text-align: left;
  cursor: pointer;

  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${t.primary};
    box-shadow: 0 16px 36px rgba(43, 26, 15, 0.12);
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 3px;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 760px) {
    border-radius: 14px;

    &:hover,
    &:active {
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const cardImgWrap = css`
  position: relative;
  display: block;
  flex: 0 0 auto;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: ${t.muted};
  line-height: 0;

  @media (max-width: 760px) {
    aspect-ratio: 16 / 8.5;
  }

  @media (max-width: 600px) {
    aspect-ratio: 16 / 8.5;
  }

  @media (max-width: 380px) {
    aspect-ratio: 16 / 9;
  }
`;

const cardImg = css`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  object-fit: cover;
  object-position: center;
  transform: scale(1);
  transition: transform 0.4s ease;

  ${cardBtn}:hover & {
    transform: scale(1.045);
  }

  @media (max-width: 760px) {
    ${cardBtn}:hover & {
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const cardImgOverlay = css`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(43, 26, 15, 0.28) 0%,
    rgba(43, 26, 15, 0.04) 55%,
    transparent 100%
  );
`;

const cardIconBadge = css`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  background: rgba(255, 249, 245, 0.94);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.125rem;

  @media (max-width: 380px) {
    top: 12px;
    left: 12px;
    width: 32px;
    height: 32px;
  }
`;

const cardBody = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 0;
  padding: 20px;

  @media (max-width: 760px) {
    padding: 16px;
  }

  @media (max-width: 380px) {
    padding: 14px;
  }
`;

const cardTitle = css`
  margin: 0 0 6px;
  color: ${t.fg};
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  overflow-wrap: anywhere;
`;

const cardDesc = css`
  margin: 0;
  color: ${t.mutedFg};
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
`;

export const styles = {
  page,
  hero,
  heroImg,
  heroOverlay,
  heroText,
  heroLabel,
  heroTitle,
  heroSub,
  grid,
  gridLabel,
  cardGrid,
  cardBtn,
  cardImgWrap,
  cardImg,
  cardImgOverlay,
  cardIconBadge,
  cardBody,
  cardTitle,
  cardDesc,
};
