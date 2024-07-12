"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

import useCycleGradients from "@/src/hooks/useCycleGradients";
import SvgArrow from "../ui/SvgArrow";
import Ticker from "../ui/Ticker";
import WelcomeLinks from "./WelcomeLinks";

export default function Hero() {
  //cycle gradients
  const currentGradient = useCycleGradients();

  useEffect(() => {
    const staggerDelay = 0.2;
    // The marquee relies on this, need to detach
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
    <>
      {/* //so we can dynamically change the grid layout via MQ 
            height calc us based off of the header-clip width
      */}
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            height: calc(100vh - 250px)
          }

          @media (min-width: 1800px) {
            .grid-container {
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            }
          }
        `}
      </style>
      <section
        id="section-ticker"
        className=" bg-black w-full overflow-hidden z-0"
      >
        <div
          id="header-clip"
          style={{ clipPath: "polygon(0 0%, 100% 0, 100% 24%, 0 98%)" }}
          className="bg-white relative h-64 flex  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
        >
          <div
            style={{
              clipPath: "polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)",
              backgroundImage: currentGradient,
              position: "absolute",
              left: 0,
              top: "18%",
              right: 0,
              height: "100%",
              zIndex: 9,
            }}
          ></div>
          <div className="">
            <Ticker baseVelocity={1}>UX Designer Web Developer </Ticker>
          </div>
        </div>
      </section>
      <section id="section-welcome">
        <div className="grid-container grid lg:grid-cols-8   bg-black">
          <div
            id=" container-welcome-welcome"
            className="row-start-1  col-start-2 col-end-6 flex justify-center 3xl:row-start-2 mt-10"
          >
            <div id="welcome" className="flex items-center 3xl:items-start">
              <h3 className="text-h2-clamp leading-snug mr-4">
                Welcome! I&apos;m
              </h3>
            </div>
            <SvgArrow />
          </div>
          <div
            id="container-welcome-name"
            className="row-start-2 col-start-4 col-end-6 flex flex-col  3xl:justify-center 3xl:row-start-3 mt-4"
          >
            <h1 className="text-h1-clamp mt-0 mb-0 leading-none tracking-tighter ">
              Hunter
            </h1>
            <WelcomeLinks />
          </div>
        </div>
      </section>
    </>
  );
}
