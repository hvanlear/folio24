"use client";
import React, { useRef } from "react";
import styled from "styled-components";

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

const ResponsiveDiv = styled.div`
  width: 100%;
  z-index: 20;
  background-color: black;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  height: 700px;

  @media (max-width: 768px) {
    height: 900px;
  }

  @media (max-width: 480px) {
    height: 1100px;
  }
`;

export default function Contact({ contactClass }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Calculate vertical movement based on scroll progress
  // Use dynamically calculated maxY to ensure it doesn't move outside the container
  const y = useTransform(scrollYProgress, [0, 1], [200, -0]);
  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });
  return (
    <>
      <motion.section
        style={{
          y: springY,
          zIndex: -1,
          backgroundColor: "black",
          borderTopLeftRadius: "5rem",
          borderTopRightRadius: "5rem",
        }}
        animate={isInView ? "visible" : "hidden"}
      >
        <ResponsiveDiv ref={containerRef}>
          <div className="flex flex-col-reverse md:flex-row z-10 px-24  p-12 md:p-32 justify-between">
            <ContactForm />
            <ContactInfo />
          </div>
        </ResponsiveDiv>
      </motion.section>
    </>
  );
}
