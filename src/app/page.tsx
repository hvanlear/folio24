import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/Header/Hero";
import WorkSection from "../components/Work/WorkSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WorkSection />
      <Contact />
      <Footer />
    </>
  );
}
