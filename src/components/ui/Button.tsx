"use client";

import { animationStyles } from "@/src/utils/styleHelpers";

interface ButtonProps {
  variant: "lit" | "sketch";
  text: string;
  id: string;
}

export default function Button({ variant, text, id }: ButtonProps) {
  const initialFadeIn = animationStyles.initialFadeIn;
  if (variant === "lit") {
    return (
      <button id={id} className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="font-bold px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {text}
        </div>
      </button>
    );
  }

  if (variant === "sketch") {
    return (
      <button
        id={id}
        className="font-bold px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
      >
        {text}
      </button>
    );
  }

  return null;
}
