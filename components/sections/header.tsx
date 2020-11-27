import cn from "classnames";
import React, { FC, useEffect, useState } from "react";
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { ColorTheme } from "use-color-theme";
import { HeaderBanner } from "../header-banner";
import { HeaderDesktop } from "../header-desktop";
import { HeaderMobile } from "../header-mobile";

type HeaderProps = {
  colorTheme: ColorTheme
}

export const navData = {
  logo: { href: "/#hero", src: "/logo.svg", alt: "Tellmann Logo" },
  nav: [
    { href: "/#hero", title: "Home", alt: "Hi.", mobile: true },
    { href: "/#services", title: "Services", alt: `What we can do` },
    { href: "/#work", title: "Work", alt: `What we've done` },
    { href: "/blog", title: "Blog", alt: "What we write" },
    { href: "/#about", title: "About", alt: "Who we are" },
    { href: "/contact", title: "Contact", alt: `Get in touch`, mobile: true }
  ],
  navButton: { href: "/contact", title: "Contact" },
  address: {
    title: `Visit our Office:`,
    address1: "11th Floor Touchstone House",
    address2: "7 Bree Street",
    city: "Cape Town",
    country: "South Africa"
  },
  email: "info@tellmann.co.za",
  tel: "076 031 3590",
  socialNav: [
    { href: "https://www.facebook.com/tellmann.co.za", icon: <IoLogoFacebook title="Facebook" />, target: "_blank" },
    { href: "https://github.com/Tellmann", icon: <IoLogoGithub title="Github" />, target: "_blank" },
    { href: "https://g.page/tellmann-cpt?share", icon: <IoLogoGoogle title="Google" />, target: "_blank" }
  ],
  slogan: "Your Partners in Online Success"
};

export const Header: FC<HeaderProps> = ({ colorTheme }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }
  
  useEffect(() => {
    showBanner
    ? document.documentElement.style.setProperty("--header-banner-height", "40px")
    : document.documentElement.style.setProperty("--header-banner-height", "0px");
  }, [showBanner]);
  
  return <>
    <header className={cn({ showBanner })}>
      <HeaderBanner showMobileNav={showMobileNav}
                    onClose={() => setShowBanner(false)}
                    title={[
                      <>Not on Shopify yet? Get a full page review</>,
                      <>Not on Shopify yet? Get a full page review and we will get you started</>
                    ]}
                    href="#contact" />
      <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} {...navData} />
      <HeaderMobile toggleMobileNav={toggleMobileNav}
                    showMobileNav={showMobileNav}
                    theme={colorTheme.value}
                    toggleColor={colorTheme.toggle} {...navData} />
      <div className="header__background" />
    </header>
    <style jsx>{`
      header {
        position: sticky;
        margin-bottom: 0;
        z-index: 10;
        top: -40px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        transition: box-shadow .1s ease 0s, margin-top 0.1s ease 0s;
        box-shadow: inset 0 -1px 0 0 rgba(var(--color-text-rgb), 0.1);
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
        top: -1px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--header-background);
        backdrop-filter: saturate(180%) blur(20px);

        @media screen and (min-width: 600px) {
          box-shadow: none
        }
      }
    `}</style>
  </>;
};