// Define the project type
export interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Project One",
    description: "This is a description for Project One.",
    imageUrl: "url_to_image_1.jpg",
    tags: ["development", "UI"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a description for Project Two.",
    imageUrl: "url_to_image_2.jpg",
    tags: ["development", "UI"],
  },
];
