// "use client";
// import React, { useRef } from "react";
// import styled from "styled-components";

// import {
//   motion,
//   useTransform,
//   useScroll,
//   useSpring,
//   useInView,
// } from "framer-motion";

// import ContactForm from "./ContactForm";
// import ContactInfo from "./ContactInfo";

// interface ContactProps {
//   contactClass?: string;
// }

// const ResponsiveDiv = styled.div`
//   width: 100%;
//   z-index: 20;
//   background-color: black;
//   border-top-left-radius: 5rem;
//   border-top-right-radius: 5rem;
//   height: 700px;

//   @media (max-width: 768px) {
//     height: 900px;
//   }

//   @media (max-width: 480px) {
//     height: 1100px;
//   }
// `;

// export default function Contact({ contactClass }: ContactProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll();

//   // Calculate vertical movement based on scroll progress
//   // Use dynamically calculated maxY to ensure it doesn't move outside the container
//   const y = useTransform(scrollYProgress, [0, 1], [200, -0]);
//   const springY = useSpring(y, {
//     stiffness: 60,
//     damping: 20,
//   });
//   return (
//     <>
//       <motion.section
//         style={{
//           y: springY,
//           zIndex: -1,
//           backgroundColor: "black",
//           borderTopLeftRadius: "5rem",
//           borderTopRightRadius: "5rem",
//         }}
//         animate={isInView ? "visible" : "hidden"}
//       >
//         <ResponsiveDiv ref={containerRef}>
//           <div className="flex flex-col gap-10 md:flex-row z-10 p-12 md:p-32 justify-between">
//             <ContactForm />
//             <ContactInfo />
//           </div>
//         </ResponsiveDiv>
//       </motion.section>
//     </>
//   );
// }

"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface ContactProps {
  contactClass?: string;
}

export default function Contact({ contactClass }: ContactProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [width] = useWindowSize();

  const growth = useTransform(scrollYProgress, [0, 1], [0, 400], {
    clamp: false,
    ease: (t) => {
      if (width <= 768) {
        return Math.min(t, 124.97); // Limit to 124.97px on smaller screens
      }
      return Math.min(t, 200); // Limit to 200px on larger screens
    },
  });

  const springGrowth = useSpring(growth, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <>
      <motion.section
        className="contact-container-animated relative z-50 overflow-hidden"
        style={{
          height: useTransform(
            springGrowth,
            (latest) => `calc(20rem + ${latest}px)`
          ),
          marginTop: useTransform(springGrowth, (latest) => `-${latest}px`),
        }}
      >
        <div
          ref={containerRef}
          className="h-full  rounded-tl-[5rem] rounded-tr-[5rem] bg-black flex relative "
        >
          <motion.div
            ref={containerRef}
            className="contact-container_inner-animated absolute bottom-0 left-0 right-0 p-8 md:px-24"
            style={{
              height: "15rem",
              y: useTransform(springGrowth, (latest) => `-${latest}px`),
            }}
          >
            <div className="flex flex-col gap-10 md:flex-row z-10  justify-between w-full">
              <ContactForm />
              <ContactInfo />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
