import Image from "next/image";
import {
  IconArrowBackUp,
  IconAdjustments,
  IconDatabase,
} from "@tabler/icons-react";

import colors from "@/public/images/projects/design_system/colors.png";
import typeface from "@/public/images/projects/design_system/typeface.png";
import icons from "@/public/images/projects/design_system/icons.png";
import grid from "@/public/images/projects/design_system/grid.png";

import ChallengeSection from "./Parts/ChallengeSection";

export default function DesignSystem() {
  const challenges = [
    {
      icon: IconArrowBackUp,
      title: "Reverse Engineering:",
      description:
        "Extracting design information from the existing codebase to create a comprehensive system.",
    },
    {
      icon: IconAdjustments,
      title: "Consistency Management:",
      description:
        "Ensuring the new system accurately represented the current UI while providing a foundation for future improvements.",
    },
    {
      icon: IconDatabase,
      title: "Information Gathering",
      description:
        "Compiling scattered design decisions into a cohesive system.",
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <ChallengeSection
          overview="Developed a comprehensive foundational design system in Figma for a SaaS company,
         establishing a unified visual language and streamlining the design-to-development process."
          challenges={challenges}
        />
      </div>
      <div className="flex flex-col gap-12">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg">
          Implemented Atomic Design principles. Worked backwards from existing
          UI to ensure consistency with current product. Collaborated with
          product and development teams to align with live implementation.
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="container-project_media">
            <Image
              src={colors}
              alt={"Project image"}
              width={600}
              height={400}
              className="rounded-lg shadow-md h-full max-w-full"
            />
          </div>
          <div className="container-project_media">
            <Image
              src={typeface}
              alt={"Project image"}
              width={600}
              height={400}
              className="rounded-lg shadow-md max-w-full"
            />
            <h2 className="text-sm font-bold text-stone-500 mt-2 ">
              Mock of the new UI maxamizing canvas space.
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="container-project_media">
            <Image
              src={icons}
              alt={"Project image"}
              width={600}
              height={400}
              className="rounded-lg shadow-md h-full max-w-full"
            />
          </div>
          <div className="container-project_media">
            <Image
              src={grid}
              alt={"Project image"}
              width={600}
              height={400}
              className="rounded-lg shadow-md max-w-full"
            />
            {/* <h2 className="text-sm font-bold text-stone-500 mt-2 ">
              Mock of the new UI maxamizing canvas space.
            </h2> */}
          </div>
        </div>
      </div>
    </div>
  );
}
