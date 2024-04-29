"use client";

import { animate } from "framer-motion";
import { animationStyles } from "../utils/styleHelpers";
import { useEffect } from "react";
import Button from "./ui/Button";

export default function GridHere() {
  const initialFadeIn = animationStyles.initialFadeIn;

  useEffect(() => {
    const staggerDelay = 0.2;

    document
      .querySelectorAll(
        "#hero h3,#byline, #hero h1, #hero h2, .button-container-hero"
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
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-start pl-11">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div id="hero" className="space-y-4  flex-col">
        <div className="">
          <h3
            className="text-black text-3xl leading-snug"
            style={initialFadeIn}
          >
            welcome 🖖
          </h3>
        </div>

        <h1
          className="leading-none sm:text-10xl font-bold relative z-20 text-black "
          style={initialFadeIn}
        >
          Toola
        </h1>
        <h2
          id="byline"
          className="text-black text-3xl leading-snug"
          style={initialFadeIn}
        >
          Modern Technology Solutions
        </h2>
        <div
          className="button-container-hero flex flex-row gap-4 items-center"
          style={initialFadeIn}
        >
          <Button id="hero-button" variant="lit" text="Say Hello!" />
          <span className="text-black">More Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
