"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_PROJECTS, Project } from "@/lib/data";
import { SERVICE_PRODUCTS, ServiceProduct } from "@/lib/service-products";

// Unified work item structure
interface PortfolioItem {
  id: string;
  title: string;
  primaryCategory: "Signage" | "Large Format Printing" | "Displays & Fabrication" | "Events & Exhibitions";
  primarySlug: "signage" | "large-format-printing" | "displays-fabrication" | "events-exhibitions";
  subCategory: string; // key for filtering, e.g. "3d-letters"
  subCategoryLabel: string;
  image: string;
  caseStudySlug?: string;
  client?: string;
  location?: string;
}

// Convert MOCK_PROJECTS to PortfolioItem[]
const CASE_STUDY_ITEMS: PortfolioItem[] = MOCK_PROJECTS.map((p) => {
  let primaryCat: PortfolioItem["primaryCategory"] = "Signage";
  let primarySlug: PortfolioItem["primarySlug"] = "signage";
  let subCategory = "general";
  let subCategoryLabel = p.category;

  if (p.category === "Signage") {
    primaryCat = "Signage";
    primarySlug = "signage";
    if (p.services.some((s) => /3d|cut-out|channel/i.test(s))) {
      subCategory = "3d-letters";
      subCategoryLabel = "3D Letters";
    } else if (p.services.some((s) => /luminous|illuminat/i.test(s))) {
      subCategory = "luminous";
      subCategoryLabel = "Luminous Signage";
    } else {
      subCategory = "non-luminous";
      subCategoryLabel = "Non-Luminous";
    }
  } else if (p.category === "Printing") {
    primaryCat = "Large Format Printing";
    primarySlug = "large-format-printing";
    if (p.services.some((s) => /wall|cladding|mural/i.test(s))) {
      subCategory = "wall-murals";
      subCategoryLabel = "Wall Murals";
    } else {
      subCategory = "general";
      subCategoryLabel = "Large Format";
    }
  } else if (p.category === "Displays") {
    primaryCat = "Displays & Fabrication";
    primarySlug = "displays-fabrication";
    if (p.services.some((s) => /acrylic|table/i.test(s))) {
      subCategory = "acrylic";
      subCategoryLabel = "Acrylic Fabrication";
    } else {
      subCategory = "reception";
      subCategoryLabel = "Reception Desks";
    }
  } else if (p.category === "Events") {
    primaryCat = "Events & Exhibitions";
    primarySlug = "events-exhibitions";
    if (p.services.some((s) => /backdrop|media/i.test(s))) {
      subCategory = "backdrops";
      subCategoryLabel = "Backdrops";
    } else if (p.services.some((s) => /3d|letter/i.test(s))) {
      subCategory = "3d-event-letters";
      subCategoryLabel = "3D Event Letters";
    } else {
      subCategory = "booths";
      subCategoryLabel = "Exhibition Booths";
    }
  }

  return {
    id: `cs-${p.id}`,
    title: p.title,
    primaryCategory: primaryCat,
    primarySlug: primarySlug,
    subCategory: subCategory,
    subCategoryLabel: subCategoryLabel,
    image: p.coverImage,
    caseStudySlug: p.slug,
    client: p.client,
    location: p.location,
  };
});

// Convert SERVICE_PRODUCTS to PortfolioItem[]
const FABRICATION_ITEMS: PortfolioItem[] = SERVICE_PRODUCTS.map((p) => {
  let primaryCat: PortfolioItem["primaryCategory"] = "Signage";
  let primarySlug: PortfolioItem["primarySlug"] = "signage";

  if (p.serviceSlug === "signage") {
    primaryCat = "Signage";
    primarySlug = "signage";
  } else if (p.serviceSlug === "large-format-printing") {
    primaryCat = "Large Format Printing";
    primarySlug = "large-format-printing";
  } else if (p.serviceSlug === "displays-fabrication") {
    primaryCat = "Displays & Fabrication";
    primarySlug = "displays-fabrication";
  } else {
    primaryCat = "Events & Exhibitions";
    primarySlug = "events-exhibitions";
  }

  // Map subcategoryId to uniform subCategory keys
  let subKey = p.subcategoryId;
  if (/3d|channel letter|letter/i.test(p.title) && p.serviceSlug === "signage") {
    subKey = "3d-letters";
  }

  return {
    id: p.id,
    title: p.title,
    primaryCategory: primaryCat,
    primarySlug: primarySlug,
    subCategory: subKey,
    subCategoryLabel: p.subcategoryLabel,
    image: p.image,
  };
});

