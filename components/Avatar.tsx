import { WidthProperty } from "csstype";
import { FC } from "react";
import Image from "next/image";

type AvatarProps = {
  alt: string;
  size: WidthProperty<string | number>;
  src: string;
  initials?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt, initials = "", size }) => {
  return (
    <>
      <picture>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={alt} src={src} />
        <i>
          {initials
            .split(" ")
            .map((i) => i.charAt(0))
            .join("")}
        </i>
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
