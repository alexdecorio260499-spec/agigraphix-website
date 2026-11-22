import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-center overflow-hidden bg-agigraphix-black text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-009.webp')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-agigraphix-black via-transparent to-agigraphix-black/50" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 text-agigraphix-red text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-agigraphix-red" />
            <span>About Agigraphix Mauritius</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8 max-w-5xl">
            25+ YEARS <br />
            <span className="text-agigraphix-red">OF MAKING BRANDS VISIBLE.</span>
          </h1>
          <div className="max-w-3xl text-lg sm:text-xl md:text-2xl text-white/85 leading-relaxed font-normal">
            <p className="mb-6">
              Established in 2001, Agigraphix has grown into Mauritius&apos;s premier visual communication and fabrication studio.
            </p>
            <p>
              We combine decades of craftsmanship with modern technology to deliver bespoke signage, large-format printing, and complete branded environments. We don&apos;t just print — we build.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Capabilities */}
      <CapabilitiesSection />
      
      {/* CTA */}
      <section className="py-24 text-center bg-agigraphix-red text-white">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Ready to build something?</h2>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-agigraphix-black text-white font-bold rounded hover:bg-agigraphix-charcoal transition-colors inline-flex items-center"
        >
          Start a Project <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
