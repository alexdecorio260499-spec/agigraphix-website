"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, Maximize2, ArrowRight, Sparkles } from "lucide-react";
import { CapabilityProjectImage } from "@/lib/service-capabilities";

interface CapabilityGalleryGridProps {
  images: CapabilityProjectImage[];
  capabilityName: string;
  serviceName: string;
  serviceSlug: string;
}

export function CapabilityGalleryGrid({
  images,
  capabilityName,
  serviceName,
  serviceSlug,
}: CapabilityGalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const displayedImages = useMemo(() => {
    return images.slice(0, visibleCount);
  }, [images, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, images.length));
  };

  // Keyboard navigation & body scroll lock for lightbox
  const closeLightbox = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [activeModalIndex, images.length]);

  const nextImage = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [activeModalIndex, images.length]);

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

  const activeImage = activeModalIndex !== null ? images[activeModalIndex] : null;

  return (
    <div>
      {/* Gallery Header Info & Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#E52525] block mb-1">
            FABRICATION ARCHIVE &middot; MAURITIUS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
            All {capabilityName} Projects
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#E52525]" />
            {images.length} {images.length === 1 ? "Project" : "Projects"} Documented
          </span>
        </div>
      </div>

      {/* Grid of Projects */}
      {images.length === 0 ? (
        <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
          <p className="text-neutral-500 font-medium">No previous projects found for this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayedImages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveModalIndex(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#161616] border border-[#2E2E2E] hover:border-[#E52525] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer text-left block w-full focus:outline-none focus:ring-2 focus:ring-[#E52525]"
              aria-label={`View full project photograph: ${item.title}`}
            >
              {/* Genuine Agigraphix Photograph */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.title}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 group-hover:via-black/40 transition-colors duration-300 z-10" />

              {/* Expand Icon pill */}
              <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#E52525] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xs sm:text-sm font-semibold line-clamp-2 drop-shadow leading-snug">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="px-8 py-3.5 rounded-lg bg-neutral-900 hover:bg-[#E52525] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Load More Projects ({images.length - visibleCount} remaining)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeModalIndex !== null && activeImage && (
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
          {images.length > 1 && (
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
          {images.length > 1 && (
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
                src={activeImage.image}
                alt={activeImage.title}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Caption & Actions */}
            <div className="mt-4 w-full bg-[#161616] border border-[#2A2A2A] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#E52525] text-xs font-bold uppercase tracking-wider">
                    {activeImage.category}
                  </span>
                  <span className="text-neutral-500 text-xs">&middot;</span>
                  <span className="text-neutral-400 text-xs font-medium">
                    {activeModalIndex + 1} of {images.length}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {activeImage.title}
                </h3>
              </div>

              <Link
                href={`/contact?service=${serviceSlug}&capability=${encodeURIComponent(capabilityName)}`}
                className="px-5 py-2.5 bg-[#E52525] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors duration-200 inline-flex items-center justify-center gap-2 shrink-0 group cursor-pointer"
              >
                <span>Request Similar Fabrication</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
