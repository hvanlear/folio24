"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../utils/cn";

interface FooterProps {
  footerClass?: string;
}

export default function Footer({ footerClass }: FooterProps) {
  return (
    <>
      <div
        className="w-full px-10 z-10 h-72 bg-slate-400 "
        style={{ height: "300px" }}
      >
        <div className="flex flex-row py-1">
          <p className=" text-neutral-500 text-sm font-bold">© Hunter</p>
        </div>
      </div>
    </>
    // <div className="relative overflow-hidden p-12">

    //   <div className="absolute w-full h-full bg-red-500 rounded-t-lg top-0 right-0 z-[-1]   "></div>
    //   {/* Rest of your footer content goes here */}
    //   <p>TEST</p>
    // </div>
  );
}