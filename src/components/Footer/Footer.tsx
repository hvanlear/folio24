//TODO COMBINE THIS and other version
// Refactor Footer directory

"use client";
import ClippedGradientTicker from "../ui/ClippedGradientTicker/ClippedGradientTicker";

export default function Footer() {

  return (
    <>
      {/* //so we can dymaically change the grid layout via MQ 
            height calc us based off of the header-clip width
      */}
      <section
        id="section-ticker"
        className=" bg-stone-950  w-full overflow-hidden"
      >
        <ClippedGradientTicker
          containerClipPath="polygon(0px 68%, 100% 0px, 100% 100%, 0px 100%)"
          gradientTop="-5%"
          tickerWords={["Thanks!", "Take Care", "👋", "Adios"]}
          containerHeight="h-64"
          tickerAlign="end"
          tornEdgeVariant="footer"
          isDark
        />
      </section>
    </>
  );
}
