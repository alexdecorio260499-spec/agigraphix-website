"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from "lucide-react";
import { ServiceProduct, getProductsByService, getSubcategoriesForService } from "@/lib/service-products";

interface RelatedProductsSectionProps {
  serviceSlug: string;
  serviceName: string;
}

export function RelatedProductsSection({ serviceSlug, serviceName }: RelatedProductsSectionProps) {
  const allProducts = useMemo(() => getProductsByService(serviceSlug), [serviceSlug]);
  const subcategories = useMemo(() => getSubcategoriesForService(serviceSlug), [serviceSlug]);

  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter products by selected subcategory
  const filteredProducts = useMemo(() => {
    if (activeSubcategory === "all") return allProducts;
    return allProducts.filter((p) => p.subcategoryId === activeSubcategory);
  }, [allProducts, activeSubcategory]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const handleSubcategoryChange = (subId: string) => {
    setActiveSubcategory(subId);
    setVisibleCount(16);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, filteredProducts.length));
  };

  // Keyboard navigation for modal lightbox
  const activeProduct = activeModalIndex !== null ? filteredProducts[activeModalIndex] : null;

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : filteredProducts.length - 1));
  }, [activeModalIndex, filteredProducts.length]);

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! < filteredProducts.length - 1 ? prev! + 1 : 0));
  }, [activeModalIndex, filteredProducts.length]);

  const handleClose = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalIndex]);

  if (allProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Finished Products & Installations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-agigraphix-black">
              Related Products
            </h2>
            <p className="text-agigraphix-charcoal text-base md:text-lg mt-2 max-w-2xl">
              Explore authentic products, bespoke fabrications, and installations completed by Agigraphix in {serviceName.toLowerCase()}.
            </p>
          </div>
          
          <div className="text-sm font-semibold text-gray-500 shrink-0">
            Showing <span className="text-agigraphix-black font-bold">{filteredProducts.length}</span> authentic works
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        {subcategories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              onClick={() => handleSubcategoryChange("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                activeSubcategory === "all"
                  ? "bg-agigraphix-black text-white shadow-md"
                  : "bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300"
              }`}
            >
              All Products ({allProducts.length})
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => handleSubcategoryChange(sub.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  activeSubcategory === sub.id
                    ? "bg-agigraphix-black text-white shadow-md"
                    : "bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300"
                }`}
              >
                {sub.label} ({sub.count})
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setActiveModalIndex(idx)}
              className="group relative rounded-xl overflow-hidden bg-white border border-gray-200/80 hover:border-agigraphix-red shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3] flex flex-col justify-end"
            >
              {/* Product Photograph */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
                aria-label={product.title}
              />

              {/* Subcategory Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-full shadow">
                  {product.subcategoryLabel}
                </span>
              </div>

              {/* Quick View Icon on Hover */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-agigraphix-red text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Gradient Scrim & Caption */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h4 className="text-white text-xs sm:text-sm font-bold leading-snug line-clamp-2 drop-shadow">
                  {product.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > displayedProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 bg-white text-agigraphix-black font-bold text-sm uppercase tracking-wider rounded border border-gray-300 hover:border-agigraphix-red hover:text-agigraphix-red hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Load More Products</span>
              <span className="text-xs text-gray-500 font-normal">
                ({filteredProducts.length - displayedProducts.length} remaining)
              </span>
            </button>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-agigraphix-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
              Need a custom {serviceName.toLowerCase()} solution?
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Every product is manufactured in-house to your exact architectural specifications and branding requirements.
            </p>
          </div>
          <Link
            href={`/contact?service=${serviceSlug}`}
            className="relative z-10 px-8 py-3.5 bg-agigraphix-red text-white font-bold rounded text-sm uppercase tracking-wider hover:bg-red-700 transition-colors inline-flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProduct && activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-10 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-mono font-bold text-agigraphix-red uppercase tracking-widest">
                {activeProduct.subcategoryLabel} &middot; {activeModalIndex + 1} of {filteredProducts.length}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 line-clamp-1">
                {activeProduct.title}
              </h3>
            </div>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-4"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Image & Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all hover:scale-110 cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-h-[70vh] max-w-full aspect-[4/3] w-auto h-auto rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all hover:scale-110 cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between text-white/80 w-full max-w-6xl mx-auto pt-4 border-t border-white/10 text-xs gap-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white/60">
              Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">←</kbd> and{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">→</kbd> keys to navigate,{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">ESC</kbd> to exit.
            </div>

            <Link
              href={`/contact?service=${serviceSlug}&product=${encodeURIComponent(activeProduct.title)}`}
              className="px-5 py-2 bg-agigraphix-red hover:bg-red-700 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Enquire About This Product</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
