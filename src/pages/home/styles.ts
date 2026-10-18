import { css } from "@emotion/css";
import { t } from "../../styles/theme";

const page = css`
  min-height: 100vh;
  padding-top: 56px;
`;

const hero = css`
  position: relative;
  height: 55vh;
  overflow: hidden;
`;

const heroImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const heroOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(43, 26, 15, 0.2) 0%,
    transparent 40%,
    ${t.bg} 100%
  );
`;

const heroText = css`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 16px;
`;

const heroLabel = css`
  color: ${t.mutedFg};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 8px;
`;

const heroTitle = css`
  font-family: ${t.fontDisplay};
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  color: ${t.fg};
  margin: 0 0 12px;
  line-height: 1.1;
`;

const heroSub = css`
  color: ${t.secondaryFg};
  font-size: 1.125rem;
  max-width: 400px;
  margin: 0 auto;
`;

const grid = css`
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const gridLabel = css`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${t.mutedFg};
  margin: 0 0 24px;
  text-align: center;
`;

const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const cardBtn = css`
  text-align: left;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${t.border};
  background: ${t.card};
  cursor: pointer;
  transition:
    box-shadow 0.3s,
    transform 0.3s;
  padding: 0;
  &:hover {
    box-shadow: 0 20px 40px rgba(43, 26, 15, 0.12);
    transform: translateY(-4px);
  }
  &:focus-visible {
    outline: 2px solid ${t.primary};
    outline-offset: 2px;
  }
`;

const cardImgWrap = css`
  position: relative;
  height: 176px;
  overflow: hidden;
  background: ${t.muted};
`;

const cardImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  ${cardBtn}:hover & {
    transform: scale(1.05);
  }
`;

const cardImgOverlay = css`
  position: absolute;
  inset: 0;
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
`;

const cardBody = css`
  padding: 20px;
`;

const cardTitle = css`
  font-family: ${t.fontDisplay};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${t.fg};
  margin: 0 0 4px;
`;

const cardDesc = css`
  font-size: 0.875rem;
  color: ${t.mutedFg};
  line-height: 1.6;
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
  cardImgOverlay,
  cardIconBadge,
  cardBody,
  cardTitle,
  cardDesc,
};
