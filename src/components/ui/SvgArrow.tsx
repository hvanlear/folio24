import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useWindowSize from "@/src/hooks/useWindowSize";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 1 + i * 0.5,
          type: "spring",
          duration: 1,
          bounce: 0,
        },
        opacity: { delay: 1 + i * 0.5, duration: 0.01 },
      },
    };
  },
};

export default function SvgArrow() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [windowWidth] = useWindowSize();

  // Calculate the SVG dimensions based on screen size
  const baseWidth = 247;
  const baseHeight = 50;
  const scaleFactor = windowWidth / 2000; // Assuming 1920px as the base width
  const width = baseWidth * scaleFactor;
  const height = baseHeight * scaleFactor;

  return (
    <motion.svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${baseWidth} ${baseHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <motion.path
        d="M18.6589 27.2045C37.122 13.7261 61.685 6.97269 84.2849 6.25544C106.885 5.53819 127.522 10.8571 145.748 18.4992C182.726 34.0149 210.267 60.2155 223 92"
        stroke="url(#paint0_linear_908_1120)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
      <motion.path
        d="M227.261 102.403C213.329 96.0537 199.795 89.4635 186.658 82.6328"
        stroke="url(#paint1_linear_908_1120)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
      <motion.path
        d="M229.859 99.8954C233.077 88.5133 236.106 77.3293 239.134 65.9996"
        stroke="url(#paint2_linear_908_1120)"
        strokeWidth="11.6414"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
      <defs>
        <linearGradient
          id="paint0_linear_908_1120"
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
          id="paint1_linear_908_1120"
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
          id="paint2_linear_908_1120"
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
}
