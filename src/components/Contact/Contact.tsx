"use client";
import React from "react";
import useWindowSize from "@/src/hooks/useWindowSize";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface ContactProps {
  contactClass?: string;
}

export default function Contact({ contactClass }: ContactProps) {
  const [width] = useWindowSize();

  const initialHeight = width < 768 ? "65vh" : "min(85vh, 55rem)";

  return (
    <section
      className={`contact-container-animated relative z-50 overflow-hidden ${contactClass}`}
      style={{
        height: initialHeight,
        marginTop: "-6rem",
      }}
    >
      <div className="h-full rounded-tl-[clamp(1.5rem,5vw,5rem)] rounded-tr-[clamp(1.5rem,5vw,5rem)] bg-stone-950 relative">
        <div
          className="contact-container_inner-animated absolute bottom-0 left-0 right-0"
          style={{ height: initialHeight }}
        >
          <div className="flex flex-col gap-4 3xl:justify-center 2xl:gap-56 md:justify-between md:flex-row z-10 p-8 sm:p-12 md:p-20 w-full">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
