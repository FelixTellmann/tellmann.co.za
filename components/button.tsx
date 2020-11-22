import cn from "classnames";
import { Link } from "components";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  href?: string
  onClick?: (e) => void
  icon?: boolean
  secondary?: boolean
  branded?: boolean
  small?: boolean
  medium?: boolean
  large?: boolean
  mobile?: boolean
  desktop?: boolean
  className?: string
}

export const Button: FC<ButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>)> = ({ children, href, icon, secondary, branded, small, medium, large, mobile, desktop, onClick, className = "", ...props }) => {
  
  mobile && (className += " mobile");
  desktop && (className += " desktop");
  
  return <>
    {
      href
      ? <Link href={href}>
        <a role="button"
           tabIndex={0}
           className={cn(className, { icon, secondary, branded, small, medium, large })}
           onClick={onClick}
           {...props}>{children}</a>
      </Link>
      : <button type="button" className={cn(className, { icon, secondary, branded, small, medium, large })}
                onClick={onClick}
                {...props}>{children}</button>
    }
    <style jsx>{`
      button, a {
        position: relative;
        min-width: 36px;
        height: 36px;
        opacity: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 2.4rem;
        border: 0;
        border-radius: 4px;
        outline: none;
        background-color: var(--button-color-background);
        cursor: pointer;
        user-select: none;
        color: var(--button-color-text);
        font-family: inherit;
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;
        transition: ease-in 0.1s;
        appearance: none;

        &[disabled] {
          opacity: 0.7;
          pointer-events: none;
        }

        &:hover {
          background-color: var(--button-color-background-hover);
          color: var(--button-color-text-hover);
        }
      }

      .small {
        padding: 0 1.6rem;
        font-size: 1.4rem;
      }

      .small.branded {
        &:before, &:after {
          width: 0.4rem;
          height: 5.2rem;
        }

        &:before {
          left: calc(50% + 3.5px);
        }

        &:after {
          left: calc(50% - 3.5px);
        }

        &:hover {
          &:before {
            top: -7px;
          }

          &:after {
            bottom: -7px;
          }
        }
      }

      .medium {
        min-width: 4rem;
        height: 4rem;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .large {
        min-width: 4.8rem;
        height: 4.8rem;
        font-size: 1.8rem;
      }

      .icon {
        padding: 0;
      }

      .branded {
        border: 2px solid var(--button-color-background);
        background: var(--button-brand-color-background);
        color: var(--button-brand-color-text);
        transition: 0.15s ease-in;

        &:before, &:after {
          position: absolute;
          content: '';
          z-index: -1;
          width: 0.5rem;
          height: 6rem;
          opacity: 0;
          display: block;
          background: var(--button-brand-color-background-hover);
          pointer-events: none;
          transition: ease-in-out 0.2s;
        }

        &:before {
          top: -80px;
          left: calc(50% + 4.5px);
        }

        &:after {
          bottom: -80px;
          left: calc(50% - 4.5px);
          background: var(--button-brand-color);
        }

        &:hover {
          border-color: var(--button-color-background-hover);

          &:before {
            top: -9px;
            opacity: 0.8;
          }

          &:after {
            bottom: -9px;
            opacity: 0.8;
          }
        }
      }

      .secondary {
        border-color: var(--button-secondary-color-background);
        background: var(--button-secondary-color-background);
        color: var(--button-secondary-color-text);

        &:hover {
          border-color: var(--button-secondary-color-background);
          background: var(--button-secondary-color-background-hover);
          color: var(--button-secondary-color-background);
        }
      }
    `}</style>
  
  </>;
};