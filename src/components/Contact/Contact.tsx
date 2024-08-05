"use client";
import React, { useRef, useMemo } from "react";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface ContactProps {
  contactClass?: string;
}

export default function Contact({ contactClass }: ContactProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  // Define responsive growth values
  const maxGrowth = useMemo(() => {
    if (width < 640) return 300; // For very small screens
    if (width < 768) return 400; // For small screens
    if (width < 1024) return 400; // For medium screens
    return 200; // For large screens
  }, [width]);

  const growth = useTransform(scrollYProgress, [0, 1], [0, maxGrowth], {
    clamp: false,
    ease: (t) => Math.min(t, 1), // Simple ease function that caps at 1
  });

  const springGrowth = useSpring(growth, {
    stiffness: 60,
    damping: 20,
  });

  // Calculate initial height based on screen size
  const initialHeight = useMemo(() => {
    if (width < 640) return "30rem";
    if (width < 768) return "25rem";
    return "20rem";
  }, [width]);

  return (
    <motion.section
      className="contact-container-animated relative z-50 overflow-hidden"
      style={{
        height: useTransform(
          springGrowth,
          (latest) => `calc(${initialHeight} + ${latest}px)`
        ),
        marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
      }}
    >
      <div
        ref={containerRef}
        className="h-full  rounded-tl-[5rem] rounded-tr-[5rem] bg-stone-950 relative"
      >
        <motion.div
          className="contact-container_inner-animated absolute bottom-0 left-0 right-0"
          style={{
            height: initialHeight,
            y: useTransform(springGrowth, (latest) => `-${latest}px`),
          }}
        >
          <div className="flex flex-col gap-4 md:justify-between md:flex-row z-10 p-8 sm:p-12 md:p-20  w-full ">
            <ContactForm />
            <ContactInfo />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
