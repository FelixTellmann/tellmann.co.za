import React, { FC } from "react";
import { IoIosCall } from "react-icons/io";
import { SocialNav } from "./header-desktop";
import { Link } from "./link";
import { NavIcon } from "./nav-icon";

type SidebarProps = {
  email?: string;
  left?: boolean;
  right?: boolean;
  slogan?: string;
  socialNav?: SocialNav[];
  tel?: string;
};

export const Sidebar: FC<SidebarProps> = ({
  left = false,
  right = false,
  email,
  tel,
  socialNav,
  slogan,
}) => {
  return (
    <>
      {left
        ? <aside className="left">
            <Link href={`mailto:${email}`}>
              <a
                aria-label="Contact us via Email"
                className="email"
                role="link"
                style={{ marginBottom: "12px" }}
                tabIndex={0}
              >
                {email}
              </a>
            </Link>
            <NavIcon ariaLabel="Contact us via Phone" href={`tel:${tel?.replace(/\s/g, "")}`}>
              <IoIosCall />
            </NavIcon>
            {socialNav.map(({ href, icon }) => (
              <NavIcon key={href} href={href} target="_blank">
                {icon}
              </NavIcon>
            ))}
          </aside>
        : null}
      {right
        ? <aside className="right">
            <Link href="#">
              <a className="slogan" role="link" tabIndex={0}>
                {slogan}
              </a>
            </Link>
          </aside>
        : null}

      <style jsx>{`
        aside {
          position: fixed;
          z-index: 1;
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

          .email,
          .slogan {
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
    </>
  );
};
