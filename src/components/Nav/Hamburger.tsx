import React from "react";
import { motion } from "framer-motion";
import { hamburgerVariants } from "@/src/animations/pageTransitions";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button onClick={toggleMenu} className=" z-3001">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          variants={hamburgerVariants}
          custom={i}
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-0.5 bg-white my-1"
        />
      ))}
    </button>
  );
}
