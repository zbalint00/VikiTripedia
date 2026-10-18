import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  min-width: 0;
  padding-top: 56px;
  overflow-x: clip;

  @media (max-width: 760px) {
    padding-top: 100px;
    min-height: 100svh;
  }
`;

const hero = css`
  position: relative;
  width: 100%;
  height: 55vh;
  min-height: 340px;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 760px) {
    height: min(58svh, 520px);
    min-height: 300px;
  }

  @media (max-width: 380px) {
    height: 48svh;
    min-height: 270px;
  }
`;

const heroImg = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const heroOverlay = css`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(43, 26, 15, 0.2) 0%,
    transparent 40%,
    ${t.bg} 100%
  );
`;

const heroText = css`
  position: absolute;
  z-index: 1;
  bottom: 40px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 0 16px;

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
  color: ${t.mutedFg};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 8px;

  @media (max-width: 760px) {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
  }
`;

const heroTitle = css`
  font-family: ${t.fontDisplay};
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  color: ${t.fg};
  margin: 0 0 12px;
  line-height: 1.1;
  overflow-wrap: anywhere;

  @media (max-width: 760px) {
    font-size: clamp(2rem, 9vw, 3rem);
  }
`;

const heroSub = css`
  color: ${t.secondaryFg};
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 760px) {
    font-size: 1rem;
    max-width: 34rem;
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
  padding: 48px 24px;

  @media (max-width: 760px) {
    padding: 32px 16px;
  }

  @media (max-width: 380px) {
    padding: 28px 12px;
  }
`;

const gridLabel = css`
  font-size: 0.75rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${t.mutedFg};
  margin: 0 0 24px;
  text-align: center;

  @media (max-width: 760px) {
    letter-spacing: 0.12em;
    margin-bottom: 18px;
    font-size: 0.7rem;
  }
`;

const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 0;
  text-align: left;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${t.border};
  background: ${t.card};
  color: ${t.fg};
  cursor: pointer;
  padding: 0;
  font: inherit;
  appearance: none;
  -webkit-appearance: none;

  transition:
    box-shadow 0.3s,
    transform 0.3s;

  &:hover {
    box-shadow: 0 20px 40px rgba(43, 26, 15, 0.12);
    transform: translateY(-4px);
  }

  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    border-radius: 14px;

    &:hover {
      transform: none;
    }
  }
`;

const cardImgWrap = css`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 176px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: ${t.muted};
  line-height: 0;

  @media (max-width: 760px) {
    height: clamp(160px, 48vw, 230px);
  }

  @media (max-width: 380px) {
    height: 155px;
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
  transition: transform 0.5s;

  ${cardBtn}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 760px) {
    ${cardBtn}:hover & {
      transform: none;
    }
  }
`;

const dreamListCardImg = css`
  @media (min-width: 761px) {
    transform: scale(1.08);
    transform-origin: center center;

    ${cardBtn}:hover & {
      transform: scale(1.13);
    }
  }
`;

const memoriesCardImg = css`
  @media (min-width: 761px) {
    transform: scale(1.08);
    transform-origin: center center;

    ${cardBtn}:hover & {
      transform: scale(1.13);
    }
  }
`;

const cardImgOverlay = css`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to top, rgba(43, 26, 15, 0.3), transparent);
`;

const cardIconBadge = css`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 249, 245, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 380px) {
    top: 12px;
    left: 12px;
    width: 32px;
    height: 32px;
  }
`;

const cardBody = css`
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
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${t.fg};
  overflow-wrap: anywhere;
  margin: 0 0 6px;
`;

const cardDesc = css`
  font-size: 0.875rem;
  color: ${t.mutedFg};
  line-height: 1.6;
  overflow-wrap: anywhere;
  margin: 0;
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
  dreamListCardImg,
  memoriesCardImg,
  cardImgOverlay,
  cardIconBadge,
  cardBody,
  cardTitle,
  cardDesc,
};
