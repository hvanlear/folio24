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

  return gradients[gradientIndex];
}

export default useCycleGradients;
