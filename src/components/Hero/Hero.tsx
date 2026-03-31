"use client";

import ClippedGradientTicker from "../ui/ClippedGradientTicker/ClippedGradientTicker";
import SectionCardLayout from "../ui/SectionCardLayout";
import WelcomeLinks from "./WelcomeLinks";
import TimeDisplay from "./TimeDisplay";
import WeatherDisplay from "./WeatherDisplay";

import useWindowSize from "@/src/hooks/useWindowSize";
import { useScroll, useTransform, useSpring } from "framer-motion";

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
      <SectionCardLayout
        heading="Welcome"
        headingMotionProps={{
          style: { y: springY },
          initial: { y: -100, opacity: 0 },
          animate: { y: 30, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        innerClassName="3xl:w-[55%] 2xl:min-h-[89vh] min-h-[50rem]"
      >
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
      </SectionCardLayout>
    </main>
  );
}
