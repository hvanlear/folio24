import Marquee from "react-fast-marquee";
import { Arrow } from "../assets/Arrow";

import { animate } from "framer-motion";
import { motion } from "framer-motion";
import { animationStyles } from "../../utils/styleHelpers";
import { useEffect } from "react";

interface TickerProps {
  tickerClass?: string;
}

const services = ["UI Design", "UX Audit", "AI Consultancy", "Web Development"];

const ticketGroup = services.flatMap((service, index) => [
  service,
  <Arrow key={index} />,
]);

export default function Ticker({ tickerClass }: TickerProps) {
  const initialFadeIn = animationStyles.initialFadeIn;

  const variants = {
    hidden: { opacity: 0, scale: 0, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.2,
      },
    }),
  };

  return (
    <Marquee className={tickerClass}>
      {ticketGroup.map((str, index) => (
        <motion.p
          style={initialFadeIn}
          className="ticker-item text-ticker-clamp sm:text-7xl px-5 py-4 text-black font-serif font-light"
          key={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {str}
        </motion.p>
      ))}
    </Marquee>
  );
}
