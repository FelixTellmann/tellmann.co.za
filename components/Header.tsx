import React, { FC } from "react";
import { ColorTheme } from "use-color-theme";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

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
      <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props}/>
      <HeaderMobile theme={colorTheme.value} toggleColor={colorTheme.toggle} {...props}/>
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