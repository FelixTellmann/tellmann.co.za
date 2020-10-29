import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

type NavIconProps = {
  href?: string
  onClick?: (e) => void
}

export const NavIcon: FC<NavIconProps> = ({ children, href, onClick }) => {
  
  return <>
    {href ? <Link href={href}><a>{children}</a></Link> : null}
    {onClick ? <button onClick={onClick}>{children}</button> : null}
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