// Additional Vehicle Wrapping items from AGIGRAPHIX IMAGES
const WRAPPING_ITEMS: PortfolioItem[] = [
  {
    id: "wrap-fleet-1",
    title: "Commercial Fleet Van Full Graphic Wrap & Corporate Livery",
    primaryCategory: "Large Format Printing",
    primarySlug: "large-format-printing",
    subCategory: "vehicle-wrapping",
    subCategoryLabel: "Vehicle Wrapping",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0000.jpg",
    location: "Rose-Hill, Mauritius"
  },
  {
    id: "wrap-fleet-2",
    title: "High-Impact Commercial Vehicle Fleet Wrap Installation",
    primaryCategory: "Large Format Printing",
    primarySlug: "large-format-printing",
    subCategory: "vehicle-wrapping",
    subCategoryLabel: "Vehicle Wrapping",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0001.jpg",
    location: "Pailles, Mauritius"
  },
  {
    id: "wrap-fleet-3",
    title: "Precision Bodywork Vinyl Application on Commercial Fleet",
    primaryCategory: "Large Format Printing",
    primarySlug: "large-format-printing",
    subCategory: "vehicle-wrapping",
    subCategoryLabel: "Vehicle Wrapping",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0002.jpg",
    location: "Mauritius"
  },
  {
    id: "wrap-fleet-4",
    title: "Full Contour Commercial Truck & Delivery Van Branding",
    primaryCategory: "Large Format Printing",
    primarySlug: "large-format-printing",
    subCategory: "vehicle-wrapping",
    subCategoryLabel: "Vehicle Wrapping",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0003.jpg",
    location: "Mauritius"
  },
  {
    id: "wrap-fleet-5",
    title: "Commercial Van Branding in Agigraphix Workshop Bay",
    primaryCategory: "Large Format Printing",
    primarySlug: "large-format-printing",
    subCategory: "vehicle-wrapping",
    subCategoryLabel: "Vehicle Wrapping",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201214-WA0005.jpg",
    location: "Rose-Hill Workshop"
  }
];

const ALL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  ...CASE_STUDY_ITEMS,
  ...WRAPPING_ITEMS,
  ...FABRICATION_ITEMS,
];

// Primary Category Tabs
const PRIMARY_FILTERS = [
  { id: "all", label: "All Previous Work" },
  { id: "signage", label: "Signage" },
  { id: "large-format-printing", label: "Large Format Printing" },
  { id: "displays-fabrication", label: "Displays & Fabrication" },
  { id: "events-exhibitions", label: "Events & Exhibitions" },
];

