"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/utils/cn";
import { ReactNode, ComponentProps } from "react";

interface SectionCardLayoutProps {
  heading: string;
  headingMotionProps: Omit<ComponentProps<typeof motion.div>, "className">;
  children: ReactNode;
  headingExtra?: ReactNode;
  innerClassName?: string;
  cardClassName?: string;
}

export default function SectionCardLayout({
  heading,
  headingMotionProps,
  children,
  headingExtra,
  innerClassName,
  cardClassName,
}: SectionCardLayoutProps) {
  return (
    <div className="flex w-full justify-center relative isolate">
      <div className={cn("w-full flex items-center flex-col", innerClassName)}>
        <motion.div className="-z-10 pl-4 w-full flex items-end gap-2" {...headingMotionProps}>
          <h1 className="leading-none text-30xl tracking-tighter text-stone-950 font-bold">
            {heading}
          </h1>
          {headingExtra}
        </motion.div>
        <section className="w-full">
          <div
            className={cn(
              "relative z-10 border-x-2 border-t-2 border-stone-600 rounded-tl-[clamp(1.5rem,5vw,5rem)] rounded-tr-[clamp(1.5rem,5vw,5rem)] w-full flex flex-col justify-center",
              cardClassName ?? "bg-stone-50"
            )}
          >
            {children}
          </div>
        </section>
      </div>
      <div className="bg-stone-50 absolute inset-0 -z-20" />
    </div>
  );
}
