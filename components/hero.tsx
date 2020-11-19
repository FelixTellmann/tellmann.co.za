import React, { CSSProperties, FC } from "react";
import Image from "next/image";
import { Button } from "./button";

type HeroProps = {
  background: { src: string, overlay: string }
  title: string | string[]
  subtitle: JSX.Element | string
  cta: { href: string, title: string }
  style?: CSSProperties
};

export const Hero: FC<HeroProps> = ({ background, title, subtitle, cta, style = {} }) => {
  
  style["--hero-image"] = background.src;
  style["--hero-overlay"] = background.overlay;
  
  return <>
    <div className="hero" style={style}>
      <div className="hero__content">
        {
          Array.isArray(title)
          ? title.map((title, i) => <h1 className={`h0 bp-${i}`}>{title}</h1>)
          : <h1 className="h0">{title}</h1>
        }
        <h2 className="h3">{subtitle}</h2>
        <Button href={cta.href} secondary branded medium style={{marginTop: `16px`}}>{cta.title}</Button>
      </div>
      <picture className="hero__background" />
    </div>
    <style jsx>{`
      .hero {
        position: relative;
        height: calc(100vh - var(--header-height));
        padding-top: 64px;
        padding-bottom: 64px;
        @media screen and (min-width: 960px) {
          margin-right: var(--header-height);
          margin-left: var(--header-height);
        }

      }

      .hero__content {
        max-width: 780px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
        padding-right: 24px;
        padding-left: 24px;
        position: relative;
        z-index: 0;
      }

      .hero__background {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: center / cover no-repeat;
        background-image: var(--hero-image);

        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          background-image: var(--hero-overlay);
        }
      }
    `}</style>
  </>;
};