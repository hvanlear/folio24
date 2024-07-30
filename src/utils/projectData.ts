// src/utils/projectData.ts

import { StaticImageData } from "next/image";
// Import your project images
import modelMac from "@/src/assets/images/projects/modelMac.png";

// Base interface with essential properties
export interface BaseProjectInfo {
  title: string;
  link: string;
}

// Extended interface for full project details
export interface FullProjectInfo extends BaseProjectInfo {
  tags: string[];
  image: StaticImageData;
  description: string;
}

// Create a type that makes tags and image optional
export type ProjectInfo = BaseProjectInfo &
  Partial<Pick<FullProjectInfo, "tags" | "image" | "description">>;

export const projects: FullProjectInfo[] = [
  {
    title: "Project 1 Title",
    link: "https://project1.com",
    description: "A brief description of Project 1.",
    tags: ["React", "TypeScript", "Next.js"],
    image: modelMac,
  },
  {
    title: "Project 2 Title",
    link: "https://project2.com",
    description: "A brief description of Project 2.",
    tags: ["Vue", "JavaScript", "Tailwind CSS"],
    image: modelMac,
  },
  // Add more projects as needed
];
