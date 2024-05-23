"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function WorkAnimation() {
  const containerRef = useRef(null); // Ref for the container
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  // The range [1, 0] determines how much the element moves vertically.
  // Adjust this range to fit the movement into your design.
  const y = useTransform(scrollYProgress, [1, 0], [0, 200]);

  return (
    <>
      <div className="">
        <div
          ref={containerRef}
          style={{
            height: "1500px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full text-h1-clamp text-pink-600 z-10"
            style={{
              y, // Apply the dynamic vertical movement
            }}
          >
            Work
          </motion.div>
          <div className="text-3xl text-black absolute top-[213px] left-0 z-10 ">
            <p>Box</p>
          </div>
        </div>
      </div>
    </>
  );
}
