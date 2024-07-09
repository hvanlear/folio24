import React from "react";
import { socialContactData } from "@/src/utils/contactData";

const FSMContactLinks: React.FC = () => {
  const socialContacts = socialContactData();

  return (
    <>
      <div className="fsmContactLinks">
        <h3 className="text-black">CONTACT</h3>
        <ul className="flex flex-row gap-32">
          {socialContacts.map((contact, index) => (
            <li key={index}>
              <a
                href={contact.link}
                className="text-black text-3xl hover:text-blue-500"
                target="_blank"
                rel="noopener n oreferrer"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FSMContactLinks;
