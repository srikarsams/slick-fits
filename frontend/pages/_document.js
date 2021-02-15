import Document, { Html, Head, NextScript, Main } from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html lang="en-IN">
        <Head>
          <title>Slick Fits</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
