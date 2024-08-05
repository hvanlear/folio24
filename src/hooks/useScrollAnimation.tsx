// useScrollAnimation.ts
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useLayout } from "../components/layout/LayoutContext";

interface ScrollAnimationOptions {
  threshold?: number;
  maxGrowth?: number;
}

type SectionName = "hero" | "workSection" | "contact";

const getSectionTop = (
  sectionName: SectionName,
  layoutInfo: LayoutInfo
): number => {
  switch (sectionName) {
    case "hero":
      return layoutInfo.heroTop;
    case "workSection":
      return layoutInfo.workSectionTop;
    case "contact":
      return layoutInfo.contactTop;
  }
};

export const useScrollAnimation = (
  sectionName: SectionName,
  options: ScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, maxGrowth = 200 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
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

  const sectionTop = getSectionTop(sectionName, layoutInfo);

  const growth = useTransform(
    scrollY,
    [sectionTop - window.innerHeight, sectionTop + window.innerHeight],
    [0, maxGrowth]
  );

  return { ref, isVisible, growth };
};
