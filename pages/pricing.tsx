import Topography from "public/topography.svg";
import React, { FC } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { GetStarted, Section } from "../components";
import { Card } from "../components/card";
import { Div, H3, H4, Header, Hr, I, Li, Main, P, Small, Ul } from "../components/html-elements";

const PricingData = [
  {
    packageName: `Shopify Starter Setup`,
    price: `$ 1100 / R 16 500`,
    goal: <>
      Create a fully funtional ecommerce store that is branded to suit your unique identity. <b>Fastest and most cost-effective </b>
      solution to suit all essential needs for a great online shopping experience. <br /><br />
      We will cover all the complex parts of getting you up and running and guide you through the easier tasks.
    </>,
    features: [
      {
        title: `Full Page Review & Analysis`,
        description: `If applicable.`
      },
      {
        title: `Shopify Online Store`,
        description: `Integrated Cutting Edge Content Management Software.`
      },
      {
        title: `Cloud Hosted CDN Network`,
        description: `Superior performance from anywhere in the world & secure with SSL.`
      },
      {
        title: `Built-in Reporting & Analytics`,
        description: `Easily measure your sites performance.`
      },
      {
        title: `Domain & Hosting`,
        description: `We help you setup or transfer the domain.`
      },
      {
        title: `Basic theme customization`,
        description: `We ensure the site suits your brand, based on your provided Logo, Typography, Colors, images & Illustrations.`
      },
      {
        title: `Navigation Setup`,
        description: `Making all your pages easy to find on your page.`
      },
      {
        title: `Content Pages added`,
        description: `About Us, Contact Us, Blog pages.`
      },
      {
        title: `Basic SEO`,
        description: `We make sure that all your content is accessible to Google.`
      },
      {
        title: `Integrating Payment & Shipping`,
        description: `We setup & assist you with supported payment & shipping integrations right into your site.`
      },
      {
        title: `Integration with uAfrica Shipping`,
        description: `If applicable.`
      },
      {
        title: `Product Content`,
        description: `We'll import all your products for you based off the product data sheet that you'll fill in for us.`
      },
      {
        title: `Basic Collection Setup`,
        description: `We will setup basic collections based on your product catalogue.`
      },
      {
        title: `Training & Expert Consultation`,
        description: `We will train you and assist you in using Shopify's content management system.`
      }
    ]
  },
  {
    packageName: <><>Shopify Pro Store</>
    </>,
    price: `$ 2700 / R 39 500`,
    goal: <>
      Create a Unique and fully functional ecommerce store, branded with your unique identity, and more advanced features.
      Creating a <b> user experience that stands out from the rest.</b>
      <br /><br />
      With the budget of the Shopify Pro Store, we will be able to do advanced theme customizations and functionality that
      helps your business succeed.
    </>,
    features: [
      {
        title: `Online Store Consultation`,
        description: `We guide you throughout the project with best-practices and ecommerce insights.`
      },
      {
        title: `Full Page Review & Analysis`,
        description: `If applicable.`
      },
      {
        title: `Shopify Online Store`,
        description: `Integrated Cutting Edge Content Management Software.`
      },
      {
        title: `Cloud Hosted CDN Network`,
        description: `Superior performance from anywhere in the world & secure with SSL.`
      },
      {
        title: `Advanced Reporting & Analytics`,
        description: `View important Data Points & Measure what matters to you.`
      },
      {
        title: `Domain & Hosting`,
        description: `We help you setup or transfer the domain.`
      },
      {
        title: `Comprehensive theme customization`,
        description: `We ensure the site suits your brand including advanced customizations in terms of layout and features.`
      },
      {
        title: `Advanced Navigation Setup`,
        description: `We ensure a flawless User Experience, helping your customers find what they want & need, right away. `
      },
      {
        title: `Content Pages added`,
        description: `About Us, Contact Us, Blog pages.`
      },
      {
        title: `Comprehensive SEO`,
        description: `We fine tune your site to get the best out of Google Search Listings.`
      },
      {
        title: `Integrating Payment & Shipping`,
        description: `We setup & assist you with supported payment & shipping integrations right into your site.`
      },
      {
        title: `Integration with uAfrica Shipping`,
        description: `If applicable.`
      },
      {
        title: `Product Content`,
        description: `We'll add up to 50 Products Manually.Just provide us with the images and information, and we'll make sure that your products stand out on your site. Got more? We'll import all your products for you based off a product data sheet.`
      },
      {
        title: `Advanced Collection Setup`,
        description: `We will setup advanced collections, allowing you to automatically catalogue your products.`
      },
      {
        title: `Training & Expert Consultation`,
        description: `We will train you and assist you in using Shopify's content management system.`
      },
      {
        title: `Additional Sales Channels`,
        description: `We will help you setup selling via Facebook, Instagram, Google, and more.`
      }
    ]
  },
  {
    packageName: <><>Shopify Custom Pro Store</>
    </>,
    price: `$ 4200 / R 62 000`,
    goal: <>
      Our bespoke solution to create your unique online sales platform. Everything that the Pro Store offers plus
      budget allocations for <b>unique customizations in design, functionality</b>, data management & 3rd party integrations.
      <br /><br />
      With this package we share all our insights about ecommerce to sell to your target market.
    </>,
    features: [
      {
        title: `Comprehensive Online Store Consultation`,
        description: `We discuss all the options & creative direction needed for your store to stand out.`
      },
      {
        title: `Full Page Review & Analysis`,
        description: `If applicable.`
      },
      {
        title: `Shopify Online Store`,
        description: `Integrated Cutting Edge Content Management Software.`
      },
      {
        title: `Cloud Hosted CDN Network`,
        description: `Superior performance from anywhere in the world & secure with SSL.`
      },
      {
        title: `Custom Reporting & Analytics`,
        description: `Create your own custom reports & measure your stores' success.`
      },
      {
        title: `Domain & Hosting`,
        description: `We help you setup or transfer the domain.`
      },
      {
        title: `Comprehensive theme customization`,
        description: `We ensure the site suits your brand including advanced customizations in terms of layout and features.`
      },
      {
        title: `Custom Design & Functionality`,
        description: `We set extra time allocations for revisions, custom functionality & custom design`
      },
      {
        title: `Advanced Navigation Setup`,
        description: `We ensure a flawless User Experience, helping your customers find what they want & need, right away. `
      },
      {
        title: `Content Pages added`,
        description: `About Us, Contact Us, Blog pages. - Option for custom designed Content Pages.`
      },
      {
        title: `Comprehensive SEO`,
        description: `We fine tune your site to get the best out of Google Search Listings.`
      },
      {
        title: `Integrating Payment & Shipping`,
        description: `We setup & assist you with supported payment & shipping integrations right into your site.`
      },
      {
        title: `Integration with uAfrica Shipping`,
        description: `If applicable.`
      },
      {
        title: `Product Content`,
        description: `We'll add up to 50 Products Manually.Just provide us with the images and information, and we'll make sure that your products stand out on your site. Got more? We'll import all your products for you based off a product data sheet.`
      },
      {
        title: `Custom Data Management`,
        description: `Got complicated Data about products, customers, or collections? We can help you transform your data into useful information.`
      },
      {
        title: `Advanced Collection Setup`,
        description: `We will setup advanced collections, allowing you to automatically catalogue your products.`
      },
      {
        title: `Training & Expert Consultation`,
        description: `We will train you and assist you in using Shopify's content management system.`
      },
      {
        title: `Additional Sales Channels`,
        description: `We will help you setup selling via Facebook, Instagram, Google, and more.`
      }
    ]
  }
];

