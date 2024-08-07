// NavLinks.tsx
"use client";

import { motion } from "framer-motion";
import NavLinksBase from "./NavLinksBase";

type NavLinksProps = {
  isFullScreen: boolean;
  onClose?: () => void;
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NavLinks({ isFullScreen, onClose }: NavLinksProps) {
  if (!isFullScreen) {
    return <NavLinksBase isFullScreen={isFullScreen} onClose={onClose} />;
  }

  return (
    <motion.div>
      <NavLinksBase isFullScreen={isFullScreen} onClose={onClose} />
    </motion.div>
  );
}
