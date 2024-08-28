import React from "react";
import Image, { StaticImageData } from "next/image";
import { Tabs } from "../ui/tabs";
import ChallengeSection from "./Parts/ChallengeSection";
import {
  IconPuzzle,
  IconLayoutDashboard,
  IconBrandSpeedtest,
  IconArrowMerge,
} from "@tabler/icons-react";

// Import images
import before from "@/public/images/projects/modeler/modelerBefore.png";
import after from "@/public/images/projects/modeler/modelerAfter.png";
import whiteSpace1 from "@/public/images/projects/modeler/model-whitespace-1.png";
import whiteSpace2 from "@/public/images/projects/modeler/model-whitespace-2.png";
import mock1 from "@/public/images/projects/modeler/whiteSpaceMock-1.png";
import mock2 from "@/public/images/projects/modeler/whiteSpaceMock-2.png";
import menu_control from "@/public/images/projects/modeler/menu_control.png";
import menu_explorer from "@/public/images/projects/modeler/menu_explorer.png";
import menu_explorer2 from "@/public/images/projects/modeler/menu_explorer_zoom.png";
import menu_crown from "@/public/images/projects/modeler/menu_crown.png";

// Define types
type Challenge = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

type ImageSectionProps = {
  title?: string;
  src: string | StaticImageData;
  alt: string;
  description: string;
};

function TabContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className=" w-full h-full rounded-2xl p-0 lg:p-8 text-stone-900 lg:border-2 lg:bg-white lg:border-stone-900 overflow-hidden">
      <p className="text-xl lg:text-xl font-bold">{title}</p>
      {children}
    </div>
  );
}

const tabs: Tab[] = [
  {
    title: "Control Rail",
    value: "control",
    content: (
      <TabContent title="Control Rail">
        <div className="flex flex-col lg:flex-row  lg:items-center gap-8">
          <div className="w-[75%] rounded-xl lg:shadow-lg mt-4 p-8">
            <Image
              src={menu_control}
              alt="control rail"
              width="2000"
              height="2000"
              className=" inset-x-0"
            />
          </div>
          <p className="text-lg mt-4  max-w-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quam distinctio dolore quae, obcaecati alias voluptatem placeat!
            Praesentium delectus eveniet, nisi, inventore aliquid possimus animi
            hic architecto voluptatum, a minima?.
          </p>
        </div>
      </TabContent>
    ),
  },
  {
    title: "Explorer Rail",
    value: "explorer",
    content: (
      <TabContent title="Explorer Rail">
        <div className="flex flex-col h-full lg:flex-row  lg:items-center  gap-8">
          <div className="flex w-[75%] flex-col lg:flex-row lg:shadow-lg mt-4 lg:items-center lg:justify-center gap-12 rounded-xl">
            <Image
              src={menu_explorer}
              alt="explorer rail"
              width="500"
              height="400"
              className=" inset-x-0 h-full"
            />
            <Image
              src={menu_explorer2}
              alt="explorer rail"
              width="200"
              height="100"
              className=" "
            />
          </div>
          <p className="text-lg mt-4  max-w-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quam distinctio dolore quae, obcaecati alias voluptatem placeat!
            Praesentium delectus eveniet, nisi, inventore aliquid possimus animi
            hic architecto voluptatum, a minima?.
          </p>
        </div>
      </TabContent>
    ),
  },
  {
    title: "Crown Rail",
    value: "crown",
    content: (
      <TabContent title="Crown Rail">
        <div className="flex flex-col h-full lg:flex-row lg:justify-center lg:items-center gap-8">
          <div className="w-[75%] rounded-xl lg:shadow-lg mt-4 p-8">
            <Image
              src={menu_crown}
              alt="control rail"
              width="2000"
              height="2000"
              className=" inset-x-0"
            />
          </div>
          <p className="text-lg mt-4 max-w-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quam distinctio dolore quae, obcaecati alias voluptatem placeat!
            Praesentium delectus eveniet, nisi, inventore aliquid possimus animi
            hic architecto voluptatum, a minima?.
          </p>
        </div>
      </TabContent>
    ),
  },
];

const challenges: Challenge[] = [
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
        className="rounded-lg shadow-md h-full max-w-full"
      />
      <h2 className="text-sm font-bold text-stone-500 mt-2">{description}</h2>
    </div>
  );
}

export default function Modeler(): JSX.Element {
  return (
    //margin bottom is added to accommodate for the spacing in the tabs component, this is not optimal
    <div className="flex flex-col gap-24 mb-12">
      <div className="container-challenge flex flex-col gap-12">
        <ChallengeSection
          overview="Our team faced the daunting task of overhauling our web-based BPMN modeling canvas tool. Users struggled with a cumbersome interface, limited maneuverability, and poor screen utilization. The inflexible menu structure hindered feature integration and scalability. Compounding these issues were a tight development timeline and a complex codebase with potential performance pitfalls. Our challenge was to transform these usability hurdles into a seamless, efficient user experience while navigating technical constraints and time pressures."
          challenges={challenges}
        />

        <div className="flex flex-col md:flex-row gap-12">
          <ImageSection
            title="Before"
            src={before}
            alt="Project image before"
            description="The modeling canvas in its original state"
          />
          <ImageSection
            title="After"
            src={after}
            alt="Project image after"
            description="The re-designed canvas space maximizing utility "
          />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <h2 className="text-h2-clamp font-bold leading-none">
          Approach & Discovery
        </h2>
        <p className="md:text-2xl text-lg">
          Our approach to redesigning the BPMN modeling tool was rooted in a
          comprehensive understanding of user needs, industry trends, and design
          innovation. We proceeded with a multi-faceted discovery process that
          combined rigorous analysis of our existing platform with in-depth user
          research and competitive benchmarking. This holistic strategy ensured
          that our redesign would not only address current pain points but also
          push the boundaries of what users could expect from a BPMN modeling
          tool. By blending user-centric design principles with modern interface
          concepts, we aimed to create a more intuitive, efficient, and powerful
          modeling experience.
        </p>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <ImageSection
            src={whiteSpace1}
            alt="Whitespace analysis 1"
            description="Identifying whitespace that could be translated to a larger canvas space."
          />
          <ImageSection
            src={whiteSpace2}
            alt="Whitespace analysis 2"
            description="Identifying UI elements that could be staged, further expanding canvas space."
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <ImageSection
            src={mock1}
            alt="Old UI wireframe"
            description="Scaled wireframe of older modeling canvas UI"
          />
          <ImageSection
            src={mock2}
            alt="New UI wireframe"
            description="Same wireframe with a majority of un-needed UI elements staged, maximizing canvas space."
          />
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <h3 className="text-h3-clamp font-bold">Menu structure re-design</h3>
        <div className="hidden lg:block h-[20rem] lg:h-[40rem] [perspective:1000px]  w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
        <div className="lg:hidden space-y-8">
          {tabs.map((tab) => (
            <div key={tab.value} className="">
              <div className="">{tab.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
