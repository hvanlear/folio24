// Home.tsx
import { LayoutProvider } from "../components/layout/LayoutContext";
import Hero from "../components/Hero/Hero";
import WorkSection from "../components/Work/WorkSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <LayoutProvider>
      <div className="bg-stone-50">
        <Hero />
        <WorkSection />
        <Contact />
        <Footer />
      </div>
    </LayoutProvider>
  );
}
