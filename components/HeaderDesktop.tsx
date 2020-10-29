import { FC } from "react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "../public/logo.svg";
import { Box } from "./Box";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

type HeaderDesktopProps = {
  theme: string
  toggleColor: (e) => void
};

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ theme, toggleColor }) => {
  return <>
    <div className="desktop">
      <NavLink href="/" image><Logo style={{ height: "calc(var(--header-height) - 8px)", color: "var(--color-text)" }} /></NavLink>
      <Box as={`nav`} d={`flex`} flex={1} justify={`center`} align={`center`}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/services">Services</NavLink>
      </Box>
      <Button href="/contact" branded small>Contact</Button>
      <Button aria-label="Toggle Color Theme" onClick={toggleColor} ml={3} icon>
        {theme === "light-theme" ? <FiMoon /> : null}
        {theme === "dark-theme" ? <FiSun /> : null}
      </Button>
    </div>
    <style jsx>{`
      .desktop {
        width: 100%;
        max-width: var(--page-width);
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--page-margin);
        padding-left: var(--page-margin);
      }
    `}</style>
  </>;
};