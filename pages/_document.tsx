import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Nextra-Frontend-Docs",
    description: "Nextra Docs로 구성한 프론트엔드 학습 내용 정리",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
