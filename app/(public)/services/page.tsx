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
  gridClasses: string;
  isLargeTitle?: boolean;
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
    gridClasses: "col-span-1 min-h-[380px] md:col-start-1 md:col-span-2 md:row-start-1 md:min-h-[440px] lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:min-h-[620px]",
    isLargeTitle: true,
  },
  {
    number: "02",
    title: "LARGE FORMAT PRINTING",
    tagline: "Big ideas deserve to be seen.",
    route: "/services/large-format-printing",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-010.webp",
    alt: "Agigraphix Large Format Wall Cladding and Vinyl Application",
    gridClasses: "col-span-1 min-h-[320px] md:col-start-1 md:col-span-1 md:row-start-2 md:min-h-[320px] lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-1 lg:min-h-[295px]",
    isLargeTitle: false,
  },
  {
    number: "03",
    title: "DISPLAYS & FABRICATION",
    tagline: "Custom displays built around your brand.",
    route: "/services/displays-fabrication",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-004.webp",
    alt: "Agigraphix Bespoke Display Furniture and Reception Desk Fabrication",
    gridClasses: "col-span-1 min-h-[340px] md:col-start-1 md:col-span-2 md:row-start-3 md:min-h-[360px] lg:col-start-1 lg:col-span-12 lg:row-start-3 lg:row-span-1 lg:min-h-[380px]",
    isLargeTitle: true,
  },
  {
    number: "04",
    title: "EVENTS & EXHIBITIONS",
    tagline: "Turn an empty space into a branded experience.",
    route: "/services/events",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-008.webp",
    alt: "Agigraphix Experiential Exhibition Booth and Event Activation",
    gridClasses: "col-span-1 min-h-[320px] md:col-start-2 md:col-span-1 md:row-start-2 md:min-h-[320px] lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:row-span-1 lg:min-h-[295px]",
    isLargeTitle: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-8 sm:pt-12 pb-24">
      {/* Page Intro Header */}
      <div className="container mx-auto px-6 max-w-7xl mb-10 sm:mb-14 lg:mb-16">
        <div className="inline-flex items-center gap-2 text-[#E52525] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#E52525]" />
          <span>Our Services</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#111111] leading-[0.95] mb-5">
          WHAT WE MAKE.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl font-normal leading-relaxed">
          From high-impact signage to bespoke displays and complete event installations.
        </p>
      </div>

      {/* Concept 4: Modular Asymmetric Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.number}
              href={service.route}
              className={`group relative overflow-hidden rounded-xl bg-[#111111] border border-neutral-800 hover:border-[#E52525] transition-all duration-300 shadow-xl flex flex-col justify-between ${service.gridClasses}`}
            >
              {/* Authentic Agigraphix Photography */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
                role="img"
                aria-label={service.alt}
              />

              {/* Sophisticated Dark Gradient Scrim: clear top, deep bottom for crisp text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 group-hover:from-black group-hover:via-black/55 transition-colors duration-300 z-10" />

              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E52525] transition-colors duration-300 z-20" />

              {/* Card Header: Service Number and Accent */}
              <div className="relative z-20 p-6 sm:p-7 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[#E52525] font-black text-sm sm:text-base tracking-widest font-mono">
                    {service.number}
                  </span>
                  <span className="h-[2px] w-6 bg-[#E52525] group-hover:w-10 transition-all duration-300" />
                </div>
                <span className="text-white/40 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
                  Agigraphix &middot; {service.title}
                </span>
              </div>

              {/* Card Footer: Title, Tagline, and CTA */}
              <div className="relative z-20 p-6 sm:p-7 md:p-8 flex flex-col justify-end">
                <h2
                  className={`${
                    service.isLargeTitle
                      ? "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
                      : "text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
                  } font-black uppercase tracking-tight text-white mb-2 sm:mb-3 leading-[1.05]`}
                >
                  {service.title}
                </h2>

                <p className="text-white/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mb-4 sm:mb-5">
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
