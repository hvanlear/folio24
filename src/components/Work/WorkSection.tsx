"use client";

import "../ui/Carousel/carousel.css";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/src/utils/projectData";

import Carousel from "../ui/Carousel/Carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function WorkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const growth = useTransform(scrollYProgress, [0, 1], [0, 400], {
    clamp: false,
    ease: (t) => {
      if (width <= 768) {
        return Math.min(t, 124.97); // Limit to 124.97px on smaller screens
      }
      return Math.min(t, 200); // Limit to 200px on larger screens
    },
  });

  const springGrowth = useSpring(growth, {
    stiffness: 60,
    damping: 20,
  });

  // Calculate initial height based on screen size
  const initialHeight = useMemo(() => {
    if (width < 640) return "40rem";
    if (width < 768) return "25rem";
    return "50rem";
  }, [width]);

  return (
    <>
      <motion.section
        //Change the height of the section
        style={{
          height: useTransform(
            springGrowth,
            (latest) => `calc(${initialHeight} + ${latest}px)`
          ),
          marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
        }}
        className="work-container"
      >
        <div
          ref={containerRef}
          className="h-full relative rounded-tl-[5rem] rounded-tr-[5rem] bg-white flex items-center "
        >
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
            <div className="text-3xl text-stone-950 absolute left-0 z-10 w-full ">
              <Carousel projects={projects} options={OPTIONS} />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
