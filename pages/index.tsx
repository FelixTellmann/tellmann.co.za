import { GetStarted, Hero, Section, SectionTitle, Statistics, WhatWeDo, Work } from "components";
import Topography from "public/topography.svg";
import React, { FC } from "react";

const Index: FC = () => {
  
  return (
    <>
      <Section id="hero"
               jumpTo={{ href: "#services", title: "What we do" }}
               background={`url('/images/hero-bg.jpg') center / cover no-repeat`}
               overlay="radial-gradient(70% 70% at 50% 100%, var(--color-grey-bg-1) 0, var(--color-grey-bg-2) 100%)">
        <Hero />
      </Section>
      <Section id="services" background={<Topography />} backgroundOpacity={0.03}>
        <WhatWeDo />
      </Section>
      <Section skew={-2} fullscreen background="var(--color-grey-bg-3)" py="48px">
        <GetStarted />
      </Section>
      <Section skew={-2} fullscreen background="var(--primary)" py="48px">
        <Statistics />
      </Section>
      <Section id="work" pb="24px">
        <SectionTitle title="Our Work" subtitle="We create beautiful and functional ecommerce experiences for amazing brands on Shopify." />
      </Section>
      <Section py="0" pl="0" pr="0">
        <Work />
      </Section>
      <Section />
    </>
  );
};

export default Index;
