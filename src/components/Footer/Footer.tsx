"use client";

import useCycleGradients from "@/src/hooks/useCycleGradients";

export default function Footer() {
  const currentGradient = useCycleGradients();
  return (
    <>
      {/* //so we can dymaically change the grid layout via MQ 
            height calc us based off of the header-clip width
      */}
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-rows: .5fr 2fr 1fr 1fr 1fr;
            height: calc(100vh - 250px)
          }

          @media (min-width: 1800px) {
            .grid-container {
              grid-template-rows: .5fr 1fr 1fr 1fr;
            }
          }
        `}
      </style>
      <section
        id="section-ticker"
        className=" bg-black  w-full overflow-hidden"
      >
        <div
          id="header-clip"
          style={{
            clipPath: "polygon(0px 68%, 100% 0px, 100% 100%, 0px 100%)",
          }}
          className="bg-white relative h-64 flex  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
        >
          <div
            className="gradient-clip"
            style={{
              clipPath: "polygon( 0% 0%, 100% 0%, 100% 13%, -68% 129%)",
              backgroundImage: currentGradient,
              position: "absolute",
              left: 0,
              top: "-5%",
              right: 0,
              height: "100%",
              zIndex: 9,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
