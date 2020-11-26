import { WidthProperty } from "csstype";
import { FC } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials?: string;
  size: WidthProperty<string | number>;
};

export const Avatar: FC<AvatarProps> = ({ src, alt, initials = "", size }) => {
  
  return (
    <>
      <picture>
        <img src={src} alt={alt} />
        <i>{initials.split(" ").map((i) => i.charAt(0)).join("")}</i>
      </picture>
      <style jsx>{`
        picture {
          position: relative;
          display: inline-flex;
          width: ${size};
          height: ${size};
          margin-right: 8px;
        }

        img,
        i {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: inline-flex;
          text-transform: uppercase;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          background: var(--color-button);
          font-size: 0.6em;
          font-weight: 700;
          letter-spacing: -0.025em;
          text-decoration: none;
        }

        img {
          z-index: 1;
        }
      `}</style>
    </>
  );
};


