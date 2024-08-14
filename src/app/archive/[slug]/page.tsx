import React from "react";
import ContactInfoBasic from "@/src/components/Contact/ContactInfoBasic";
import Image from "next/image";
import { getProjects } from "@/src/utils/projectData";
import projectMapping from "@/src/utils/projectMapping";
import { notFound } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandDribbble,
  IconExternalLink,
  IconProps,
} from "@tabler/icons-react";

const IconMap: Record<string, React.ComponentType<IconProps>> = {
  live: IconExternalLink,
  github: IconBrandGithub,
  dribbble: IconBrandDribbble,
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjects().find((p) => p.slug === params.slug);

  if (!project || !project.slug) {
    notFound();
  }

  const CustomComponent =
    project.slug in projectMapping
      ? projectMapping[project.slug as keyof typeof projectMapping]
      : null;

  return (
    <div className="text-stone-950 relative">
      <article className="bg-stone-50">
        <div className="bg-stone-300 flex justify-center">
          <div className="container-project_heading w-full 3xl:w-1/2">
            <div className="container-project_heading_inner p-12 md:p-24 flex flex-col gap-4">
              <h1 className="text-h2-clamp leading-none">
                {project.title || "Untitled Project"}
              </h1>
              <div className="container-project_tags flex flex-row gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="tag border border-black rounded-full px-3 py-1 text-xs font-normal leading-tight inline-block"
                  >
                    {tag}
                  </span>
                )) || "No tags available."}
              </div>
              <p>{project.description || "No description available."}</p>
              <div className="project-links flex gap-4">
                {(project.links &&
                  Object.entries(project.links).map(
                    ([key, link]) =>
                      link && (
                        <a
                          key={key}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {React.createElement(IconMap[key], { size: 24 })}
                          <span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                        </a>
                      )
                  )) ||
                  "No links available."}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="container-project_body w-full 3xl:w-1/2">
            <div className="container-project_body_inner py-24 px-6 md:px-24">
              <div className="container-image flex w-full justify-center pb-24">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    width={1100}
                    height={900}
                    className="rounded-lg shadow-md"
                  />
                )}
              </div>
              {CustomComponent && <CustomComponent />}
            </div>
          </div>
        </div>
      </article>

      <div className="w-full ">
        <ContactInfoBasic />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = getProjects();

  return projects
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug as string,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjects().find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title || "Untitled Project",
    description: project.description || "No description available.",
  };
}
