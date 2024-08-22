import {
  IconArrowBackUp,
  IconAdjustments,
  IconDatabase,
} from "@tabler/icons-react";

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
      π
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
          product and development teams to align with live implementation
        </p>
        <div className="w-full flex justify-center">
          {/* <Image
            src={chart}
            alt={"Project image"}
            width={500}
            height={300}
            className=" h-full max-w-full"
          /> */}
        </div>
      </div>
    </div>
  );
}
