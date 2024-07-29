//USED BASIC FOOTER FOR light pages

import { socialContactData } from "@/src/utils/contactData";
import { emailContactData } from "@/src/utils/contactData";

import NavLinks from "../Nav/NavLinks";

export default function ContactInfoBasic() {
  const emailInfo = emailContactData();
  const socialContacts = socialContactData();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:items-start items-center justify-between ">
        <div className=" flex flex-col gap-4">
          <h1
            className="text-h2-clamp font-bold leading-none"
            style={{
              WebkitTextFillColor: "white",
              WebkitTextStroke: "2px black",
            }}
          >
            Hunter Van Lear
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-stone-950 font-serif">Reach Out !</span>
            <span>
              <emailInfo.icon size={18} color="black" stroke={2} />
            </span>
            <span className="text-black pl-2">{emailInfo.value}</span>
          </div>
        </div>

        <div className="flex flex-col h-full gap-4">
          <NavLinks isFullScreen={false} />
          <div className="flex flex-row gap-4  items-center justify-center md:justify-end">
            <h3 className=" hidden md:block text-small-clamp text-stone-600 font-serif">
              Elsewhere
            </h3>
            <ul className="flex flex-row justify-between md:justify-normal gap-5">
              {socialContacts.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.link}
                    className="text-stone-950 text-3xl hover:text-blue-500 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <contact.icon size={35} color="currentColor" stroke={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
