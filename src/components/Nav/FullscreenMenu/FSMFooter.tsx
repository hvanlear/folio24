"use client";

import { emailContactData } from "@/src/utils/contactData";

export default function FSMFooter() {
  const emailInfo = emailContactData();

  return (
    <>
      <div className="w-full flex flex-row-reverse absolute bottom-0 p-4 md:p-8">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center">
            <span className="text-small-clamp font-extrabold text-black">
              No.3
            </span>
            <span className="text-small-clamp text-black px-2">|</span>
            <span className="text-small-clamp text-black">
              designed and built by hand in NC
            </span>
          </div>
          <div className="flex flex-row justify-end items-center">
            <span>
              <emailInfo.icon size={18} color="black" stroke={2} />
            </span>
            <span className="text-black pl-2">{emailInfo.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}
