import cn from "classnames";
import React, { FC, useEffect, useState } from "react";

import { ColorTheme } from "use-color-theme";
import { HeaderBanner } from "./header-banner";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export type Logo = {
  href: string,
  src: string,
  alt?: string
}

export type NavItem = {
  href: string,
  title: string,
  alt?: string,
  mobile?: boolean,
  desktop?: boolean
}

export type Address = {
  title: string,
  address1: string,
  address2?: string,
  city: string,
  country: string,
}
export type SocialNav = {
  href: string,
  icon?: JSX.Element
}

export type NavButton = {
  href: string
  title: string
}

type HeaderProps = {
  colorTheme: ColorTheme
  logo: Logo
  nav: NavItem[]
  navButton: NavButton
  socialNav: SocialNav[]
  address: Address
  email: string
  tel: string
  slogan?: string
}

export const Header: FC<HeaderProps> = ({ colorTheme, ...props }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }
  
  useEffect(() => {
    showBanner
    ? document.documentElement.style.setProperty('--header-banner-height', '40px')
    : document.documentElement.style.setProperty('--header-banner-height', '0px')
  }, [showBanner])
  
  return <>
    <header className={cn({ showBanner })}>
      <HeaderBanner showMobileNav={showMobileNav}
                    onClose={() => setShowBanner(false)}
                    title={<>Not on Shopify yet? Get a full page review and we will get you started</>}
                    href="#contact" />
      <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props} />
      <HeaderMobile toggleMobileNav={toggleMobileNav} showMobileNav={showMobileNav} theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props} />
      <div className="header__background" />
    </header>
    <style jsx>{`
      header {
        position: sticky;
        margin-bottom: calc(0px - var(--header-nav-height) - 40px);
        z-index: 10;
        top: -40px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        transition: box-shadow .1s ease 0s, margin-top 0.1s ease 0s;
        @media screen and (min-width: 600px) {
          position: sticky;
          margin-bottom: 0;
          top: -40px
        }
      }

      .showBanner {
        margin-top: 0;
      }

      .header__background {
        position: absolute;
        z-index: -3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--header-background);
        backdrop-filter: saturate(180%) blur(20px);
      }
    `}</style>
  </>;
};