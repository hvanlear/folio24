import GridHero from "./GridHero";
import Button from "../ui/Button";
import Ticker from "../ui/Ticker";
import ContactForm from "./ContactForm";

import { animationStyles } from "../../utils/styleHelpers";
import { animate } from "framer-motion";

export default function Home() {
  const initialFadeIn = animationStyles.initialFadeIn;
  return (
    <>
      <GridHero />
      <Ticker />
      <div
        className="button-container-hero flex flex-row gap-8 items-center justify-center mt-16"
        style={initialFadeIn}
      >
        <Button id="hero-button" variant="lit" text="Say Hello!" />
        <span className="text-black ">More b Soon</span>
      </div>
      <p>help</p>
      <ContactForm />
    </>
  );
}
