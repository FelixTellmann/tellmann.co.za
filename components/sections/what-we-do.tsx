import { Card, SectionTitle } from "components";
import VendLogo from "public/icons/vend-pos.svg";
import { FC } from "react";
import { FaShopify } from "react-icons/fa";

const WhatWeDoData = {
  title: "What we Do",
  subtitle: "We specialise in E-commerce web development with a strong focus on Shopify and Vend. We believe in coming up with original ideas and turning them into digital work that is both innovative and interactive."
};

export const WhatWeDo: FC = () => {
  const { title, subtitle } = WhatWeDoData;
  return <>
    <SectionTitle title={title} subtitle={subtitle} align="center" />
    <div className="grid">
      <Card clickable
            title="Shopify"
            content="<Image> and Automatic Image Optimization with instant builds."
            icon={{ src: <FaShopify />, background: `linear-gradient(0deg, #53A0EC, #57C84F)`, color: `#fff` }} />
      <Card clickable
            title="Vend POS"
            content="<Image> and Automatic Image Optimization with instant builds."
            icon={{ src: <VendLogo />, size: "32px" }} />
      <Card clickable
            title="Custom Designs"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Custom Functionality"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Product Photography"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Store Migrations"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Data Management"
            content="<Image> and Automatic Image Optimization with instant builds."
            icon={{ src: <FaShopify />, background: `linear-gradient(0deg, #53A0EC, #57C84F)`, color: `#fff` }} />
      <Card clickable
            title="E-Commerce Consultations"
            content="<Image> and Automatic Image Optimization with instant builds."
            icon={{ src: <VendLogo />, size: "32px" }} />
      <Card clickable
            title="Page Reviews & Analysis"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Sales Channel integrations"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Copywriting"
            content="<Image> and Automatic Image Optimization with instant builds." />
      <Card clickable
            title="Social Media Marketing"
            content="<Image> and Automatic Image Optimization with instant builds." />
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