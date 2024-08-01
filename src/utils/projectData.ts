// src/utils/projectData.ts

import { StaticImageData } from "next/image";
// Import your project images
import modelMac from "@/src/assets/images/projects/modelMac.png";

export type ProjectType = "design" | "development" | "other";

export interface FullProjectInfo {
  title: string;
  link: string;
  type: ProjectType;
  tags: string[];
  image: StaticImageData;
  description: string;
}

export const projects: FullProjectInfo[] = [
  {
    type: "design",
    title: "Project 1 Title",
    link: "https://project1.com",
    description: "A brief description of Project 1.",
    tags: ["React", "TypeScript", "Next.js"],
    image: modelMac,
  },
  {
    type: "design",
    title: "Project 2 Title",
    link: "https://project2.com",
    description: "A brief description of Project 2.",
    tags: ["Vue", "JavaScript", "Tailwind CSS"],
    image: modelMac,
  },
  {
    type: "development",
    title: "Project 3 Title",
    link: "https://project3.com",
    description: "A brief description of Project 3.",
    tags: ["React Native", "TypeScript"],
    image: modelMac,
  },
  {
    type: "development",
    title: "Project 4 Title",
    link: "https://project4.com",
    description: "A brief description of Project 4.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: modelMac,
  },
  // Add more projects as needed
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
  fields: (keyof FullProjectInfo)[] = ["title", "link"]
): Record<ProjectType, Partial<FullProjectInfo>[]> {
  const projectTypes: ProjectType[] = ["design", "development"];

  return projectTypes.reduce((acc, type) => {
    acc[type] = getProjects({ type, fields });
    return acc;
  }, {} as Record<ProjectType, Partial<FullProjectInfo>[]>);
}
