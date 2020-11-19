import Image from "next/image";
import Link from "next/link";
import React, { createElement, FC, useState } from "react";
import { IoIosMail, IoIosCall, IoIosSunny, IoIosMoon, IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { ColorTheme } from "use-color-theme";
import Logo from "public/logo.svg";

import { Address, NavButton, NavItem, SocialNav } from "./header";
import { NavBackground } from "./nav-background";
import { NavIcon } from "./nav-icon";
import { NavLink } from "./nav-link";
import { NavToggle } from "./nav-toggle";
import Fade from "react-reveal/Fade";

import cn from "classnames";

type HeaderMobileProps = {
  nav: NavItem[]
  socialNav: SocialNav[]
  address: Address
  email: string
  tel: string
  theme: string
  toggleColor
};

export const HeaderMobile: FC<HeaderMobileProps> = ({ theme, toggleColor, nav, address, email, tel, socialNav }) => {
  const [show, setShowNav] = useState(false);
  
  function toggleMobileNav() { setShowNav(!show); }
  
  return <>
    
    <div className={cn("mobile", { active: show })}>
      <Link href="/"><a className="logo" onClick={toggleMobileNav}><Logo width={105} height={56} /></a></Link>
      <nav className="topbar">
        <NavIcon href={`mailto:${email}`}><IoIosMail /></NavIcon>
        <NavIcon href={`tel:${tel.replace(" ", "")}`}><IoIosCall /></NavIcon>
        <NavIcon aria-label="Toggle Color Theme" onClick={toggleColor}>
          {theme === "light-theme" ? <IoIosSunny /> : null}
          {theme === "dark-theme" ? <IoIosMoon /> : null}
        </NavIcon>
        <NavToggle active={show} toggleNav={toggleMobileNav} />
      </nav>
      
      <div className="dropdown">
        <nav className="dropdown-nav">
          {nav.filter(({ desktop }) => !desktop).map(({ href, title, alt }, i) => (
            <Link key={href} href={href}>
              <a onClick={toggleMobileNav}>
                <Fade left delay={(i + 1) * 90} when={show}>{title}</Fade>
                <Fade delay={(i + 1) * 90 + 40} duration={500} when={show}><u /></Fade>
                <Fade delay={(i + 1) * 90 + 40} duration={500} when={show}><span>{alt}</span></Fade>
              </a>
            </Link>
          ))}
        </nav>
        
        <Fade left delay={3 * 90} when={show}>
          <p className="address">
            {Object.values(address).map(value => <span key={value}>{value}</span>)}
          </p>
        </Fade>
        <Fade bottom delay={4 * 90} when={show}>
          <nav className="footer">
            <NavIcon href={`tel:${tel.replace(" ", "")}`} onClick={toggleMobileNav}><IoIosCall /></NavIcon>
            {socialNav.map(({ href, icon }) => <NavIcon key={href}
                                                        href={href}
                                                        target={`_blank`}
                                                        onClick={toggleMobileNav}>{icon}</NavIcon>)}
            <Link href={`mailto:${email}`}><a className="email" onClick={toggleMobileNav}>{email}</a></Link>
          </nav>
        </Fade>
      </div>
      <NavBackground active={show} />
    </div>
    
    
    <style jsx>{`

      .mobile {
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

      .logo {
        color: var(--color-text);
        transition: 0.1s ease-in-out;
        transition-delay: 1s;
      }

      .topbar {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;

        :global(a), :global(button:not(:last-of-type)) {
          transition: opacity 0.1s ease-in-out;
          transition-delay: 0.4s;
        }

        :global(button:last-of-type) {
          margin-left: 8px;
        }
      }

      .dropdown {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--color-background);
        transition: height, padding;
        transition-delay: 1.3s;
        padding: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .dropdown-nav {
        a {
          display: flex;
          justify-content: space-between;
          margin-top: 48px;
          font-size: 17px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
        }

        span {
          font-size: 15px;
          font-weight: 400;
          filter: opacity(0.7);
        }

        u {
          flex: 1;
          margin-right: 8px;
          margin-bottom: 2px;
          margin-left: 8px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5) 33%, rgba(255, 255, 255, 0) 0%);
          background-repeat: repeat-x;
          background-position: bottom;
          background-size: 1rem 0.1rem;
        }
      }

      .address {
        width: 40%;
        padding-top: 16px;
        padding-bottom: 16px;
        border-top: 2px solid var(--primary);
        border-bottom: 2px solid var(--primary);
        font-size: 13px;
        line-height: 1.6;
        white-space: nowrap;
        letter-spacing: -0.03em;

        span {
          display: block;
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }

      .email {
        font-size: var(--nav-font-size);
        text-decoration: none;
        transition: 0.1s ease-in color;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;

      }

      .mobile.active {
        .logo {
          color: var(--color-background);
          transition-delay: 0.05s;
        }

        .topbar {
          :global(a), :global(button:not(:last-of-type)) {
            opacity: 0;
            pointer-events: none;
            transition-delay: 0.6s;
          }
        }

        .dropdown {
          height: 100%;
          padding: calc(var(--header-height) * 1) var(--page-margin) var(--page-margin);
          transition-delay: 0s;
          pointer-events: all;

          :global(a) {
            color: var(--color-background);
            transition: color 0.1s;

            &:hover, &:focus, &:active {
              color: var(--primary)
            }
          }
        }
      }
    
    `}</style>
  </>;
  
};