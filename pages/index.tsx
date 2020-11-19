import React, { FC } from "react";
import { Hero, Section, WhatWeDo } from "components";

const Index: FC = (props) => {
  return (
    <>
      <Section id="hero" jumpTo={{ href: "#what-we-do", title: "What we do" }} background={`url('/images/hero-bg.jpg')`} overlay={"radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%)"}>
        <Hero />
      </Section>
      <Section id="what-we-do" background={`url('topography.svg')`}  backgroundOpacity={0.03}>
        <WhatWeDo />
      </Section>
    </>
  );
};

export default Index;
