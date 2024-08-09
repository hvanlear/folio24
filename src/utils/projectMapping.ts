import dynamic from "next/dynamic";
import DesignSystem from "../components/Project/DesignSystem";

const projectMapping = {
  modeler: dynamic(() => import("@/src/components/Project/Modeler"), {
    ssr: false,
  }),
  banking: dynamic(() => import("@/src/components/Project/Banking"), {
    ssr: false,
  }),
  skapi: dynamic(() => import("@/src/components/Project/Skapi"), {
    ssr: false,
  }),
  pmdesginsystem: dynamic(
    () => import("@/src/components/Project/DesignSystem"),
    {
      ssr: false,
    }
  ),
  // Add more mappings as needed
} as const;

export default projectMapping;
