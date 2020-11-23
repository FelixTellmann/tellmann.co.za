import { PaddingProperty } from "csstype";
import React, { CSSProperties, FC } from "react";
import { SectionScrollTo } from "./section-scroll-to";

type SectionProps = {
  background?: string | JSX.Element
  skew?: number
  fullscreen?: boolean
  backgroundOpacity?: number
  overlay?: string
  id: string
  jumpTo?: { href: string, title: string }
  style?: CSSProperties
  py?: PaddingProperty<any>
};

export const Section: FC<SectionProps> = ({ background, skew, fullscreen, overlay, py, id, jumpTo, children, backgroundOpacity, style = {} }) => {
  style["--section-bg"] = background;
  style["--section-bg-opacity"] = backgroundOpacity;
  style["--section-overlay"] = overlay;
  style["--section-bg-left"] = fullscreen ? "calc(0px - var(--header-nav-height))" : 0;
  style["--section-bg-width"] = fullscreen ? "100vw" : "100%";
  style["--section-bg-skew"] = `${skew}deg` || 0;
  py && (style["--section-y-padding"] = py);
  return <>
    
    <section id={id} style={style}>
      {skew ? <div className="diagonal-top" /> : null}
      {children}
      {background || overlay ? <picture className="background">{typeof background !== "string" ? background : null}</picture> : null}
      {jumpTo ? <SectionScrollTo href={jumpTo.href} title={jumpTo.title} /> : null}
      {skew ? <div className="diagonal-bottom" /> : null}
    </section>
    <style jsx>{`
      section {
        position: relative;
        padding-top: var(--section-y-padding);
        padding-bottom: var(--section-y-padding);
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
        margin-bottom: var(--section-bg-skew);
        z-index: auto;

        @media screen and (min-width: 1190px) {
          padding-left: calc((100% - var(--header-nav-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
          padding-right: calc((100% - var(--header-nav-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
        }
      }

      .background {
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--section-bg);
        opacity: var(--section-bg-opacity);
        overflow: hidden;
        object-fit: cover;
        object-position: 0;
        transform: skewY(var(--section-bg-skew));

        :global(svg) {
          height: auto;
          width: 100%;
          min-height: 100%;
        }

        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          background-image: var(--section-overlay);
        }

        @media screen and (min-width: 960px) {
          left: var(--section-bg-left);
          width: var(--section-bg-width);
        }
      }
    
    `}</style>
  </>;
};