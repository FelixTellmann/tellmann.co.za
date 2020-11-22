import { Card, SectionTitle } from "components";
import VendLogo from "public/icons/vend-pos.svg";
import { FC } from "react";
import { FaShopify } from "react-icons/fa";

const WhatWeDoData = {
  title: "What we Do",
  subtitle: "We specialise in E-commerce web development with a strong focus on Shopify and Vend. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolorem esse fuga inventore laborum nihil quam qui ratione repellat!"
};

export const WhatWeDo: FC = () => {
  const { title, subtitle } = WhatWeDoData;
  return <>
    <SectionTitle title={title} subtitle={subtitle} align="center" />
    <div className="grid">
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Shopify`}
            content={`<Image> and Automatic Image Optimization with instant builds.`}
            icon={{ src: <FaShopify />, background: `linear-gradient(0deg, #53A0EC, #57C84F)`, color: `#fff` }} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Vend POS`}
            content={`<Image> and Automatic Image Optimization with instant builds.`}
            icon={{ src: <VendLogo />, size: "32px" }} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Shopify`}
            content={`<Image> and Automatic Image Optimization with instant builds.`}
            icon={{ src: <FaShopify />, background: `linear-gradient(0deg, #53A0EC, #57C84F)`, color: `#fff` }} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Vend POS`}
            content={`<Image> and Automatic Image Optimization with instant builds.`}
            icon={{ src: <VendLogo />, size: "32px" }} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
      <Card clickable
            link={{ href: `#hero`, title: "Read More" }}
            title={`Image Optimization`}
            content={`<Image> and Automatic Image Optimization with instant builds.`} />
    </div>
    <style jsx>{`
      .grid {
        display: grid;
        grid-gap: 24px;
        @media screen and (min-width: 600px) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media screen and (min-width: 960px) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

      }
    `}</style>
  </>;
};