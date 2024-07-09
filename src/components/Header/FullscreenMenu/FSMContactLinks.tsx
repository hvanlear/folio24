import React from "react";
import contactData from "@/src/utils/contactData";

const socialContactData = contactData.filter((item) => item.type === "social");

const FSMContactLinks: React.FC = () => {
  return (
    <>
      <h3 className="text-black">CONTACT</h3>
      <ul className="flex flex-row gap-4">
        {socialContactData.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-black text-5xl"
              target="_blank"
              rel="noopener n oreferrer"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FSMContactLinks;
