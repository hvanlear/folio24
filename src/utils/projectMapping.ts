import dynamic from "next/dynamic";

const projectMapping = {
  modeler: dynamic(() => import("@/src/components/Project/Modeler"), {
    ssr: false,
  }),
  // Add more mappings as needed
} as const;

export default projectMapping;
