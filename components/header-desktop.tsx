import { Link } from "components";
import Logo from "public/logo.svg";
import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./button";
import { A, Div, Nav } from "./html-elements";

export type NavItem = {
  href: string,
  title: string,
  alt?: string,
  mobile?: boolean,
  desktop?: boolean
}

export type SocialNav = {
  href: string,
  icon?: JSX.Element
}

export type NavButton = {
  href: string
  title: string
}

type HeaderDesktopProps = {
  nav: NavItem[]
  navButton: NavButton
  theme: string
  toggleColor
  socialNav: SocialNav[]
  email: string
  tel: string
  slogan?: string
};

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ theme, toggleColor, nav, navButton }) => {
  return <>
    <Div w="100%"
         maxW="--page-width"
         h="--header-nav-height"
         d="flex"
         align="center"
         justify="space-between"
         mx="auto"
         px={[`--page-margin`, `calc(var(--header-nav-height) + var(--page-margin) / 2)`, `--page-margin`]}
         _forwardSelector={{ selector: `.toggle`, ml: 3 }}
         className="desktop">
      <Link href="/#hero"><a role="link" tabIndex={0} aria-label="Logo" className="logo"><Logo width={105} height={56} /></a></Link>
      <Nav d="flex"
           flex={1}
           justify="center"
           align="center">
        {nav.filter(({ mobile }) => !mobile).map(({ href, title }) => (
          <Link key={href} href={href}>
            <A d="flex"
               m={1}
               p={2}
               outline="none"
               color="--nav-color"
               fontSize="--nav-font-size"
               textDecoration="none"
               transition="0.1s ease-in color"
               _hfa={{ color: `--nav-hover-color` }}
               role="link" tabIndex={0}>{title}</A>
          </Link>)
        )}
      </Nav>
      <Button aria-label={navButton.title} href={navButton.href} branded small>{navButton.title}</Button>
      <Button aria-label="Toggle Color Theme" className="toggle" onClick={toggleColor} icon>
        {theme === "light-theme" ? <FiMoon /> : null}
        {theme === "dark-theme" ? <FiSun /> : null}
      </Button>
    </Div>
  </>;
};