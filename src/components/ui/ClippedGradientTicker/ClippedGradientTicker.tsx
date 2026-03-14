import React from "react";
import Ticker from "./Ticker";

interface ClippedGradientTickerProps {
  containerClipPath: string;
  gradientClipPath: string;
  gradientTop: string;
  tickerWords: string[];
  baseVelocity?: number;
  isDark?: boolean;
  containerHeight?: string;
  tickerAlign?: "center" | "end";
}

export default function ClippedGradientTicker({
  containerClipPath,
  gradientClipPath,
  gradientTop,
  tickerWords,
  baseVelocity = 0.5,
  isDark = false,
  containerHeight = "h-52",
  tickerAlign = "center",
}: ClippedGradientTickerProps) {
  const bgColor = isDark ? "bg-stone-950" : "bg-white";
  const gridClass = isDark
    ? "dark:bg-grid-small-black/[0.2] bg-grid-small-white/[0.5]"
    : "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]";
  return (
    <div
      id="header-clip"
      style={{ clipPath: containerClipPath }}
      className={`${bgColor} z-0 relative ${containerHeight} flex ${gridClass}`}
    >
      <div
        className="gradient-clip"
        style={{
          clipPath: gradientClipPath,
          backgroundImage: "linear-gradient(90deg, var(--grad-start), var(--grad-end))",
          position: "absolute",
          left: 0,
          top: gradientTop,
          right: 0,
          height: "100%",
          zIndex: 9,
          transition: "all 0.05s linear",
        }}
      ></div>
      <div className={`w-full flex ${tickerAlign === "end" ? "h-auto mt-auto pb-4" : "h-full items-center"}`}>
        <Ticker
          baseVelocity={baseVelocity}
          words={tickerWords}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
