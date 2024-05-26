"use client";

import "../ui/Carousel/carousel.css";

import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";

import Carousel from "../ui/Carousel/Carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function WorkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  // Use dynamically calculated maxY to ensure it doesn't move outside the container
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      <motion.section
        style={{
          y: springY,
        }}
      >
        <section
          ref={containerRef}
          className="h-[48rem] relative mb-0 rounded-tl-[5rem] rounded-tr-[5rem] top-[2rem] bg-white flex items-center "
        >
          <div className="">
            <div>
              <motion.div
                className="text-30xl absolute text-stone-950 font-bold z-10"
                style={{
                  y: springY,
                }}
              >
                <h1>Work</h1>
              </motion.div>
              <div className="text-3xl text-black absolute left-0 z-10 w-full ">
                <Carousel slides={SLIDES} options={OPTIONS} />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  );
}
