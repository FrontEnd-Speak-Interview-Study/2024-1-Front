import "nextra-theme-docs/style.css";
import Head from "next/head";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
