import Link from "next/link";
import { FC } from "react";

type NavItemProps = {
  href: string
}

export const NavLink: FC<NavItemProps> = ({ children, href}) => {
  
  return <>
    <Link href={href}><a>{children}</a></Link>
    <style jsx>{`
      a {
        display: flex;
        margin: 4px;
        padding: 8px;
        outline: none;
        color: var(--nav-color);
        font-size: var(--nav-font-size);
        text-decoration: none;
        transition: 0.1s ease-in color;

        &:hover, &:focus, &:active {
          color: var(--nav-hover-color);
        }
      }
    `}</style>
  </>;
};