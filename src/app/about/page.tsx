"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import AnimatedSection from "@/src/components/ui/AnimatedSection";

import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, -200], {
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
      <main className=" relative h-[100vh]">
        <section id="section-ticker" className=" w-full overflow-hidden z-0">
          <ClippedGradientTicker
            containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
            gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
            gradientTop="18%"
            tickerWords={["Traveler", "Student", "Husband", "Brother"]}
            gradient={gradient}
            isDark={true}
          />
        </section>
        <div className="">
          <motion.div
            className="  text-stone-950 font-bold -z-10 absolute"
            style={{ y: springY }}
          >
            <h1 className="leading-none text-30xl">Hello!</h1>
          </motion.div>
        </div>
        {/* background */}
        <div className="bg-slate-50 top-0 absolute w-full -z-20 h-[100vh]" />
        {/* background */}
        <div className="absolute w-full bg-slate-50 z-10 h-full border-2 top-1/2 border-slate-600">
          <div className=" ">
            <h1 className="text-black">hello</h1>
          </div>
        </div>
      </main>
    </>
  );
}
