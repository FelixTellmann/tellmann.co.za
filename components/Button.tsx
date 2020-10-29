import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import { CSS, useStyledSystem } from "use-styled-system";
import cn from "classnames";

type ButtonProps = {
  href?: string
  icon?: boolean
  branded?: boolean
  small?: boolean
  large?: boolean
  mobile?: boolean
  desktop?: boolean
  className?: string
}

export const Button: FC<ButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>) & CSS> = ({ children, href, icon, branded, small, large, mobile, desktop, className = "", ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  
  mobile && (className += " mobile");
  desktop && (className += " desktop");
  
  return <>
    {
      href
      ? <Link href=""><a role="button" className={cn(className, { icon, branded, small, large })} {...nonCssProps}>{children}</a></Link>
      : <button className={cn(className, { icon, branded, small, large })} {...nonCssProps}>{children}</button>
    }
    <style jsx>{`
      button, a {
        position: relative;
        min-width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.6rem;
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
        opacity: 1;
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
        color: var(--button-brand-color-text);
        background: var(--button-brand-color-background);
        border: 2px solid var(--button-color-background);
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
            top: -7px;
            opacity: 1;
          }

          &:after {
            bottom: -7px;
            opacity: 1;
          }
        }
      }

      .secondary {
        color: var(--button-secondary-color-text);
        background: var(--button-secondary-color-background);

        &:hover {
          background: var(--button-secondary-color-background-hover);
        }
      }
    `}</style>
    <style jsx>{`
      button, a {
        ${styleJsx}
      }`}</style>
  </>;
};