import GoogleFonts from "next-google-fonts";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { createContext, FC, useState } from "react";
import "reset-css/sass/_reset.scss";
import "styles/default.scss";
import "styles/helper.scss";
import "styles/theme.scss";
import useColorTheme from "use-color-theme";
import { BreakpointProvider } from "use-styled-system";
import { HeaderDesktop, HeaderMobile } from "components";

export const ThemeContext = createContext({ theme: "" });
const title = "Tellmann - E-commerce Web development Studio";
const description = "Creator of things that live on the internet - Web developer, writer and entrepreneur.";

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme("light-theme", { classNames: ["light-theme", "dark-theme"] });
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(false);
  
  return (
    <>
      <>
        <DefaultSeo
          title={title}
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
                height: 630
              }
            ]
          }}
          twitter={{
            handle: "@Tellmann",
            site: "@FelixTellmann",
            cardType: "summary_large_image"
          }}
          canonical={`https://www.tellmann.co.za/${router.pathname}`}
        />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;700&display=swap" />
      </>
      <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
        <ThemeContext.Provider value={{ theme: colorTheme.value }}>
          <header>
            <HeaderMobile theme={colorTheme.value} toggleColor={colorTheme.toggle} />
            <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeContext.Provider>
      </BreakpointProvider>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          display: flex;
          background-color: var(--header-background);
          box-shadow: var(--header-border-bottom);
          transition: box-shadow .1s ease 0s;
        }

        main {
          min-height: calc(200vh - var(--header-height));
        }
      `}</style>
    </>
  );
};

export default Root;