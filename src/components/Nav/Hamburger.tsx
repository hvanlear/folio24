import React from "react";
import { motion } from "framer-motion";
// import { hamburgerVariants } from "@/src/animations/pageTransitions";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const hamburgerVariants = {
  closed: (i: number) => ({
    rotate: 0,
    y: i * 5, // 0px for first line, 5px for second line
  }),
  open: (i: number) => ({
    rotate: i === 0 ? 45 : -45,
    y: i === 0 ? 6 : -4, // Y: 6px line #1 | -8px line #2
    x: i === 0 ? 0 : 0, // X: 4px line #1 | -2px line #2
  }),
};

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button
      onClick={(e) => {
        // Stop propagation to prevent any parent handlers from interfering
        e.stopPropagation();
        console.log("Button clicked, current state:", isOpen);
        toggleMenu();
        // Log the state after toggle is called
        console.log("Toggle called, next render should show:", !isOpen);
      }}
      className="relative z-50 w-12 h-12"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="4"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: isOpen ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        {[0, 1].map((i) => (
          <motion.line
            key={i}
            x1="30"
            y1={i === 0 ? "45" : "55"}
            x2="70"
            y2={i === 0 ? "45" : "55"}
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            variants={hamburgerVariants}
            custom={i}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }} // Added transition property
          />
        ))}
      </svg>
    </button>
  );
}
