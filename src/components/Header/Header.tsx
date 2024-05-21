"use client";

import { animate } from "framer-motion";

import { animationStyles } from "../../utils/styleHelpers";
import { useEffect } from "react";

import SvgShape from "../ui/SvgShape";
import Ticker from "../ui/Ticker";

export default function Header() {
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
    <>
      <div className=" bg-black-2 h-72  w-full overflow-hidden">
        <div
          id="header-clip"
          style={{ clipPath: "polygon(0 0%, 100% 0, 100% 24%, 0 98%)" }}
          className="bg-white relative h-64 flex  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
        >
          <div
            style={{
              clipPath: "polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)",
              backgroundImage:
                "linear-gradient(90deg, rgba(251,237,150,1) 0%, rgba(171,236,214,1) 100%)",
              position: "absolute",
              left: 0,
              top: "18%",
              right: 0,
              height: "100%",
              zIndex: 9,
            }}
          ></div>
          <div className="text-lg text-black-2 ">
            <Ticker tickerClass="row-start-4 sm:row-start-5" />
          </div>
        </div>
      </div>
      <div
        className="min-h-screen grid grid-cols-8 grid-rows-8  bg-black-2"
        style={{ gridTemplateRows: ".5fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr" }}
      >
        <div
          id=" container-welcome-welcome"
          className="row-start-1 col-start-2 col-end-6 flex items-center justify-center "
        >
          <div id="welcome" className="flex ">
            <h3 className="text-h2-clamp leading-snug mr-4">Welcome! Im</h3>
          </div>
          <SvgShape />
        </div>
        <div
          id="container-welcome-name"
          className="row-start-2 col-start-4 flex items-start  "
        >
          <p className="text-h1-clamp mt-0 mb-0 leading-none ">Hunter</p>
        </div>
        <div
          id="container-welcome-links"
          className="row-start-3 col-start-4 flex items-start flex-row"
        >
          <p>Resume</p>
          <p>Resume</p>
        </div>
      </div>
    </>
  );
}
