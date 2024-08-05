"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useLayout } from "../components/layout/LayoutContext";

interface ScrollAnimationOptions {
  threshold?: number;
  maxGrowth?: number;
}

export const useScrollAnimation = (
  sectionName: "hero" | "workSection" | "contact",
  options: ScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, maxGrowth = 200 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { layoutInfo, setLayoutInfo } = useLayout();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setLayoutInfo((prev) => ({
            ...prev,
            [`${sectionName}Top`]:
              entry.boundingClientRect.top + window.scrollY,
            ...(sectionName === "hero"
              ? { heroHeight: entry.boundingClientRect.height }
              : {}),
          }));
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [sectionName, threshold, setLayoutInfo]);

  const growth = useTransform(scrollYProgress, [0, 1], [0, maxGrowth]);

  return { ref, isVisible, growth, scrollYProgress, layoutInfo };
};
