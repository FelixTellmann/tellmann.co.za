import Topography from "public/topography.svg";
import React, { FC } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { GetStarted, Section } from "../components";
import { Card } from "../components/card";
import { Div, H3, H4, Header, Hr, I, Li, Main, P, Small, Ul } from "../components/html-elements";

const PricingData = [
  {
    package: `Shopify Starter Setup`,
    goal: <>
      Create a fully funtional ecommerce store that is branded to suit your unique identity. <b>Fastest and most cost-effective </b>
      solution to suit all essential needs for a great online shopping experience. <br /><br />
      We will cover all the complex parts of getting you up and running and guide you through the easier tasks.
    </>,
    features: [
      {
        title: `Full Page Review & Analysis`,
        description: `If applicable`
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
          <Card title="Starter" clickable>
            <H3 fz={4}
                fontWeight={600}
                lineHeight={1.6}
                whiteSpace="nowrap"
                letterSpacing="-0.03em"
                d="flex"
                align="center"
                justify="space-between">
              Shopify Starter Setup <FiArrowRight color="var(--primary)" />
            </H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>From:</Small>
            <H3 fz={18} letterSpacing="-0.03em" mt={0}>$ 1100 / R 16 500</H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Goal:</Small>
            <P color="--color-text-faded" fz={14} mt={0}>
              {PricingData[0].goal}
            </P>
            <Hr borderBottom="--border" my={4} />
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Details:</Small>
            <Ul d="flex" direction="column">
              <Li d="grid" gridTemplateColumns="24px 1fr" mb={3}>
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
              <Li d="grid" gridTemplateColumns="24px 1fr">
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
            </Ul>
          </Card>
          <Card title="Starter" clickable>
            <H3 fz={4}
                fontWeight={600}
                lineHeight={1.6}
                whiteSpace="nowrap"
                letterSpacing="-0.03em"
                d="flex"
                align="center"
                justify="space-between">
              Shopify Starter Setup <FiArrowRight color="var(--primary)" />
            </H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>From:</Small>
            <H3 fz={18} letterSpacing="-0.03em" mt={0}>$ 1100 / R 16 500</H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Goal:</Small>
            <P color="--color-text-faded" fz={14} mt={0}>
              {PricingData[0].goal}
            </P>
            <Hr borderBottom="--border" my={4} />
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Details:</Small>
            <Ul d="flex" direction="column">
              <Li d="grid" gridTemplateColumns="24px 1fr" mb={3}>
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
              <Li d="grid" gridTemplateColumns="24px 1fr">
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
            </Ul>
          </Card>
          <Card title="Starter" clickable>
            <H3 fz={4}
                fontWeight={600}
                lineHeight={1.6}
                whiteSpace="nowrap"
                letterSpacing="-0.03em"
                d="flex"
                align="center"
                justify="space-between">
              Shopify Starter Setup <FiArrowRight color="var(--primary)" />
            </H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>From:</Small>
            <H3 fz={18} letterSpacing="-0.03em" mt={0}>$ 1100 / R 16 500</H3>
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Goal:</Small>
            <P color="--color-text-faded" fz={14} mt={0}>
              {PricingData[0].goal}
            </P>
            <Hr borderBottom="--border" my={4} />
            <Small mb={3} color="--color-text-faded" textTransform="uppercase" fz={12} fontWeight={700} mt={4}>Details:</Small>
            <Ul d="flex" direction="column">
              <Li d="grid" gridTemplateColumns="24px 1fr" mb={3}>
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
              <Li d="grid" gridTemplateColumns="24px 1fr">
                <I color="--secondary"><FiCheckCircle /></I>
                <Div>
                  <H4 fz={14} lineHeight={1.3} fontWeight={500}>Feature</H4>
                  <P m={0} fz={12} color="--color-text-faded">Feature subtitle</P>
                </Div>
              </Li>
            </Ul>
          </Card>
        </Main>
      </Section>
      <Section skew={-2} fullscreen background="var(--primary)" py="48px">
        <GetStarted />
      </Section>
      <Section id="blog-preview" background={<Topography />} backgroundOpacity={0.03} py="32px">
        {/* <BlogSummary postData={postData} /> */}
      </Section>
    </>
  );
};

export default Pricing;