import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import Logo from "../../public/logo.svg";
import { Link } from "../link";
import { NavIcon } from "../nav-icon";
import { navData } from "./header";

const footerNavData: { heading: string, nav: { href: string, title: string, target?: string }[] }[] = [
  {
    heading: `Sitemap`,
    nav: [
      { href: "/#hero", title: "Home" },
      { href: "/#services", title: "Services" },
      { href: "/#work", title: "Work" },
      { href: "/blog", title: "Blog" },
      { href: "/#about", title: "About" },
      { href: "/contact", title: "Contact" }
    ]
  },
  {
    heading: `Shopify`,
    nav: [
      { href: "https://www.shopify.com/online?ref=liquix", title: "Sell Online", target: "_blank" },
      { href: "https://www.shopify.com/online/ecommerce-solutions?ref=liquix", title: "Features", target: "_blank" },
      { href: "https://www.shopify.com/tour/ecommerce-website?ref=liquix", title: "Ecommerce Sites", target: "_blank" },
      { href: "https://www.shopify.com/domains?ref=liquix", title: "Domains", target: "_blank" },
      { href: "https://www.shopify.com/themes?ref=liquix", title: "Themes", target: "_blank" },
      { href: "https://www.shopify.com/blog/topics/guides?ref=liquix", title: "Guides", target: "_blank" }
    ]
  },
  {
    heading: `Tools`,
    nav: [
      { href: "https://www.canva.com/", title: "Canva design", target: "_blank" },
      { href: "https://konklone.io/json/", title: "Data Converter", target: "_blank" },
      { href: "https://unsplash.com/", title: "Free Stock Images", target: "_blank" },
      { href: "https://www.omnisend.com/", title: "Email Marketing", target: "_blank" },
      { href: "https://coolors.co/", title: "Coolers", target: "_blank" },
      { href: "https://web.dev/measure/", title: "Website Performance", target: "_blank" },
      { href: "https://react-icons.netlify.com/", title: "Find Icons", target: "_blank" }
    ]
  },
  {
    heading: `Support`,
    nav: [
      { href: "/contact", title: "Contact Us" },
      { href: "tel:0763934356", title: "076 393 4356" },
      { href: "mailto:info@tellmann.co.za", title: "info@tellmann.co.za" }
      /* { href: "/#", title: "FAQ" }, */
      /* { href: "/terms", title: "Terms & Conditions" }, */
      /* { href: "/privacy", title: "Privacy Policy" } */
    ]
  }
];

type FooterProps = {
  colorTheme?
};

export const Footer: FC<FooterProps> = ({ colorTheme }) => {
  
  const toggleColor = () => {
    const logo = document.getElementById("logo-link");
    logo.classList.add("hideTransition");
    colorTheme.toggle();
    setTimeout(() => {
      logo.classList.remove("hideTransition");
    }, 60);
  };
  
  return <>
    <footer>
      <nav className="nav">
        {footerNavData.map(({ heading, nav }, i) => (
          <div key={heading} className="nav-group">
            <input aria-label="Toggle Nav Group"
                   type="checkbox"
                   id={`nav-group__input--${heading}`}
                   name={`nav-group__input--${heading}`} />
            <label htmlFor={`nav-group__input--${heading}`}>
              <h3>{heading}</h3>
            </label>
            <ul>
              {
                nav.map(({ href, title, target }) => (
                  <li key={`${href}${title}`}><Link href={href}><a className="nav-group__link"
                                                                   target={target}
                                                                   rel="noopener noreferrer">{title}</a></Link></li>
                ))
              }
            
            </ul>
          </div>
        ))}
      
      </nav>
      <div className="utility">
        <Logo width={105} height={56} />
        <div className="utility__group">
          <nav className="social-nav">
            {colorTheme.value === "light-theme" ? <NavIcon ariaLabel="GitHub" onClick={toggleColor}><FiMoon /></NavIcon> : null}
            {colorTheme.value === "dark-theme" ? <NavIcon ariaLabel="GitHub" onClick={toggleColor}><FiSun /></NavIcon> : null}
            {navData.socialNav.map(({ href, icon, target }) => (
              <NavIcon key={href} href={href} target={target} ariaLabel="GitHub">{icon}</NavIcon>
            ))
            }
          </nav>
          <small>{`Copyright © ${new Date().getFullYear()} Tellmann.co.za - All rights reserved.`}</small>
        </div>
      </div>
    </footer>
    <div className="made-by">Made with <span className="heart">&nbsp;❤&nbsp;</span> by Tellmann</div>
    <style jsx>{`
      footer {
        position: relative;
        min-height: 400px;
        margin-right: auto;
        margin-left: auto;
        padding: 36px 24px 24px;
        border-top: var(--border);
        border-bottom: var(--border);
        background: var(--color-grey-bg-2);
        z-index: 1;

        @media screen and (min-width: 960px) {
          &:before, &:after {
            position: absolute;
            content: '';
            z-index: 0;
            bottom: calc(100% + 1px);
            left: 0;
            width: 64px;
            height: 470px;
            background: linear-gradient(0deg, var(--color-background) 0%, var(--color-background) 70%, transparent 100%);
          }

          &:after {
            right: 0;
            left: unset;
          }
        }
      }

      .nav, .utility {
        max-width: var(--page-width);
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
      }

      .social-nav {
        order: 2;
        padding: 24px 0;

        :global(button), :global(a) {
          height: auto;
          padding-top: 0;
          padding-right: 12px;
          padding-bottom: 0;
          padding-left: 12px;
        }

        :global(button:not(:last-child)), :global(a:not(:last-child)) {
          border-right: var(--border);
        }
      }

      .utility {
        padding-top: 24px;
        color: var(--color-text);
        text-align: center;
        @media screen and (min-width: 960px) {
          text-align: left;
          .utility__group {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }

      small {
        color: var(--nav-color);
        font-size: 14px;
      }

      .nav {
        @media screen and (min-width: 960px) {
          display: flex;
          justify-content: space-between;

          .nav-group {
            border-bottom: none;

            h3 {
              cursor: auto;

              &:after {
                content: ''
              }
            }

            ul {
              display: block;
              padding: 0;
            }
          }
        }
      }

      .nav-group {
        border-bottom: var(--border);

        input {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          margin: -1px;
          padding: 0;
          border: 0;
          white-space: nowrap;
          word-wrap: normal;
          clip-path: inset(100%);
          appearance: none;
        }

        h3 {
          display: flex;
          justify-content: space-between;
          margin: 12px 0;
          cursor: pointer;
          user-select: none;
          font-size: var(--nav-font-size);
          font-weight: 400;

          &:after {
            content: '+';
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.1s ease;
          }
        }

        ul {
          display: none;
          padding-bottom: 12px;
          padding-left: 12px;
          list-style: none;
        }

        a {
          display: flex;
          padding: 8px 0;
          color: var(--nav-color);
          font-size: var(--nav-font-size);
          text-decoration: none;

          &:hover, &:focus, &:active {
            color: var(--nav-hover-color);
          }
        }

        input:checked {
          ~ label h3:after {
            transform: rotate(45deg);
          }

          ~ ul {
            display: block;
          }
        }
      }

      .made-by {
        height: var(--header-nav-height);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: url('/icons/heart.svg') 62 62, default;
        user-select: none;
        color: var(--nav-color);
        font-size: var(--nav-font-size);
        letter-spacing: 0.075rem;
        text-transform: uppercase;

        .heart {
          color: red;
          font-size: 20px;
        }
      }
    
    `}</style>
  
  </>;
};