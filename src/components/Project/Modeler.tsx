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
import outcome_default from "@/public/images/projects/modeler/outcome_default.png";
import outcome_cntrl from "@/public/images/projects/modeler/outcome_cntrl.png";
import outcome_expl from "@/public/images/projects/modeler/outcome_expl.png";
import outcome_crown from "@/public/images/projects/modeler/outcome_crown.png";

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
      <p className="text-2xl lg:text-2xl font-bold">{title}</p>
      {children}
    </div>
  );
}

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

const tabs: Tab[] = [
  {
    title: "Control Rail",
    value: "control",
    content: (
      <TabContent title="Control Rail">
        <div className="flex flex-col lg:flex-row  lg:items-center gap-8">
          <div className="lg:max-w-[75%] rounded-xl lg:shadow-lg mt-4 lg:p-8">
            <Image
              src={menu_control}
              alt="control rail"
              width="2000"
              height="2000"
              className=" inset-x-0"
            />
          </div>
          <div className="flex flex-col text-lg  lg:max-w-[30%]">
            <h4 className="md:text-xl text-lg font-bold">Design Breakdown</h4>
            <ul className="mt-2">
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Implemented a modern drag-and-drop primary menu.
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Prioritized frequently used BPMN actions for quick access and
                intuitive workflow creation.
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Organized less common tools in a collapsible side menu,
                balancing accessibility with a clean interface.
              </li>
            </ul>
          </div>
          <hr className="bg-black  block lg:hidden" />
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
          <div className="flex lg:max-w-[75%] flex-col lg:flex-row lg:shadow-lg mt-4 items-center lg:justify-center gap-12 rounded-xl">
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
          <div className="flex flex-col text-lg  lg:max-w-[30%]">
            <h4 className="md:text-xl text-lg font-bold">Design Breakdown</h4>
            <ul className="mt-2">
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Comprehensive item repository with search functionality
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Customizable pinning feature for personalized Control Rail
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Expandable architecture for future connectors and features .
              </li>
            </ul>
          </div>
          <hr className="bg-black  block lg:hidden" />
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
          <div className="lg:max-w-[75%] rounded-xl lg:shadow-lg mt-4 lg:p-8">
            <Image
              src={menu_crown}
              alt="control rail"
              width="2000"
              height="2000"
              className=" inset-x-0"
            />
          </div>
          <div className="flex flex-col text-lg  lg:max-w-[30%]">
            <h4 className="md:text-xl text-lg font-bold">Design Breakdown</h4>
            <ul className="mt-2">
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Integrated smart alignment features that dynamically appear when
                multiple canvas items are selected.
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Contextual display ensures tools are only visible when relevant,
                reducing interface clutter.
              </li>
              <li className="relative pl-4 mb-2  font-medium text-gray-800 flex items-start before:content-[''] before:absolute before:mt-3 before:left-0 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full">
                Visual upgrade provides a more modern and intuitive user
                experience.
              </li>
            </ul>
          </div>
          <hr className="bg-black  block lg:hidden" />
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
          Our BPMN modeling tool redesign combined user research, competitive
          analysis, and design innovation. We aimed to address existing pain
          points while advancing the tool&apos;s capabilities. The result is a
          more intuitive, efficient, and powerful modeling experience that meets
          current needs and anticipates future trends in BPMN modeling.
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
        <p className="md:text-2xl text-lg">
          The redesign optimizes workspace and boosts user efficiency through
          innovative menus. Based on user insights and market research, the new
          layout maximizes canvas space, streamlines access to key features, and
          allows for future expansions.
        </p>
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
      {/* // margin top added to account for tabs at larger screens  */}
      <div className="flex flex-col gap-12 lg:mt-24">
        <h2 className="text-h2-clamp font-bold leading-none">Outcome </h2>
        <p className="md:text-2xl text-lg">
          The redesigned BPMN modeling tool features a larger canvas, simplified
          menus, and improved navigation. Users can now create complex diagrams
          more efficiently, with easier access to advanced features. The new
          interface has received positive feedback from both new and experienced
          users.
        </p>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <ImageSection
            src={outcome_default}
            alt="outcome shot 1"
            description="Usable canvas space and visual clutter was reduced by a significant amount."
          />
          <ImageSection
            src={outcome_cntrl}
            alt="outcome shot 2"
            description="Smart staging of menu items and modern patterns increased usability across the board."
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <ImageSection
            src={outcome_expl}
            alt="outcome shot 1"
            description="Usable canvas space and visual clutter was reduced by a significant amount."
          />
          <ImageSection
            src={outcome_crown}
            alt="outcome shot 2"
            description="Smart staging of menu items and modern patterns increased usability across the board."
          />
        </div>
      </div>
    </div>
  );
}
