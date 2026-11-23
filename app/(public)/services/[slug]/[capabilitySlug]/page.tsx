import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Hammer, Sparkles, MapPin, Phone } from "lucide-react";
import {
  getCapabilityData,
  getAllCapabilityParams,
  capabilityNameToSlug,
} from "@/lib/service-capabilities";
import { CapabilityGalleryGrid } from "@/components/services/CapabilityGalleryGrid";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllCapabilityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; capabilitySlug: string }>;
}): Promise<Metadata> {
  const { slug, capabilitySlug } = await params;
  const data = getCapabilityData(slug, capabilitySlug);

  if (!data) {
    return {
      title: "Service Capability | Agigraphix Mauritius",
    };
  }

  return {
    title: `${data.capability.name} Projects & Fabrication | ${data.service.name} | Agigraphix Mauritius`,
    description: data.capability.description,
  };
}

export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string; capabilitySlug: string }>;
}) {
  const { slug, capabilitySlug } = await params;
  const data = getCapabilityData(slug, capabilitySlug);

  if (!data) {
    notFound();
  }

  const { capability, service, images, relatedCapabilities } = data;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. TOP HERO SECTION — CAPABILITY OVERVIEW & SPECIFICATIONS */}
      <section className="relative bg-[#111111] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#222222]">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Breadcrumb & Back Link */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-8">
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#E52525] font-semibold transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 text-[#E52525] group-hover:-translate-x-1 transition-transform" />
              <span>Back to {service.name}</span>
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-300 font-medium">{capability.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-7">
              {/* Red Accent Line */}
              <div className="w-12 h-1 bg-[#E52525] mb-5" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#E52525] block mb-2">
                {service.name.toUpperCase()} &middot; SPECIALIZED CAPABILITY
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[1.0] mb-4">
                {capability.name}
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 font-medium mb-6 leading-relaxed">
                {capability.headline}
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                {capability.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/contact?service=${slug}&capability=${encodeURIComponent(capability.name)}`}
                  className="px-6 py-3.5 bg-[#E52525] hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors duration-200 inline-flex items-center gap-2 group shadow-lg"
                >
                  <span>Inquire for {capability.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+2304651111"
                  className="px-5 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-neutral-700 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E52525]" />
                  <span>+230 465 1111</span>
                </a>
              </div>
            </div>

            {/* Right Specifications Card */}
            <div className="lg:col-span-5 bg-[#181818] border border-[#2D2D2D] rounded-xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E52525] mb-4 flex items-center gap-2">
                <Hammer className="w-4 h-4" />
                <span>Technical Specifications</span>
              </h3>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {capability.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#E52525] mr-2.5 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Materials List */}
              <div className="pt-5 border-t border-[#2A2A2A]">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#E52525]" />
                  <span>Fabrication Materials</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {capability.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333] text-neutral-300 text-[11px] font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN GALLERY SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-[#111111]">
        <div className="container mx-auto px-6 max-w-7xl">
          <CapabilityGalleryGrid
            images={images}
            capabilityName={capability.name}
            serviceName={service.name}
            serviceSlug={slug}
          />
        </div>
      </section>

      {/* 3. SIBLING CAPABILITIES NAVIGATION */}
      {relatedCapabilities.length > 0 && (
        <section className="py-16 bg-neutral-50 border-t border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E52525] block mb-1">
                  MORE IN {service.name.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
                  Explore Other Capabilities
                </h3>
              </div>
              <Link
                href={`/services/${slug}`}
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#E52525] inline-flex items-center gap-1.5 group"
              >
                <span>View Full {service.name} Overview</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedCapabilities.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/services/${slug}/${rel.slug}`}
                  className="group p-5 rounded-xl bg-white border border-neutral-200 hover:border-[#E52525] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-2 h-2 rounded-[2px] bg-[#E52525] mb-3 group-hover:scale-125 transition-transform" />
                    <h4 className="text-base font-bold text-[#111111] group-hover:text-[#E52525] transition-colors mb-1">
                      {rel.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span>{rel.count} projects</span>
                    <span className="text-[#E52525] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOTTOM WORKSHOP INQUIRY CTA */}
      <section className="py-16 sm:py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-black border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E52525] block mb-2">
                ROSE-HILL PRODUCTION STUDIO &middot; MAURITIUS
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
                Need Custom {capability.name} For Your Project?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                From precision blueprints and 3D architectural mockups to in-house CNC routing and certified island-wide on-site installation, our team delivers complete end-to-end execution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href={`/contact?service=${slug}&capability=${encodeURIComponent(capability.name)}`}
                className="w-full sm:w-auto px-8 py-4 bg-[#E52525] hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors duration-200 inline-flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/10 text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-neutral-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
