"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import ContactInfoBasic from "@/src/components/Contact/ContactInfoBasic";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import Me from "@/public/images/misc/Me.jpeg";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const [width, height] = useWindowSize();

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

  const { gradient } = useCycleGradients();

  // Calculate the top position based on screen height
  // const containerTopPosition = useMemo(() => {
  //   const topPercentage = 15;
  //   return `${(topPercentage / 100) * height}px`;
  // }, [height]);

  return (
    <>
      <main className="relative ">
        <section id="section-ticker" className="w-full overflow-hidden z-20">
          <ClippedGradientTicker
            containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
            gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
            gradientTop="18%"
            tickerWords={["Traveler", "Student", "Husband", "Brother"]}
            gradient={gradient}
            isDark={true}
          />
        </section>
        <div className="flex w-full justify-center">
          {/* Inner container for both heading and about section */}
          {/* Inner container for both heading and about section */}
          <div
            id="container-inner-about "
            className=" w-full 3xl:w-[55%] flex items-center flex-col 2xl:h-[89vh] h-[50rem]"
          >
            {/* Animated Header */}
            <motion.div
              className="-z-10 pl-4 w-full"
              style={{ y: springY }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 30, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                id="heading-about"
                className="leading-none text-30xl text-stone-950 font-bold tracking-tighter"
              >
                Hello!
              </h1>
            </motion.div>
            <section id="section-about-main" className=" h-full">
              <div className="bg-slate-50 z-10 border-x-2 border-t-2 border-slate-600 rounded-tl-[5rem] rounded-tr-[5rem] w-full h-full flex flex-col justify-between">
                <div className="flex flex-col h-full items-center md:flex-row  p-24">
                  <div className="w-full md:w-1/2 flex items-center">
                    <p className="text-stone-950 text-2xl">
                      I am a developer and designer who enjoys crafting
                      intuitive experiences for technical products. With the
                      ability to operate across the full spectrum of feature
                      design and development, I am uniquely positioned to
                      translate technical intricacies into seamless user
                      journeys and coordinate with a broad spectrum of teams to
                      achieve success.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-end">
                    <Image
                      src={Me}
                      alt={"A pic of me"}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover shadow-md"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* footer */}
            <div className="w-full">
              <ContactInfoBasic />
            </div>
          </div>
        </div>
        {/* background */}
        <div className="bg-stone-50 top-0 absolute w-full -z-20 min-h-[100vh]" />
      </main>
    </>
  );
}
