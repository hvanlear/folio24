import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

// Animation variants
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.5, duration: 0.01 },
    },
  }),
};

// Hook for getting window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const VerticalArrowSvg: React.FC = () => {
  const { width: windowWidth } = useWindowSize();

  // Define base dimensions and width limits
  const baseWidth = 50;
  const baseHeight = 75;
  const maxWidth = 100;
  const minWidth = 30;

  // Calculate the SVG dimensions based on screen size
  let scaleFactor = Math.min(Math.max(windowWidth / 1500, 0.6), 2);
  let width = Math.min(Math.max(baseWidth * scaleFactor, minWidth), maxWidth);
  const height = (baseHeight / baseWidth) * width;

  if (windowWidth === 0) {
    return null; // Don't render if window width is not available yet
  }

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${baseWidth} ${baseHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      {/* Main arrow shaft */}
      <motion.line
        x1="25"
        y1="0"
        x2="25"
        y2="65"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        custom={0}
      />
      {/* Left side of arrowhead */}
      <motion.line
        x1="25"
        y1="65"
        x2="10"
        y2="50"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      {/* Right side of arrowhead */}
      <motion.line
        x1="25"
        y1="65"
        x2="40"
        y2="50"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      {/* Gradient definition */}
      <defs>
        <linearGradient
          id="gradient"
          x1="25"
          y1="0"
          x2="25"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBED96" />
          <stop offset="1" stopColor="#ABECD6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default VerticalArrowSvg;
