import Link from "next/link";
import { FC } from "react";

type NavItemProps = {
  title: string
  href: string
  alt?: string
  mobile?: boolean
  desktop?: boolean
  className?: string
}

export const NavItem: FC<NavItemProps> = ({ title, href, alt, mobile, desktop, className = "" }) => {
  mobile && (className += " mobile");
  desktop && (className += " desktop");
  
  return <>
    <Link href={href}><a className={className}>{title}</a></Link>
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