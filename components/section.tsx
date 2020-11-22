import React, { CSSProperties, FC } from "react";
import { SectionScrollTo } from "./section-scroll-to";

type SectionProps = {
  background?: string | JSX.Element
  backgroundOpacity?: number
  overlay?: string
  id: string
  jumpTo?: { href: string, title: string }
  style?: CSSProperties
};

export const Section: FC<SectionProps> = ({ background, overlay, id, jumpTo, children, backgroundOpacity, style = {} }) => {
  style["--section-bg"] = background;
  style["--section-bg-opacity"] = backgroundOpacity;
  style["--section-overlay"] = overlay;
  
  return <>
    <section id={id} style={style}>
      {children}
      {background || overlay ? <picture className="background">{typeof background !== "string" ? background : null}</picture> : null}
      {jumpTo ? <SectionScrollTo href={jumpTo.href} title={jumpTo.title} /> : null}
    </section>
    <style jsx>{`
      section {
        position: relative;
        padding-top: var(--section-y-padding);
        padding-bottom: var(--section-y-padding);
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);

        @media screen and (min-width: 1190px) {
          padding-left: calc((100% - var(--header-nav-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
          padding-right: calc((100% - var(--header-nav-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
        }
      }

      .background {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: center / cover no-repeat;
        background-image: var(--section-bg);
        opacity: var(--section-bg-opacity);
        overflow: hidden;
        object-fit: cover;
        object-position: 0;

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
      }
    `}</style>
  </>;
};