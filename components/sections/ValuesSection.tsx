import { SlidersHorizontal, ShieldCheck, Target } from "lucide-react";

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
    icon: Target,
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0C0C0C] text-white border-t border-[#1C1C1C]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Full-width editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b border-[#222222]">
          <div>
            <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E52525]" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              OUR VALUES
            </h2>
          </div>
          <p className="text-[#A3A3A3] text-base sm:text-lg max-w-md leading-relaxed md:text-right">
            Three principles that guide everything we create.
          </p>
        </div>

        {/* Unified 3-column architectural monolith */}
        <div className="border border-[#262626] rounded-2xl overflow-hidden bg-[#141414] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px] bg-[#141414] hover:bg-[#181818] transition-all duration-300"
                >
                  {/* Subtle corner light wash on hover */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#E52525]/0 group-hover:bg-[#E52525]/5 rounded-bl-full transition-all duration-500 pointer-events-none" />

                  {/* Watermark index number */}
                  <span className="absolute right-6 bottom-4 text-7xl sm:text-8xl lg:text-9xl font-black font-mono text-white/[0.03] group-hover:text-[#E52525]/10 transition-colors pointer-events-none select-none">
                    0{i + 1}
                  </span>

                  {/* Top content */}
                  <div>
                    {/* Meta row: counter + icon container */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#E52525] uppercase">
                        0{i + 1} / 03
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E52525] group-hover:border-[#E52525]/40 transition-all duration-300">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Value title */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                      {val.title}
                    </h3>

                    {/* Value description */}
                    <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed relative z-10 max-w-sm">
                      {val.desc}
                    </p>
                  </div>

                  {/* Expanding accent indicator */}
                  <div className="relative mt-8 pt-4">
                    <div className="h-0.5 w-10 bg-[#2E2E2E] group-hover:w-full group-hover:bg-[#E52525] transition-all duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
