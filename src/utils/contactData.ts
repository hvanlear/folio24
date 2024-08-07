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
    link: "https://www.linkedin.com/in/hunter-van-lear/",
    icon: IconBrandLinkedin,
  },
  {
    type: "social",
    value: "Instagram",
    link: "https://www.instagram.com/hunter_v_l/",
    icon: IconBrandInstagram,
  },
  {
    type: "social",
    value: "GitHub",
    link: "https://github.com/hvanlear",
    icon: IconBrandGithub,
  },
  {
    type: "social",
    value: "Dribbble",
    link: "https://dribbble.com/huntervl",
    icon: IconBrandDribbble,
  },
];

export const getContactDataByType = (
  type: "email" | "phone" | "social"
): ContactInfo[] => {
  return contactData.filter((item) => item.type === type);
};

//Utilizing contact icons:
//  const socialContacts = socialContactData();
// {socialContacts.map((contact, index) => (
//   <li key={index} >
//     <a
//       href={contact.link}
//       className="text-black text-3xl hover:text-blue-500 font-bold"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {contact.value}
//     </a>
//        <contact.icon size={24} color="currentColor" stroke={2} />
//   </li>
// ))}

export const socialContactData = (): ContactInfo[] =>
  getContactDataByType("social");

export const emailContactData = (): ContactInfo => {
  const emailData = getContactDataByType("email");
  return emailData[0];
};

export default contactData;
