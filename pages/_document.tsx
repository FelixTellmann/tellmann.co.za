import { flushToReact } from "next-styled-system";
// eslint-disable-next-line @next/next/no-document-import-in-page
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
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-var-latin.woff2"
            rel="preload"
            type="font/woff2"
          />
          {styles}
          {styles2}
          <meta content="strict-origin-when-cross-origin" name="referrer" />
          <meta charSet="UTF-8" />
          <link href="/favicon/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
          <link href="/favicon/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
          <link href="/favicon/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
          <link href="/favicon/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/favicon/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
          <link href="/favicon/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/favicon/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
          <link href="/favicon/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
          <link href="/favicon/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
          <link
            href="/favicon/android-icon-192x192.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
          <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/favicon/manifest.json" rel="manifest" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
          <meta content="#ffffff" name="theme-color" />
          {process.env.NODE_ENV === "production"
            ? <>
                <meta
                  content="ABRxARbtP_hcsbUThM6pn40bQryJhAnC9JqWMg7TidY"
                  name="google-site-verification"
                />
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0DB6MY3J4" />
                <script async src="/google-analytics.js" />

                {/* Global site tag (gtag.js) - Google Ads: 862366423 */}
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-862366423" />
                {/* eslint-disable-next-line react/no-danger */}
                <script
                  dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'AW-862366423');
                          `,
                  }}
                />
              </>
            : null}
        </Head>
        <body>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/colorTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
