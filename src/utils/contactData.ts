export interface Contact {
  id: number;
  name: string;
  logo?: string;
  url: string;
}

export const contact: Contact[] = [
  {
    id: 1,
    name: "hvanlear@gmail.com",
    url: "mailto:hvanlear@gmail.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    logo: "This is a description for Project Two.",
    url: "www.test.com",
  },
  {
    id: 2,
    name: "GitHub",
    logo: "This is a description for Project Two.",
    url: "www.test.com",
  },
  {
    id: 2,
    name: "Dribbble",
    logo: "This is a description for Project Two.",
    url: "www.test.com",
  },
];
