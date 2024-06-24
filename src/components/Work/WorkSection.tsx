"use client";

import "../ui/Carousel/carousel.css";

import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import modelMac from "@/src/assets/images/projects/modelMac.png";

import Carousel from "../ui/Carousel/Carousel";
import { Project } from "../ui/Carousel/CarouselSlide"; // Import the Project type

const OPTIONS: EmblaOptionsType = { loop: true };

// Define your projects
const PROJECTS: Project[] = [
  {
    image: modelMac,
    title: "Project 1",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
  // Add more projects as needed
];

export default function WorkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <>
      <motion.section style={{ y: springY }}>
        <section
          ref={containerRef}
          className="h-[48rem] relative mb-0 rounded-tl-[5rem] rounded-tr-[5rem] top-[2rem] bg-white flex items-center "
        >
          <div className="">
            <div>
              <motion.div
                className="text-30xl absolute text-stone-950 font-bold z-0"
                style={{ y: springY }}
              >
                <h1>Work</h1>
              </motion.div>
              <div className="text-3xl text-black absolute left-0 z-10 w-full ">
                <Carousel slides={PROJECTS} options={OPTIONS} />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  );
}
