import cn from "classnames";
import React, { CSSProperties, FC } from "react";

type NavToggleProps = {
  active: boolean;
  toggleNav: (e) => void;
  style?: CSSProperties;
};

export const NavToggle: FC<NavToggleProps> = ({ toggleNav, active, style = {}, ...props }) => {
  return (
    <>
      <button
        aria-label="Toggle Navigation"
        className={cn({ active })}
        style={style}
        type="button"
        onClick={toggleNav}
        {...props}
      >
        <span />
      </button>
      <style jsx>{`
        button {
          --nav-icon-size: 2.4rem;
          --nav-icon-border-width: 0.2rem;
          position: relative;
          width: var(--nav-icon-size);
          height: var(--nav-icon-size);
          min-width: var(--nav-icon-size);
          display: block;
          cursor: pointer;

          span {
            &,
            &:before,
            &:after {
              position: absolute;
              content: "";
              width: 100%;
              height: var(--nav-icon-border-width);
              display: block;
              background-color: var(--color-text);
              pointer-events: none;
              transform: rotate(0);
            }

            & {
              top: calc(50% - var(--nav-icon-border-width) / 2);
              transition: background-color 0.2s, top 0.2s, left 0.2s, transform 0.2s 0.15s;
            }

            &:before {
              bottom: calc(var(--nav-icon-size) / 3);
              left: 0;
              width: calc(var(--nav-icon-size) / 3 * 2);
              transition: bottom 0.2s 0.2s, left 0.1s, transform 0.2s, background-color 0.4s 0.2s;
            }

            &:after {
              top: calc(var(--nav-icon-size) / 3);
              right: 0;
              width: calc(var(--nav-icon-size) / 3 * 2);
              transition: top 0.2s 0.2s, right 0.1s, transform 0.2s, background-color 0.4s 0.2s;
            }
          }

          &.active {
            span {
              & {
                background-color: transparent;
              }

              &:before {
                bottom: 0;
                left: calc(var(--nav-icon-size) / 6);
                background-color: var(--primary);
                transition: background-color 0.2s, bottom 0.2s, left 0.2s, transform 0.2s 0.15s;
                transform: rotate(-45deg);
              }

              &:after {
                top: 0;
                right: calc(var(--nav-icon-size) / 6);
                background-color: var(--primary);
                transition: background-color 0.2s, top 0.2s, right 0.2s, transform 0.2s 0.15s;
                transform: rotate(45deg);
              }
            }
          }
        }
      `}</style>
    </>
  );
};
