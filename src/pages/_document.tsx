import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#000" />
      </Head>

      <body lang="fa">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
