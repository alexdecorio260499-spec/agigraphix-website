import { Metadata } from "next";
import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react";
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
    <div className="bg-[#F9FAFB] text-[#111111] min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] flex items-center py-4 sm:py-6 px-4 sm:px-6 relative overflow-hidden border-b border-gray-200">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* LEFT COLUMN — COMPACT WORKSHOP INFO (~5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Red accent line */}
            <div className="w-10 h-1 bg-[#E52525] mb-2" />

            {/* Kicker badge */}
            <div className="inline-flex items-center gap-1.5 text-[#E52525] text-[11px] font-mono font-bold uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52525]" />
              <span>Direct Workshop Inquiry</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#111111] leading-none mb-2">
              START A <span className="text-[#E52525]">PROJECT.</span>
            </h1>

            {/* Descriptive intro */}
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
              Have something in mind? Tell us about your project requirements and our production team in Rose-Hill will guide you from material selection to final on-site installation.
            </p>

            {/* Contact Coordinates Cards — Compact */}
            <div className="space-y-2 mb-3.5">
              {/* Visit Us */}
              <a
                href="https://maps.google.com/?q=6+Wellington+Street+Rose+Hill+Mauritius"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-2.5 rounded-lg bg-white border border-gray-200 hover:border-[#E52525] shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all shrink-0 mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E52525]">
                      Workshop &amp; Studio
                    </h3>
                    <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-[#111111] transition-colors" />
                  </div>
                  <p className="text-[#111111] font-bold text-xs truncate">6 Wellington Street, Rose-Hill</p>
                </div>
              </a>

              {/* Call Us & Opening Hours */}
              <a
                href="tel:+2304651111"
                className="group flex items-center p-2.5 rounded-lg bg-white border border-gray-200 hover:border-[#E52525] shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all shrink-0 mr-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E52525]">
                      Direct Line &middot; Opening Hours
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-700">+230 465 1111</span>
                  </div>
                  <p className="text-neutral-500 text-[11px] truncate">
                    Monday – Friday: 08:30 – 17:30 &middot; Saturday: 08:30 – 12:30
                  </p>
                </div>
              </a>

              {/* Email Us */}
              <a
                href="mailto:hello@agigraphix.mu"
                className="group flex items-center p-2.5 rounded-lg bg-white border border-gray-200 hover:border-[#E52525] shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-100 border border-gray-200 flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-[#E52525] group-hover:border-[#E52525] transition-all shrink-0 mr-3">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E52525]">
                    Email Inquiries
                  </h3>
                  <p className="text-[#111111] font-bold text-xs">hello@agigraphix.mu &middot; <span className="font-normal text-neutral-500">Technical briefs &amp; tenders</span></p>
                </div>
              </a>
            </div>

            {/* Production Protocol Block — Compact */}
            <div className="border border-gray-200 rounded-lg p-3 bg-white shadow-xs">
              <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52525]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Agigraphix Production Protocol
                </span>
              </div>
              <div className="space-y-1.5">
                {PROTOCOL.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#E52525] pt-0.5 shrink-0">
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] text-neutral-600 leading-tight">
                        <strong className="uppercase font-bold text-[#111111]">{item.title}:</strong> {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — COMPACT PROJECT INQUIRY FORM (~7 cols) */}
          <div className="lg:col-span-7">
            <StartProjectForm />
          </div>

        </div>
      </div>
    </div>
  );
}
