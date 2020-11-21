import GoogleFonts from "next-google-fonts";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { createContext, FC, useState } from "react";
import "reset-css/sass/_reset.scss";
import "styles/default.scss";
import "styles/helper.scss";
import "styles/theme.scss";
import { IoIosCall, IoIosMail, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import useColorTheme from "use-color-theme";
import { Header } from "components";

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
      <ThemeContext.Provider value={{ theme: colorTheme.value }}>
        
        <Header
          colorTheme={colorTheme}
          logo={{ href: "/", src: "/logo.svg", alt: "Tellmann Logo" }}
          nav={[
            { href: "/", title: "Home", alt: "Hi.", mobile: true },
            { href: "#/about", title: "About", alt: "Who we are" },
            { href: "/work", title: "Work", alt: `What we've done` },
            { href: "/services", title: "Services", alt: `What we can do` },
            { href: "/contact", title: "Contact", alt: `Get in touch`, mobile: true }
          ]}
          navButton={{ href: "/contact", title: "Contact" }}
          address={{
            title: `Visit our Office:`,
            address1: "11th Floor Touchstone House",
            address2: "7 Bree Street",
            city: "Cape Town",
            country: "South Africa"
          }}
          email={`info@tellmann.co.za`}
          tel={`076 031 3590`}
          socialNav={[
            { href: "#Facebook", icon: <IoLogoFacebook title="Facebook"/> },
            { href: "#Github", icon: <IoLogoGithub title="Github"/> },
            { href: "#Instagram", icon: <IoLogoInstagram title="Instagram"/> }
          ]}
          slogan="Your Partners in Online Success"
        />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeContext.Provider>
      <style jsx>{`
        main {
          min-height: calc(200vh - var(--header-height));
        }
      `}</style>
    </>
  );
};

export default Root;