// src/components/Work/WorkSection.tsx
"use client";

import "../ui/Carousel/carousel.css";
import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/src/utils/projectData";
import Carousel from "../ui/Carousel/Carousel";
import SectionCardLayout from "../ui/SectionCardLayout";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function WorkAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const wordY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className="mt-12">
      <SectionCardLayout
        heading="Work"
        headingMotionProps={{
          style: { y: wordY },
          initial: { y: -100, opacity: 0 },
          animate: { y: 30, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        cardClassName="bg-stone-50"
        innerClassName="min-h-[50rem] 2xl:min-h-[70vh]"
      >
        <div className="py-8">
          <Carousel projects={projects} options={OPTIONS} />
        </div>
      </SectionCardLayout>
    </div>
  );
}
