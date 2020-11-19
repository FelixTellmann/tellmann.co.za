import React, { FC } from "react";
import { SectionScrollTo } from "./section-scroll-to";

type SectionProps = {
  id: string
  jumpTo?: { href: string, title: string }
};

export const Section: FC<SectionProps> = ({ id, jumpTo, children }) => {
  return <>
    <section id={id}>
      {children}
      {jumpTo ? <SectionScrollTo href={jumpTo.href} title={jumpTo.title} /> : null}
    </section>
    <style jsx>{`
      section {
        position: relative;
      }
    `}</style>
  </>;
};