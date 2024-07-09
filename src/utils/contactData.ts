// data/contactData.ts

export interface ContactInfo {
  type: "email" | "phone" | "social";
  value: string;
  link?: string;
  icon?: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
}

const contactData: ContactInfo[] = [
  {
    type: "email",
    value: "hvanlear@gmial.com",
    link: "mailto:hvanlear@gmail.com",
  },
  {
    type: "social",
    value: "LinkedIn",
    link: "https://www.linkedin.com/in/yourprofile",
    // icon: (props) => <SocialIcon name="linkedin" {...props} />,
  },
  {
    type: "social",
    value: "Instagram",
    link: "https://www.instagram.com/yourprofile",
  },
  {
    type: "social",
    value: "GitHub",
    link: "https://github.com/yourusername",
  },
];

export default contactData;
