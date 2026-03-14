// src/components/Work/WorkSection.tsx
"use client";

import "../ui/Carousel/carousel.css";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/src/utils/projectData";
import Carousel from "../ui/Carousel/Carousel";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function WorkAnimation() {
  const [width, height] = useWindowSize();

  // All animation values scale with viewport height
  const maxGrowth = useMemo(() => {
    if (!height) return 200;
    return Math.round(height * 0.25);
  }, [height]);

  const initialY = useMemo(() => {
    if (!height) return -100;
    return Math.round(-height * 0.15);
  }, [height]);

  const { ref, springGrowth } = useScrollAnimation(maxGrowth);

  return (
    <motion.section
      ref={ref}
      className="work-container"
      style={{
        height: useTransform(
          springGrowth,
          (latest) => `calc(${width < 768 ? "65vh" : "85vh"} + ${latest}px)`
        ),
        marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
      }}
    >
      <div className="h-full relative rounded-tl-[clamp(1.5rem,5vw,5rem)] rounded-tr-[clamp(1.5rem,5vw,5rem)] bg-white flex items-center overflow-hidden">
        <div className="h-full w-full flex items-center">
          <motion.div
            className="absolute text-stone-950 font-bold z-0"
            style={{
              y: useTransform(
                springGrowth,
                [0, maxGrowth],
                [initialY, initialY - maxGrowth * 0.5],
                { clamp: true }
              ),
            }}
          >
            <h1 className="leading-none px-8 md:pl-8 text-[clamp(7rem,25vw,20rem)]">Work</h1>
          </motion.div>
          <div className="text-3xl text-stone-950 absolute left-0 z-10 w-full ">
            <Carousel projects={projects} options={OPTIONS} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
