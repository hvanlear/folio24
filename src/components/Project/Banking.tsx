import Image from "next/image";
import {
  IconForms,
  IconCode,
  IconPlugConnected,
  IconShieldLock,
} from "@tabler/icons-react";

import ChallengeSection from "./Parts/ChallengeSection";

import before from "@/public/images/projects/banking/banking_before.png";
import after from "@/public/images/projects/banking/Banking_after.png";

import chart from "@/public/images/projects/banking/banking_chart.svg";

export default function Skapi() {
  const challenges = [
    {
      icon: IconForms,
      title: "BPMN Form Builder Constraints:",
      description:
        "Navigated the limitations of the BPMN form builder to implement design improvements without compromising functionality.",
    },
    {
      icon: IconCode,
      title: "Limited Front-End Expertise:",
      description:
        "Addressed the solutions team's lack of front-end expertise by providing comprehensive, well-documented templates and guidance.",
    },
    {
      icon: IconPlugConnected,
      title: "Legacy System Integration",
      description:
        "Ensured seamless integration of modern design elements with the existing legacy systems, maintaining compatibility while enhancing user experience.",
    },
    {
      icon: IconShieldLock,
      title: "Regulatory Compliance:",
      description:
        "Balanced the need for an improved UI with strict financial regulatory requirements, ensuring all design changes met compliance standards.",
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <ChallengeSection
          overview="Lead the redesign of a consumer bank account opening product built within a BPMN engine. The primary objective was to modernize the user interface, enhancing the overall user experience while working within the constraints of the existing system."
          challenges={challenges}
        />
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
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg">
          MY redesign of the bank account opening product centered on competitor
          analysis and technical constraint evaluation. I studied industry
          solutions to understand best practices, while leveraging browser
          developer tools to identify customizable elements within the form
          builder. By injecting CSS through the builder&apos;s embedded text
          editor, I aimed to modernize the user interface and streamline the
          account opening process, all while working within the confines of the
          existing BPMN engine and Bootstrap 4 patterns.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src={chart}
            alt={"Project image"}
            width={600}
            height={400}
            className=" h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
