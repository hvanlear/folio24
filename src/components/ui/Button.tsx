"use client";

interface ButtonProps {
  variant: string;
  text: string;
  id: string;
  onClick?: () => void;
}

export default function Button({ variant, text, id, onClick }: ButtonProps) {
  if (variant === "lit") {
    return (
      <button id={id} className="p-[3px] relative" onClick={onClick}>
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

  if (variant === "backdropBlur") {
    return (
      <button
        id={id}
        onClick={onClick}
        className="text-neutral-800 px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
      >
        {text}
      </button>
    );
  }

  return null;
}
