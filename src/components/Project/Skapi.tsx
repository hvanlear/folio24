import Image from "next/image";
import {
  IconBook,
  IconBookmark,
  IconUsers,
  Icon,
  IconDatabase,
  IconCode,
  IconCloudOff,
  IconSpider,
} from "@tabler/icons-react";

import ChallengeSection from "./Parts/ChallengeSection";

import chart from "@/public/images/projects/skapi/skapi_chart.svg";
import after from "@/public/images/projects/modeler/modelerAfter.png";

interface InfoCardProps {
  icon: Icon;
  count: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: IconComponent,
  count,
  label,
}) => (
  <div className="flex flex-col items-center p-4  border-stone-950 border-2 rounded-lg ">
    <IconComponent size={68} stroke={1.5} className="text-emerald-600 mb-2" />
    <span className="text-5xl font-bold">{count}</span>
    <span className="text-xl text-gray-600 font-serif">{label}</span>
  </div>
);

const StephenKingInfographic: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <InfoCard icon={IconBook} count="65+" label="Novels & Novellas" />
      <InfoCard icon={IconBookmark} count="200+" label="Short Stories" />
      <InfoCard icon={IconUsers} count="1000+" label="Unique Characters" />
    </div>
  </div>
);

export default function Skapi() {
  const challenges = [
    {
      icon: IconCloudOff,
      title: "Data Availability",
      description:
        "No centralized, programmatically accessible source for King's works.",
    },
    {
      icon: IconSpider,
      title: "Data Collection",
      description:
        "Develope efficient web scraping techniques to gather data from multiple sources.",
    },
    {
      icon: IconDatabase,
      title: "Data Organization",
      description:
        "Organize 65+ novels/novellas, 200+ short stories, and countless characters into a structured database.",
    },
    {
      icon: IconCode,
      title: "API Design",
      description:
        "Create intuitive API endpoints to explore the interconnected 'King Universe'.",
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <ChallengeSection
          overview="As an avid Stephen King fan and a developer, I encountered a significant gap in the digital landscape: there was no comprehensive API available for accessing information about King's vast body of work. This absence presented both an opportunity to do something original on the internet as well as a number of challenges:"
          challenges={challenges}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg"></p>
        <Image
          src={chart}
          alt={"Project image"}
          width={500}
          height={300}
          className=" h-full max-w-full"
        />
      </div>
    </div>
  );
}
