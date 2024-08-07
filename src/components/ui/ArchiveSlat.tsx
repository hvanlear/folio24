import React from "react";
import Link from "next/link";
import { FullProjectInfo } from "@/src/utils/projectData";

type ArchiveSlatProps = Pick<FullProjectInfo, "title" | "slug">;

export default function ArchiveSlat({ title, slug }: ArchiveSlatProps) {
  return (
    <Link href={`/archive/${slug}`} className="w-full">
      <div className="archive-slat group cursor-pointer transition-all duration-200 ease-in-out hover:bg-stone-950">
        <div className="flex justify-between items-center relative py-4 px-2 ">
          <span className="text-2xl group-hover:font-bold text-stone-950 group-hover:text-slate-50 group-hover:translate-x-1 transition-all duration-300">
            {title}
          </span>
          <span className="text-sm group-hover:font-bold text-stone-950 group-hover:text-slate-50 group-hover:-translate-x-1 transition-all duration-300">
            Full Case
          </span>
          <div className="absolute inset-x-0 -top-px h-px bg-stone-200 scale-x-100 group-hover:scale-x-0"></div>
        </div>
      </div>
    </Link>
  );
}
