import { useState, useEffect } from "react";
import { gradients } from "../utils/gradients";

function useCycleGradients(initialIndex = 0) {
  const [gradientIndex, setGradientIndex] = useState(initialIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientIndex((current) => (current + 1) % gradients.length);
    }, 5000); // Change gradient every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId);
  }, []);

  return {
    gradient: gradients[gradientIndex],
    startColor: gradients[gradientIndex].split(",")[3].trim(),
    endColor: gradients[gradientIndex].split(",")[5].trim().slice(0, -1),
  };
}

export default useCycleGradients;
