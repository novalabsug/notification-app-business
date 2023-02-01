import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/fontawesome/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/fontawesome/css/brands.css" />
        <link rel="stylesheet" href="/assets/fontawesome/css/solid.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
