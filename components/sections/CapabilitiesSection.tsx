import Link from "next/link";
import { 
  ArrowRight, 
  Crosshair, 
  Zap, 
  Droplets, 
  Printer, 
  Layers, 
  Wrench,
  Flame,
  Scissors
} from "lucide-react";

const CAPABILITIES = [
  {
    name: "CNC ROUTING",
    icon: Crosshair,
  },
  {
    name: "LASER CUTTING",
    icon: Zap,
  },
  {
    name: "FIBER LASER CUTTING",
    icon: Flame,
  },
  {
    name: "UV PRINTING",
    icon: Droplets,
  },
  {
    name: "LARGE FORMAT PRINTING",
    icon: Printer,
  },
  {
    name: "ACRYLIC FABRICATION",
    icon: Layers,
  },
  {
    name: "TAILOR MADE",
    icon: Scissors,
  },
  {
    name: "INSTALLATION",
    icon: Wrench,
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#111111] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column — ~35% width */}
          <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0">
            {/* Red horizontal accent line */}
            <div className="w-12 h-1 bg-[#E52525] mb-6" />

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight mb-4">
              OUR CAPABILITIES
            </h2>

            {/* Short descriptive paragraph */}
            <p className="text-[#B8B8B8] text-base md:text-lg leading-relaxed mb-8">
              A complete range of production and installation services.
            </p>

            {/* CTA Link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white hover:text-[#E52525] font-bold text-sm tracking-wider uppercase transition-colors duration-200 group"
            >
              <span>Explore our services</span>
              <ArrowRight className="w-4 h-4 text-[#E52525] group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right Column — ~65% width (4 × 2 grid) */}
          <div className="w-full lg:w-[65%] xl:w-[68%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {CAPABILITIES.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#1D1D1D] hover:bg-[#232323] border border-[#343434] hover:border-[#E52525] rounded-lg p-5 sm:p-6 flex flex-col justify-between items-start min-h-[135px] sm:min-h-[145px] h-full transition-all duration-300 group cursor-default"
                  >
                    <div className="mb-6">
                      <Icon 
                        className="w-7 h-7 text-white group-hover:text-[#E52525] transition-colors duration-200" 
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-snug">
                      {cap.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
