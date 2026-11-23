import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  number: string;
  title: string;
  tagline: string;
  route: string;
  cta: string;
  image: string;
  alt: string;
}

const SERVICES: ServiceCard[] = [
  {
    number: "01",
    title: "SIGNAGE",
    tagline: "Make your brand impossible to miss.",
    route: "/services/signage",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-015.webp",
    alt: "Agigraphix Architectural 3D Cut-Out Signage Installation",
  },
  {
    number: "02",
    title: "LARGE FORMAT PRINTING",
    tagline: "Big ideas deserve to be seen.",
    route: "/services/large-format-printing",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-010.webp",
    alt: "Agigraphix Large Format Wall Cladding and Vinyl Application",
  },
  {
    number: "03",
    title: "DISPLAYS & FABRICATION",
    tagline: "Custom displays built around your brand.",
    route: "/services/displays-fabrication",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-004.webp",
    alt: "Agigraphix Bespoke Display Furniture and Reception Desk Fabrication",
  },
  {
    number: "04",
    title: "EVENTS & EXHIBITIONS",
    tagline: "Turn an empty space into a branded experience.",
    route: "/services/events",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-008.webp",
    alt: "Agigraphix Experiential Exhibition Booth and Event Activation",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] flex flex-col justify-center py-3 sm:py-4 lg:py-5 overflow-hidden">
      {/* Page Intro Header — Ultra-compact so all cards fit above the fold without scroll */}
      <div className="container mx-auto px-6 max-w-7xl mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-2 text-[#E52525] text-[11px] font-mono font-bold uppercase tracking-widest mb-1">
          <span className="w-2 h-2 rounded-full bg-[#E52525]" />
          <span>What We Make &middot; Mauritius</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-[#111111] leading-none mb-1">
          OUR SERVICES.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl font-normal leading-snug">
          From high-impact signage to bespoke displays and complete event installations.
        </p>
      </div>

      {/* 2x2 Grid of Services — Compact height, fits whole screen without scrolling */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.number}
              href={service.route}
              className="group relative overflow-hidden rounded-xl bg-[#111111] border border-neutral-800 hover:border-[#E52525] transition-all duration-300 shadow-lg flex flex-col justify-between h-[180px] sm:h-[200px] md:h-[210px] lg:h-[calc((100vh-235px)/2)] max-h-[250px]"
            >
              {/* Authentic Agigraphix Photography */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
                role="img"
                aria-label={service.alt}
              />

              {/* Sophisticated Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:from-black group-hover:via-black/50 transition-colors duration-300 z-10" />

              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E52525] transition-colors duration-300 z-20" />

              {/* Card Header: Service Number and Accent */}
              <div className="relative z-20 p-3.5 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#E52525] font-black text-xs sm:text-sm tracking-widest font-mono">
                    {service.number}
                  </span>
                  <span className="h-[2px] w-5 bg-[#E52525] group-hover:w-8 transition-all duration-300" />
                </div>
                <span className="text-white/40 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Agigraphix &middot; {service.title}
                </span>
              </div>

              {/* Card Footer: Title, Tagline, and CTA */}
              <div className="relative z-20 p-3.5 sm:p-4 flex flex-col justify-end">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-white mb-1 leading-tight">
                  {service.title}
                </h2>

                <p className="text-white/80 text-xs font-normal leading-snug max-w-xl mb-2 line-clamp-1">
                  {service.tagline}
                </p>

                <div className="inline-flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#E52525] transition-colors duration-200">
                  <span>{service.cta}</span>
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-[#E52525] group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
