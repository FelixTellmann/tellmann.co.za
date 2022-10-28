import { Link } from "components";
import Logo from "public/logo.svg";
import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./button";
import { A, Div, Nav } from "./html-elements";

export type NavItem = {
  href: string;
  title: string;
  alt?: string;
  desktop?: boolean;
  mobile?: boolean;
};

export type SocialNav = {
  href: string;
  icon?: JSX.Element;
};

export type NavButton = {
  href: string;
  title: string;
};

type HeaderDesktopProps = {
  toggleColor;
  email?: string;
  nav?: NavItem[];
  navButton?: NavButton;
  slogan?: string;
  socialNav?: SocialNav[];
  tel?: string;
  theme?: string;
};

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ theme, toggleColor, nav, navButton }) => {
  return (
    <>
      <Div
        align="center"
        className="desktop"
        d="flex"
        h="--header-nav-height"
        justify="space-between"
        maxW="--page-width"
        mx="auto"
        px={[
          `--page-margin`,
          `--page-margin`,
          `calc(var(--header-nav-height) + var(--page-margin) / 2)`,
          `--page-margin`,
        ]}
        /* _forwardSelector={{ selector: `.toggle`, ml: 3 }} */
        w="100%"
      >
        <Link href="/#hero">
          <a aria-label="Logo" className="logo" role="link" tabIndex={0}>
            <Logo height={56} width={105} />
          </a>
        </Link>
        <Nav align="center" d="flex" flex={1} justify="center">
          {nav
            .filter(({ mobile }) => !mobile)
            .map(({ href, title }) => (
              <Link key={href} href={href}>
                <A
                  _hfa={{ color: `--nav-hover-color` }}
                  color="--nav-color"
                  d="flex"
                  fontSize="--nav-font-size"
                  m={1}
                  outline="none"
                  p={2}
                  role="link"
                  tabIndex={0}
                  textDecoration="none"
                  transition="0.1s ease-in color"
                >
                  {title}
                </A>
              </Link>
            ))}
        </Nav>
        <Button branded small aria-label={navButton.title} href={navButton.href}>
          {navButton.title}
        </Button>
        <Button icon aria-label="Toggle Color Theme" className="toggle" onClick={toggleColor}>
          {theme === "light-theme" ? <FiMoon /> : null}
          {theme === "dark-theme" ? <FiSun /> : null}
        </Button>
      </Div>
      <style global jsx>{`
        .toggle {
          margin-left: 16px;
        }
      `}</style>
    </>
  );
};
