import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_SERVICES = [
  {
    number: "01",
    label: "SERVICE 01",
    title: "SIGNAGE",
    tagline: "Make your brand impossible to miss.",
    link: "/services/signage",
    cta: "Explore →",
  },
  {
    number: "02",
    label: "SERVICE 02",
    title: "LARGE FORMAT PRINTING",
    tagline: "Big ideas deserve to be seen.",
    link: "/services/large-format-printing",
    cta: "Explore →",
  },
  {
    number: "03",
    label: "SERVICE 03",
    title: "DISPLAYS & FABRICATION",
    tagline: "Custom displays built around your brand.",
    link: "/services/displays-fabrication",
    cta: "Explore →",
  },
  {
    number: "04",
    label: "SERVICE 04",
    title: "EVENTS & EXHIBITIONS",
    tagline: "Turn an empty space into a branded experience.",
    link: "/services/events",
    cta: "Explore →",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden bg-agigraphix-black text-white pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-10 lg:pb-8">
        {/* Full-width Photographic Background: Agigraphix Headquarters */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
          aria-hidden="true"
        />
        {/* Subtle architectural gradient overlay ensuring text readability without hiding the building */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-agigraphix-black/90 via-agigraphix-black/65 to-agigraphix-black/40" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-agigraphix-black/95 via-transparent to-agigraphix-black/40" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-between h-full flex-grow">
          {/* Top & Middle: Headline, Intro Paragraph & Compact About Introduction */}
          <div className="max-w-3xl mb-8 lg:mb-10">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-4">
              We Make <br />
              Brands <span className="text-agigraphix-red">Visible.</span>
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-5 max-w-2xl">
              From bespoke signage and large-format printing to displays and branded environments, we turn ideas into physical experiences.
            </p>

            {/* Compact About Agigraphix Introduction */}
            <div className="pt-3 border-t border-white/15 max-w-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-agigraphix-red shrink-0" />
                <span className="text-white/80 font-medium">
                  Established in 2001 &middot; Mauritius’s premier visual communication & fabrication studio.
                </span>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center font-bold text-agigraphix-red hover:text-white transition-colors group shrink-0"
              >
                Discover Agigraphix <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bottom: Four Horizontal Service Cards */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
              {HERO_SERVICES.map((service) => (
                <Link
                  key={service.number}
                  href={service.link}
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-lg bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/15 hover:border-agigraphix-red/70 transition-all duration-300 shadow-xl hover:shadow-agigraphix-red/10 hover:-translate-y-0.5"
                >
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-agigraphix-red transition-colors rounded-t-lg" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-white/50 group-hover:text-agigraphix-red transition-colors">
                        {service.label}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-agigraphix-red transition-colors" />
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-wide text-white group-hover:text-white transition-colors mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-white/70 leading-relaxed group-hover:text-white/85 transition-colors line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-agigraphix-red transition-colors">
                    <span>{service.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-3 text-agigraphix-black">Selected Work</h2>
              <p className="text-agigraphix-charcoal text-base md:text-lg">A selection of projects brought to life by Agigraphix.</p>
            </div>
            <Link href="/work" className="hidden md:inline-flex items-center font-bold text-agigraphix-black hover:text-agigraphix-red transition-colors group">
              View All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Hotel Signage", category: "Hospitality", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop", slug: "lux-grand-baie-signage" },
              { title: "Retail Branding", category: "Retail", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop", slug: "tribeca-mall-retail" },
              { title: "Corporate HQ", category: "Corporate", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", slug: "mcb-corporate-hq" },
              { title: "Event Setup", category: "Events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", slug: "tech-conference-exhibition" },
            ].map((work, i) => (
              <Link href={`/work/${work.slug}`} key={i} className="group cursor-pointer block overflow-hidden rounded bg-gray-100 relative aspect-[3/4]">
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${work.image}')` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
                  <p className="text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-1">{work.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{work.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/work" className="inline-flex items-center font-bold text-agigraphix-black w-full justify-center py-4 border border-gray-200 rounded">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA & STATS */}
      <section className="relative py-20 md:py-24 bg-agigraphix-black text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop')" }}
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
