import React, { FC } from "react";
import { Button } from "../button";

const heroData = {
  title: ["Hi.", "Hello."],
  subtitle: <>
    We are Tellmann, <br />
    a small team of Web-design & Shopify experts located in Cape Town.
    We specialize in creating ecommerce websites that drive interaction and sales.
  </>,
  cta: { href: "/contact", title: "Get in touch" }
};

export const Hero: FC = () => {
  const { title, subtitle, cta } = heroData;
  
  return <>
    <div className="hero">
      <div className="hero__content">
        {
          Array.isArray(title)
          ? title.map((heading, i) => <h1 key={heading} className={`h0 bp-${i}`}>{heading}</h1>)
          : <h1 key={title} className="h0">{title}</h1>
        }
        <h2 className="h3">{subtitle}</h2>
        <Button href={cta.href} secondary branded medium style={{ marginTop: `16px` }}>{cta.title}</Button>
      </div>
    </div>
    <style jsx>{`
      .hero {
        position: relative;
        height: calc(100vh - var(--header-height) - var(--section-y-padding) * 2);

      }

      .hero__content {
        max-width: 780px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        z-index: 0;
      }

      h2 {
        max-width: 630px;
        margin-right: auto;
        line-height: 1.4;
      }
    `}</style>
  </>;
};