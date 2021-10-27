import Logo from "public/logo.svg";
import { FC } from "react";

type MapMarkerProps = {
  lat;
  lng;
  text;
};

export const MapMarker: FC<MapMarkerProps> = () => {
  return (
    <>
      <div className="marker">
        <Logo />
      </div>
      <style jsx>{`
        .marker {
          display: flex;
          width: 130px;
          height: 80px;
          padding: 0 12px;
          background: var(--color-background);
          position: absolute;
          right: 0;
          bottom: 0;
          transform: translate(50%, -20px);
          box-shadow: 0 30px 60px rgba(var(--color-text-rgb), 0.12);

          &:before {
            position: absolute;
            content: "";
            background: var(--color-background);
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%) rotate(45deg);
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};
