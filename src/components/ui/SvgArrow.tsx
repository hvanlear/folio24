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

interface FlexibleArrowSvgProps {
  style?: "vertical" | "curved";
}

// Hook for getting window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const VerticalArrow: React.FC = () => {
  const { width: windowWidth } = useWindowSize();

  // Define base dimensions and maximum width
  const baseWidth = 50;
  const baseHeight = 75;
  const maxWidth = 100;

  // Calculate the SVG dimensions based on screen size
  let scaleFactor = windowWidth / 1500;
  let width = baseWidth * scaleFactor;
  const height = baseHeight * scaleFactor;

  // Cap the width at maxWidth
  if (width > maxWidth) {
    scaleFactor = maxWidth / baseWidth;
    width = maxWidth;
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

const CurvedArrow: React.FC = () => {
  const { width: windowWidth } = useWindowSize();

  // Define base dimensions and maximum width
  const baseWidth = 247;
  const baseHeight = 50;
  const maxWidth = 200;

  // Calculate the SVG dimensions based on screen size
  let scaleFactor = windowWidth / 2000;
  let width = baseWidth * scaleFactor;
  const height = baseHeight * scaleFactor;

  // Cap the width at maxWidth
  if (width > maxWidth) {
    scaleFactor = maxWidth / baseWidth;
    width = maxWidth;
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
      <motion.path
        d="M18.6589 27.2045C37.122 13.7261 61.685 6.97269 84.2849 6.25544C106.885 5.53819 127.522 10.8571 145.748 18.4992C182.726 34.0149 210.267 60.2155 223 92"
        stroke="url(#paint0_linear)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M227.261 102.403C213.329 96.0537 199.795 89.4635 186.658 82.6328"
        stroke="url(#paint1_linear)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M229.859 99.8954C233.077 88.5133 236.106 77.3293 239.134 65.9996"
        stroke="url(#paint2_linear)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={2}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="135.603"
          y1="6.14681"
          x2="135.683"
          y2="92.0811"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBED96" />
          <stop offset="1" stopColor="#ABECD6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="209.288"
          y1="88.4844"
          x2="207.041"
          y2="97.175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBED96" />
          <stop offset="1" stopColor="#ABECD6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="234.497"
          y1="67.286"
          x2="242.564"
          y2="96.3714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBED96" />
          <stop offset="1" stopColor="#ABECD6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

const FlexibleArrowSvg: React.FC<FlexibleArrowSvgProps> = ({
  style = "curved",
}) => {
  return style === "vertical" ? <VerticalArrow /> : <CurvedArrow />;
};

export default FlexibleArrowSvg;
