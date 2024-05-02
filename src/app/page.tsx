import Head from "next/head";

import GridHero from "../components/Home/GridHero";
import ContactForm from "../components/Home/ContactForm";

export default function Home() {
  return (
    <>
      <GridHero />
      <div style={{ minHeight: "100vh" }}>
        <div style={{ height: "20vh" }} /> <ContactForm />
      </div>
    </>
  );
}
