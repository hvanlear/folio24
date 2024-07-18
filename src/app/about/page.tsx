"use client";

import ClippedGradientTickerDark from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTickerDark";
import useCycleGradients from "@/src/hooks/useCycleGradients";

export default function AboutPage() {
  const { gradient } = useCycleGradients();
  return (
    <>
      <section
        id="section-ticker"
        className=" bg-white w-full overflow-hidden z-0"
      >
        <ClippedGradientTickerDark
          containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
          gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
          gradientTop="18%"
          tickerWords={["Traveler", "Student", "Husband", "Brother"]}
          gradient={gradient}
        />
      </section>
      <h1 className="text-black">About</h1>
    </>
  );
}
