import Head from "next/head";

import GridHero from "../components/Home/GridHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toola Technical Solutions</title>
        <meta
          name="description"
          content="Home Page for Toola Technical Solutions"
        />
        <meta property="og:title" content="Toola Technical Solutions" />
        <meta
          property="og:description"
          content="Home Page for Toola Technical Solutions"
        />
      </Head>
      <GridHero />
    </>
  );
}
