import React from "react";

interface Challenge {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const IconComponent = challenge.icon;
  return (
    <div className="flex items-start p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        <IconComponent size={24} stroke={1.5} className="text-emerald-600" />
      </div>
      <div className="ml-3">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {challenge.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{challenge.description}</p>
      </div>
    </div>
  );
};

interface ChallengeSectionProps {
  overview: string;
  challenges: Challenge[];
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  overview,
  challenges,
}) => {
  // Function to pair challenges
  const pairChallenges = (challenges: Challenge[]): Challenge[][] => {
    const pairs: Challenge[][] = [];
    for (let i = 0; i < challenges.length; i += 2) {
      pairs.push(challenges.slice(i, i + 2));
    }
    return pairs;
  };

  const challengePairs = pairChallenges(challenges);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-h2-clamp font-bold">The Challenge</h2>
        <p className="md:text-2xl text-lg">{overview}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8">
          {challengePairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="flex-1 flex flex-col gap-4">
              {pair.map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
