"use client";

import { animate } from "framer-motion";
import { animationStyles } from "../../utils/styleHelpers";
import { useEffect } from "react";
import Button from "../ui/Button";
import Ticker from "../ui/Ticker";

export default function GridHero() {
  const initialFadeIn = animationStyles.initialFadeIn;

  useEffect(() => {
    const staggerDelay = 0.2;

    document
      .querySelectorAll(
        "#hero h3,.byline-container, #hero h1, #hero h2, .button-container-hero"
      )
      .forEach((item, i) => {
        animate(
          item,
          { opacity: 1, scale: 1, filter: "blur(0px)" },
          { duration: 0.2, delay: i * staggerDelay }
        );
      });
  }, []);

  return (
    <div className="h-[90vh] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative grid grid-rows-6 items-center justify-between ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div
        id="hero"
        className=" w-full grid justify-center row-start-3 row-end-4"
      >
        <div className="mb-5">
          <h3
            className="text-black text-h2-clamp leading-snug"
            style={initialFadeIn}
          >
            welcome 🖖
          </h3>
        </div>

        <h1
          className="leading-none text-h1-clamp  font-bold relative z-20 text-black "
          style={initialFadeIn}
        >
          Toola
        </h1>
        <div className="byline-container mt-5 ml-8" style={initialFadeIn}>
          <h2 id="byline" className="text-black text-h2-clamp leading-snug ">
            Modern Technology Solutions
          </h2>
        </div>
      </div>
      <Ticker tickerClass="row-start-5" />
      <div
        className="button-container-hero flex flex-col sm:flex-row gap-8 items-center justify-center mt-16 row-start-6"
        style={initialFadeIn}
      >
        <Button id="hero-button" variant="lit" text="Say Hello!" />
        <span className="text-black ">More Coming Soon</span>
      </div>
    </div>
  );
}