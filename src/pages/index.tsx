import Head from "next/head";
import HomePage from "../components/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nagesh Sairam</title>
        <meta
          name="description"
          content="Senior Frontend Engineer with 4+ years of experience as a software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
    </>
  );
}
