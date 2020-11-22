import cn from "classnames";
import { FC } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";
import { Link } from "./link";

type HeaderBannerProps = {
  title: (string | JSX.Element) | (string | JSX.Element)[]
  href: string
  onClose: (e) => void
  showMobileNav: boolean
};

export const HeaderBanner: FC<HeaderBannerProps> = ({ title, href, onClose, showMobileNav }) => {
  return <>
    <div className={cn("banner", { showMobileNav })}>
      <div className="wrapper">
        <Link href={href}><a>{title} <FiChevronRight /></a></Link>
        <button aria-label="Close Banner" type="button" onClick={onClose}><FiX /></button>
      </div>
    </div>
    
    <style jsx>{`
      .banner {
        width: 100%;
        height: 40px;
        display: flex;
        background: var(--color-text);
        color: var(--color-background);
        transition: 0.1s ease 0s;
        
        &.showMobileNav {
          color: var(--color-text);
        }
      }

      .wrapper {
        max-width: var(--page-width);
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        padding-right: var(--section-x-padding);
        padding-left: var(--section-x-padding);
      }

      a {
        font-size: 14px;
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      button {
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