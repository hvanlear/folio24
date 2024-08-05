"use client";
import React, { useMemo } from "react";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useTransform, useSpring } from "framer-motion";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface ContactProps {
  contactClass?: string;
}

export default function Contact({ contactClass }: ContactProps) {
  const [width] = useWindowSize();
  const { ref, isVisible, growth } = useScrollAnimation("contact", {
    maxGrowth: 400,
  });

  const maxGrowth = useMemo(() => {
    if (width < 640) return 300;
    if (width < 768) return 400;
    if (width < 1024) return 400;
    return 200;
  }, [width]);

  const initialHeight = useMemo(() => {
    if (width < 640) return "30rem";
    if (width < 768) return "25rem";
    return "20rem";
  }, [width]);

  const adjustedGrowth = useTransform(growth, (latest) =>
    Math.min(latest, maxGrowth)
  );

  const springGrowth = useSpring(adjustedGrowth, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <motion.section
      ref={ref}
      className="contact-container-animated relative z-50 overflow-hidden"
      style={{
        height: useTransform(
          springGrowth,
          (latest) => `calc(${initialHeight} + ${latest}px)`
        ),
        marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
      }}
    >
      <div className="h-full rounded-tl-[5rem] rounded-tr-[5rem] bg-stone-950 relative">
        <motion.div
          className="contact-container_inner-animated absolute bottom-0 left-0 right-0"
          style={{
            height: initialHeight,
            y: useTransform(springGrowth, (latest) => `-${latest}px`),
          }}
        >
          <div className="flex flex-col gap-4 md:justify-between md:flex-row z-10 p-8 sm:p-12 md:p-20 w-full">
            <ContactForm />
            <ContactInfo />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
