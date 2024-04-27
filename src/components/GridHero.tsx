"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

export default function GridSmallBackgroundDemo() {
  useEffect(() => {
    animate("#hero", { x: [0, 100] }, { type: "spring" });
  }, []);

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div id="hero" className="">
        <h3 className="text-black">Welcome 🖖</h3>
        <h1 className="text-4xl sm:text-8xl font-bold relative z-20 text-black py-8">
          Toola
        </h1>
        <h2 className="text-black">Modern Technology Solutions</h2>
      </div>
    </div>
  );
}