// Secondary Sub-filter Definitions
const SUB_FILTERS_BY_CATEGORY: Record<string, { id: string; label: string }[]> = {
  all: [
    { id: "all", label: "All Types" },
    { id: "3d-letters", label: "3D Letters" },
    { id: "luminous", label: "Luminous Signage" },
    { id: "vehicle-wrapping", label: "Vehicle Wrapping" },
    { id: "wall-cladding", label: "Wall Murals & Cladding" },
    { id: "booths", label: "Exhibition Booths" },
    { id: "reception-desks", label: "Reception Desks" },
    { id: "backdrops", label: "Backdrops & Media Walls" },
  ],
  signage: [
    { id: "all", label: "All Signage" },
    { id: "3d-letters", label: "3D Letters" },
    { id: "luminous", label: "Luminous Signage" },
    { id: "non-luminous", label: "Non-Luminous Signage" },
    { id: "cut-out-letters", label: "Cut-Out Letters" },
    { id: "pvc-acrylic", label: "PVC & Acrylic Letters" },
    { id: "corporate", label: "Corporate Signage" },
    { id: "wayfinding", label: "Wayfinding" },
  ],
  "large-format-printing": [
    { id: "all", label: "All Large Format" },
    { id: "vehicle-wrapping", label: "Vehicle Wrapping" },
    { id: "wall-cladding", label: "Wall Murals & Cladding" },
    { id: "frosted-glass", label: "Window & Frosted Graphics" },
    { id: "roll-up-banners", label: "Roll-Up & Hanging Banners" },
    { id: "posters-canvas", label: "Posters & Canvas Prints" },
  ],
  "displays-fabrication": [
    { id: "all", label: "All Displays" },
    { id: "reception-desks", label: "Reception Desks" },
    { id: "acrylic", label: "Acrylic Fabrication" },
    { id: "pos-displays", label: "POS Displays" },
    { id: "poster-holders", label: "Poster & Notice Holders" },
    { id: "price-holders", label: "Price & Display Stands" },
  ],
  "events-exhibitions": [
    { id: "all", label: "All Events" },
    { id: "booths", label: "Exhibition Booths" },
    { id: "backdrops", label: "Backdrops & Media Walls" },
    { id: "3d-letters", label: "3D Event Letters" },
    { id: "reception-desks", label: "Branded Registration Counters" },
  ],
};

