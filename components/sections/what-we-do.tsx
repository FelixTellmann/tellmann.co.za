import { FC } from "react";
import { SectionTitle } from "../section-title";

const WhatWeDoData = {
  title: "What we Do",
  subtitle: "We specialise in E-commerce web development with a strong focus on Shopify and Vend. "
};

export const WhatWeDo: FC = () => {
  const { title, subtitle } = WhatWeDoData;
  return <>
    <SectionTitle title={title} subtitle={subtitle} align="center" />
  </>;
};