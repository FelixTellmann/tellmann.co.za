import Logo from "public/logo.svg";
import React, { FC, useState } from "react";
import { IoIosMail, IoIosCall, IoIosSunny, IoIosMoon } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { Box } from "./Box";
import { Button } from "./Button";
import { NavBackground } from "./NavBackground";
import { NavIcon } from "./NavIcon";
import { NavLink } from "./NavLink";
import { NavToggle } from "./NavToggle";
import cn from "classnames";

type HeaderProps = {
  theme: string
  toggleColor
};

export const Header: FC<HeaderProps> = ({ theme, toggleColor }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  function toggleMobileNav() { setShowMobileNav(!showMobileNav); }
  
  return <>
    <header>
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
      
      <div className={cn("mobile", { active: showMobileNav })}>
        <NavLink href="/" image><Logo className="logo" style={{ height: "calc(var(--header-height) - 8px)" }} /></NavLink>
        <Box d={`flex`} flex={1} justify={`flex-end`} align={`center`}>
          {showMobileNav || <NavIcon href="mailto:info@tellmann.co.za"><IoIosMail /></NavIcon>}
          {showMobileNav || <NavIcon href="tel:+27763934356"><IoIosCall /></NavIcon>}
          {showMobileNav || <NavIcon aria-label="Toggle Color Theme" onClick={toggleColor}>
            {theme === "light-theme" ? <IoIosSunny /> : null}
            {theme === "dark-theme" ? <IoIosMoon /> : null}
          </NavIcon>}
          <NavToggle active={showMobileNav} toggleNav={toggleMobileNav} ml={2} />
        </Box>
        <NavBackground active={showMobileNav} />
      </div>
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

      .desktop, .mobile {
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
        transition: 2.5s;
      }

      .mobile {
        :global(.logo) {
          color: var(--color-text);
          transition: 0.1s ease-in-out;
          transition-delay: 1s;
        }
      }

      .mobile.active {
        --nav-color: var(--color-background);

        :global(.logo) {
          color: var(--nav-color);
          transition-delay: 0.05s;
        }
      }
    
    `}</style>
  </>;
};

/*
*  <NavLink title={`Home`} alt={`Hi.`} href={`/`} mobile />
          <NavLink title={`About`} alt={`Who we are`} href={`/about`} />
          <NavLink title={`Work`} alt={`What we've done`} href={`/about`} />
          <NavLink title={`Services`} alt={`What we can do`} href={`/services`} />
          <NavLink title={`Contact`} alt={`Get in touch`} href={`/contact`} mobile />
          <Button href={`/contact`} desktop onClick={() => console.log("test")}>Contact</Button>
          * */