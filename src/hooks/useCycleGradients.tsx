import { useState, useEffect, useCallback } from "react";

export const gradients = [
  "linear-gradient(90deg, rgba(251,237,150,1) 0%, rgba(171,236,214,1) 100%)",
  "linear-gradient(90deg, rgba(235,187,250,1) 0%, rgba(168,236,234,1) 100%)",
  "linear-gradient(90deg, rgba(255,182,193,1) 0%, rgba(250,235,215,1) 100%)",
];

function useCycleGradients(initialIndex = 0, intervalDuration = 5000) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [nextIndex, setNextIndex] = useState(
    (initialIndex + 1) % gradients.length
  );
  const [progress, setProgress] = useState(0);

  const cycleGradients = useCallback(() => {
    setCurrentIndex(nextIndex);
    setNextIndex((nextIndex + 1) % gradients.length);
    setProgress(0);
  }, [nextIndex]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 1) {
          cycleGradients();
          return 0;
        }
        return oldProgress + 1 / (intervalDuration / 50); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [cycleGradients, intervalDuration]);

  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const parse = (str: string) => {
      const match = str.match(/[\d.]+/g);
      return match ? match.map(Number) : [0, 0, 0, 1]; // Default to black with full opacity if parsing fails
    };
    const c1 = parse(color1);
    const c2 = parse(color2);

    return `rgba(${c1
      .map((c, i) => Math.round(c + factor * (c2[i] - c)))
      .join(",")})`;
  };

  const interpolateGradient = (
    grad1: string,
    grad2: string,
    factor: number
  ) => {
    const parseGradient = (grad: string) => {
      const matches = grad.match(/rgba\([^)]+\)/g);
      return matches
        ? [matches[0], matches[1]]
        : ["rgba(0,0,0,1)", "rgba(0,0,0,1)"];
    };

    const [color1Start, color1End] = parseGradient(grad1);
    const [color2Start, color2End] = parseGradient(grad2);

    const startColor = interpolateColor(color1Start, color2Start, factor);
    const endColor = interpolateColor(color1End, color2End, factor);

    return `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`;
  };

  const currentGradient = gradients[currentIndex];
  const nextGradient = gradients[nextIndex];
  const interpolatedGradient = interpolateGradient(
    currentGradient,
    nextGradient,
    progress
  );

  return {
    gradient: interpolatedGradient,
    progress,
  };
}

export default useCycleGradients;
