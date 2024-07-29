"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import ContactInfoBasic from "@/src/components/Contact/ContactInfoBasic";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo } from "react";

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

        {/* Inner container for both heading and about section */}
        {/* Inner container for both heading and about section */}
        <div
          id="container-inner-about "
          className=" w-full flex items-center flex-col h-[50rem]"
        >
          {/* Animated Header */}
          <motion.div
            className="text-stone-950 font-bold -z-10 pl-4 w-full"
            style={{ y: springY }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 id="heading-about" className="leading-none text-30xl">
              Hello!
            </h1>
          </motion.div>
          <section id="section-about-main" className=" h-full">
            <div className="bg-slate-50 z-10 border-2 border-slate-600 rounded-tl-[5rem] rounded-tr-[5rem] w-full h-full flex flex-col justify-between">
              <div className="flex flex-col h-full items-center md:flex-row px-12">
                <div className="">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quis repellat voluptatibus, iste nam, odit, eius
                    voluptates soluta inventore atque repellendus tenetur
                    deserunt accusantium qui. Laboriosam neque error eveniet
                    hic. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ex libero consequatur hic a. Dolore odit dolorem quam,
                    minima soluta, animi, ipsa eum accusantium nam rerum at
                    molestias aut neque inventore?
                  </p>
                </div>
                <div className="">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quis repellat voluptatibus, iste nam, odit, eius
                    voluptates soluta inventore atque repellendus tenetur
                    deserunt accusantium qui. Laboriosam neque error eveniet
                    hic. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ex libero consequatur hic a. Dolore odit dolorem quam,
                    minima soluta, animi, ipsa eum accusantium nam rerum at
                    molestias aut neque inventore?
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* footer */}
          <div className="bg-slate-50 container-footer border-x-2 border-t-2 border-slate-600 p-12 w-full">
            <ContactInfoBasic />
          </div>
        </div>

        {/* background */}
        <div className="bg-slate-50 top-0 absolute w-full -z-20 min-h-[100vh]" />
      </main>
    </>
  );
}
