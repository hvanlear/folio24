"use client";

import FSMContactLinks from "./FSMContactLinks";
import FSMFooter from "./FSMFooter";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  menuVariants,
  menuItemVariants,
} from "@/src/animations/pageTransitions";

export default function FullScreenMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <motion.nav
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 right-0 bottom-0 left-0 w-full bg-white "
      style={{ zIndex: 300 }}
    >
      <div className="fsm-container w-full h-full flex flex-col justify-center">
        <div className="">
          <div className="fsmMainLinks h-full md:h-fit flex items-center justify-center">
            <ul className="">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <motion.li
                  className="mb-9"
                  key={item}
                  variants={menuItemVariants}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-h1.5-clamp leading-none hover:text-blue-500 text-black font-bold"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="fsmContact-container flex justify-center  md:mt-8">
            <FSMContactLinks />
          </div>
        </div>
        <FSMFooter />
      </div>
    </motion.nav>
  );
}
