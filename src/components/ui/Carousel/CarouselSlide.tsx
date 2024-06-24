import React from "react";
import Image, { StaticImageData } from "next/image";

export interface Project {
  image: string | StaticImageData;
  title: string;
  tags: string[];
}

const CarouselSlide: React.FC<Project> = ({ image, title, tags }) => {
  return (
    <div className="embla__slide">
      <div className="embla__slide__inner">
        <div className="embla__slide__img-container shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <Image
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="embla__slide__img "
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
    </div>
  );
};

export default CarouselSlide;
