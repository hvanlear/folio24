import Image, { StaticImageData } from "next/image";
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
import count from "@/public/images/projects/skapi/userCount.png";
import country from "@/public/images/projects/skapi/userCountry.png";

type ImageSectionProps = {
  src: string | StaticImageData;
  alt: string;
  description: string;
};

const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  description,
}) => (
  <div className="flex flex-col gap-2">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="rounded-lg shadow-md"
    />
    <p className="text-sm font-bold text-stone-500">{description}</p>
  </div>
);

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
  <div className="flex flex-col items-center gap-2 p-4 border-stone-950 border-2 rounded-lg">
    <IconComponent size={68} stroke={1.5} className="text-emerald-600" />
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

const Skapi: React.FC = () => {
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
        "Develop efficient web scraping techniques to gather data from multiple sources.",
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
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <ChallengeSection
          overview="As an avid Stephen King fan, developer and enjoyer of structure JSON I noticed something missing from the internet: there was no comprehensive API available for accessing information about King's vast body of work. This absence presented both an opportunity to do something original as well as a number of challenges:"
          challenges={challenges}
        />
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg">
          I focused on two main sources for my data: Wikipedia for bibliographic
          info and Fandom wikis for character details. My goal was to build a
          database that combines publication data with character connections
          across King&apos;s works. This approach could create a valuable
          resource for fans, researchers, and developers, offering new ways to
          explore the links within King&apos;s universe.
        </p>
        <div className="flex justify-center">
          <Image
            src={chart}
            alt="Project image"
            width={500}
            height={300}
            className="h-full max-w-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-h2-clamp font-bold">Results</h2>
        <p className="md:text-2xl text-lg">
          Understanding that this tool is aimed at a very specific audience, I
          wasn&apos;s expecting too much in terms of people actually visiting my
          site. But I some traffic! and from all over the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageSection
            src={count}
            alt="outcome shot 1"
            description="Monthly user counts have hovered steadily around 300."
          />
          <ImageSection
            src={country}
            alt="outcome shot 2"
            description="King's work is ubiquitous"
          />
        </div>
      </section>
    </div>
  );
};

export default Skapi;
