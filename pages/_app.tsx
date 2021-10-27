import { Footer, Header, navData, Sidebar } from "components";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { createContext, FC, useEffect } from "react";
import "reset-css/sass/_reset.scss";
import { typography, variables } from "styles";
import "styles/default.scss";
import "styles/helper.scss";
import "styles/mdx.scss";
import "styles/theme.scss";

import useColorTheme from "use-color-theme";

export const ThemeContext = createContext({ theme: "" });
const title = "Tellmann - E-commerce Web development";
const description = `Web-design, Shopify & Vend experts located in Cape Town. We specialize in creating ecommerce websites that drive interaction and sales.`;

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme("light-theme", { classNames: ["light-theme", "dark-theme"] });
  const router = useRouter();
  useEffect(() => {
    process.env.NODE_ENV === `production` &&
      console.log(
        "%c" +
          "HEY YOU! I see you sneaking in our code. Our Page is custom made, something we've worked hard on so please do not copy. " +
          "LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop us an email at code@tellmann.co.za !",
        "background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);"
      );
  });
  return (
    <>
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
        </Head>
        <DefaultSeo
          canonical={`https://www.tellmann.co.za/${router.pathname}`}
          description={description}
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.tellmann.co.za/",
            site_name: "Tellmann",
            title,
            description,
            images: [
              {
                url: "https://www.tellmann.co.za/images/og-default.jpg",
                alt: title,
                width: 1200,
                height: 630,
              },
            ],
          }}
          title={title}
          twitter={{
            handle: "@Tellmann",
            site: "@FelixTellmann",
            cardType: "summary_large_image",
          }}
        />
      </>
      <ThemeContext.Provider value={{ theme: colorTheme.value }}>
        {router.pathname.includes("examples/")
          ? <>
              <div className="example">
                <Component {...pageProps} />
              </div>
            </>
          : <>
              <Header colorTheme={colorTheme} currentRoute={router.pathname} />
              <main>
                <Sidebar left {...navData} />
                <div className="page">
                  <Component {...pageProps} />
                </div>
                <Sidebar right {...navData} />
              </main>
              <Footer colorTheme={colorTheme} />
            </>}
      </ThemeContext.Provider>
      <style jsx>{`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 100 900;
          font-display: optional;
          src: url(/fonts/inter-var-latin.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
            U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        main {
          min-height: calc(60vh - var(--header-nav-height));
          display: block;
          max-width: 100%;

          @media screen and (min-width: 960px) {
            display: grid;
            grid-template-columns: var(--header-nav-height) 1fr var(--header-nav-height);
            grid-template-areas: " . page . ";
          }
        }

        .page {
          grid-area: page;
        }
      `}</style>
      <style global jsx>
        {variables}
      </style>
      <style global jsx>
        {typography}
      </style>
      <style global jsx>{`
        .example {
          background: var(--color-remark-code-bg);
          padding: 2.4rem;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Root;
