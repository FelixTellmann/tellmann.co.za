import cn from "classnames";
import { Link } from "components";
import { FC } from "react";

type NavItemProps = {
  href: string;
  image?: boolean;
  onClick?: (e) => void;
};

export const NavLink: FC<NavItemProps> = ({ children, href, image, onClick }) => {
  return (
    <>
      <Link href={href}>
        <a className={cn({ image })} role="link" tabIndex={0} onClick={onClick}>
          {children}
        </a>
      </Link>
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

          &:hover,
          &:focus,
          &:active {
            color: var(--nav-hover-color);
          }
        }
      `}</style>
    </>
  );
};
