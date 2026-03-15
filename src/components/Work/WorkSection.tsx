// src/components/Work/WorkSection.tsx
"use client";

import "../ui/Carousel/carousel.css";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/src/utils/projectData";
import Carousel from "../ui/Carousel/Carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function WorkAnimation() {
  const [width] = useWindowSize();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const initialY = !width ? -60 : -Math.round(Math.max(60, Math.min(width * 0.05, 90)));
  const wordY = useTransform(scrollYProgress, [0, 1], [0, initialY * 3]);

  return (
    <section
      ref={ref}
      className="work-container"
      style={{
        height: width < 768 ? "65vh" : "min(85vh, 55rem)",
        marginTop: "-6rem",
      }}
    >
      <div className="h-full relative rounded-tl-[clamp(1.5rem,5vw,5rem)] rounded-tr-[clamp(1.5rem,5vw,5rem)] bg-white flex items-center overflow-hidden">
        <div className="h-full w-full flex items-center">
          <motion.div
            className="absolute text-stone-950 font-bold z-0"
            style={{ y: wordY }}
          >
            <h1 className="leading-none px-8 md:pl-8 text-[clamp(10rem,40vw,25rem)]">Work</h1>
          </motion.div>
          <div className="text-3xl text-stone-950 absolute left-0 z-10 w-full ">
            <Carousel projects={projects} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
