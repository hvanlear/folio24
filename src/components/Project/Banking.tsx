import Image, { StaticImageData } from "next/image";
import {
  IconForms,
  IconCode,
  IconPlugConnected,
  IconShieldLock,
  IconArrowDownRight,
  IconThumbUp,
} from "@tabler/icons-react";

import ChallengeSection from "./Parts/ChallengeSection";

import before from "@/public/images/projects/banking/banking_before.png";
import after from "@/public/images/projects/banking/Banking_after.png";

import chart from "@/public/images/projects/banking/banking_chart.svg";
import builder from "@/public/images/projects/banking/builder.jpeg";
import tools from "@/public/images/projects/banking/dev-tools.png";
import r1 from "@/public/images/projects/banking/results1.png";
import r2 from "@/public/images/projects/banking/results2.png";
import r3 from "@/public/images/projects/banking/results3.png";
import r4 from "@/public/images/projects/banking/results4.png";

type ImageSectionProps = {
  title?: string;
  src: string | StaticImageData;
  alt: string;
  description: string;
};

function ImageSection({
  title,
  src,
  alt,
  description,
}: ImageSectionProps): JSX.Element {
  return (
    <div className="container-project_media">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg shadow-md "
      />
      <h2 className="text-sm font-bold text-stone-500 mt-2">{description}</h2>
    </div>
  );
}

export default function Banking() {
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
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <ChallengeSection
          overview="Lead the redesign of a consumer bank account opening product built within a BPMN engine. The primary objective was to modernize the user interface, enhancing the overall user experience while working within the constraints of the existing system."
          challenges={challenges}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <ImageSection
          src={before}
          alt="outcome shot 1"
          description="Usable canvas space and visual clutter was reduced by a significant amount."
        />
        <ImageSection
          src={after}
          alt="outcome shot 1"
          description="Usable canvas space and visual clutter was reduced by a significant amount."
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="container-approach-discovery flex flex-col gap-8">
          <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
          <p className="md:text-2xl text-lg">
            My redesign of the bank account opening product centered on
            competitor analysis and technical constraint evaluation. I studied
            industry solutions to understand best practices, while leveraging
            browser developer tools to identify customizable elements within the
            form builder. By injecting CSS through the builder&apos;s embedded
            text editor, I aimed to modernize the user interface and streamline
            the account opening process, all while working within the confines
            of the existing BPMN engine and Bootstrap 4 patterns.
          </p>
          <div className="w-full flex justify-center md:mb-0 mb-4">
            <div className="container-project-media">
              <Image
                src={chart}
                alt={"Project image"}
                width={600}
                height={400}
                className=" h-full max-w-full"
              />
              <h4 className="text-sm font-bold text-stone-500">
                Identifying areas where we could streamline our user flow was
                crucial to making our solutions competitive in a tight market.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-h3-clamp font-bold">
            Tackling the Screen Builder
          </h3>
          <p className="md:text-2xl text-lg">
            My approach to redesigning the account opening process was
            significantly influenced by the constraints of ProcessMaker&apos;s
            Screen Builder, the in-house tool used by the solutions team to
            construct our consumer banking solution. This primitive form builder
            presented several challenges:
          </p>
          <ul className="md:text-2xl text-lg ml-4 flex flex-col gap-2">
            <li>
              • In-House Limitation: All solutions had to be built using this
              tool, restricting my ability to implement more advanced design
              features.
            </li>
            <li>
              • Limited Control: The Screen Builder offered virtually no control
              over basic settings such as spacing and responsiveness.
            </li>
            <li>
              • Primitive Nature: The basic functionality of the builder
              constrained my design options to a set group of very basic form
              elements.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <ImageSection
              src={builder}
              alt="outcome shot 1"
              description="The ProcessMaker screen builder."
            />
            <ImageSection
              src={tools}
              alt="outcome shot 2"
              description="Limitations in builder tool transparency required deep analysis via browser dev tools."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="container-approach-discovery flex flex-col gap-8">
          <h2 className="text-h2-clamp font-bold">Results</h2>
          <p className="md:text-2xl text-lg">
            The redesign of the account opening process yielded significant
            improvements in both efficiency and user satisfaction. The
            streamlined workflow not only reduced the number of steps required
            to open a bank account but also dramatically enhanced the overall
            user experience.
          </p>
          <div className="flex flex-col md:flex-row justify-around items-center p-6 shadow-md bg-stone-50 rounded-lg">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <IconArrowDownRight
                size={48}
                stroke={1.5}
                className="text-green-500 mb-2"
              />
              <p className="text-2xl font-bold">33% Reduction</p>
              <p className="text-lg">In time to completion</p>
            </div>
            <div className="flex flex-col items-center">
              <IconThumbUp
                size={48}
                stroke={1.5}
                className="text-blue-500 mb-2"
              />
              <p className="text-2xl font-bold">80% Increase</p>
              <p className="text-lg">In User Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="container-image-group-large flex flex-col gap-16">
            <div className="flex flex-col md:flex-row gap-8 ">
              <ImageSection
                src={r1}
                alt="outcome shot 1"
                description="Account type selection: Complex CSS for modern alignment and interaction."
              />
              <ImageSection
                src={r2}
                alt="outcome shot 2"
                description="Modern UX design practices were added like the ability to go back to specific sections of the process to edit information."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 ">
              <ImageSection
                src={r3}
                alt="outcome shot 1"
                description="Required BPMN interstitial screens were disguised as welcome and finish screens "
              />
              <ImageSection
                src={r4}
                alt="outcome shot 2"
                description="Customized vector art helped to lift the interface and make a
                  very rigid process feel more approachable."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
