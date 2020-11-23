import { GetStarted, Hero, Section, Statistics, WhatWeDo } from "components";
import Topography from "public/topography.svg";
import React, { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <Section id="hero"
               jumpTo={{ href: "#what-we-do", title: "What we do" }}
               background={`url('/images/hero-bg.jpg') center / cover no-repeat`}
               overlay="radial-gradient(70% 70% at 50% 100%, var(--color-grey-bg-1) 0, var(--color-grey-bg-2) 100%)">
        <Hero />
      </Section>
      <Section id="what-we-do" background={<Topography />} backgroundOpacity={0.03}>
        <WhatWeDo />
      </Section>
      <Section id="cta-1" skew={-2} fullscreen background="var(--color-grey-bg-3)" py="48px">
        <GetStarted />
      </Section>
      <Section id="cta-2" skew={-2} fullscreen background="var(--primary)" py="48px">
        <Statistics />
      </Section>
      <Section id="3" />
    </>
  );
};

export default Index;
