"use client";
import React, { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionCardLayout from "../ui/SectionCardLayout";
import ContactScanIcon from "../ui/ContactScanIcon";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const wordY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className="mt-12">
      <SectionCardLayout
        heading="Contact"
        headingExtra={<ContactScanIcon size={64} className="text-stone-950" />}
        headingMotionProps={{
          style: { y: wordY },
          initial: { y: -100, opacity: 0 },
          animate: { y: 30, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        cardClassName="bg-stone-950"
      >
        <div className="flex flex-col gap-4 3xl:justify-center 2xl:gap-56 md:justify-between md:flex-row p-8 sm:p-12 md:p-20 w-full">
          <ContactForm />
          <ContactInfo />
        </div>
      </SectionCardLayout>
    </div>
  );
}
