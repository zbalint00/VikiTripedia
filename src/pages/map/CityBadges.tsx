import { css } from "@emotion/css";
import type { Destination } from "../../services/destinationService";

const badges = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 8px;
  vertical-align: middle;
`;

const badge = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 7px;
  background: var(--badge-bg);
  font-size: 13px;
  cursor: help;
`;

interface Props {
  city: Destination;
}

export function CityBadges({ city }: Props) {
  return (
    <span className={badges}>
      {city.isCapital && (
        <span
          className={badge}
          title="Főváros"
          style={{ "--badge-bg": "#D69E3620" } as React.CSSProperties}
        >
          👑
        </span>
      )}

      {city.isAirportCity && (
        <span
          className={badge}
          title={`Repülőtér: ${city.airportCodes.join(", ")}`}
          style={{ "--badge-bg": "#3986C820" } as React.CSSProperties}
        >
          ✈️
        </span>
      )}

      {city.isCoastal && (
        <span
          className={badge}
          title="Tengerpart közelében"
          style={{ "--badge-bg": "#269DAD20" } as React.CSSProperties}
        >
          🌊
        </span>
      )}
    </span>
  );
}
