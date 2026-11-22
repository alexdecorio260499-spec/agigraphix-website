import { SlidersHorizontal, ShieldCheck, Crosshair } from "lucide-react";

const VALUES = [
  {
    title: "BESPOKE",
    desc: "Every project is built around the client's needs. We don't do off-the-shelf solutions.",
    icon: SlidersHorizontal,
  },
  {
    title: "QUALITY",
    desc: "Materials and production are treated with care, ensuring longevity in demanding environments.",
    icon: ShieldCheck,
  },
  {
    title: "PRECISION",
    desc: "Modern production methods combined with experienced craftsmanship.",
    icon: Crosshair,
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#111111] text-white border-t border-[#222222]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-14">
          
          {/* LEFT COLUMN — SECTION INTRODUCTION (~30–35% width) */}
          <div className="w-full lg:w-[32%] xl:w-[30%] shrink-0">
            {/* Small red horizontal accent line */}
            <div className="w-12 h-1 bg-[#E52525] mb-6" />

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight mb-4">
              OUR VALUES
            </h2>

            {/* Short Introductory Line */}
            <p className="text-[#B8B8B8] text-base md:text-lg leading-relaxed max-w-sm">
              Three principles that guide everything we create.
            </p>
          </div>

          {/* RIGHT COLUMN — THREE VALUE CARDS (~65–70% width) */}
          <div className="w-full lg:w-[68%] xl:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#1D1D1D] hover:bg-[#232323] border border-[#343434] hover:border-[#E52525] rounded-lg p-6 sm:p-7 flex flex-col items-start justify-start h-full transition-all duration-300 group cursor-default"
                  >
                    {/* Minimalist White Line Icon */}
                    <div className="mb-5">
                      <Icon
                        className="w-7 h-7 text-white group-hover:text-[#E52525] transition-colors duration-200"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Bold Uppercase Heading */}
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white mb-2.5">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed">
                      {val.desc}
                    </p>
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
