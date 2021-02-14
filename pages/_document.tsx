import { flushToReact } from "next-styled-system";

import Document, { Head, Html, Main, NextScript } from "next/document";
import flushStyledJsx from "styled-jsx/server";

class MyDocument extends Document {
  render(): JSX.Element {
    const styles = [...flushToReact()];
    const styles2 = [...flushStyledJsx()];
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {styles}
          {styles2}
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          {process.env.NODE_ENV === "production" ? (
            <>
              <meta name="google-site-verification" content="ABRxARbtP_hcsbUThM6pn40bQryJhAnC9JqWMg7TidY" />
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0DB6MY3J4" />
              <script async src="/google-analytics.js" />
              
              
              {/* Global site tag (gtag.js) - Google Ads: 862366423 */}
              <script async src="https://www.googletagmanager.com/gtag/js?id=AW-862366423" />
              {/* eslint-disable-next-line react/no-danger */}
              <script dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'AW-862366423');
                          `
              }} />
            </>
          ) : null}
        
        </Head>
        <body>
          <script src="/colorTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;