import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta charSet="UTF-8" />
          {process.env.NODE_ENV === "production" ? (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0DB6MY3J4'" />
              <script async src="/google-analytics.js" />
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