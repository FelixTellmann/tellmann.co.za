import React, { FC } from "react";
import { ColorTheme } from "use-color-theme";
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
  return <>
    <header>
      <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props} />
      <HeaderMobile theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props} />
      <div className="header__background" />
    </header>
    <style jsx>{`
      header {
        position: fixed;
        z-index: 10;
        width: 100%;
        top: 0;
        display: flex;
        transition: box-shadow .1s ease 0s;
        @media screen and (min-width: 600px) {
          position: sticky;
        }
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