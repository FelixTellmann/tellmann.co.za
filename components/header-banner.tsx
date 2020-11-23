import cn from "classnames";
import { FC } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "./link";

type HeaderBannerProps = {
  title: (string | JSX.Element) | (string | JSX.Element) []
  href: string
  onClose: (e) => void
  showMobileNav: boolean
};

export const HeaderBanner: FC<HeaderBannerProps> = ({ title, href, onClose, showMobileNav }) => {
  return <>
    <div className={cn("banner", { showMobileNav })}>
      {/* <div className="wrapper"> */}
      {Array.isArray(title)
       ? title.map((item, i) => (
          <Link key={i} href={href}><a className={`bp-${i}`}>{item} <span className="desktop">Read →</span></a></Link>
        ))
       : <Link href={href}><a>{title} <span>Read &nbsp;→</span></a></Link>}
      <button aria-label="Close Banner" type="button" onClick={onClose}><FiX /></button>
      {/* </div> */}
    </div>
    
    <style jsx>{`
      .banner {
        width: 100%;
        height: 40px;
        display: flex;
        background: var(--color-grey-bg-2);
        color: var(--color-text);
        transition: 0.1s ease 0s;
        border-bottom: var(--border);
        align-items: center;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);

        &.showMobileNav {
          color: var(--color-text);
        }
      }

      /*.wrapper {
        max-width: var(--page-width);
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
      }*/

      a {
        font-size: 14px;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        white-space: nowrap;

        &.bp-0 {
          justify-self: flex-start;
          margin-right: auto;
        }

        span {
          display: inline-flex;
          align-items: center;
          padding-left: 12px;
          margin-left: 12px;
          border-left: var(--border);
        }
      }

      button {
        position: absolute;
        right: 0;
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
        font-size: 18px;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: inherit;

        &:hover, &:focus, &:active {
          color: var(--nav-color)
        }

      }
    `}</style>
  </>;
};