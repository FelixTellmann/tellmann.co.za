import Link from "next/link";
import { FC } from "react";
import { FiChevronDown } from "react-icons/fi";

type SectionScrollToProps = {
  href: string
  title: string
};

export const SectionScrollTo: FC<SectionScrollToProps> = ({ href, title }) => {
  return <>
    <div className="scroll-to">
      <Link href={href}><a className="scroll-to__link">{title}<FiChevronDown style={{ position: "absolute", right: "-24px" }} /></a></Link>
    </div>
    <style jsx>{`
      .scroll-to {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 77px;
        margin-right: auto;
        margin-left: auto;
        transform: translateX(-50%);

        &:before, &:after {
          position: absolute;
          content: '';
          bottom: 0.5rem;
          left: calc(50% - 0.45rem);
          -webkit-transform: translate(-50%, 50%);
          -ms-transform: translate(-50%, 50%);
          transform: translate(-50%, 50%);
          width: 0.5rem;
          height: 6rem;
          background-color: var(--primary);
        }

        &:after {
          left: calc(50% + 0.45rem);
          background-color: var(--color-text);
          bottom: -0.5rem;
        }
      }

      .scroll-to__link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        color: rgba(37, 38, 39, 0.7);
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        text-decoration: none;
        text-transform: uppercase;

        &:hover, &:focus, &:active {
          color: var(--primary)
        }
      }
    `}</style>
  </>;
};