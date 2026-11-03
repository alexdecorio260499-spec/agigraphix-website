import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_SERVICES, MOCK_PROJECTS } from "@/lib/data";

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
  const service = MOCK_SERVICES.find(s => s.slug === slug || (slug === "events" && s.slug === "events-exhibitions"));
  
  if (!service) {
    notFound();
  }

  // Find related projects (mock logic)
  const relatedProjects = MOCK_PROJECTS.filter(p => p.category.toLowerCase().includes(service.name.split(' ')[0].toLowerCase())).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="w-full h-[50vh] md:h-[60vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
            {service.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-agigraphix-black mb-8 border-b-2 border-agigraphix-red pb-4 inline-block">
              Capabilities
            </h2>
            <ul className="space-y-4">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-gray-700">
                  <div className="w-2 h-2 bg-agigraphix-red mr-4" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-2/3">
             <h2 className="text-3xl font-black uppercase tracking-tight text-agigraphix-black mb-6">
              Precision & Quality
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                At Agigraphix, our {service.name.toLowerCase()} solutions are designed to make an impact. We utilize state-of-the-art machinery and premium materials to ensure that every product we deliver not only meets but exceeds expectations.
              </p>
              <p>
                From the initial discovery phase through to design, production, and final installation, our dedicated team manages every aspect of the project in-house. This comprehensive approach guarantees quality control and seamless execution, regardless of the project's scale or complexity.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-agigraphix-soft-white border border-gray-100 rounded">
              <h3 className="text-xl font-bold uppercase tracking-wide text-agigraphix-black mb-4">Ready to start?</h3>
              <Link 
                href="/contact" 
                className="inline-flex items-center font-bold text-agigraphix-black hover:text-agigraphix-red transition-colors group"
              >
                Discuss your {service.name.toLowerCase()} project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <h3 className="text-2xl font-black uppercase tracking-tight text-agigraphix-black mb-12">Related Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(p => (
                <Link 
                  href={`/work/${p.slug}`} 
                  key={p.id} 
                  className="group cursor-pointer block overflow-hidden rounded bg-white shadow-sm relative aspect-[4/3]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.coverImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-2">{p.category}</p>
                    <h3 className="text-white text-xl font-bold">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
