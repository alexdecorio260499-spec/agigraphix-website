import { SlidersHorizontal, ShieldCheck, Target, Clock } from "lucide-react";

const VALUES = [
  {
    title: "BESPOKE",
    desc: "Every project is built around the client's needs. We don't do off-the-shelf solutions.",
    icon: SlidersHorizontal,
  },
  {
    title: "QUALITY ON TIME",
    desc: "Uncompromising quality delivered strictly on schedule. Our responsive production team thrives under pressure, executing urgent turnarounds without ever cutting corners on craftsmanship.",
    icon: Clock,
  },
  {
    title: "PRECISION",
    desc: "Modern production methods combined with experienced craftsmanship.",
    icon: Target,
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] text-[#111111] border-y border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Full-width editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E52525]" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111111]">
              OUR VALUES
            </h2>
          </div>
          <p className="text-neutral-500 text-base sm:text-lg max-w-md leading-relaxed md:text-right">
            Three principles that guide everything we create.
          </p>
        </div>

        {/* Unified 3-column architectural monolith */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px] bg-white hover:bg-neutral-50/80 transition-all duration-300"
                >
                  {/* Subtle corner light wash on hover */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#E52525]/0 group-hover:bg-[#E52525]/[0.03] rounded-bl-full transition-all duration-500 pointer-events-none" />

                  {/* Watermark index number */}
                  <span className="absolute right-6 bottom-4 text-7xl sm:text-8xl lg:text-9xl font-black font-mono text-neutral-100 group-hover:text-[#E52525]/10 transition-colors pointer-events-none select-none">
                    0{i + 1}
                  </span>

                  {/* Top content */}
                  <div>
                    {/* Meta row: counter + icon container */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#E52525] uppercase">
                        0{i + 1} / 03
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Value title */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] mb-4">
                      {val.title}
                    </h3>

                    {/* Value description */}
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed relative z-10 max-w-sm">
                      {val.desc}
                    </p>
                  </div>

                  {/* Expanding accent indicator */}
                  <div className="relative mt-8 pt-4">
                    <div className="h-0.5 w-10 bg-gray-200 group-hover:w-full group-hover:bg-[#E52525] transition-all duration-500 origin-left" />
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
