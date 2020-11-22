import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io";

import Logo from "../../public/logo.svg";
import { Link } from "../link";
import { NavIcon } from "../nav-icon";

type FooterProps = {
  nav?
  socialnav?
  logo?
  copyright?
  colorTheme?
};

export const Footer: FC<FooterProps> = ({ colorTheme, nav, socialNav, logo, copyright }) => {
  return <>
    <footer>
      <nav className="nav">
        <div className="nav-group">
          <input aria-label="Toggle Nav Group" type="checkbox" id="nav-group__input" name="nav-group__input" />
          <label htmlFor="nav-group__input">
            <h3>Shopify</h3>
          </label>
          <ul>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
          </ul>
        </div>
        
        <div className="nav-group">
          <input type="checkbox" id="nav-group__input4" name="nav-group__input" />
          <label htmlFor="nav-group__input4">
            <h3>Shopify</h3>
          </label>
          <ul>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
          </ul>
        </div>
        <div className="nav-group">
          <input type="checkbox" id="nav-group__input3" name="nav-group__input" />
          <label htmlFor="nav-group__input3">
            <h3>Shopify</h3>
          </label>
          <ul>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
          </ul>
        </div>
        <div className="nav-group">
          <input type="checkbox" id="nav-group__input2" name="nav-group__input" />
          <label htmlFor="nav-group__input2">
            <h3>Shopify</h3>
          </label>
          <ul>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
            <li><Link href="#"><a className="nav-group__link">Link</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className="utility">
        <Logo width={105} height={56} />
        <nav className="social-nav">
          {colorTheme.value === "light-theme" ? <NavIcon ariaLabel="GitHub" onClick={colorTheme.toggle}><FiMoon /></NavIcon> : null}
          {colorTheme.value === "dark-theme" ? <NavIcon ariaLabel="GitHub" onClick={colorTheme.toggle}><FiSun /></NavIcon> : null}
          <NavIcon href="#" ariaLabel="GitHub"><IoLogoGithub /></NavIcon>
          <NavIcon href="#" ariaLabel="GitHub"><IoLogoFacebook /></NavIcon>
        </nav>
        <small>{`Copyright © ${new Date().getFullYear()} Tellmann.co.za - All rights reserved.`}</small>
      </div>
    </footer>
    <legend>Made with <span className="heart">&nbsp;❤&nbsp;</span> by Tellmann</legend>
    <style jsx>{`
      footer {
        min-height: 400px;
        margin-right: auto;
        margin-left: auto;
        padding: 36px 24px 24px;
        border-top: var(--border);
        border-bottom: var(--border);
        background: var(--color-grey-bg-2);
        @media screen and (min-width: 960px) {
          max-width: calc(100% - var(--header-nav-height) * 2);
          border: var(--border);
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
        padding: 24px 0;
      }

      .utility {
        padding-top: 24px;
        color: var(--color-text);
        text-align: center;
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

      legend {
        height: var(--header-nav-height);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--nav-color);
        font-size: var(--nav-font-size);
        letter-spacing: 0.075rem;
        text-transform: uppercase;
        user-select: none;
        cursor: url('/icons/heart.svg') 62 62, default;

        .heart {
          color: red;
          font-size: 20px;
        }
      }
    
    `}</style>
  
  </>;
};