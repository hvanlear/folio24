import Image from "next/image";
import { IconBook, IconBookmark, IconUsers, Icon } from "@tabler/icons-react";

import before from "@/public/images/projects/modeler/modelerBefore.png";
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
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">The Challenge</h2>
        <p className="text-2xl">
          As a fan of Stephen King&apos;s extensive literary universe and a
          developer, I created a REST API to programmatically access information
          about his works, characters, and the interconnected &quot;King
          Universe.&quot; This project combines my passion for King&apos;s
          stories with my technical skills in web scraping, database design, and
          API development.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <StephenKingInfographic />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="text-2xl">
          Our team faced the daunting task of overhauling our web-based BPMN
          modeling canvas tool. Users struggled with a cumbersome interface,
          limited maneuverability, and poor screen utilization. The inflexible
          menu structure hindered feature integration and scalability.
          Compounding these issues were a tight development timeline and a
          complex codebase with potential performance pitfalls. Our challenge
          was to transform these usability hurdles into a seamless, efficient
          user experience while navigating technical constraints and time
          pressures
        </p>
      </div>
    </div>
  );
}