const Pricing: FC = () => {
  return (
    <>
      <Section id="pricing" fullscreen background="var(--color-grey-bg-2)" style={{ zIndex: 0 }}>
        <Header textAlign="center" mb={8}>
          <h1>Simple Pricing for your new Store.</h1>
          <h2 className="h4">
            Plans for every business — big or small. <br />
            Choose the Shopify Package that suits your needs.
          </h2>
        </Header>
        <Main d="grid" gridTemplateColumns={[`1fr`, `repeat(2,minmax(0,1fr))`, `repeat(3,minmax(0,1fr))`]} gridGap={5}>
          {PricingData.map(({ packageName, price, goal, features }, i) => (
            <Card key={i} title="Starter" clickable>
              <H3 fz={4}
                  fontWeight={600}
                  lineHeight={1.6}
                  whiteSpace="nowrap"
                  letterSpacing="-0.03em"
                  d="flex"
                  align="center"
                  justify="space-between">
                {packageName}<FiArrowRight color="var(--primary)" />
              </H3>
              <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>From:</Small>
              <H3 fz={18} letterSpacing="-0.03em" mt={0}>{price}</H3>
              <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Goal:</Small>
              <P color="--color-text-faded" fz={14} mt={0}>
                {goal}
              </P>
              <Hr borderBottom="--border" my={4} />
              <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Details:</Small>
              <Ul d="flex" direction="column">
                {features.map(({ title, description }) => (
                    <Li key={title} d="grid" gridTemplateColumns="24px 1fr" mb={3}>
                      <I color="--secondary" mt={0.5}><FiCheck /></I>
                      <Div>
                        <H4 fz={14} lineHeight={1.3} fontWeight={500}>{title}</H4>
                        <P m={0} fz={12} color="--color-text-faded">{description}</P>
                      </Div>
                    </Li>
                  )
                )}
              </Ul>
            </Card>
          ))}
        </Main>
      </Section>
      <Section skew={-2} fullscreen background="var(--primary)" py="48px">
        <GetStarted />
      </Section>
      <Section id="blog-preview" background={<Topography />} backgroundOpacity={0.03} py="32px" />
    </>
  );
};

export default Pricing;