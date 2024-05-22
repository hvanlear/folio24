"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function WorkAnimation() {
  const containerRef = useRef(null); // Ref for the container
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  // The range [-100, 100] determines how much the element moves vertically.
  // Adjust this range to fit the movement into your design.
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "1000px",
      }}
    >
      <motion.div
        style={{
          y, // Apply the dynamic vertical movement
          // Ensure it's centered
          fontSize: "10rem",
          color: "#FF0088",
        }}
      >
        Work
      </motion.div>
    </div>
  );
}
