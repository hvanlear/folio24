import React from "react";
import { motion } from "framer-motion";
import { hamburgerVariants } from "@/src/animations/pageTransitions";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button onClick={toggleMenu} className="z-3001 relative w-12 h-12">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
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
            variants={hamburgerVariants}
            custom={i}
            animate={isOpen ? "open" : "closed"}
          />
        ))}
      </svg>
    </button>
  );
}
