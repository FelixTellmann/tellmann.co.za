import { Link } from "components";
import { FC } from "react";

type NavIconProps = {
  href?: string
  target?: string
  onClick?: (e) => void
  ariaLabel?: string
}

export const NavIcon: FC<NavIconProps> = ({ children, href, onClick, target, ariaLabel }) => {
  
  return <>
    {href
     ? <Link href={href}><a aria-label={ariaLabel || "Navigation Icon"}
                            role="link"
                            tabIndex={0}
                            target={target}
                            onClick={onClick}>{children}</a></Link>
     : <button aria-label={ariaLabel || "Navigation Icon"} type="button" onClick={onClick}>{children}</button>}
    <style jsx>{`
      a, button {
        display: flex;
        margin: 2px;
        padding: 4px;
        outline: none;
        text-decoration: none;
        font-size: 24px;
        transition: 0.1s ease-in color;
        cursor: pointer;
        color: var(--nav-color);

        &:hover, &:focus, &:active {
          color: var(--primary);
        }
      }
    `}</style>
  </>;
};