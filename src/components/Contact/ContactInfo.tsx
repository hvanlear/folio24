// TODO - COMBINE Both contact infos and move into footer directory
// Add New version of <NavLinks/> to replace the current inner site nav

import { socialContactData } from "@/src/utils/contactData";

//Utilizing contact icons:
//  const socialContacts = socialContactData();
// {socialContacts.map((contact, index) => (
//   <li key={index} variants={menuItemVariants}>
//     <a
//       href={contact.link}
//     >
//       {contact.value}
//     </a>
//      <contact.icon size={24} color="currentColor" stroke={2} />
//   </li>

export default function ContactInfo() {
  const socialContacts = socialContactData();
  return (
    <div className="flex flex-col gap-4 md:items-start items-center justify-center">
      <div className="">
        <h1
          className="text-h2-clamp font-bold leading-none"
          style={{
            WebkitTextFillColor: "black",
            WebkitTextStroke: "1px white",
          }}
        >
          Hunter Van Lear
        </h1>
      </div>
      <nav>
        <ul className="flex flex-row gap-3 md:gap-5">
          <li className="text-h3-clamp hover:text-blue-500 font-bold">
            <a href="http://">Home</a>
          </li>
          <li className="text-h3-clamp hover:text-blue-500 font-bold">
            <a href="http://">Archive</a>
          </li>
          <li className="text-h3-clamp hover:text-blue-500 font-bold">
            <a href="http://">About</a>
          </li>
          <li className="text-h3-clamp hover:text-blue-500 font-bold">
            <a href="http://">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-4  items-center">
        <p className="hidden md:block text-sm text-gray-400 font-serif">
          Elsewhere
        </p>
        <ul className="flex flex-row justify-between md:justify-normal gap-3 md:gap-5">
          {socialContacts.map((contact, index) => (
            <li key={index}>
              <a
                href={contact.link}
                className="text-white text-3xl hover:text-blue-500 font-bold"
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
  );
}
