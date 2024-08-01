import React from "react";
import Link from "next/link";
import { FullProjectInfo } from "@/src/utils/projectData";

type ArchiveSlatProps = Pick<FullProjectInfo, "title" | "link">;

export default function ArchiveSlat({ title, link }: ArchiveSlatProps) {
  return (
    <Link href={link} passHref className="w-full">
      <div className="archive-slat group cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-950">
        <div className="flex justify-between items-center relative py-4 px-2 ">
          <span className="text-2xl font-medium text-stone-950 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            {title}
          </span>
          <span className="text-2xl font-medium text-stone-950 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            Full Case
          </span>
          <div className="absolute inset-x-0 -top-px h-px bg-gray-200 scale-x-100 "></div>
        </div>
      </div>
    </Link>
  );
}
