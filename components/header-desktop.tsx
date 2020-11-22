import { Link } from "components";
import Logo from "public/logo.svg";
import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { Button } from "./button";
import { NavIcon } from "./nav-icon";

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

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ theme, toggleColor, nav, navButton, email, tel, socialNav, slogan }) => {
  return <>
    <div className="desktop">
      <Link href="/"><a role="link" tabIndex={0} aria-label="Logo" className="logo"><Logo width={105} height={56} /></a></Link>
      <nav>
        {nav.filter(({ mobile }) => !mobile).map(({ href, title }) => (
          <Link key={href} href={href}><a role="link" tabIndex={0}>{title}</a></Link>)
        )}
      </nav>
      <Button aria-label={navButton.title} href={navButton.href} branded small>{navButton.title}</Button>
      <Button aria-label="Toggle Color Theme" onClick={toggleColor} icon>
        {theme === "light-theme" ? <FiMoon /> : null}
        {theme === "dark-theme" ? <FiSun /> : null}
      </Button>
      <aside className="left">
        <Link href={`mailto:${email}`}><a aria-label="Contact us via Email" role="link" tabIndex={0} className="email">{email}</a></Link>
        <NavIcon ariaLabel="Contact us via Phone" href={`tel:${tel.replace(" ", "")}`}><IoIosCall /></NavIcon>
        {socialNav.map(({ href, icon }) => <NavIcon key={href} target="_blank" href={href}>{icon}</NavIcon>)}
      </aside>
      <aside className="right">
        <Link href="#"><a role="link" tabIndex={0} className="slogan">{slogan}</a></Link>
      </aside>
    </div>
    <style jsx>{`
      .desktop {
        width: 100%;
        max-width: var(--page-width);
        height: var(--header-nav-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--page-margin);
        padding-left: var(--page-margin);

        :global(button:last-of-type) {
          margin-left: 16px;
        }

        @media screen and (min-width: 960px) {
          padding-right: calc(var(--header-nav-height) + var(--page-margin) / 2);
          padding-left: calc(var(--header-nav-height) + var(--page-margin) / 2);
        }

        @media screen and (min-width: 1196px) {
          padding-right: var(--page-margin);
          padding-left: var(--page-margin);
        }
      }

      nav {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

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
      }

      aside {
        position: fixed;
        top: 0;
        height: 100vh;
        width: var(--header-nav-height);
        display: none;
        justify-content: center;
        align-items: center;
        padding-top: var(--header-nav-height);
        padding-bottom: var(--page-margin);
        z-index: -1;

        @media screen and (min-width: 960px) {
          display: flex;
        }

        &.left {
          left: 0;
          writing-mode: vertical-lr;
        }

        &.right {
          right: 0;
          writing-mode: vertical-rl;
        }

        .email, .slogan {
          margin: var(--space-1x);
          color: var(--nav-color);
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.175rem;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            color: var(--primary);
          }
        }

        .email {
          transform: rotate(180deg);
        }

      }
    `}</style>
  </>;
};