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

const calculateInitialY = (width: number) => {
  if (width >= 2560) return -200; // for ultra-wide screens (e.g., 4K)
  if (width >= 1920) return -350; // for XXL screens
  if (width >= 1536) return -70; // for extra extra large screens
  if (width >= 1280) return -250; // for extra large screens
  if (width >= 1024) return -200; // for large screens
  if (width >= 768) return -150; // for medium screens
  if (width >= 640) return -100; // for small screens
  return 50; // for extra small screens
};
export default function WorkAnimation() {
  const [width] = useWindowSize();

  const initialHeight = useMemo(() => {
    if (width >= 2560) return "100rem"; // Ultra-wide screens (e.g., 4K)
    if (width >= 1920) return "95rem"; // XXL screens
    if (width >= 1536) return "50rem"; // Extra extra large screens and above
    if (width >= 1280) return "48rem"; // Extra large screens
    if (width >= 1024) return "46rem"; // Large screens
    if (width >= 768) return "44rem"; // Medium screens
    if (width >= 640) return "24rem"; // Small screens
    return "30rem"; // Extra small screens
  }, [width]);

  const maxGrowth = useMemo(() => {
    return width <= 768 ? 300 : 400;
  }, [width]);

  const initialY = useMemo(() => calculateInitialY(width), [width]);

  const { ref, springGrowth } = useScrollAnimation(maxGrowth);

  return (
    <motion.section
      ref={ref}
      className="work-container"
      style={{
        height: useTransform(
          springGrowth,
          (latest) => `calc(${initialHeight} + ${latest}px)`
        ),
        marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
      }}
    >
      <div className="h-full relative rounded-tl-[5rem] rounded-tr-[5rem] bg-white flex items-center">
        <div className="h-full w-full flex items-center">
          <motion.div
            className="text-30xl absolute text-stone-950 font-bold z-0"
            style={{
              y: useTransform(
                springGrowth,
                [0, maxGrowth],
                [initialY, initialY - maxGrowth],
                { clamp: true }
              ),
            }}
          >
            <h1 className="leading-none px-8 md:pl-8">Work</h1>
          </motion.div>
          <div className="text-3xl text-stone-950 absolute px-8 left-0 z-10 w-full ">
            <Carousel projects={projects} options={OPTIONS} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
