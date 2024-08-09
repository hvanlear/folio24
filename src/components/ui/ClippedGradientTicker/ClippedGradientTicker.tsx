import React from "react";
import Ticker from "./Ticker";

interface ClippedGradientTickerProps {
  containerClipPath: string;
  gradientClipPath: string;
  gradientTop: string;
  tickerWords: string[];
  gradient: string;
  baseVelocity?: number;
  isDark?: boolean;
}

export default function ClippedGradientTicker({
  containerClipPath,
  gradientClipPath,
  gradientTop,
  tickerWords,
  gradient,
  baseVelocity = 0.5,
  isDark = false,
}: ClippedGradientTickerProps) {
  const bgColor = isDark ? "bg-black" : "bg-white";
  const gridClass = isDark
    ? "dark:bg-grid-small-black/[0.2] bg-grid-small-white/[0.5]"
    : "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]";
  return (
    <div
      id="header-clip"
      style={{ clipPath: containerClipPath }}
      className={`${bgColor} z-0 relative h-52 flex ${gridClass}`}
    >
      <div
        className="gradient-clip"
        style={{
          clipPath: gradientClipPath,
          backgroundImage: gradient,
          position: "absolute",
          left: 0,
          top: gradientTop,
          right: 0,
          height: "100%",
          zIndex: 9,
          transition: "all 0.05s linear",
        }}
      ></div>
      <div>
        <Ticker
          baseVelocity={baseVelocity}
          words={tickerWords}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
