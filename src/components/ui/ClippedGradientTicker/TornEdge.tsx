import { useId } from "react";

// Deterministic PRNG (mulberry32)
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Point {
  x: number;
  y: number;
}

function tornLine(
  start: Point,
  end: Point,
  segments: number,
  amplitude: number,
  seed: number
): Point[] {
  const rand = mulberry32(seed);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const px = -dy / len;
  const py = dx / len;

  return Array.from({ length: segments + 1 }, (_, i) => {
    const t = i / segments;
    let d = 0;
    if (i > 0 && i < segments) {
      d = (rand() - 0.5) * 2 * amplitude;
    }
    return {
      x: start.x + dx * t + px * d,
      y: start.y + dy * t + py * d,
    };
  });
}

function toD(pts: Point[], cmd: "M" | "L" = "M"): string {
  return pts
    .map(
      (p, i) =>
        `${i === 0 ? cmd : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`
    )
    .join(" ");
}

// Precompute paths at module level (deterministic, no props dependency)

// Standard: polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%) → viewBox 0 0 1440 400
const STD_TOP = tornLine({ x: 0, y: 288 }, { x: 1440, y: 0 }, 65, 12, 42);
const STD_BTM = tornLine({ x: 1440, y: 75 }, { x: 0, y: 360 }, 65, 10, 137);
const STD_FILL = `${toD(STD_TOP)} ${toD(STD_BTM, "L")} Z`;
const STD_STROKE = toD(STD_TOP);

// Footer: polygon(0% 0%, 100% 0%, 100% 13%, -68% 129%) → viewBox 0 0 1440 600
const FTR_DIAG = tornLine({ x: 1440, y: 78 }, { x: -979, y: 774 }, 80, 12, 99);
const FTR_FILL = `M0,0 L1440,0 ${toD(FTR_DIAG, "L")} Z`;
const FTR_STROKE = toD(FTR_DIAG);

interface TornEdgeProps {
  variant?: "standard" | "footer";
  top: string;
}

export default function TornEdge({ variant = "standard", top }: TornEdgeProps) {
  const uid = useId();
  const gradId = `torn-grad-${uid}`;
  const shadowId = `torn-shadow-${uid}`;
  const isStd = variant === "standard";

  // Standard: shadow goes UP (negative dy) because the gradient is ABOVE the
  // torn edge and the clip-path clips everything below it.
  // Footer: shadow goes DOWN (positive dy) because the clip-path extends to
  // 100% below the torn edge, giving the shadow room to render.
  const shadowDy = isStd ? -3 : 4;
  const shadowBlur = isStd ? "1 2" : "1 3";

  return (
    <svg
      viewBox={isStd ? "0 0 1440 400" : "0 0 1440 600"}
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: 0,
        top,
        right: 0,
        height: "100%",
        width: "100%",
        zIndex: 9,
      }}
    >
      <defs>
        <filter id={shadowId}>
          <feDropShadow
            dx="0"
            dy={shadowDy}
            stdDeviation={shadowBlur}
            floodColor="black"
            floodOpacity="0.15"
          />
        </filter>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--grad-start)" />
          <stop offset="100%" stopColor="var(--grad-end)" />
        </linearGradient>
      </defs>
      <path
        d={isStd ? STD_FILL : FTR_FILL}
        fill={`url(#${gradId})`}
        filter={`url(#${shadowId})`}
      />
      <path
        d={isStd ? STD_STROKE : FTR_STROKE}
        fill="none"
        stroke="black"
        strokeWidth={0.5}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
