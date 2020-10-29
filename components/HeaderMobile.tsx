import Link from "next/link";
import Logo from "public/logo.svg";
import React, { FC, useState } from "react";
import { IoIosMail, IoIosCall, IoIosSunny, IoIosMoon, IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { NavBackground } from "./NavBackground";
import { NavIcon } from "./NavIcon";
import { NavLink } from "./NavLink";
import { NavToggle } from "./NavToggle";
import Fade from "react-reveal/Fade";

import cn from "classnames";

type HeaderMobileProps = {
  theme: string
  toggleColor
};

export const HeaderMobile: FC<HeaderMobileProps> = ({ theme, toggleColor }) => {
  const [show, setShowNav] = useState(false);
  
  function toggleMobileNav() { setShowNav(!show); }
  
  return <>
    
    <div className={cn("mobile", { active: show })}>
      <NavLink href="/" image onClick={toggleMobileNav}>
        <Logo className="logo" style={{ height: "calc(var(--header-height) - 8px)" }} />
      </NavLink>
      
      <nav className="topbar">
        <NavIcon href="mailto:info@tellmann.co.za"><IoIosMail /></NavIcon>
        <NavIcon href="tel:+27763934356"><IoIosCall /></NavIcon>
        <NavIcon aria-label="Toggle Color Theme" onClick={toggleColor}>
          {theme === "light-theme" ? <IoIosSunny /> : null}
          {theme === "dark-theme" ? <IoIosMoon /> : null}
        </NavIcon>
        <NavToggle active={show} toggleNav={toggleMobileNav} />
      </nav>
      
      <div className="dropdown">
        <nav className="dropdown-nav">
          
          <Link href={`/`}>
            <a onClick={toggleMobileNav}>
              <Fade left delay={1 * 90} when={show}>Home</Fade>
              <Fade delay={1 * 90 + 40} duration={500} when={show}><u /></Fade>
              <Fade delay={1 * 90 + 40} duration={500} when={show}><span>{`Hi.`}</span></Fade>
            </a>
          </Link>
          <Link href={`/about`}>
            <a onClick={toggleMobileNav}>
              <Fade left delay={2 * 90} when={show}>About</Fade>
              <Fade delay={2 * 90 + 40} duration={500} when={show}><u /></Fade>
              <Fade delay={2 * 90 + 40} duration={500} when={show}><span>{`Who we are`}</span></Fade>
            </a>
          </Link>
          <Link href={`/work`}>
            <a onClick={toggleMobileNav}>
              <Fade left delay={3 * 90} when={show}>Work</Fade>
              <Fade delay={3 * 90 + 40} duration={500} when={show}><u /></Fade>
              <Fade delay={3 * 90 + 40} duration={500} when={show}><span>{`What we've done`}</span></Fade>
            </a>
          </Link>
          <Link href={`/services`}>
            <a onClick={toggleMobileNav}>
              <Fade left delay={4 * 90} when={show}>Services</Fade>
              <Fade delay={4 * 90 + 40} duration={500} when={show}><u /></Fade>
              <Fade delay={4 * 90 + 40} duration={500} when={show}><span>{`What we can do`}</span></Fade>
            </a>
          </Link>
          <Link href={`/contact`}>
            <a onClick={toggleMobileNav}>
              <Fade left delay={5 * 90} when={show}>Contact</Fade>
              <Fade delay={5 * 90 + 40} duration={500} when={show}><u /></Fade>
              <Fade delay={5 * 90 + 40} duration={500} when={show}><span>{`Get in touch`}</span></Fade>
            </a>
          </Link>
        
        </nav>
        
        <Fade left delay={3 * 90} when={show}>
          <p className="address">
            Visit our Office:<br />
            11th Floor<br />
            Touchstone House<br />
            7 Bree Street<br />
            Cape Town, 8001<br />
          </p>
        </Fade>
        <Fade bottom delay={4 * 90} when={show}>
          <nav className="footer">
            <NavIcon href="tel:+27763934356" onClick={toggleMobileNav}><IoIosCall /></NavIcon>
            <NavIcon href="https://facebook.com" target={`_blank`} onClick={toggleMobileNav}><IoLogoFacebook /></NavIcon>{/*TODO*/}
            <NavIcon href="#" target={`_blank`} onClick={toggleMobileNav}><IoLogoInstagram /></NavIcon> {/*TODO*/}
            <NavIcon href="#" target={`_blank`} onClick={toggleMobileNav}><IoLogoGithub /></NavIcon> {/*TODO*/}
            
            <NavLink href="mailto:info@tellmann.co.za">info@tellmann.co.za</NavLink>
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

      :global(.logo) {
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
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }

      .mobile.active {

        :global(.logo) {
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