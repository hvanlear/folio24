//TODO COMBINE THIS and other version
// Refactor Footer directory

"use client";
import ClippedGradientTicker from "../ui/ClippedGradientTicker/ClippedGradientTicker";

import useCycleGradients from "@/src/hooks/useCycleGradients";

export default function Footer() {
  const { gradient } = useCycleGradients();

  return (
    <>
      {/* //so we can dymaically change the grid layout via MQ 
            height calc us based off of the header-clip width
      */}
      <section
        id="section-ticker"
        className=" bg-black  w-full overflow-hidden"
      >
        <ClippedGradientTicker
          containerClipPath="polygon(0px 68%, 100% 0px, 100% 100%, 0px 100%)"
          gradientClipPath="polygon( 0% 0%, 100% 0%, 100% 13%, -68% 129%)"
          gradientTop="-5%"
          tickerWords={["Thanks!", "Take Care", "👋", "Adios"]}
          gradient={gradient}
        />
      </section>
    </>
  );
}