export default function WorkPage() {
  const [activePrimary, setActivePrimary] = useState("all");
  const [activeSub, setActiveSub] = useState("all");
  const [visibleCount, setVisibleCount] = useState(24);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // When primary filter changes, reset secondary filter to "all"
  const handlePrimaryChange = (id: string) => {
    setActivePrimary(id);
    setActiveSub("all");
    setVisibleCount(24);
  };

  const handleSubChange = (subId: string) => {
    setActiveSub(subId);
    setVisibleCount(24);
  };

  // Filtered dataset
  const filteredItems = useMemo(() => {
    return ALL_PORTFOLIO_ITEMS.filter((item) => {
      // 1. Primary Filter Match
      if (activePrimary !== "all" && item.primarySlug !== activePrimary) {
        return false;
      }

      // 2. Sub-filter Match
      if (activeSub === "all") return true;

      // Special sub-filter conditions
      if (activeSub === "3d-letters") {
        return (
          item.subCategory === "3d-letters" ||
          item.subCategory === "cut-out-letters" ||
          /3d|channel letter|cut-out/i.test(item.title)
        );
      }
      if (activeSub === "luminous") {
        return item.subCategory === "luminous" || /luminous|illuminat|backlit|lightbox/i.test(item.title);
      }
      if (activeSub === "non-luminous") {
        return item.subCategory === "non-luminous" || /non-luminous|totem|monument|fascia/i.test(item.title);
      }
      if (activeSub === "cut-out-letters") {
        return item.subCategory === "cut-out-letters" || /cut-out/i.test(item.title);
      }
      if (activeSub === "pvc-acrylic") {
        return /pvc|acrylic|perspex/i.test(item.title) || item.image.includes("3D_Letters_PVC_Acrylic");
      }
      if (activeSub === "corporate") {
        return /corporate|headquarters|office|bank|reception/i.test(item.title);
      }
      if (activeSub === "wayfinding") {
        return /wayfinding|directional|totem|directory|pylon/i.test(item.title);
      }
      if (activeSub === "acrylic") {
        return item.subCategory === "acrylic" || item.subCategory === "acrylic-tables" || /acrylic|perspex/i.test(item.title);
      }
      if (activeSub === "pos-displays") {
        return /pos|display|stand|counter/i.test(item.title);
      }
      if (activeSub === "posters-canvas") {
        return item.subCategory === "poster-holders" || /poster|canvas/i.test(item.title);
      }

      return item.subCategory === activeSub;
    });
  }, [activePrimary, activeSub]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredItems.length));
  };

  // Keyboard navigation & body scroll lock for Lightbox
  const closeLightbox = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [activeModalIndex, filteredItems.length]);

  const nextImage = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [activeModalIndex, filteredItems.length]);

  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, closeLightbox, prevImage, nextImage]);

  const activeModalItem = activeModalIndex !== null ? filteredItems[activeModalIndex] : null;
  const currentSubFilters = SUB_FILTERS_BY_CATEGORY[activePrimary] || SUB_FILTERS_BY_CATEGORY.all;

  return (
    <div className="bg-[#FBFBFB] min-h-screen pt-8 sm:pt-12 pb-24 text-[#111111]">
      {/* 1. PAGE INTRO HEADER */}
      <div className="container mx-auto px-6 max-w-7xl mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E52525]" />
          <span>Previous Work &middot; Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#111111] leading-[0.95] mb-3">
          OUR PREVIOUS WORK.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl font-normal leading-relaxed">
          Explore our extensive portfolio of bespoke architectural signage, vehicle wrapping, retail displays, and experiential event installations fabricated in Rose-Hill, Mauritius.
        </p>
      </div>

      {/* 2. TWO-TIER FILTERING SYSTEM */}
      <div className="container mx-auto px-6 max-w-7xl mb-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm space-y-4">
          
          {/* Primary Filters (Service Level) */}
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#E52525]" />
              <span>Step 1: Select Service Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRIMARY_FILTERS.map((f) => {
                const isSelected = activePrimary === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => handlePrimaryChange(f.id)}
                    className={cn(
                      "px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border",
                      isSelected
                        ? "bg-[#111111] text-white border-[#111111] shadow-md"
                        : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 border-gray-200"
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Filters (Subcategory / Capability Level) */}
          <div className="pt-3 border-t border-gray-100">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
              <span>Step 2: Filter by Detailed Capability ({filteredItems.length} matching)</span>
              {activeSub !== "all" && (
                <button
                  onClick={() => setActiveSub("all")}
                  className="text-xs text-[#E52525] hover:underline font-semibold cursor-pointer lowercase"
                >
                  reset sub-filter
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {currentSubFilters.map((sub) => {
                const isSelected = activeSub === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSubChange(sub.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer border",
                      isSelected
                        ? "bg-[#E52525] text-white border-[#E52525] shadow-xs"
                        : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black border-gray-200"
                    )}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* 3. WORK GALLERY GRID — CLEAN IMAGES (NO TEXT ON IMAGES!) */}
      <div className="container mx-auto px-6 max-w-7xl">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-neutral-500 font-medium">No projects match the selected filter combination.</p>
            <button
              onClick={() => {
                setActivePrimary("all");
                setActiveSub("all");
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveModalIndex(index)}
                className="group flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#E52525] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
              >
                {/* Clean Image Container — ABSOLUTELY NO TEXT ON THE IMAGE */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={item.title}
                  />

                  {/* Top-Right Quick Expand Icon Button on Hover */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Typography Container UNDERNEATH the image (Clean & Legible) */}
                <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52525]">
                        {item.primaryCategory}
                      </span>
                      {item.caseStudySlug && (
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                          Case Study
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#E52525] transition-colors duration-200 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {item.location && (
                    <p className="mt-2 text-[11px] text-neutral-400 font-medium">
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-lg bg-neutral-900 hover:bg-[#E52525] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Load More Projects ({filteredItems.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 4. FULLSCREEN LIGHTBOX MODAL */}
      {activeModalIndex !== null && activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous project photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Next project photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Modal Content */}
          <div
            className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Caption & Actions */}
            <div className="mt-4 w-full bg-[#161616] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#E52525] text-xs font-bold uppercase tracking-wider">
                    {activeModalItem.primaryCategory}
                  </span>
                  <span className="text-neutral-500 text-xs">&middot;</span>
                  <span className="text-neutral-400 text-xs font-medium">
                    Project {activeModalIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {activeModalItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {activeModalItem.caseStudySlug ? (
                  <Link
                    href={`/work/${activeModalItem.caseStudySlug}`}
                    className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : null}
                <Link
                  href={`/contact?service=${activeModalItem.primarySlug}&project=${encodeURIComponent(activeModalItem.title)}`}
                  className="px-5 py-2.5 bg-[#E52525] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
