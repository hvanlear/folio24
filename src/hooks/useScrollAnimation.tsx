import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export function useScrollAnimation(maxGrowth: number) {
  const [sectionTop, setSectionTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
      setWindowHeight(window.innerHeight);
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  const growth = useTransform(
    scrollY,
    [sectionTop - windowHeight, sectionTop + windowHeight],
    [0, maxGrowth]
  );

  const springGrowth = useSpring(growth, {
    stiffness: 60,
    damping: 20,
  });

  return { ref, springGrowth };
}
