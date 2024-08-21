import Image from "next/image";
import before from "@/public/images/projects/modeler/modelerBefore.png";
import after from "@/public/images/projects/modeler/modelerAfter.png";
import whiteSpace1 from "@/public/images/projects/modeler/model-whitespace-1.png";
import whiteSpace2 from "@/public/images/projects/modeler/model-whitespace-2.png";
import mock1 from "@/public/images/projects/modeler/whiteSpaceMock-1.png";
import mock2 from "@/public/images/projects/modeler/whiteSpaceMock-2.png";

import ChallengeSection from "./Parts/ChallengeSection";

import {
  IconPuzzle,
  IconLayoutDashboard,
  IconBrandSpeedtest,
  IconArrowMerge,
} from "@tabler/icons-react";

export default function Modeler() {
  const challenges = [
    {
      icon: IconPuzzle,
      title: "Complex Canvas Interactions:",
      description:
        "Redesigned intricate BPMN modeling interactions to be intuitive and efficient, balancing power-user needs with ease of use for newcomers.",
    },
    {
      icon: IconLayoutDashboard,
      title: "Screen Real Estate Optimization:",
      description:
        "Maximized available canvas space while ensuring all necessary tools remained accessible, requiring innovative UI solutions and careful prioritization.",
    },
    {
      icon: IconBrandSpeedtest,
      title: "Performance with Large Diagrams:",
      description:
        "Ensured smooth performance and responsiveness when working with extensive, complex BPMN diagrams, optimizing render times and interaction speed.",
    },
    {
      icon: IconArrowMerge,
      title: "Feature Scalability:",
      description:
        "Developed a flexible menu structure capable of accommodating current features and future expansions without cluttering the interface or complicating user workflows.",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <ChallengeSection
          overview=" Our team faced the daunting task of overhauling our web-based BPMN
          modeling canvas tool. Users struggled with a cumbersome interface,
          limited maneuverability, and poor screen utilization. The inflexible
          menu structure hindered feature integration and scalability.
          Compounding these issues were a tight development timeline and a
          complex codebase with potential performance pitfalls. Our challenge
          was to transform these usability hurdles into a seamless, efficient
          user experience while navigating technical constraints and time
          pressures.
        "
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
            className="rounded-lg shadow-md max-w-full"
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
        <p className="md:text-2xl text-lg">
          Our approach to redesigning the BPMN modeling tool was rooted in a
          comprehensive understanding of user needs, industry trends, and design
          innovation. We embarked on a multi-faceted discovery process that
          combined rigorous analysis of our existing platform with in-depth user
          research and competitive benchmarking. This holistic strategy ensured
          that our redesign would not only address current pain points but also
          push the boundaries of what users could expect from a BPMN modeling
          tool. By blending user-centric design principles with modern interface
          concepts, we aimed to create a more intuitive, efficient, and powerful
          modeling experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div className="container-project_media">
          <Image
            src={whiteSpace1}
            alt={"Project image"}
            width={600}
            height={400}
            className="rounded-lg shadow-md h-full max-w-full"
          />
          <h2 className="text-sm font-bold text-stone-500 mt-2 ">
            Identifying whitespace that could be translated to a larger canvas
            space.
          </h2>
        </div>
        <div className="container-project_media">
          <Image
            src={whiteSpace2}
            alt={"Project image"}
            width={600}
            height={400}
            className="rounded-lg shadow-md h-full max-w-full"
          />
          <h2 className="text-sm font-bold text-stone-500 mt-2 ">
            Identifying UI elements that could be staged, further expanding
            canvas space.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="container-project_media">
          <Image
            src={mock1}
            alt={"Project image"}
            width={600}
            height={400}
            className="rounded-lg shadow-md h-full max-w-full"
          />
        </div>
        <div className="container-project_media">
          <Image
            src={mock2}
            alt={"Project image"}
            width={600}
            height={400}
            className="rounded-lg shadow-md h-full max-w-full"
          />
          <h2 className="text-sm font-bold text-stone-500 mt-2 ">
            Mock of the new UI maxamizing canvas space.
          </h2>
        </div>
      </div>
    </div>
  );
}
