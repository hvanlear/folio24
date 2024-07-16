import React from "react";
import Ticker from "./Ticker";

interface ClippedGradientTickerProps {
  containerClipPath: string;
  gradientClipPath: string;
  gradientTop: string;
  tickerWords: string[];
  gradient: string;
  baseVelocity?: number;
}

export default function ClippedGradientTicker({
  containerClipPath,
  gradientClipPath,
  gradientTop,
  tickerWords,
  gradient,
  baseVelocity = 0.5,
}: ClippedGradientTickerProps) {
  return (
    <div
      id="header-clip"
      style={{ clipPath: containerClipPath }}
      className="bg-white relative h-64 flex dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
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
        }}
      ></div>
      <div>
        <Ticker baseVelocity={baseVelocity} words={tickerWords} />
      </div>
    </div>
  );
}
