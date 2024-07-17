import React from "react";
import { socialContactData } from "@/src/utils/contactData";
import { motion } from "framer-motion";
import { menuItemVariants } from "@/src/animations/pageTransitions";

const FSMContactLinks: React.FC = () => {
  const socialContacts = socialContactData();

  return (
    <>
      <div className="fsmContactLinks">
        <h3 className="text-black">CONTACT</h3>
        <ul className="flex flex-row gap-5 md:gap-32">
          {socialContacts.map((contact, index) => (
            <motion.li key={index} variants={menuItemVariants}>
              <a
                href={contact.link}
                className="text-black text-h3-clamp hover:text-blue-500 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FSMContactLinks;
