"use client";

import ClippedGradientTicker from "@/src/components/ui/ClippedGradientTicker/ClippedGradientTicker";
import ContactInfoBasic from "@/src/components/Contact/ContactInfoBasic";
import useCycleGradients from "@/src/hooks/useCycleGradients";
import useWindowSize from "@/src/hooks/useWindowSize";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import Me from "@/public/images/misc/Me.jpeg";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const [width, height] = useWindowSize();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200], {
    clamp: false,
    ease: (t) => {
      if (width <= 768) {
        return Math.min(t, 124.97 / 800);
      }
      return Math.min(t, 0.5);
    },
  });

  const springY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  const { gradient } = useCycleGradients();

  // Calculate the top position based on screen height
  // const containerTopPosition = useMemo(() => {
  //   const topPercentage = 15;
  //   return `${(topPercentage / 100) * height}px`;
  // }, [height]);

  return (
    <>
      <main className="relative ">
        <section id="section-ticker" className="w-full overflow-hidden z-20">
          <ClippedGradientTicker
            containerClipPath="polygon(0 0%, 100% 0, 100% 24%, 0 98%)"
            gradientClipPath="polygon(0px 72%, 100% 0px, 100% 25%, 0px 97%)"
            gradientTop="18%"
            tickerWords={["Traveler", "Student", "Husband", "Brother"]}
            gradient={gradient}
            isDark={true}
          />
        </section>
        <div className="flex w-full justify-center">
          {/* Inner container for both heading and about section */}
          {/* Inner container for both heading and about section */}
          <div
            id="container-inner-about "
            className=" w-full 3xl:w-[55%] flex items-center flex-col 2xl:h-[89vh] min-h-[50rem]"
          >
            {/* Animated Header */}
            <motion.div
              className="-z-10 pl-4 w-full"
              style={{ y: springY }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 30, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                id="heading-about"
                className="leading-none text-30xl text-stone-950 font-bold tracking-tighter"
              >
                Hello!
              </h1>
            </motion.div>
            <section id="section-about-main" className="">
              <div className="bg-slate-50 z-10 border-x-2 border-t-2 border-slate-600 rounded-tl-[5rem] rounded-tr-[5rem] w-full  flex flex-col justify-between">
                <div className="md:p-24 p-12 flex flex-col gap-8 ">
                  <div className="flex flex-col-reverse gap-8 h-full items-center md:flex-row ">
                    <div className="w-full md:w-1/2 flex flex-col  gap-8">
                      <h2 className="text-stone-950 text-3xl">
                        My name is Hunter Van Lear
                      </h2>
                      <p className="text-stone-950 text-2xl">
                        I am a developer and designer from Raleigh, North
                        Carolina. I currently work as a freelancer for local
                        businesses, helping them improve their digital presence
                        through web development, detail-oriented interface
                        design, and infrastructure support.{" "}
                      </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                      <Image
                        src={Me}
                        alt={"A pic of me"}
                        width={400}
                        height={200}
                        className="rounded-lg object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <h2 className="text-stone-950 text-3xl ">Services:</h2>
                  <ul className="text-stone-950 flex flex-col md:flex-row gap-8">
                    <li>
                      <h3 className="mb-4">Web Development</h3>
                      <p className="text-sm">
                        I&apos;m a versatile full-stack developer with
                        experience in both front-end and back-end technologies.
                        My expertise includes building custom APIs and web
                        applications using modern JavaScript frameworks and
                        libraries. I&apos;m proficient in React for creating
                        dynamic user interfaces, Node.js for server-side
                        development, and Tailwind CSS for efficient styling. My
                        approach ensures responsive, cross-browser compatible
                        websites that deliver optimal performance across all
                        devices.
                      </p>
                    </li>
                    <li>
                      <h3 className="mb-4">UI/UX Design</h3>
                      <p className="text-sm">
                        My design skills encompass the entire feature design
                        lifecycle, from initial concept to final implementation.
                        I&apos;ve created and maintained comprehensive design
                        systems, ensuring consistency and efficiency across
                        projects. Proficient in industry-standard tools like
                        Figma and Adobe Creative Suite, I craft intuitive and
                        visually appealing interfaces. My focus is on
                        translating user needs into designs that enhance user
                        experience and drive engagement.
                      </p>
                    </li>
                    <li>
                      <h3 className="mb-4">IT Infrastructure & Support</h3>
                      <p className="text-sm">
                        My experience with complex IT systems has honed my
                        ability to thrive under pressure. I excel in
                        troubleshooting intricate technical issues and
                        maintaining system stability in critical situations. My
                        diverse skill set spans network configurations, server
                        management, and security protocols, allowing me to adapt
                        quickly to new challenges. Whether diagnosing obscure
                        software conflicts or optimizing infrastructure, I
                        provide consistent, high-quality support in demanding
                        technical environments.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* footer */}
            <div className="w-full">
              <ContactInfoBasic />
            </div>
          </div>
        </div>
        {/* background */}
        <div className="bg-stone-50 top-0 absolute w-full -z-20 min-h-[100vh]" />
      </main>
    </>
  );
}
