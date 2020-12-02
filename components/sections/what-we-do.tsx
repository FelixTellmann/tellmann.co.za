import { Card, SectionTitle } from "components";
import VendLogo from "public/icons/vend-pos.svg";
import { FC } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BiGridAlt, BiPulse, BiTransfer } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { ImMagicWand } from "react-icons/im";

const WhatWeDoData = {
  title: "What we Do",
  subtitle: "We specialise in E-commerce web development with a strong focus on Shopify and Vend POS. We believe in coming up with original ideas and turning them into digital work that is both innovative and interactive."
};

export const WhatWeDo: FC = () => {
  const { title, subtitle } = WhatWeDoData;
  return <>
    <SectionTitle title={title} subtitle={subtitle} align="center" />
    <div className="grid">
      <Card clickable
            title="Shopify"
            content="We do everything Shopify, from small tweaks to entire custom themes."
            link={{ href: "contact", title: "Take your store next level." }}
            icon={{ src: <FaShopify />, background: `linear-gradient(0deg, #53A0EC, #57C84F)`, color: `#fff` }} />
      <Card clickable
            title="Store Migrations"
            content="We'll migrate your ecommerce store from any platform to Shopify, providing clarity and transparency in every step."
            icon={{ src: <BiTransfer />, background: `linear-gradient(0deg, #7928CA, #FF0080)`, color: `#fff` }} />
      <Card clickable
            title="Vend POS"
            content="We specialize in Vend Cloud-based POS to seamlessly integrate your ecommerce & retail stores."
            icon={{ src: <VendLogo />, size: "32px" }} />
      <Card clickable
            title="Custom Design"
            content="Need a quick design edit or custom theme templates for your collections, product pages and more? We can help!"
            icon={{ src: <ImMagicWand />, size: "17px", background: `linear-gradient(0deg, #00DFD8, #007CF0)`, color: `#fff` }} />
      <Card clickable
            title="Custom Functionality"
            content="We can create unique functionality for your site. From advanced filters to mega-menus, we've got you covered."
            icon={{ src: <GoSettings />, background: `linear-gradient(0deg, #F9CB28, #FF4D4D)`, color: `#fff` }} />
      <Card clickable
            title="Sales channels"
            content="Expand your reach! We setup your store to integrate into Facebook, Instagram, Google to help you sell anywhere!"
            icon={{ src: <FiCpu />, background: `linear-gradient(58deg, #01cbdd, rgba(60, 212, 243, 0.62))`, color: `#fff` }} />
      <Card clickable
            title="Review and Analysis"
            content="With each project, we perform an in&#8209;depth review & analysis. We cover all aspects of performance, seo and more."
            icon={{ src: <BiPulse />, size: "24px", background: `linear-gradient(0deg, #EC6193, #EC4B31)`, color: `#fff` }} />
      <Card clickable
            title="Data Management"
            content="Need to transform large amount of data about your customers, products or sales? We specialize in managing data."
            icon={{ src: <BiGridAlt />, background: `linear-gradient(58deg, rgba(212, 15, 179,0.42), rgb(255, 0, 143))`, color: `#fff` }} />
      <Card clickable
            title="Consultation"
            content="All our services are tailor made to your unique needs. We will guide you to your online success."
            icon={{ src: <AiOutlineTeam />, background: `linear-gradient(58deg, #FFBC29, #EADF58)`, color: `#fff` }} />
    
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