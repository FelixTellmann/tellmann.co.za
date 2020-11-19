import React, { CSSProperties, FC } from "react";
import { SectionScrollTo } from "./section-scroll-to";

type SectionProps = {
  background?: string
  overlay?: string
  id: string
  jumpTo?: { href: string, title: string }
  style?: CSSProperties
};

export const Section: FC<SectionProps> = ({ background, overlay, id, jumpTo, children, style = {} }) => {
  style["--hero-image"] = background;
  style["--hero-overlay"] = overlay;
  return <>
    <section id={id} style={style}>
      {children}
      {background || overlay ? <picture className="background" /> : null}
      {jumpTo ? <SectionScrollTo href={jumpTo.href} title={jumpTo.title} /> : null}
    </section>
    <style jsx>{`
      section {
        position: relative;
        padding-top: var(--section-y-padding);
        padding-bottom: var(--section-y-padding);
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
        @media screen and (min-width: 960px) {
          margin-right: var(--header-height);
          margin-left: var(--header-height);
        }
        @media screen and (min-width: 1190px) {
          padding-left: calc((100% - var(--header-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
          padding-right: calc((100% - var(--header-height) * 2 - var(--page-width)) / 2 + var(--section-x-padding));
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