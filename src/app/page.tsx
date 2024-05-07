import Head from "next/head";

import GridHero from "../components/Home/GridHero";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <GridHero />
      <div className="relative" style={{ minHeight: "100vh" }}>
        <ContactForm />
        <Footer />
        <svg
          className="absolute bottom-0 w-full z-0"
          width="953"
          height="500"
          viewBox="0 0 953 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-48 199C-48 105.692 -48 59.038 -19.2639 29.8469C-18.8965 29.4737 -18.5263 29.1035 -18.1531 28.7361C11.038 0 57.692 0 151 0H848C941.308 0 987.962 0 1017.15 28.7361C1017.53 29.1035 1017.9 29.4737 1018.26 29.8469C1047 59.038 1047 105.692 1047 199C1047 292.308 1047 338.962 1018.26 368.153C1017.9 368.526 1017.53 368.897 1017.15 369.264C987.962 398 941.308 398 848 398H151C57.692 398 11.038 398 -18.1531 369.264C-18.5263 368.897 -18.8965 368.526 -19.2639 368.153C-48 338.962 -48 292.308 -48 199Z"
            fill="#212529"
          />
        </svg>
      </div>
    </>
  );
}
