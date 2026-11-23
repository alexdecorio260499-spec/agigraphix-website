"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  ArrowRight, 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  X, 
  Check,
  Loader2
} from "lucide-react";

const SERVICES = [
  { id: "signage", label: "Signage" },
  { id: "large-format-printing", label: "Large Format Printing" },
  { id: "displays-fabrication", label: "Displays & Fabrication" },
  { id: "events-exhibitions", label: "Events & Exhibitions" },
  { id: "other", label: "Other" },
];

const TIMELINES = [
  { id: "asap", label: "Urgent (ASAP)" },
  { id: "1-2weeks", label: "1 – 2 Weeks" },
  { id: "this-month", label: "This Month" },
  { id: "flexible", label: "Flexible" },
];

export function StartProjectForm() {
  const searchParams = useSearchParams();

  const [selectedService, setSelectedService] = useState("signage");
  const [selectedTimeline, setSelectedTimeline] = useState("this-month");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with URL query params if user navigated from a specific service/capability/project
  useEffect(() => {
    if (!searchParams) return;
    const srvParam = searchParams.get("service");
    const capParam = searchParams.get("capability");
    const projParam = searchParams.get("project");

    if (srvParam) {
      const match = SERVICES.find(
        (s) => s.id === srvParam || srvParam.includes(s.id) || (srvParam === "printing" && s.id === "large-format-printing") || (srvParam === "displays" && s.id === "displays-fabrication") || (srvParam === "events" && s.id === "events-exhibitions")
      );
      if (match) {
        setSelectedService(match.id);
      }
    }

    if (capParam || projParam) {
      const target = capParam || projParam;
      setDescription((prev) =>
        prev ? prev : `I would like to inquire about: ${target}`
      );
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setDescription("");
    setFile(null);
    setSelectedService("signage");
    setSelectedTimeline("this-month");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#111111] border border-[#262626] rounded-2xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle red corner wash */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E52525]/10 rounded-bl-full pointer-events-none blur-2xl" />

        <div className="w-16 h-16 rounded-2xl bg-[#E52525]/10 border border-[#E52525]/30 flex items-center justify-center text-[#E52525] mx-auto mb-6 shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-[#E52525] uppercase block mb-2">
          INQUIRY RECEIVED
        </span>

        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
          THANK YOU, {name ? name.toUpperCase() : "CLIENT"}.
        </h3>

        <p className="text-neutral-400 text-base max-w-md mx-auto leading-relaxed mb-8">
          We have received your project details. Our technical and production team in Rose-Hill will review your brief and contact you within 24 hours.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-3.5 bg-[#1F1F1F] hover:bg-[#282828] text-white border border-[#333333] hover:border-[#E52525] font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] border border-[#262626] rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Subtle corner light wash */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E52525]/[0.03] rounded-bl-full pointer-events-none transition-all duration-500" />

      <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-10 relative z-10">
        
        {/* 01 / SELECT SERVICE REQUIRED */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3.5">
            01 / SELECT SERVICE REQUIRED *
          </label>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {SERVICES.map((srv) => {
              const isSelected = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border inline-flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#E52525] text-white border-[#E52525] shadow-lg shadow-red-950/40"
                      : "bg-[#1B1B1B] text-neutral-300 border-[#2A2A2A] hover:border-[#444444] hover:text-white"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                  <span>{srv.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 02 / CONTACT INFORMATION */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3.5">
            02 / CONTACT INFORMATION *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                className="w-full px-4.5 py-4 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-xl text-white placeholder-neutral-500 text-sm sm:text-base outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company / Organization"
                className="w-full px-4.5 py-4 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-xl text-white placeholder-neutral-500 text-sm sm:text-base outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work Email Address *"
                className="w-full px-4.5 py-4 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-xl text-white placeholder-neutral-500 text-sm sm:text-base outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number / WhatsApp *"
                className="w-full px-4.5 py-4 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-xl text-white placeholder-neutral-500 text-sm sm:text-base outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* 03 / ESTIMATED TIMELINE */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3.5">
            03 / ESTIMATED TIMELINE
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TIMELINES.map((t) => {
              const isSelected = selectedTimeline === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTimeline(t.id)}
                  className={`py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-[#222222] text-white border-[#E52525] ring-1 ring-[#E52525] shadow-sm"
                      : "bg-[#1B1B1B] text-neutral-400 border-[#2A2A2A] hover:border-[#444444] hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 04 / PROJECT BRIEF & DIMENSIONS */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3.5">
            04 / PROJECT BRIEF &amp; DIMENSIONS
          </label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe requirements, materials, dimensions, or site..."
            className="w-full p-4.5 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-xl text-white placeholder-neutral-500 text-sm sm:text-base outline-none transition-all resize-y leading-relaxed min-h-[140px]"
          />
        </div>

        {/* 05 / ARTWORK & DRAWINGS (OPTIONAL) */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3.5">
            05 / ARTWORK &amp; DRAWINGS (OPTIONAL)
          </label>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.ai,.eps,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
            className="hidden"
          />

          {!file ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-2 border-dashed border-[#2E2E2E] hover:border-[#E52525]/70 rounded-xl p-8 sm:p-10 text-center bg-[#161616]/60 hover:bg-[#181818] transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-[#E52525] group-hover:border-[#E52525]/40 transition-all mx-auto mb-3.5 shadow-md">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-white text-sm sm:text-base font-bold mb-1.5 group-hover:text-[#E52525] transition-colors">
                Click to attach drawings or drop files
              </p>
              <p className="text-xs font-mono text-neutral-500">
                Supports PDF, AI, DWG, PNG, JPG (up to 25MB)
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#E52525]/10 text-[#E52525] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-bold truncate max-w-[200px] sm:max-w-md">
                    {file.name}
                  </p>
                  <p className="text-neutral-500 text-xs font-mono">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Remove attached file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4.5 sm:py-5 bg-[#E52525] hover:bg-red-700 text-white font-black text-sm sm:text-base uppercase tracking-widest rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-3 shadow-xl shadow-red-950/40 hover:shadow-red-900/50 group cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>TRANSMITTING BRIEF...</span>
              </>
            ) : (
              <>
                <span>SEND PROJECT BRIEF</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-center text-neutral-500 text-xs mt-3.5 font-mono">
            Direct review by Agigraphix Rose-Hill production studio · Mauritius
          </p>
        </div>

      </form>
    </div>
  );
}
