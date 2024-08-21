import Image from "next/image";
import before from "@/public/images/projects/modeler/modelerBefore.png";
import after from "@/public/images/projects/modeler/modelerAfter.png";
import ChallengeSection from "./Parts/ChallengeSection";

import {
  IconArrowBackUp,
  IconAdjustments,
  IconDatabase

} from "@tabler/icons-react";

export default function Modeler() {


  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">The Challenge</h2>
        <p className="md:text-2xl text-lg">
          Our team faced the daunting task of overhauling our web-based BPMN
          modeling canvas tool. Users struggled with a cumbersome interface,
          limited maneuverability, and poor screen utilization. The inflexible
          menu structure hindered feature integration and scalability.
          Compounding these issues were a tight development timeline and a
          complex codebase with potential performance pitfalls. Our challenge
          was to transform these usability hurdles into a seamless, efficient
          user experience while navigating technical constraints and time
          pressures.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="container-project_media">
          <h2 className="text-sm uppercase font-bold text-stone-500 mb-2">
            • Before •
          </h2>
          <Image
            src={before}
            alt={"Project image"}
            width={800}
            height={600}
            className="rounded-lg shadow-md h-[95%] max-w-full"
          />
        </div>
        <div className="container-project_media">
          <h2 className="text-sm uppercase font-bold text-stone-500 mb-2">
            • After •
          </h2>
          <Image
            src={after}
            alt={"Project image"}
            width={800}
            height={600}
            className=" h-full max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg">Implemented user-centric design solutions while carefully balancing
          development constraints and codebase complexities. Focused on creating an intuitive, efficient interface that
          improved user workflow and accommodated future feature expansions.</p>
      </div>
    </div>
  );
}
