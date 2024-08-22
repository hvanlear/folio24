import {
  IconBrandGithub,
  IconBrandDribbble,
  IconExternalLink,
  IconProps,
} from "@tabler/icons-react";
import { StaticImageData } from "next/image";
//Project Images
import modelMac from "@/public/images/projects/modelMac.png";
import skCover from "@/public/images/projects/skCover.png";
import nfCover from "@/public/images/projects/nfCover.jpg";
import DesignSystem from "@/public/images/projects/DesignSystem.png";
import bankingCover from "@/public/images/projects/bankingCover.jpg";

export type ProjectType = "design" | "development" | "other";

export interface ProjectLink {
  url: string;
  icon: React.ComponentType<IconProps>;
}

export interface FullProjectInfo {
  title: string;
  links: {
    live?: ProjectLink;
    github?: ProjectLink;
    dribbble?: ProjectLink;
  };
  type: ProjectType;
  tags: string[];
  image: StaticImageData;
  description: string;
  slug: string;
}

export const projects: FullProjectInfo[] = [
  {
    //DESIGN PROJECTS
    type: "design",
    title: "BPMN Modeler",
    links: {
      live: { url: "https://project1.com", icon: IconExternalLink },
      dribbble: {
        url: "https://dribbble.com/shots/22347402-BPMN-Modeler",
        icon: IconBrandDribbble,
      },
    },
    description:
      "Redesigned and optimized a web-based canvas tool for intuitive process modeling and creation, enhancing user experience and productivity.",
    tags: ["UI Design", "Product Design", "Figma"],
    image: modelMac,
    slug: "modeler",
  },
  {
    type: "design",
    title: "Consumer Bank Account Opening",
    links: {
      dribbble: {
        url: "https://dribbble.com/shots/22772371-Consumer-Bank-Account-Opening",
        icon: IconBrandDribbble,
      },
    },
    description:
      "Reimagined and redesigned the user experience for a consumer bank account opening web application",
    tags: ["HTML / CSS", "UX Engineering", "UI Design", "Fintech"],
    image: bankingCover,
    slug: "banking",
  },
  {
    type: "design",
    title: "ProcessMaker Design System",
    links: {
      dribbble: {
        url: "https://dribbble.com/shots/22613815-BPMN-Canvas-UI-Kit",
        icon: IconBrandDribbble,
      },
    },
    description:
      "Developed a comprehensive Figma Design System for a large SaaS platform.",
    tags: ["Figma", "Design Systems"],
    image: DesignSystem,
    slug: "pmdesginsystem",
  },
  //DEV PROJECTS

  // {
  //   type: "development",
  //   title: "News Fight",
  //   links: {
  //     live: {
  //       url: "https://stephen-king-api.onrender.com/",
  //       icon: IconExternalLink,
  //     },
  //     github: {
  //       url: "https://github.com/hvanlear/NewsFight",
  //       icon: IconBrandGithub
  //     }
  //   },
  //   description:
  //     "A python app used compare sentiment analysis scores between two news sources. ",
  //   tags: ["Python + Flask", "Javascript", "Postgres", "Sentiment Analysis"],
  //   image: nfCover,
  //   slug: "newsfight"
  // },
  {
    type: "development",
    title: "Stephen King REST API",
    links: {
      live: {
        url: "https://stephen-king-api.onrender.com/",
        icon: IconExternalLink,
      },
      github: {
        url: "https://github.com/hvanlear/Stephen-King-API",
        icon: IconBrandGithub,
      },
    },
    description:
      "A RESTful API built from the collected works of the horror master.",
    tags: ["Python", "Node", "Postgres"],
    image: skCover,
    slug: "skapi",
  },
];

type ProjectFields = keyof FullProjectInfo;

interface GetProjectsOptions {
  type?: ProjectType;
  fields?: ProjectFields[];
}

/**
 * Retrieves projects based on specified options.
 *
 * @param options - The options for filtering and selecting project data.
 * @returns An array of projects with the specified fields.
 *
 * @example
 * // Get all projects with all fields
 * const allProjects = getProjects();
 *
 * @example
 * // Get all design projects
 * const designProjects = getProjects({ type: "design" });
 *
 * @example
 * // Get titles and links of development projects
 * const devProjectTitlesAndLinks = getProjects({
 *   type: "development",
 *   fields: ["title", "link"]
 * });
 *
 * @example
 * // Get titles, descriptions, and tags of all projects
 * const projectDetails = getProjects({
 *   fields: ["title", "description", "tags"]
 * });
 *
 * @throws {Error} If an invalid project type is provided.
 */

export function getProjects(
  options: GetProjectsOptions = {}
): Partial<FullProjectInfo>[] {
  const { type, fields = Object.keys(projects[0]) as ProjectFields[] } =
    options;

  if (type && !["design", "development"].includes(type)) {
    throw new Error(`Invalid project type: ${type}`);
  }

  let filteredProjects = type
    ? projects.filter((project) => project.type === type)
    : projects;

  return filteredProjects.map((project) => {
    const selectedFields: Partial<FullProjectInfo> = {};
    fields.forEach((field) => {
      if (field in project) {
        selectedFields[field] = project[field] as any;
      } else {
        console.warn(`Field "${field}" not found in project`);
      }
    });
    return selectedFields;
  });
}

/**
 * Groups projects by their type, selecting only specified fields.
 * @param fields - The fields to select from each project
 * @returns An object with project types as keys and arrays of projects as values
 */
export function getProjectsByType(
  fields: (keyof FullProjectInfo)[] = ["title", "slug"]
): Record<ProjectType, Partial<FullProjectInfo>[]> {
  const projectTypes: ProjectType[] = ["design", "development"];

  return projectTypes.reduce((acc, type) => {
    acc[type] = getProjects({ type, fields });
    return acc;
  }, {} as Record<ProjectType, Partial<FullProjectInfo>[]>);
}
