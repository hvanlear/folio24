"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

export default function GridSmallBackgroundDemo() {
  useEffect(() => {
    const staggerDelay = 0.2;

    document
      .querySelectorAll("#hero h3, #hero h1, #hero h2")
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
      {/* Radial gradient for the container to give a faded look */}

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div id="hero" className="pl-96 flex flex-col">
        <div className="">
          <h3
            className="text-black text-3xl"
            style={{ opacity: 0, scale: 1, filter: "blur(20px)" }}
          >
            Welcome to 🖖
          </h3>
        </div>

        <h1
          className=" sm:text-10xl font-bold relative z-20 text-black "
          style={{ opacity: 0, scale: 1, filter: "blur(20px)" }}
        >
          Toola
        </h1>
        <h2
          className="text-black text-3xl"
          style={{ opacity: 0, scale: 1, filter: "blur(20px)" }}
        >
          Modern Technology Solutions
        </h2>
      </div>
    </div>
  );
}
