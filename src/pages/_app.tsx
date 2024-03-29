/* eslint-disable @next/next/no-script-component-in-head */
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import MobileResponsiveOverlay from "../components/MobileResponsiveOverlay";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <div className="app-pages">
          <Layout>
            <Head>
              <title>Nageshwara sairam</title>
              <meta name="title" content="Nageshwara sairam" />
              <meta
                name="description"
                content="Senior Frontend Engineer at Flipkart | Full stack developer. Currently Graduate Student in MS in Information Systems at Northeastern University."
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://nageshsairam.com" />
              <meta property="og:title" content="Nageshwara sairam" />
              <meta
                property="og:description"
                content="Senior Frontend Engineer at Flipkart | Full stack developer. Currently Graduate Student in MS in Information Systems at Northeastern University."
              />
              <meta
                property="og:image"
                content={"https://www.nageshsairam.com/preview.png"}
              />

              <meta property="twitter:card" content="website" />
              <meta property="twitter:url" content="https://nageshsairam.com" />
              <meta property="twitter:title" content="Nageshwara sairam" />
              <meta
                property="twitter:description"
                content="Senior Frontend Engineer at Flipkart | Full stack developer. Currently Graduate Student in MS in Information Systems at Northeastern University."
              />
              <meta
                property="twitter:image"
                content={"https://www.nageshsairam.com/preview.png"}
              ></meta>
            </Head>
            <MobileResponsiveOverlay></MobileResponsiveOverlay>
            {page}
          </Layout>
        </div>
      );
    });

  return (
    <>
      <Analytics></Analytics>
      <Script
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-GWHSW31S1C"
      ></Script>
      <script
        defer
        src="https://tag.clearbitscripts.com/v1/pk_5e6f944f1309308434f71dbcb0a18342/tags.js"
        referrerPolicy="strict-origin-when-cross-origin"
      ></script>
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
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
