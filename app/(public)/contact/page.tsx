import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { StartProjectForm } from "@/components/contact/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | Agigraphix Mauritius",
  description: "Discuss your bespoke signage, large-format printing, displays, or event fabrication project with the Agigraphix team in Mauritius.",
};

const PROTOCOL = [
  {
    step: "01",
    title: "TECHNICAL ASSESSMENT",
    desc: "Rapid review of blueprints, materials, structural feasibility & budget within 24h.",
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
    <div className="bg-[#0B0B0B] text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E52525]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-red-950/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN — INTRODUCTION & WORKSHOP INFO (~5 cols) */}
          <div className="lg:col-span-5">
            {/* Small red horizontal accent line */}
            <div className="w-12 h-1 bg-[#E52525] mb-6" />

            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 text-[#E52525] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E52525]" />
              <span>Direct Workshop Inquiry</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6">
              START A <br />
              <span className="text-[#E52525]">PROJECT.</span>
            </h1>

            {/* Descriptive intro */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10">
              Have something in mind? Tell us about your project requirements and our production team in Rose-Hill will guide you from material selection to final on-site installation.
            </p>

            {/* Contact Coordinates Cards */}
            <div className="space-y-4 mb-10">
              {/* Visit Us */}
              <a
                href="https://maps.google.com/?q=6+Wellington+Street+Rose+Hill+Mauritius"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#E52525]/60 hover:bg-[#181818] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E52525] group-hover:border-[#E52525]/40 transition-colors shrink-0 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525]">
                      Workshop &amp; Studio
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base">6 Wellington Street</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">Rose-Hill, Mauritius</p>
                </div>
              </a>

              {/* Call Us */}
              <a
                href="tel:+2304651111"
                className="group flex items-start p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#E52525]/60 hover:bg-[#181818] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E52525] group-hover:border-[#E52525]/40 transition-colors shrink-0 mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525] mb-0.5">
                    Direct Line
                  </h3>
                  <p className="text-white font-bold text-sm sm:text-base">+230 465 1111</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">Mon – Fri · 08:30 – 17:00</p>
                </div>
              </a>

              {/* Email Us */}
              <a
                href="mailto:hello@agigraphix.mu"
                className="group flex items-start p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#E52525]/60 hover:bg-[#181818] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E52525] group-hover:border-[#E52525]/40 transition-colors shrink-0 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52525] mb-0.5">
                    Email Inquiries
                  </h3>
                  <p className="text-white font-bold text-sm sm:text-base">hello@agigraphix.mu</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">Technical briefs &amp; tenders</p>
                </div>
              </a>
            </div>

            {/* Production Commitment Architectural Block */}
            <div className="border border-[#262626] rounded-xl p-6 bg-[#121212]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E52525]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
                  Agigraphix Production Protocol
                </span>
              </div>
              <div className="space-y-4">
                {PROTOCOL.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="text-xs font-mono font-bold text-[#E52525] pt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — THE START A PROJECT FORM (~7 cols) */}
          <div className="lg:col-span-7">
            <StartProjectForm />
          </div>

        </div>
      </div>
    </div>
  );
}