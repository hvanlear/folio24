"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WorkAnimation() {
  const { scrollYProgress } = useScroll(); // Gets the scroll progress between 0 and 1

  // Calculate scale based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  // Calculate vertical movement based on scroll progress
  // Adjust the range to control how much it moves up and down
  const y = useTransform(scrollYProgress, [0, 10], [-100, 100]);

  return (
    <motion.div
      className="work-animation"
      style={{
        scale, // Apply the dynamic scale
        y, // Apply the dynamic vertical movement
        originX: 1, // Center the scaling and movement transform horizontally
        originY: 20, // Center the scaling and movement transform vertically
      }}
    >
      <p className="text-black text-10xl">Work</p>
    </motion.div>
  );
}
