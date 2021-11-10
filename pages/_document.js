import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, ...ctx };
    // const initialProps = await Document.getInitialProps(ctx);
    // return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="Keyword"
            content="shopping, ration, ration near by, grocery, groceries, deal on grocery, cheap grocery"
          />
          <meta
            name="description"
            content="Sabka Bazaar, an online home availablity shop for everyone with amazing deals"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" defer />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
            defer
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mohave:wght@400;500&display=swap"
            rel="stylesheet"
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
