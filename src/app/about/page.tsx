"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo } from "react";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const [width, height] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, -200], {
    clamp: false,
    ease: (t) => {
      if (width <= 768) {
        return Math.min(t, 124.97 / 800);
      }
      return Math.min(t, 0.5);
    },
  });

  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  const { gradient } = useCycleGradients();

  // Calculate the top position and height based on screen height
  const sectionStyles = useMemo(() => {
    const topPercentage = 38; // You can adjust this percentage
    const topPosition = (topPercentage / 100) * height;
    return {
      top: `${topPosition}px`,
      height: `calc(100% - ${topPosition}px)`,
    };
  }, [height]);

  return (
    <>
      <main className="relative h-[100vh]">
        <section id="section-ticker" className="w-full overflow-hidden z-0">
          <ClippedGradientTicker
            containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
            gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
            gradientTop="18%"
            tickerWords={["Traveler", "Student", "Husband", "Brother"]}
            gradient={gradient}
            isDark={true}
          />
        </section>
        <div className="absolute w-full flex justify-center items-center">
          <motion.div
            className="text-stone-950 font-bold -z-10 relative"
            style={{ y: springY }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 id="heading-about" className="leading-none text-30xl">
              Hello!
            </h1>
          </motion.div>
        </div>
        {/* background */}
        <div className="bg-slate-50 top-0 absolute w-full -z-20 h-[100vh]" />
        {/* background */}
        <section
          id="section-about-main"
          className="absolute w-full flex justify-center "
          style={sectionStyles}
        >
          <div className="bg-slate-50 z-10 border-2 border-slate-600 rounded-tl-[5rem] rounded-tr-[5rem] w-[55%] h-full">
            <h1 className="text-black">hello</h1>
          </div>
        </section>
      </main>
    </>
  );
}
