import ContactInfoBasic from "@/src/components/Contact/ContactInfoBasic";
import Image from "next/image";
import { getProjects } from "@/src/utils/projectData";
import projectMapping from "@/src/utils/projectMapping";
import { notFound } from "next/navigation";

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
    <div className="text-slate-950">
      <article className=" bg-slate-50">
        <div className="container-project_heading flex flex-col gap-4 bg-slate-300 p-24">
          <h1 className="text-h2-clamp leading-none">
            {project.title || "Untitled Project"}
          </h1>
          <div>
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
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
        <div className="container-project_body py-24">
          <div className="container-image flex w-full justify-center">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title || "Project image"}
                width={1100}
                height={900}
                className="rounded-lg"
              />
            )}
          </div>
          {CustomComponent && <CustomComponent />}
        </div>
      </article>
      <div className="w-full">
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
