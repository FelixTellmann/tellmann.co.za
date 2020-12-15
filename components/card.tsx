import cn from "classnames";
import { Link } from "components";
import { CSSProperties, FC } from "react";

type CardProps = {
  title: string
  icon?: { src: JSX.Element, background?: string, color?: string, size?: string }
  link?: { href: string, title?: string }
  clickable?: boolean
  style?: CSSProperties
};

export const Card: FC<CardProps> = ({ title, children, icon, link, clickable, style = {} }) => {
  
  link && (style[`--card-cursor`] = "pointer");
  link && (clickable = true);
  
  icon && icon.background && (style[`--card-icon-background`] = icon.background);
  icon && icon.color && (style[`--card-icon-color`] = icon.color);
  icon && icon.size && (style[`--card-icon-size`] = icon.size);
  
  return <>
    {
      link
      ? <Link href={link.href}>
        <a className={cn("card", { clickable })} style={style}>
          <div className="card__wrapper">
            {children}
          </div>
        </a>
      </Link>
      : <div className={cn("card", { clickable })} style={style}>
        <div className="card__wrapper">
          {children}
        </div>
      </div>
    }
    
    <style jsx>{`
      .card {
        padding: 1px;
        border: var(--card-border);
        border-radius: 5px;
        background: var(--card-background);
        background-clip: content-box, border-box;
        cursor: var(--card-cursor);
        text-align: left;
        text-decoration: none;
        transition: box-shadow .2s ease, border .2s ease;

        &.clickable {
          &:hover, &:focus, &:active {
            border: var(--card-border-hover);
            outline: none;
            background: var(--card-background-hover);
            box-shadow: var(--card-shadow-hover);
            transition: box-shadow .2s ease;

            .card__link {
              text-decoration: underline;
            }
          }
        }
      }

      .card__wrapper {
        display: flex;
        flex: 1 1;
        flex-direction: column;
        padding: 23px;
        border-radius: 5px;
        cursor: var(--card-cursor);
        text-align: left;
        text-decoration: none;
      }
    
    `}</style>
  </>;
};