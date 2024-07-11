//Utilizing contact icons: <contact.icon size={24} color="currentColor" stroke={2} />

import {
  IconMail,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandDribbble,
  IconProps,
} from "@tabler/icons-react";

export interface ContactInfo {
  type: "email" | "phone" | "social";
  value: string;
  link: string;
  icon: React.ComponentType<IconProps>;
}

const contactData: ContactInfo[] = [
  {
    type: "email",
    value: "hvanlear@gmail.com",
    link: "mailto:hvanlear@gmail.com",
    icon: IconMail,
  },
  {
    type: "social",
    value: "LinkedIn",
    link: "https://www.linkedin.com/in/yourprofile",
    icon: IconBrandLinkedin,
  },
  {
    type: "social",
    value: "Instagram",
    link: "https://www.instagram.com/yourprofile",
    icon: IconBrandInstagram,
  },
  {
    type: "social",
    value: "GitHub",
    link: "https://github.com/yourusername",
    icon: IconBrandGithub,
  },
  {
    type: "social",
    value: "Dribbble",
    link: "https://github.com/yourusername",
    icon: IconBrandDribbble,
  },
];

export const getContactDataByType = (
  type: "email" | "phone" | "social"
): ContactInfo[] => {
  return contactData.filter((item) => item.type === type);
};

export const socialContactData = (): ContactInfo[] =>
  getContactDataByType("social");

export const emailContactData = (): ContactInfo => {
  const emailData = getContactDataByType("email");
  return emailData[0];
};

export default contactData;
