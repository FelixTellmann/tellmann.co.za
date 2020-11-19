import { CSSProperties, FC } from "react";
import cn from "classnames";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

type CardProps = {
  title: string
  content: string
  icon?: { src: JSX.Element, background?: string, color?: string, size?: string }
  link?: { href: string, title?: string }
  clickable?: boolean
  style?: CSSProperties
};

export const Card: FC<CardProps> = ({ title, content, icon, link, clickable, style = {} }) => {
  
  (link || clickable) && (style[`--card-cursor`] = "pointer");
  link && (clickable = true);
  
  icon && icon.background && (style[`--card-icon-background`] = icon.background);
  icon && icon.color && (style[`--card-icon-color`] = icon.color);
  icon && icon.size && (style[`--card-icon-size`] = icon.size);
  
  return <>
    {
      link
      ? <Link href={link.href}>
        <a className={cn("card", { clickable })} style={style}>
          <div className="card__header">
            {icon ? <i className="card__icon">{icon.src}</i> : null}
            <h3 className="h4 card__title">{title}</h3>
          </div>
          <p className="card__content">{content}</p>
          {link.title ? <span className="card__link">{link.title} <FiChevronRight /></span> : null}
        </a>
      </Link>
      : <div className={cn("card", { clickable })} style={style}>
        <div className="card__header">
          {icon ? <i className="card__icon">{icon.src}</i> : null}
          <h3 className="h4 card__title">{title}</h3>
        </div>
        <p className="card__content">{content}</p>
      </div>
    }
    
    <style jsx>{`
      .card {
        display: flex;
        flex: 1 1;
        flex-direction: column;
        padding: 24px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        background-color: var(--color-background);
        cursor: var(--card-cursor);
        text-align: left;
        text-decoration: none;
        transition: box-shadow .2s ease, border .2s ease;

        &.clickable {
          &:hover, &:focus, &:active {
            border: 1px solid transparent;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transition: box-shadow .2s ease;

            .card__link {
              text-decoration: underline;
            }
          }
        }
      }

      .card__header {
        display: flex;
        align-items: center;

      }

      .card__icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        border-radius: 100%;
        background: var(--card-icon-background);
        color: var(--card-icon-color);
        font-size: 20px;

        :global(svg) {
          position: relative;
          z-index: 1;
          display: block;
          font-size: var(--card-icon-size);
        }
      }

      .card__content {
        color: var(--color-text-faded);
        font-size: 14px;
      }

      .card__link {
        display: flex;
        text-decoration: none;
        align-items: center;
        font-size: 14px;
        color: var(--primary);

        :global(svg) {
          margin-left: 4px;
        }
      }
    
    `}</style>
  </>;
};