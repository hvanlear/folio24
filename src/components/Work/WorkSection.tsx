"use client";

import "../ui/Carousel/carousel.css";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useMemo } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/src/utils/projectData";
import Carousel from "../ui/Carousel/Carousel";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function WorkAnimation() {
  const [width] = useWindowSize();
  const { ref, isVisible, growth, scrollYProgress } = useScrollAnimation(
    "workSection",
    { maxGrowth: 400 }
  );

  const initialHeight = useMemo(() => {
    if (width < 640) return "40rem";
    if (width < 768) return "40rem";
    return "70rem";
  }, [width]);

  const adjustedGrowth = useTransform(growth, (latest) => {
    if (width <= 768) {
      return Math.min(latest, 124.97);
    }
    return Math.min(latest, 200);
  });

  const springGrowth = useSpring(adjustedGrowth, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <motion.section
      ref={ref}
      style={{
        height: useTransform(
          springGrowth,
          (latest) => `calc(${initialHeight} + ${latest}px)`
        ),
        marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
      }}
      className="work-container"
    >
      <div className="h-full relative rounded-tl-[5rem] rounded-tr-[5rem] bg-white flex items-center">
        <div className="h-full w-full flex items-center">
          <motion.div
            className="text-30xl absolute text-stone-950 font-bold z-0"
            style={{
              y: useTransform(
                springGrowth,
                [0, 50, 100, 150, 200],
                [0, -50, -100, -150, -200],
                { clamp: true }
              ),
            }}
          >
            <h1 className="leading-none md:pl-8">Work</h1>
          </motion.div>
          <div className="text-3xl text-stone-950 absolute left-0 z-10 w-full">
            <Carousel projects={projects} options={OPTIONS} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
