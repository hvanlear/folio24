"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  hamburgerVariants,
  menuVariants,
  menuItemVariants,
} from "@/src/animations/pageTransitions";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <motion.button
        onClick={toggleMenu}
        className="fixed top-6 right-4 z-50 p-2"
        whileTap={{ scale: 0.95 }}
        style={{ mixBlendMode: "difference" }}
      >
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            variants={hamburgerVariants}
            custom={i}
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-0.5 bg-white my-1"
          />
        ))}
      </motion.button>

      <motion.nav
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 right-0 bottom-0 w-full bg-white shadow-lg flex justify-center items-center z-40"
      >
        <div className="nav-container ">
          <ul className="mt-16">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <motion.li
                key={item}
                variants={menuItemVariants}
                className="my-4"
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-9xl hover:text-blue-500 text-black"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
}
