"use client";
import React, { ReactNode, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const ResponsiveDiv = styled(motion.div)`
  width: 100%;
  z-index: 20;
  background-color: #0c0a09;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  min-height: 700px;

  @media (max-width: 768px) {
    min-height: 900px;
  }

  @media (max-width: 480px) {
    min-height: 1100px;
  }
`;

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ResponsiveDiv
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="flex flex-col gap-10 md:flex-row z-10 p-12 md:p-32 justify-between">
        {children}
      </div>
    </ResponsiveDiv>
  );
}
