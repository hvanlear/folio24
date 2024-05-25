import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SvgWaveyLine = () => {
  const controls = useAnimation();

  useEffect(() => {
    const update = () => {
      const path = generateWavePath(performance.now() / 1000);
      controls.start({
        d: path,
        transition: { duration: 0.02 },
      });
    };

    const interval = setInterval(update, 50);
    return () => clearInterval(interval);
  }, [controls]);

  function generateWavePath(time: number) {
    const points = Array.from({ length: 20 }, (_, i) => {
      const x = (i / 19) * 456; // Scale the x position across the SVG width
      const y = 50 + Math.sin(time + i * 0.3) * 25; // Generate the y position based on a sine wave
      return `${x},${y}`;
    });

    return `M${points.join(" ")}`; // Create the path data
  }

  return (
    <svg viewBox="0 0 456 100" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        fill="none"
        stroke="white"
        strokeWidth="6"
        animate={controls}
      />
    </svg>
  );
};

export default SvgWaveyLine;
