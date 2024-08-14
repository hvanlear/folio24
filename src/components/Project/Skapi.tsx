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
        <p className="md:text-2xl text-lg">
          As an avid Stephen King fan and a developer, I encountered a
          significant gap in the digital landscape: there was no comprehensive
          API available for accessing information about King&apos;s vast body of
          work.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <StephenKingInfographic />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">Approach & Discovery</h2>
        <p className="md:text-2xl text-lg"></p>
      </div>
    </div>
  );
}
