import React, { FC } from "react";
import { IoIosCall } from "react-icons/io";
import { SocialNav } from "./header-desktop";
import { Link } from "./link";
import { NavIcon } from "./nav-icon";

type SidebarProps = {
  left?: boolean
  right?: boolean
  socialNav: SocialNav[]
  email: string
  tel: string
  slogan?: string
};

export const Sidebar: FC<SidebarProps> = ({ left = false, right = false, email, tel, socialNav, slogan }) => {
  return <>
    {left ? <aside className="left">
      <Link href={`mailto:${email}`}><a aria-label="Contact us via Email" role="link" tabIndex={0} className="email">{email}</a></Link>
      <NavIcon ariaLabel="Contact us via Phone" href={`tel:${tel.replace(" ", "")}`}><IoIosCall /></NavIcon>
      {socialNav.map(({ href, icon }) => <NavIcon key={href} target="_blank" href={href}>{icon}</NavIcon>)}
    </aside> : null}
    {right ? <aside className="right">
      <Link href="#"><a role="link" tabIndex={0} className="slogan">{slogan}</a></Link>
    </aside> : null}
    
    <style jsx>{`
      aside {
        position: fixed;
        top: var(--header-height);
        width: var(--header-nav-height);
        height: calc(100vh - var(--header-height) * 2);
        display: none;
        align-items: center;
        justify-content: center;
        padding-top: var(--header-nav-height);
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