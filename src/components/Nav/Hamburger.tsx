import React from "react";
import { motion } from "framer-motion";

import { lineVariants } from "@/src/animations/pageTransitions";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button onClick={toggleMenu} className="relative z-50 w-12 h-12">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Circle animation */}
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

        {/* Center lines at y=50 and use transforms for animation */}
        {[0, 1].map((i) => (
          <motion.line
            key={i}
            x1="30"
            y1="50" // Center both lines
            x2="70"
            y2="50" // Center both lines
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            variants={lineVariants}
            custom={i}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        ))}
      </svg>
    </button>
  );
}
