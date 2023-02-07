/* eslint-disable @next/next/no-script-component-in-head */
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import MobileResponsiveOverlay from "../components/MobileResponsiveOverlay";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Analytics></Analytics>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GWHSW31S1C"
      ></Script>
      <Script
        id="show-banner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GWHSW31S1C');`,
        }}
      />
      <MobileResponsiveOverlay></MobileResponsiveOverlay>
      <Head>
        <title>Nageshwara sairam</title>
        <meta name="title" content="Nageshwara sairam" />
        <meta
          name="description"
          content="Former Senior Software Engineer at Flipkart. Currently Graduate Student in MS in Information Systems at Northeastern University."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nageshsairam.com" />
        <meta property="og:title" content="Nageshwara sairam" />
        <meta
          property="og:description"
          content="Former Senior Software Engineer at Flipkart. Currently Graduate Student in MS in Information Systems at Northeastern University."
        />
        <meta property="og:image" content={"/preview.png"} />

        <meta property="twitter:card" content="website" />
        <meta property="twitter:url" content="https://nageshsairam.com" />
        <meta property="twitter:title" content="Nageshwara sairam" />
        <meta
          property="twitter:description"
          content="Former Senior Software Engineer at Flipkart. Currently Graduate Student in MS in Information Systems at Northeastern University."
        />
        <meta property="twitter:image" content={"/preview.png"}></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
