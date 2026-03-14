import React from "react";
import Ticker from "./Ticker";
import TornEdge from "./TornEdge";

interface ClippedGradientTickerProps {
  containerClipPath: string;
  gradientTop: string;
  tickerWords: string[];
  baseVelocity?: number;
  isDark?: boolean;
  containerHeight?: string;
  tickerAlign?: "center" | "end";
  tornEdgeVariant?: "standard" | "footer";
}

export default function ClippedGradientTicker({
  containerClipPath,
  gradientTop,
  tickerWords,
  baseVelocity = 0.5,
  isDark = false,
  containerHeight = "h-52",
  tickerAlign = "center",
  tornEdgeVariant = "standard",
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
      <TornEdge variant={tornEdgeVariant} top={gradientTop} />
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
