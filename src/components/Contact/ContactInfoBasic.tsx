//USED BASIC FOOTER FOR light pages

import { socialContactData } from "@/src/utils/contactData";
import { emailContactData } from "@/src/utils/contactData";

import NavLinks from "../Nav/NavLinks";

export default function ContactInfoBasic() {
  const emailInfo = emailContactData();
  const socialContacts = socialContactData();

  return (
    <>
      <div className="flex flex-col gap-4  ">
        {/* Top  Row */}
        <div className=" flex flex-col md:flex-row gap-4 h-full md:justify-between items-center md:items-end ">
          <h1
            className="text-h2-clamp font-bold leading-none"
            style={{
              WebkitTextFillColor: "white",
              WebkitTextStroke: "2px #0c0a09",
            }}
          >
            Hunter Van Lear
          </h1>

          <NavLinks isFullScreen={false} />
        </div>
        {/* Bottom row */}
        <div className=" flex flex-col-reverse md:flex-row gap-2 md:gap-4 h-full md:justify-between items-center md:items-center">
          <div className="flex flex-row items-center">
            <span>
              <emailInfo.icon size={20} color="#78716c" stroke={1} />
            </span>
            <h5 className="text-stone-500  pl-2 text-h5-clamp font-medium leading-none">
              {emailInfo.value}
            </h5>
          </div>
          <ul className="flex flex-row items-center justify-between md:justify-normal gap-5">
            <p className="hidden md:block text-sm text-stone-500 font-serif">
              Elsewhere
            </p>
            {socialContacts.map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.link}
                  className="text-stone-500  text-3xl hover:text-blue-500 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon size={30} color="currentColor" stroke={1} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
