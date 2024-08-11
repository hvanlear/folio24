import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarouselSlide from "./CarouselSlide";
import { FullProjectInfo } from "@/src/utils/projectData";

type PropType = {
  projects?: FullProjectInfo[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ projects = [], options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport 3xl:px-24 px-10" ref={emblaRef}>
        <div className="embla__container gap-5 md:gap-2">
          {projects.map((project, index) => (
            <CarouselSlide key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
