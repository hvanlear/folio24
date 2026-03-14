"use client";

import { useRef, useEffect, MutableRefObject } from "react";
import Zdog from "zdog";
import { useZdogManager } from "@/src/hooks/useZdogManager";

interface ZdogCubeProps {
  isDark?: boolean;
  velocityRef: MutableRefObject<number>;
}

const CSS_WIDTH_SM = 32;
const CSS_HEIGHT_SM = 38;
const CUBE_SIZE_SM = 15;
const CSS_WIDTH_LG = 59;
const CSS_HEIGHT_LG = 69;
const CUBE_SIZE_LG = 28;
const BREAKPOINT = 768;
const BASE_SPEED = 0.0008;
const VELOCITY_MULTIPLIER = 0.0003;

export default function ZdogCube({
  isDark = false,
  velocityRef,
}: ZdogCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const illoRef = useRef<Zdog.Illustration | null>(null);
  const faceRef = useRef<Zdog.Rect | null>(null);

  const isSmall = typeof window !== "undefined" && window.innerWidth < BREAKPOINT;
  const cssWidth = isSmall ? CSS_WIDTH_SM : CSS_WIDTH_LG;
  const cssHeight = isSmall ? CSS_HEIGHT_SM : CSS_HEIGHT_LG;
  const cubeSize = isSmall ? CUBE_SIZE_SM : CUBE_SIZE_LG;

  const strokeColor = isDark ? "white" : "#212529";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;

    const illo = new Zdog.Illustration({
      element: canvas,
      zoom: dpr,
    });

    const h = cubeSize / 2;

    // 8 vertices of the cube
    const v = [
      { x: -h, y: -h, z: -h },
      { x: h, y: -h, z: -h },
      { x: h, y: h, z: -h },
      { x: -h, y: h, z: -h },
      { x: -h, y: -h, z: h },
      { x: h, y: -h, z: h },
      { x: h, y: h, z: h },
      { x: -h, y: h, z: h },
    ];

    // 12 edges as a single Shape path (move+line pairs)
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0], // front face
      [4, 5], [5, 6], [6, 7], [7, 4], // back face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting
    ];

    const path: Array<
      | { move: { x: number; y: number; z: number } }
      | { line: { x: number; y: number; z: number } }
    > = [];
    for (const [a, b] of edges) {
      path.push({ move: v[a] }, { line: v[b] });
    }

    new Zdog.Shape({
      addTo: illo,
      path,
      stroke: 1,
      color: strokeColor,
      closed: false,
    });

    // One filled face (right side) for the gradient color
    const face = new Zdog.Rect({
      addTo: illo,
      width: cubeSize,
      height: cubeSize,
      translate: { x: h, y: 0, z: 0 },
      rotate: { y: Zdog.TAU / 4 },
      stroke: false,
      color: "rgba(251, 237, 150, 1)",
      fill: true,
    });

    // Match the isometric angle of the original SVG cube
    illo.rotate.x = -Zdog.TAU / 12;
    illo.rotate.y = Zdog.TAU / 8;

    illoRef.current = illo;
    faceRef.current = face;

    illo.updateRenderGraph();
  }, []);

  useZdogManager((delta, gradColor) => {
    const illo = illoRef.current;
    const face = faceRef.current;
    if (!illo || !face) return;

    const velocity = velocityRef.current;
    const speed = BASE_SPEED + Math.abs(velocity) * VELOCITY_MULTIPLIER;
    illo.rotate.y += speed * delta;

    if (gradColor) {
      face.color = gradColor;
    }

    illo.updateRenderGraph();
  });

  return (
    <span className="cube ml-4 mr-4 md:ml-10 md:mr-10 h-full flex items-center">
      <canvas
        ref={canvasRef}
        style={{ width: cssWidth, height: cssHeight }}
      />
    </span>
  );
}
