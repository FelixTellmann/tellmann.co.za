import { JustifyContentProperty, TextAlignLastProperty } from "csstype";
import { CSSProperties, FC } from "react";

type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  style?: CSSProperties
};

export const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, align = "center", style = {} }) => {
  
  align && (style["--align-section-title"] = align);
  switch (align) {
    case "left" : {
      style["--align-section-title-flex"] = "flex-start";
      break;
    }
    case "center": {
      style["--align-section-title-flex"] = "center";
      break;
    }
    case "right": {
      style["--align-section-title-flex"] = "flex-end";
      break;
    }
  }
  
  return <>
    <div className="section-title" style={style}>
      <h2 className="h1 title">{title}</h2>
      <span>
        <hr />
      </span>
      {subtitle ? <h3 className="h5 subtitle">{subtitle}</h3> : null}
    </div>
    <style jsx>{`
      .section-title {
        display: flex;
        flex-direction: column;
        text-align: var(--align-section-title);
        align-items: var(--align-section-title-flex);
        margin-bottom: 36px;

        & > * {
          max-width: 720px;
          display: flex;
          justify-content: var(--align-section-title-flex);
        }
      }

      hr {
        width: 70px;
        border: none;
        height: 4px;
        margin-top: 12px;
        margin-bottom: 24px;
        display: inline-flex;
        position: relative;
        margin-left: unset;
        margin-right: unset;
        background: var(--primary);
      }

      span {
        display: flex;
        text-align: center;
      }

      .subtitle {
        color: var(--color-text-faded)
      }
    `}</style>
  </>;
};