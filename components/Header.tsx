import Logo from "public/logo.svg";
import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Box } from "./Box";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

type HeaderProps = {
  theme: string
  toggleColor
};

export const Header: FC<HeaderProps> = ({ theme, toggleColor }) => {
  return <>
    <header>
      <Box desktop
           d={`flex`}
           justify={`space-between`}
           h={`--header-height`}
           mx={`auto`}
           px={`--page-margin`}
           w={`100%`}
           maxW={`--page-width`}
           align={`center`}>
        <NavLink href="/"><Logo style={{ height: "var(--header-height)", padding: "4px", color: "var(--color-text)" }} /></NavLink>
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
      </Box>
      
      <Box mobile
           d={`flex`}
           justify={`space-between`}
           h={`--header-height`}
           mx={`auto`}
           px={`--page-margin`}
           w={`100%`}
           maxW={`--page-width`}
           align={`center`}>
        <Logo style={{ height: "var(--header-height)", padding: "4px" }} />
        <Box as={`nav`} d={`flex`} flex={1} justify={`center`} align={`center`}>
          <NavLink title={`Home`} alt={`Hi.`} href={`/`} mobile />
          <NavLink title={`About`} alt={`Who we are`} href={`/about`} />
          <NavLink title={`Work`} alt={`What we've done`} href={`/about`} />
          <NavLink title={`Services`} alt={`What we can do`} href={`/services`} />
          <NavLink title={`Contact`} alt={`Get in touch`} href={`/contact`} mobile />
          <Button href={`/contact`} desktop onClick={() => console.log("test")}>Contact</Button>
        </Box>
        <Button aria-label="Toggle Color Theme" onClick={toggleColor} ml={3} icon>
          {theme === "light-theme" ? <FiMoon /> : null}
          {theme === "dark-theme" ? <FiSun /> : null}
        </Button>
      </Box>
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
    `}</style>
  </>;
};