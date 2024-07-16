"use client";

import "../ui/Carousel/carousel.css";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  spring,
} from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import modelMac from "@/src/assets/images/projects/modelMac.png";

import Carousel from "../ui/Carousel/Carousel";
import { Project } from "../ui/Carousel/CarouselSlide"; // Import the Project type

const OPTIONS: EmblaOptionsType = { loop: true };

// Define projects
const PROJECTS: Project[] = [
  {
    image: modelMac,
    title: "Project 1",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
  {
    image: modelMac,
    title: "Project 2",
    tags: ["Vue", "JavaScript", "Firebase"],
  },
];

// export default function WorkAnimation() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll();

//   // Limit the upward movement to -400px
//   const y = useTransform(scrollYProgress, [0, 1], [0, -800], {
//     clamp: false,
//     ease: (t) => Math.min(t, 0.5), // This caps the movement at 50% of the full range
//   });

//   const springY = useSpring(y, {
//     stiffness: 60,
//     damping: 20,
//   });

//   return (
//     <>
//       <motion.section style={{ y: springY }}>
//         <section
//           ref={containerRef}
//           className="h-[30rem] relative mb-0 rounded-tl-[5rem] rounded-tr-[5rem] top-[2rem] bg-white flex items-center "
//         >
//           <div className="">
//             <div>
//               <motion.div
//                 className="text-30xl absolute text-stone-950 font-bold z-0"
//                 style={{ y: springY }}
//               >
//                 <h1>Work</h1>
//               </motion.div>
//               <div className="text-3xl text-black absolute left-0 z-10 w-full ">
//                 <Carousel slides={PROJECTS} options={OPTIONS} />
//               </div>
//             </div>
//           </div>
//         </section>
//       </motion.section>
//     </>
//   );
// }

export default function WorkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, -800], {
    clamp: false,
    ease: (t) => {
      if (width <= 768) {
        // Adjust this breakpoint as needed
        return Math.min(t, 124.97 / 800); // Limit to -124.97px on smaller screens
      }
      return Math.min(t, 0.5); // Original limit for larger screens
    },
  });

  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <>
      <motion.section style={{ y: springY }}>
        <section
          ref={containerRef}
          className="h-[30rem] relative mb-0 rounded-tl-[5rem] rounded-tr-[5rem] top-[2rem] bg-white flex items-center "
        >
          <div className="">
            <div>
              <motion.div
                className="text-30xl absolute text-stone-950 font-bold z-0"
                style={{ y: springY }}
              >
                <h1>Work</h1>
              </motion.div>
              <div className="text-3xl text-black absolute left-0 z-10 w-full ">
                <Carousel slides={PROJECTS} options={OPTIONS} />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  );
}
