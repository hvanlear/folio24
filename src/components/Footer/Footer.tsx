"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../utils/cn";

interface FooterProps {
  footerClass?: string;
}

export default function Footer({ footerClass }: FooterProps) {
  return (
    <>
      <div className="z-10 absolute bottom-1">
        <p className="text-4xl text-white">TEST</p>
      </div>
    </>
    // <div className="relative overflow-hidden p-12">

    //   <div className="absolute w-full h-full bg-red-500 rounded-t-lg top-0 right-0 z-[-1]   "></div>
    //   {/* Rest of your footer content goes here */}
    //   <p>TEST</p>
    // </div>
  );
}
