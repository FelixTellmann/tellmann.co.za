import React, { FC } from "react";
import cn from "classnames";
import { CSS, useStyledSystem } from "use-styled-system";

type NavIconProps = {
  toggleNav: (e) => void
  active: boolean
};

export const NavIcon: FC<NavIconProps & CSS> = ({ toggleNav, active, ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  
  return <>
    <button className={cn({ active })} onClick={toggleNav} {...nonCssProps}><span /></button>
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
          &, &:before, &:after {
            position: absolute;
            content: '';
            width: 100%;
            height: var(--nav-icon-border-width);
            display: block;
            background-color: var(--color-text);
            pointer-events: none;
            transform: rotate(0);
          }

          & {
            top: calc(50% - var(--nav-icon-border-width) / 2);
            transition: background-color .2s, top .2s, left .2s, transform .2s .15s;
          }

          &:before {
            bottom: calc(var(--nav-icon-size) / 3);
            left: 0;
            width: calc(var(--nav-icon-size) / 3 * 2);
            transition: bottom .2s .2s, left .1s, transform .2s, background-color .4s .2s;
          }

          &:after {
            top: calc(var(--nav-icon-size) / 3);
            right: 0;
            width: calc(var(--nav-icon-size) / 3 * 2);
            transition: top .2s .2s, right .1s, transform .2s, background-color .4s .2s;
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
              transition: background-color .2s, bottom .2s, left .2s, transform .2s .15s;
              transform: rotate(-45deg);
            }

            &:after {
              top: 0;
              right: calc(var(--nav-icon-size) / 6);
              background-color: var(--primary);
              transition: background-color .2s, top .2s, right .2s, transform .2s .15s;
              transform: rotate(45deg);
            }
          }
        }
      }
    `}</style>
    <style jsx>{`
      button {
        ${styleJsx}
      }
    `}</style>
  </>;
};