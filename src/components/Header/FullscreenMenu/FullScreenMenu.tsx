import { motion } from "framer-motion";
import Link from "next/link";
import {
  menuVariants,
  menuItemVariants,
} from "@/src/animations/pageTransitions";

export default function FullScreenMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.nav
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 right-0 bottom-0 left-0 w-full bg-white flex justify-center items-center"
      style={{ zIndex: 300 }}
    >
      <div className="nav-container">
        <ul className="mt-16">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <motion.li key={item} variants={menuItemVariants} className="my-4">
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
  );
}
