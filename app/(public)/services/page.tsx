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
    <div className="bg-white min-h-[calc(100vh-88px)] flex flex-col justify-center py-6 sm:py-8 lg:py-10">
      {/* Page Intro Header — Clean and compact so cards fit above the fold */}
      <div className="container mx-auto px-6 max-w-7xl mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E52525]" />
          <span>What We Make &middot; Mauritius</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111111] leading-none mb-2">
          OUR SERVICES.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl font-normal leading-relaxed">
          From high-impact signage to bespoke displays and complete event installations.
        </p>
      </div>

      {/* 2x2 Grid of Services — Wide, uncompressed landscape cards */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.number}
              href={service.route}
              className="group relative overflow-hidden rounded-xl bg-[#111111] border border-neutral-800 hover:border-[#E52525] transition-all duration-300 shadow-xl flex flex-col justify-between aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5] min-h-[250px] sm:min-h-[280px] lg:min-h-[290px]"
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
              <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[#E52525] font-black text-sm sm:text-base tracking-widest font-mono">
                    {service.number}
                  </span>
                  <span className="h-[2px] w-6 bg-[#E52525] group-hover:w-10 transition-all duration-300" />
                </div>
                <span className="text-white/40 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Agigraphix &middot; {service.title}
                </span>
              </div>

              {/* Card Footer: Title, Tagline, and CTA */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white mb-1.5 sm:mb-2 leading-tight">
                  {service.title}
                </h2>

                <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mb-3 line-clamp-2">
                  {service.tagline}
                </p>

                <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#E52525] transition-colors duration-200">
                  <span>{service.cta}</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 text-[#E52525] group-hover:translate-x-2 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
