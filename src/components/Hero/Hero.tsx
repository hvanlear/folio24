"use client";

import ClippedGradientTicker from "../ui/ClippedGradientTicker/ClippedGradientTicker";
import WelcomeLinks from "./WelcomeLinks";
import TimeDisplay from "./TimeDisplay";
import WeatherDisplay from "./WeatherDisplay";

import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200], {
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

  return (
    <main className="relative">
      <section
        id="section-ticker"
        className="w-full overflow-hidden z-0"
      >
        <ClippedGradientTicker
          containerClipPath="polygon(0 0%, 100% 0, 100% 25%, 0 98%)"
          gradientTop="18%"
          tickerWords={[
            "UX Engineer",
            "Web Developer",
            "UI Designer",
            "User Advocate",
          ]}
          isDark={true}
        />
      </section>
      <div className="flex w-full justify-center">
        <div className="w-full 3xl:w-[55%] flex items-center flex-col 2xl:min-h-[89vh] min-h-[50rem]">
          <motion.div
            className="-z-10 pl-4 w-full"
            style={{ y: springY }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="leading-none text-30xl tracking-tighter text-stone-950 font-bold">
              Welcome
            </h1>
          </motion.div>
          <section className="w-full h-full">
            <div className="bg-stone-50 z-10 border-x-2 border-t-2 border-stone-600 rounded-tl-[5rem] rounded-tr-[5rem] w-full h-full flex flex-col justify-center">
              <div className="md:p-24 p-12 flex flex-col gap-8">
                <h2 className="text-stone-950 text-h2-clamp">
                  I&apos;m Hunter Van Lear
                </h2>
                <WelcomeLinks />
                <div className="flex items-start gap-6">
                  <TimeDisplay />
                  <WeatherDisplay />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-stone-50 top-0 absolute w-full -z-20 min-h-[100vh]" />
    </main>
  );
}
