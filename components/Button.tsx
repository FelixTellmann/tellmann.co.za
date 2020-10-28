import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes,  FC } from "react";

type ButtonProps = {
  href?: string
  icon?: boolean
  mobile?: boolean
  desktop?: boolean
  className?: string
}

export const Button: FC<ButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>)> = ({ children, href, icon, mobile, desktop, className = "", ...props }) => {
  mobile && (className += " mobile");
  desktop && (className += " desktop");
  
  return <>
    {
      href
      ? <Link href=""><a className={className} {...props}>{children}</a></Link>
      : <button className={className} {...props}>{children}</button>
    }
    <style jsx>{`
      button, a {
        position: relative;
        min-width: 40px;
        height: 40px;
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
        transition: background-color 0.25s, opacity 0.2s;
        appearance: none;

        &[disabled] {
          opacity: 0.7;
          pointer-events: none;
        }

        &:hover {
          background-color: var(--button-color-background-hover);
        }
      }

      .small {
        min-width: 3.2rem;
        height: 3.2rem;
        font-size: 1.4rem;
      }

      .large {
        min-width: 4.8rem;
        height: 4.8rem;
        font-size: 1.8rem;
      }

      .icon {
        padding: 0;
      }

      .secondary {
        background: var(--button-color-background-secondary);

        &:hover {
          background: var(--button-color-background-secondary-hover);
        }
      }
    `}</style>
  </>;
};