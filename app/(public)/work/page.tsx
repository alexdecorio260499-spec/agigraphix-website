"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Signage", "Printing", "Displays", "Events", "Corporate", "Retail", "Hospitality"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter || project.industry === activeFilter;
  });

  return (
    <div className="bg-white min-h-screen pt-8 sm:pt-12 pb-24">
      {/* Page Intro Header */}
      <div className="container mx-auto px-6 max-w-7xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 text-[#E52525] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#E52525]" />
          <span>Previous Work &middot; Portfolio</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#111111] leading-[0.95] mb-5">
          OUR WORK.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl font-normal leading-relaxed">
          A curated selection of bespoke signage, displays, large-format printing, and branded environments crafted by Agigraphix.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="container mx-auto px-6 max-w-7xl mb-10 sm:mb-12">
        <div className="flex flex-wrap gap-2 md:gap-3 border-b border-gray-200 pb-6">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer",
                activeFilter === filter
                  ? "bg-[#111111] text-white shadow-md border border-[#111111]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#111111] border border-transparent"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid — Matching Our Services UI/Feel & Compact Scale */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {filteredProjects.map((project, i) => {
            const isOddTotal = filteredProjects.length % 2 !== 0;
            const isLastItem = i === filteredProjects.length - 1;
            const pattern = i % 4;

            // Modular 7/5 and 5/7 asymmetric rhythm matching services page
            let colSpanClass = "col-span-1 md:col-span-1 lg:col-span-7";
            if (isOddTotal && isLastItem) {
              colSpanClass = "col-span-1 md:col-span-2 lg:col-span-12";
            } else if (pattern === 1 || pattern === 2) {
              colSpanClass = "col-span-1 md:col-span-1 lg:col-span-5";
            }

            const indexStr = String(i + 1).padStart(2, "0");

            return (
              <Link
                href={`/work/${project.slug}`}
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-[#111111] border border-neutral-800 hover:border-[#E52525] transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[250px] sm:min-h-[270px] lg:min-h-[285px] xl:min-h-[300px]",
                  colSpanClass
                )}
              >
                {/* Authentic Agigraphix Photography */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.coverImage}')` }}
                  role="img"
                  aria-label={project.title}
                />

                {/* Sophisticated Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 group-hover:from-black group-hover:via-black/55 transition-colors duration-300 z-10" />

                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E52525] transition-colors duration-300 z-20" />

                {/* Card Header: Project Number and Location/Year */}
                <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#E52525] font-black text-sm sm:text-base tracking-widest font-mono">
                      {indexStr}
                    </span>
                    <span className="h-[2px] w-6 bg-[#E52525] group-hover:w-10 transition-all duration-300" />
                  </div>
                  <span className="text-white/50 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
                    {project.location} &middot; {project.year}
                  </span>
                </div>

                {/* Card Footer: Category, Title, Description, and CTA */}
                <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end">
                  <p className="text-[#E52525] text-xs font-bold uppercase tracking-widest mb-1.5">
                    {project.category} &middot; {project.industry}
                  </p>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-white mb-1.5 sm:mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-3 sm:mb-4 max-w-xl">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#E52525] transition-colors duration-200">
                    <span>View Project</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 text-[#E52525] group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-neutral-400 font-medium text-lg">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
