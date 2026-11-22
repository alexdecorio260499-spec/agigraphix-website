import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_SERVICES, MOCK_PROJECTS } from "@/lib/data";
import { getServiceGallery } from "@/lib/service-galleries";
import { ServiceContentGallery } from "@/components/services/ServiceContentGallery";
import { RelatedProductsSection } from "@/components/services/RelatedProductsSection";

export async function generateStaticParams() {
  return [
    ...MOCK_SERVICES.map((service) => ({
      slug: service.slug,
    })),
    { slug: "events" },
  ];
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = MOCK_SERVICES.find(
    (s) => s.slug === slug || (slug === "events" && s.slug === "events-exhibitions") || (slug === "events-exhibitions" && s.slug === "events")
  );

  if (!service) {
    notFound();
  }

  // Curated 4-image 2x2 gallery for this service
  const gallery = getServiceGallery(slug);

  // Find related projects (mock logic)
  const relatedProjects = MOCK_PROJECTS.filter((p) =>
    p.category.toLowerCase().includes(service.name.split(" ")[0].toLowerCase())
  ).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. MAIN SECTION: CONCEPT 3 — CONTENT + GALLERY */}
      <ServiceContentGallery
        title={service.name.toUpperCase()}
        description={service.description}
        capabilities={service.capabilities}
        gallery={gallery}
        ctaLink="/contact"
        ctaText="Explore our solutions"
      />

      {/* 2. SECONDARY SECTION: PRECISION & QUALITY */}
      <section className="py-20 sm:py-24 bg-white text-[#111111] border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Heading with red accent line */}
            <div className="lg:col-span-5">
              <div className="w-12 h-1 bg-[#E52525] mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] leading-tight mb-4">
                PRECISION &amp; QUALITY
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm uppercase tracking-wider font-bold">
                In-House Manufacturing &middot; Mauritius
              </p>
            </div>

            {/* Right side: Two-column editorial copy & CTA */}
            <div className="lg:col-span-7">
              <div className="text-neutral-600 leading-relaxed space-y-5 text-base sm:text-lg mb-10">
                <p>
                  At Agigraphix, our {service.name.toLowerCase()} solutions are designed to make an impact. We utilize state-of-the-art machinery and premium materials to ensure that every product we deliver not only meets but exceeds expectations.
                </p>
                <p>
                  From the initial discovery phase through to design, production, and final installation, our dedicated team manages every aspect of the project in-house. This comprehensive approach guarantees quality control and seamless execution, regardless of the project&apos;s scale or complexity.
                </p>
              </div>

              {/* Ready to Start CTA Block */}
              <div className="p-8 sm:p-10 bg-neutral-900 text-white rounded-xl border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="text-[#E52525] text-xs font-bold uppercase tracking-widest block mb-1">
                    READY TO START?
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Discuss your {service.name.toLowerCase()} project
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-[#E52525] hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors duration-200 inline-flex items-center gap-2 shrink-0 group"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED PRODUCTS SHOWCASE */}
      <RelatedProductsSection serviceSlug={slug} serviceName={service.name} />

      {/* 4. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="bg-gray-50 py-20 sm:py-24 border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-[#E52525] text-xs font-bold uppercase tracking-widest block mb-2">Portfolio</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
                  Related Projects
                </h3>
              </div>
              <Link 
                href="/work" 
                className="hidden sm:inline-flex items-center font-bold text-xs uppercase tracking-wider text-[#111111] hover:text-[#E52525] transition-colors group"
              >
                View All Work <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedProjects.map((p) => (
                <Link
                  href={`/work/${p.slug}`}
                  key={p.id}
                  className="group cursor-pointer block overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-100 relative aspect-[4/3] transition-all duration-300"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.coverImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-7 w-full">
                    <p className="text-[#E52525] text-xs font-bold uppercase tracking-widest mb-1.5">
                      {p.category}
                    </p>
                    <h4 className="text-white text-lg sm:text-xl font-bold leading-snug">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
