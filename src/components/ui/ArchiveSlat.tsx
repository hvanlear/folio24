// src/components/Archive/ArchiveSlat.tsx

import React from "react";
import Link from "next/link";
import { BaseProjectInfo } from "@/src/utils/projectData";

type ArchiveSlatProps = BaseProjectInfo;

export default function ArchiveSlat({ title, link }: ArchiveSlatProps) {
  return (
    <Link href={link} passHref className="w-full">
      <div className="archive-slat group py-4 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100">
        <div className="flex justify-between items-center relative">
          <span className="text-lg font-medium text-black">{title}</span>
          <span className="text-lg font-medium text-black group-hover:translate-x-1 transition-transform duration-300">
            Full Case
          </span>
          <div className="absolute inset-x-0 -top-px h-px bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
        </div>
      </div>
    </Link>
  );
}
