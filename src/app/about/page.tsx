"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import AnimatedSection from "@/src/components/ui/AnimatedSection";

import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, -400], {
    clamp: false,
    ease: (t) => {
      // Adjust this breakpoint as needed
      if (width <= 768) {
        return Math.min(t, 124.97 / 800); // Limit to -124.97px on smaller screens
      }
      return Math.min(t, 0.5); // Original limit for larger screens
    },
  });

  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  const { gradient } = useCycleGradients();
  return (
    <>
      <main className="h-[85vh] relative">
        <section
          id="section-ticker"
          className=" bg-white w-full overflow-hidden z-0"
        >
          <ClippedGradientTicker
            containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
            gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
            gradientTop="18%"
            tickerWords={["Traveler", "Student", "Husband", "Brother"]}
            gradient={gradient}
            isDark={true}
          />
        </section>
        <div className="bottom-0 h-full  w-full">
          <motion.div
            className="text-30xl  text-stone-950 font-bold z-0"
            style={{ y: springY }}
          >
            <h1 className="leading-none">Hello!</h1>
          </motion.div>
          <section className="bg-black h-full">
            <h1>hello</h1>
          </section>
        </div>
      </main>
    </>
  );
}
