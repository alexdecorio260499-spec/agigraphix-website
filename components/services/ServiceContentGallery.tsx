"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { ServiceGalleryImage } from "@/lib/service-galleries";
import { capabilityNameToSlug } from "@/lib/service-capabilities";

interface ServiceContentGalleryProps {
  title: string;
  description: string;
  capabilities: string[];
  gallery: ServiceGalleryImage[];
  ctaLink?: string;
  ctaText?: string;
  serviceSlug?: string;
}

export function ServiceContentGallery({
  title,
  description,
  capabilities,
  gallery,
  ctaLink = "/contact",
  ctaText = "Explore our solutions",
  serviceSlug,
}: ServiceContentGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Previous image
  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : gallery.length - 1));
  }, [activeImageIndex, gallery.length]);

  // Next image
  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! < gallery.length - 1 ? prev! + 1 : 0));
  }, [activeImageIndex, gallery.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeImageIndex === null) return;

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
  }, [activeImageIndex, closeLightbox, prevImage, nextImage]);

  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-center bg-[#111111] text-white py-16 sm:py-20 lg:py-24 border-b border-[#222222]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT COLUMN — SERVICE INFORMATION (~40% width) */}
          <div className="w-full lg:w-[40%] xl:w-[38%] shrink-0">
            {/* Red horizontal accent line */}
            <div className="w-12 h-1 bg-[#E52525] mb-6" />

            {/* Service Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[1.0] mb-6">
              {title}
            </h1>

            {/* Short Service Introduction */}
            <p className="text-[#B8B8B8] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            {/* Capabilities List */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#E52525] mb-4">
                Core Capabilities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap, i) => {
                  const capSlug = capabilityNameToSlug(cap);
                  const targetUrl = serviceSlug ? `/services/${serviceSlug}/${capSlug}` : "#";
                  return (
                    <li key={i}>
                      <Link
                        href={targetUrl}
                        className="group flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-[#181818]/90 hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#E52525] transition-all duration-200 text-sm font-medium text-white/90 hover:text-white shadow-sm"
                      >
                        <div className="flex items-center min-w-0 pr-2">
                          <span className="w-2 h-2 rounded-[2px] bg-[#E52525] mr-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="truncate">{cap}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#E52525] group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Prominent CTA */}
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 text-white hover:text-[#E52525] font-bold text-sm tracking-wider uppercase transition-colors duration-200 group pt-2"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#E52525] group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* RIGHT COLUMN — 2 × 2 PROJECT IMAGE GALLERY (~60% width) */}
          <div className="w-full lg:w-[60%] xl:w-[62%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {gallery.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1D1D1D] border border-[#343434] hover:border-[#E52525] transition-all duration-300 shadow-xl cursor-pointer text-left block w-full focus:outline-none focus:ring-2 focus:ring-[#E52525]"
                  aria-label={`View full image: ${item.title}`}
                >
                  {/* Genuine Agigraphix Photograph */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.url}')` }}
                    role="img"
                    aria-label={item.title}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 group-hover:via-black/40 transition-colors duration-300 z-10" />

                  {/* Top-Right Quick Expand Icon */}
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#E52525] text-[11px] font-bold uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm font-bold line-clamp-1 drop-shadow leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 text-white/70 hover:text-white bg-black/60 hover:bg-black/80 border border-white/15 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 text-white/70 hover:text-white bg-black/60 hover:bg-black/80 border border-white/15 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Main Content */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[activeImageIndex].url}
                alt={gallery[activeImageIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center">
              <span className="text-[#E52525] text-xs font-bold uppercase tracking-wider block mb-1">
                {gallery[activeImageIndex].category} &middot; Image {activeImageIndex + 1} of {gallery.length}
              </span>
              <p className="text-white text-base sm:text-lg font-bold">
                {gallery[activeImageIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
