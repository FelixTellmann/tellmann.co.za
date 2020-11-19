import Link from "next/link";
import { FC } from "react";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./button";
import { NavButton, NavItem, Logo, SocialNav, Address } from "./header";
import Image from "next/image";
import { NavIcon } from "./nav-icon";

type HeaderDesktopProps = {
  logo: Logo
  nav: NavItem[]
  navButton: NavButton
  theme: string
  toggleColor
  socialNav: SocialNav[]
  email: string
  tel: string
  slogan?: string
};

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ theme, toggleColor, logo, nav, navButton, email, tel, socialNav, slogan }) => {
  return <>
    <div className="desktop">
      <Link href={logo.href}><a><Image src={logo.src} alt={logo.alt} height={56} width={105} /></a></Link>
      <nav>
        {nav.filter(({ mobile }) => !mobile).map(({ href, title }) => <Link href={href}><a>{title}</a></Link>)}
      </nav>
      <Button href={navButton.href} branded small>{navButton.title}</Button>
      <Button aria-label="Toggle Color Theme" onClick={toggleColor} icon>
        {theme === "light-theme" ? <FiMoon /> : null}
        {theme === "dark-theme" ? <FiSun /> : null}
      </Button>
      <aside className="left">
        <Link href={`mailto:${email}`}><a className="email">{email}</a></Link>
        <NavIcon href={`tel:${tel.replace(" ", "")}`}><IoIosCall /></NavIcon>
        {socialNav.map(({ href, icon }) => <NavIcon href={href}>{icon}</NavIcon>)}
      </aside>
      <aside className="right">
        <Link href="#"><a className="slogan">{slogan}</a></Link>
      </aside>
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

        :global(button:last-of-type) {
          margin-left: 16px;
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
        width: var(--header-height);
        display: none;
        justify-content: center;
        align-items: center;
        padding-top: var(--header-height);
        padding-bottom: var(--page-margin);
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