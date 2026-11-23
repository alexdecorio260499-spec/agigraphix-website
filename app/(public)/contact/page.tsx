import { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { StartProjectForm } from "@/components/contact/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | Agigraphix Mauritius",
  description: "Discuss your bespoke signage, large-format printing, displays, or event fabrication project with the Agigraphix team in Mauritius.",
};

const PROTOCOL = [
  {
    step: "01",
    title: "TECHNICAL ASSESSMENT",
    desc: "Rapid review of blueprints, materials, structural feasibility & budget.",
  },
  {
    step: "02",
    title: "IN-HOUSE PRODUCTION",
    desc: "Precision fabrication using CNC routing, laser cutting, and industrial UV printing.",
  },
  {
    step: "03",
    title: "ON-SITE INSTALLATION",
    desc: "Certified installation teams handling end-to-end deployment across Mauritius.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F9FAFB] text-[#111111] min-h-screen py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-gray-200">
      {/* Subtle ambient red background wash */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* LEFT COLUMN — INTRODUCTION & CONTACT INFORMATION (~38% width on desktop) */}
          <div className="w-full lg:w-[38%] shrink-0">
            {/* Red horizontal accent line */}
            <div className="w-12 h-1 bg-[#E52525] mb-6" />

            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E52525]" />
              <span>DIRECT WORKSHOP INQUIRY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#111111] leading-[0.95] mb-6">
              START A <br />
              <span className="text-[#E52525]">PROJECT.</span>
            </h1>

            {/* Supporting intro text */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10 lg:mb-12">
              Have something in mind? Tell us about your project requirements and our production team in Rose-Hill will guide you from material selection to final on-site installation.
            </p>

            {/* CONTACT INFORMATION — Editorial layout with thin separators */}
            <div className="border-t border-b border-gray-200 divide-y divide-gray-200 mb-12">
              {/* Workshop & Studio */}
              <a
                href="https://maps.google.com/?q=6+Wellington+Street+Rose+Hill+Mauritius"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-5 flex items-start justify-between transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all duration-300 shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525] mb-1">
                      WORKSHOP &amp; STUDIO
                    </h3>
                    <p className="text-[#111111] font-bold text-base group-hover:text-[#E52525] transition-colors duration-200">
                      6 Wellington Street, Rose-Hill
                    </p>
                    <p className="text-neutral-500 text-sm">Mauritius</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#111111] transition-colors shrink-0 mt-1" />
              </a>

              {/* Direct Line & Opening Hours */}
              <a
                href="tel:+2304651111"
                className="group py-5 flex items-start gap-4 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all duration-300 shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525] mb-1">
                    DIRECT LINE &middot; OPENING HOURS
                  </h3>
                  <p className="text-[#111111] font-bold text-base group-hover:text-[#E52525] transition-colors duration-200">
                    +230 465 1111
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Monday – Friday: 08:30 – 17:30 &middot; Saturday: 08:30 – 12:30
                  </p>
                </div>
              </a>

              {/* Email Inquiries */}
              <a
                href="mailto:hello@agigraphix.mu"
                className="group py-5 flex items-start gap-4 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all duration-300 shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525] mb-1">
                    EMAIL INQUIRIES
                  </h3>
                  <p className="text-[#111111] font-bold text-base group-hover:text-[#E52525] transition-colors duration-200">
                    hello@agigraphix.mu
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Technical briefs &amp; tenders
                  </p>
                </div>
              </a>
            </div>

            {/* PRODUCTION PROTOCOL — Clean three-step vertical numbered list */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E52525]" />
                <span>Agigraphix Production Protocol</span>
              </div>

              <div className="space-y-6">
                {PROTOCOL.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-sm font-mono font-bold text-[#E52525] pt-0.5 tracking-wider select-none shrink-0">
                      {item.step} &mdash;
                    </span>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-[#111111] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — REDESIGNED PROJECT FORM (~62% width on desktop) */}
          <div className="w-full lg:w-[62%]">
            <Suspense fallback={<div className="bg-[#111111] rounded-2xl min-h-[600px] border border-[#262626] animate-pulse" />}>
              <StartProjectForm />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
