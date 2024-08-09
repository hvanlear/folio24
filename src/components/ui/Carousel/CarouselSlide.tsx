import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FullProjectInfo } from "@/src/utils/projectData";

interface CarouselSlideProps {
  project: FullProjectInfo;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ project }) => {
  const { image, title, tags, slug } = project;

  return (
    <Link href={`/archive/${slug}`} className="embla__slide">
      <div className="embla__slide__inner">
        <div className="embla__slide__img-container shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
          <Image
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="embla__slide__img max-h-[272px] 3xl:max-h-[594px] transition-all duration-300 ease-in-out hover:scale-[1.02]"
          />
        </div>
        <h3 className="embla__slide__title">{title}</h3>
        <div className="embla__slide__tags">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="embla__slide__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CarouselSlide;
