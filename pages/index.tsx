import { GetStarted, Hero, Section, SectionTitle, Statistics, Team, WhatWeDo, Work } from "components";
import matter from "gray-matter";
import Topography from "public/topography.svg";
import React, { FC } from "react";
import { getAllPostsSlug, getSinglePostData } from "../lib/getBlogPosts";
import { BlogProps } from "./blog";

const Index: FC<BlogProps> = ({ postData }) => {
  
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
      <Section py="0" pl="0" pr="0" pb="200px">
        <Work />
      </Section>
      <Section id="contact" skew={-2} fullscreen background="var(--color-grey-bg-3)" py="96px" style={{ zIndex: 0 }}>
        <Team />
      </Section>
      <Section id="blog-preview" background={<Topography />} backgroundOpacity={0.03}>
        {/* <BlogSummary postData={postData} /> */}
      </Section>
    </>
  );
};

export default Index;

export const getStaticProps = (): { props: { postData } } => {
  let count = 0;
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  }).filter((item, index) => {
    if (count > 2) return false;
    if (!item?.frontMatter?.published) return false;
    count += 1;
    return true;
  });
  
  return { props: { postData } };
};
