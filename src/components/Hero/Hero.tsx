"use client";

import useCycleGradients from "@/src/hooks/useCycleGradients";
import SvgArrow from "../ui/SvgArrow";
import ClippedGradientTicker from "../ui/ClippedGradientTicker/ClippedGradientTicker";
import WelcomeLinks from "./WelcomeLinks";

export default function Hero() {
  //cycle gradients
  const { gradient } = useCycleGradients();

  return (
    <>
      {/* //so we can dynamically change the grid layout via MQ 
            height calc us based off of the header-clip width
      */}
      <style>
        {`
          .grid-container {
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            height: 100vh
          }


        `}
      </style>
      <section
        id="section-ticker"
        className=" bg-stone-950 w-full overflow-hidden z-0"
      >
        <ClippedGradientTicker
          containerClipPath="polygon(0 0%, 100% 0, 100% 25%, 0 98%)"
          gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
          gradientTop="18%"
          tickerWords={[
            "UX Engineer",
            "Web Developer",
            "UI Designer",
            "User Advocate",
          ]}
          gradient={gradient}
        />
      </section>
      <section id="section-welcome w-full">
        <div className="grid-container md:grid lg:grid-cols-8 flex flex-col items-center   bg-stone-950">
          <div
            id=" container-welcome-welcome"
            className="row-start-1  col-start-2 col-end-6 flex justify-center 3xl:row-start-2 mt-10"
          >
            <div
              id="welcome"
              className="flex  items-center md:items-center 3xl:justify-center mb-4 overflow-visible w-full"
            >
              <h3 className="text-h2-clamp leading-snug mr-3 md:mr-5">
                Welcome! I&apos;m
              </h3>
              <SvgArrow style="vertical" />
            </div>
          </div>
          <div
            id="container-welcome-name"
            className="row-start-2 col-start-3 col-end-6 flex flex-col 3xl:col-start-4 3xl:row-start-3 3xl:mb-24 md:mt-0"
          >
            <h1 className="text-h1-clamp mt-0 mb-0 leading-none  ">Hunter</h1>
            <WelcomeLinks />
          </div>
        </div>
      </section>
    </>
  );
}
