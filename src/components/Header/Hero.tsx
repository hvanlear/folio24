"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

import RightNav from "./RightNav";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import SvgShape from "../ui/SvgShape";
import Ticker from "../ui/Ticker";

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
      <section
        id="section-ticker"
        className=" bg-black-2  w-full overflow-hidden"
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
          <div className="text-lg text-black-2 ">
            <Ticker tickerClass="row-start-4 sm:row-start-5 h-full" />
          </div>
        </div>
      </section>
      <section id="section-welcome">
        <div
          className=" grid grid-cols-8 grid-rows-8  bg-black-2"
          style={{
            gridTemplateRows: ".5fr 2fr 1fr 1fr ",
            height: "100vh",
          }}
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
          <div className="col-start-8 row-start-1 flex items-center justify-center  ">
            <RightNav />
          </div>

          <div
            id="container-welcome-name"
            className="row-start-2 col-start-4 col-end-6 flex flex-col items-start  "
          >
            <h1 className="text-h1-clamp mt-0 mb-0 leading-none ">Hunter</h1>
            <div
              id="container-welcome-links"
              className="flex items-start flex-row space-x-8 ml-4 mt-4"
            >
              <a className="welcome-links text-h3-clamp" href="#">
                resume
              </a>
              <a className="welcome-links text-h3-clamp" href="#">
                contact me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
