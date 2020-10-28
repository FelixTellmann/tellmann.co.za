import { FC } from "react";

type NavItemProps = {};

export const Nav: FC<NavItemProps> = ({ children }) => {
  return <>
    <nav>
      {children}
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    `}</style>
  </>;
};