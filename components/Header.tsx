import { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./Button";
import Image from 'next/image';


type HeaderProps = {
  theme: string
  toggleColor
};

export const Header: FC<HeaderProps> = ({ children, theme, toggleColor }) => {
  return <>
    <header>
      <nav>
        {children}
        <Button aria-label="Toggle Color Theme" onClick={toggleColor}>
          {theme === "light-theme" ? <FiMoon style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 00003px)` }} /> : null}
          {theme === "blue-theme" ? <FiSun style={{ color: `rgb(237 255 3 / 96%)` }} /> : null}
        </Button>
      </nav>
    </header>
    <style jsx>{`
      header {
        position: sticky;
        top: 0;
        display: flex;
        background-color: var(--header-background);
        box-shadow: var(--header-border-bottom);
        transition: box-shadow .1s ease 0s;
      }

      nav {
        width: 100%;
        max-width: var(--container);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--gutter);
        padding-left: var(--gutter);
      }
    `}</style>
  </>;
};