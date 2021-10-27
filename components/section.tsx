import { PaddingProperty } from "csstype";
import React, { CSSProperties, FC } from "react";
import { SectionScrollTo } from "./section-scroll-to";

type SectionProps = {
  background?: string | JSX.Element;
  backgroundOpacity?: number;
  fullscreen?: boolean;
  id?: string;
  jumpTo?: { href: string; title: string };
  overlay?: string;
  p?: PaddingProperty<any>;
  pb?: PaddingProperty<any>;
  pl?: PaddingProperty<any>;
  pr?: PaddingProperty<any>;
  pt?: PaddingProperty<any>;
  px?: PaddingProperty<any>;
  py?: PaddingProperty<any>;
  skew?: number;
  style?: CSSProperties;
};

export const Section: FC<SectionProps> = ({
  background,
  skew,
  fullscreen = false,
  overlay,
  p,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
  id,
  jumpTo,
  children,
  backgroundOpacity,
  style = {},
}) => {
  style["--section-bg"] = background;
  style["--section-bg-opacity"] = backgroundOpacity;
  style["--section-overlay"] = overlay;
  style["--section-bg-left"] = fullscreen ? "calc(0px - var(--header-nav-height))" : 0;
  style["--section-bg-width"] = fullscreen ? "auto" : "100%";
  skew && (style["--section-bg-skew"] = `${skew}deg`);
  p && ((style["--section-y-padding"] = p), (style["--section-x-padding"] = p));
  py && (style["--section-y-padding"] = py);
  px && (style["--section-x-padding"] = px);
  pt && (style.paddingTop = pt);
  pb && (style.paddingBottom = pb);
  pr && (style.paddingRight = pr);
  pl && (style.paddingLeft = pl);

  return (
    <>
      <section id={id} style={style}>
        {skew ? <div className="diagonal-top" /> : null}
        {children}
        {background || overlay
          ? <picture className="background">
              {typeof background !== "string" ? background : null}
            </picture>
          : null}
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
          z-index: 2;

          @media screen and (min-width: 1190px) {
            padding-left: calc(
              (100% /*- var(--header-nav-height) * 2*/ - var(--page-width)) / 2 +
                var(--section-x-padding)
            );
            padding-right: calc(
              (100% /*- var(--header-nav-height) * 2*/ - var(--page-width)) / 2 +
                var(--section-x-padding)
            );
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
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            background-image: var(--section-overlay);
          }

          @media screen and (min-width: 960px) {
            left: var(--section-bg-left);
            right: var(--section-bg-left);
            width: var(--section-bg-width);
          }
        }
      `}</style>
    </>
  );
};
