interface ButtonProps {
  variant: "lit" | "sketch";
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {
  if (variant === "lit") {
    return (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="font-bold px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {text}
        </div>
      </button>
    );
  }

  if (variant === "sketch") {
    return (
      <button className="font-bold px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        {text}
      </button>
    );
  }

  return null;
}
