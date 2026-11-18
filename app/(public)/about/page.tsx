import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-agigraphix-black text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 bg-[url('/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-009.webp')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 max-w-4xl">
            25+ YEARS <br />
            <span className="text-agigraphix-red">OF MAKING BRANDS VISIBLE.</span>
          </h1>
          <div className="max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            <p className="mb-6">
              Established in 2001, Agigraphix has grown into Mauritius's premier visual communication and fabrication studio.
            </p>
            <p>
              We combine decades of craftsmanship with modern technology to deliver bespoke signage, large-format printing, and complete branded environments. We don't just print — we build.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-agigraphix-soft-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-agigraphix-black mb-16 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "BESPOKE", desc: "Every project is built around the client's needs. We don't do off-the-shelf solutions." },
              { title: "QUALITY", desc: "Materials and production are treated with care, ensuring longevity in demanding environments." },
              { title: "PRECISION", desc: "Modern production methods combined with experienced craftsmanship." }
            ].map((val, i) => (
              <div key={i} className="bg-white p-10 rounded shadow-sm border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-agigraphix-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-agigraphix-black mb-4">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white text-agigraphix-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Our Process</h2>
            <p className="text-agigraphix-charcoal text-lg">From concept to finished product.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-gray-200 z-0" />
            
            {[
              { num: "01", title: "DISCOVER", desc: "You tell us what you need." },
              { num: "02", title: "DESIGN", desc: "We develop the visual solution." },
              { num: "03", title: "PRODUCE", desc: "Our team brings it to life." },
              { num: "04", title: "INSTALL", desc: "We deliver and install the finished product." },
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white pt-8 md:pt-0">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 text-2xl md:text-3xl font-black text-gray-300 mb-6 mx-auto md:mx-0 shadow-sm">
                  {step.num}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-agigraphix-black text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-center md:text-left">
              Our Capabilities
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "CNC Routing",
              "Laser Cutting",
              "UV Printing",
              "Large Format Printing",
              "Acrylic Fabrication",
              "Installation"
            ].map((cap, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded flex items-center justify-center text-center hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold uppercase tracking-wider text-agigraphix-red">{cap}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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
