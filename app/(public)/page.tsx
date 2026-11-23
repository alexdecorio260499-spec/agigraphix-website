import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_SERVICES = [
  {
    title: "SIGNAGE",
    tagline: "Make your brand impossible to miss.",
    link: "/services/signage",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-005.webp",
  },
  {
    title: "LARGE FORMAT PRINTING",
    tagline: "Big ideas deserve to be seen.",
    link: "/services/large-format-printing",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-001.webp",
  },
  {
    title: "DISPLAYS & FABRICATION",
    tagline: "Custom displays built around your brand.",
    link: "/services/displays-fabrication",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-002.webp",
  },
  {
    title: "EVENTS & EXHIBITIONS",
    tagline: "Turn an empty space into a branded experience.",
    link: "/services/events",
    cta: "Explore →",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-017.webp",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden bg-agigraphix-black text-white">
        {/* Full-width Photographic Background: Agigraphix Headquarters */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: "url('/images/agigraphix-headquarters.webp')" }}
          aria-hidden="true"
        />
        {/* Subtle architectural gradient overlay ensuring text readability without hiding the building */}
        <div className="absolute inset-0 z-0 bg-agigraphix-black/45" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-agigraphix-black via-transparent to-agigraphix-black/40" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-between h-full flex-grow">
          {/* Centered between Header (top) and Services Section (bottom) */}
          <div className="flex-1 flex flex-col items-center justify-center py-8 sm:py-12 md:py-14 lg:py-16">
            <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-4 text-center">
                We Make <br />
                Brands <span className="text-agigraphix-red">Visible.</span>
              </h1>

              {/* Established Tagline */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto text-center mb-3">
                Established in 2001, Agigraphix has grown into Mauritius&apos;s premier visual communication and fabrication studio.
              </p>

              {/* Introductory Paragraph */}
              <p className="text-white/75 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto text-center">
                From bespoke signage and large-format printing to displays and branded environments, we turn ideas into physical experiences.
              </p>
            </div>
          </div>

          {/* Bottom: Four Horizontal Service Squares */}
          <div className="w-full pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
              {HERO_SERVICES.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.link}
                  className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-neutral-900 border border-white/25 hover:border-agigraphix-red transition-all duration-300 shadow-2xl shadow-black/80 ring-1 ring-white/10 hover:-translate-y-1 overflow-hidden aspect-square"
                >
                  {/* Authentic Service Project Photo Background - High Visibility */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                    aria-hidden="true"
                  />
                  {/* Targeted gradient scrim: darker at bottom for text, clear across image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 z-0 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/25" />

                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-agigraphix-red transition-colors z-10" />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white drop-shadow-md mb-2 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow line-clamp-3">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white group-hover:text-agigraphix-red transition-colors drop-shadow">
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK / PREVIOUS WORK */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[#E52525] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E52525]" />
                <span>Previous Work &middot; Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight mb-3">
                Selected Work
              </h2>
              <p className="text-neutral-600 text-base md:text-lg max-w-2xl">
                A curated selection of bespoke signage, installations, displays, and branded environments.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center font-bold text-sm uppercase tracking-wider text-[#111111] hover:text-[#E52525] transition-colors group mb-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="ml-2 w-4 h-4 text-[#E52525] group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Modular Asymmetric Grid — Matching Our Services UI/Feel & Compact Scale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {[
              {
                number: "01",
                title: "LUX* & Coastal Resort Signage",
                category: "Signage · Hospitality",
                location: "Grand Baie, Mauritius",
                description: "Complete external and internal architectural signage solution, precision-cut stone wall lettering, and illuminated wayfinding.",
                image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-005.webp",
                slug: "lux-grand-baie-signage",
                gridClasses: "col-span-1 min-h-[340px] md:col-start-1 md:col-span-2 md:row-start-1 md:min-h-[400px] lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:min-h-[470px] xl:min-h-[490px]",
                isLargeTitle: true,
              },
              {
                number: "02",
                title: "Tribeca Central Retail & Food Court",
                category: "Large Format Printing · Retail",
                location: "Trianon, Mauritius",
                description: "Large-format printing, illuminated overhead food court lightboxes, and custom acrylic fabrication across major retail corridors.",
                image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-011.webp",
                slug: "tribeca-mall-retail",
                gridClasses: "col-span-1 min-h-[250px] md:col-start-1 md:col-span-1 md:row-start-2 md:min-h-[250px] lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-1 lg:min-h-[225px] xl:min-h-[235px]",
                isLargeTitle: false,
              },
              {
                number: "03",
                title: "Rogers Capital & Corporate HQ",
                category: "Displays & Fabrication · Corporate",
                location: "Port Louis & Ebene, Mauritius",
                description: "Large-scale building facade architectural cladding, high-level corporate rooftop signage, and interior executive reception 3D lettering.",
                image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Non_Luminous/signage-non-luminous-029.webp",
                slug: "mcb-corporate-hq",
                gridClasses: "col-span-1 min-h-[280px] md:col-start-1 md:col-span-2 md:row-start-3 md:min-h-[300px] lg:col-start-1 lg:col-span-12 lg:row-start-3 lg:row-span-1 lg:min-h-[320px] xl:min-h-[340px]",
                isLargeTitle: true,
              },
              {
                number: "04",
                title: "Indian Ocean Summit & Conferences",
                category: "Events & Exhibitions · Institutional",
                location: "SVICC, Mauritius",
                description: "End-to-end design, fabrication, and installation of regional conference stage backdrops, dual pull-up banner totems, and registration counters.",
                image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-006.webp",
                slug: "tech-conference-exhibition",
                gridClasses: "col-span-1 min-h-[250px] md:col-start-2 md:col-span-1 md:row-start-2 md:min-h-[250px] lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:row-span-1 lg:min-h-[225px] xl:min-h-[235px]",
                isLargeTitle: false,
              },
            ].map((work) => (
              <Link
                key={work.number}
                href={`/work/${work.slug}`}
                className={`group relative overflow-hidden rounded-xl bg-[#111111] border border-neutral-800 hover:border-[#E52525] transition-all duration-300 shadow-xl flex flex-col justify-between ${work.gridClasses}`}
              >
                {/* Authentic Agigraphix Photography */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${work.image}')` }}
                  role="img"
                  aria-label={work.title}
                />

                {/* Sophisticated Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 group-hover:from-black group-hover:via-black/55 transition-colors duration-300 z-10" />

                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E52525] transition-colors duration-300 z-20" />

                {/* Card Header: Project Number and Location */}
                <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#E52525] font-black text-sm sm:text-base tracking-widest font-mono">
                      {work.number}
                    </span>
                    <span className="h-[2px] w-6 bg-[#E52525] group-hover:w-10 transition-all duration-300" />
                  </div>
                  <span className="text-white/50 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
                    {work.location}
                  </span>
                </div>

                {/* Card Footer: Category, Title, Description, and CTA */}
                <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end">
                  <p className="text-[#E52525] text-xs font-bold uppercase tracking-widest mb-1.5">
                    {work.category}
                  </p>

                  <h3
                    className={`${
                      work.isLargeTitle
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-lg sm:text-xl lg:text-2xl"
                    } font-black uppercase tracking-tight text-white mb-1.5 sm:mb-2 leading-[1.05]`}
                  >
                    {work.title}
                  </h3>

                  <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mb-3 sm:mb-4 line-clamp-2">
                    {work.description}
                  </p>

                  <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#E52525] transition-colors duration-200">
                    <span>View Project</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 text-[#E52525] group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-[#111111] hover:text-[#E52525] w-full justify-center py-4 border border-gray-200 rounded-lg transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 w-4 h-4 text-[#E52525]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA & STATS */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-16 md:py-24 bg-agigraphix-black text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-009.webp')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-agigraphix-black to-transparent" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center">
          <div className="mb-12 md:mb-16 w-full max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-3 md:mb-4 leading-tight">
              Have a project <br /> in mind?
            </h2>
            <p className="text-base md:text-lg font-medium text-white/80 mb-6 md:mb-8">Let's make it visible.</p>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-agigraphix-red text-white font-bold rounded text-base hover:bg-red-700 transition-colors inline-flex items-center shadow-lg"
            >
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="w-full border-t border-white/20 pt-10 md:pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {[
                { stat: "25+ YEARS", desc: "Industry experience" },
                { stat: "BESPOKE", desc: "Tailored to your project" },
                { stat: "IN-HOUSE PRODUCTION", desc: "From concept to finished product" },
                { stat: "PRECISION", desc: "Modern equipment & techniques" },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="w-8 md:w-10 h-1 bg-agigraphix-red mb-2 md:mb-3 mx-auto md:mx-0" />
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-1 text-white">{item.stat}</h3>
                  <p className="text-xs md:text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
