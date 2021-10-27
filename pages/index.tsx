import { GetStarted, Hero, Section, SectionTitle, Statistics, Team, WhatWeDo, Work } from "components";
import matter from "gray-matter";
import Topography from "public/topography.svg";
import React, { FC } from "react";
import { getAllPostsSlug, getSinglePostData } from "../lib/getBlogPosts";
import { BlogProps } from "./blog";

const Index: FC<BlogProps> = ({ postData }) => {
  return (
    <>
      <Section
        background={`url('/images/hero-bg-r2d2.jpg') 70% 90% / cover no-repeat`}
        id="hero"
        jumpTo={{ href: "#services", title: "What we do" }}
        overlay="var(--hero-overlay)"
      >
        <Hero />
      </Section>
      <Section background={<Topography />} backgroundOpacity={0.03} id="services">
        <WhatWeDo />
      </Section>
      <Section fullscreen background="var(--color-grey-bg-3)" py="48px" skew={-2}>
        <GetStarted />
      </Section>
      <Section fullscreen background="var(--primary)" py="48px" skew={-2}>
        <Statistics />
      </Section>
      <Section id="work" pb="24px">
        <SectionTitle
          subtitle="We create beautiful and functional ecommerce experiences for amazing brands on Shopify."
          title="Our Work"
        />
      </Section>
      <Section pl="0" pr="0" py="0">
        <Work />
      </Section>
      <Section
        fullscreen
        background="var(--color-grey-bg-3)"
        id="about"
        py="96px"
        skew={-2}
        style={{ zIndex: 0 }}
      >
        <Team />
      </Section>
      <Section fullscreen background="var(--primary)" py="48px" skew={-2}>
        <GetStarted />
      </Section>
      <Section background={<Topography />} backgroundOpacity={0.03} id="blog-preview" py="32px">
        {/* <BlogSummary postData={postData} /> */}
      </Section>
    </>
  );
};

export default Index;

export const getStaticProps = (): { props: { postData } } => {
  let count = 0;
  const postData = getAllPostsSlug()
    .map((slug) => {
      return {
        slug,
        frontMatter: matter(getSinglePostData(slug)).data,
      };
    })
    .filter((item, index) => {
      if (count > 2) return false;
      if (!item?.frontMatter?.published) return false;
      count += 1;
      return true;
    });

  return { props: { postData } };
};
