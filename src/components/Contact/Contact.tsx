"use client";
import React, { useRef } from "react";

import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface ContactProps {
  contactClass?: string;
}

export default function Contact({ contactClass }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  // Use dynamically calculated maxY to ensure it doesn't move outside the container
  const y = useTransform(scrollYProgress, [0, 1], [200, -0]);
  const springY = useSpring(y, {
    stiffness: 80,
    damping: 30,
  });
  return (
    <>
      <motion.section
        style={{
          y: springY,
          zIndex: -1,
        }}
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="w-full  z-20 h-72 bg-black  rounded-tl-[5rem] rounded-tr-[5rem] "
          style={{ height: "700px" }}
          ref={containerRef}
        >
          <div className="flex flex-row z-10 px-24 md:p-24 gap-24">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </motion.section>
    </>
  );
}
