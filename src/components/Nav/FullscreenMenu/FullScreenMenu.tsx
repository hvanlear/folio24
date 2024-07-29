"use client";

import FSMContactLinks from "./FSMContactLinks";
import FSMFooter from "./FSMFooter";
import NavLinks from "../NavLinks";
import { motion } from "framer-motion";
import { menuVariants } from "@/src/animations/pageTransitions";

type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FullScreenMenu({
  isOpen,
  onClose,
}: FullScreenMenuProps) {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-0 w-full bg-white z-[300]"
    >
      <div className="fsm-container w-full h-full flex flex-col justify-center">
        <div>
          <div className="fsmMainLinks h-full md:h-fit flex items-center justify-center">
            <NavLinks isFullScreen onClose={onClose} />
          </div>
          <div className="fsmContact-container flex justify-center md:mt-8">
            <FSMContactLinks />
          </div>
        </div>
        <FSMFooter />
      </div>
    </motion.div>
  );
}
