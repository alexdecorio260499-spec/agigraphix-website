"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  X, 
  Check
} from "lucide-react";

const SERVICES = [
  { id: "signage", label: "Signage" },
  { id: "printing", label: "Large Format Printing" },
  { id: "displays", label: "Displays & Fabrication" },
  { id: "events", label: "Events & Exhibitions" },
  { id: "other", label: "Other" },
];

const TIMELINES = [
  { id: "asap", label: "Urgent (ASAP)" },
  { id: "1-2weeks", label: "1 – 2 Weeks" },
  { id: "this-month", label: "This Month" },
  { id: "flexible", label: "Flexible" },
];

export function StartProjectForm() {
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
    }, 700);
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
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        <div className="w-12 h-12 rounded-xl bg-[#E52525]/10 border border-[#E52525]/30 flex items-center justify-center text-[#E52525] mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#E52525] uppercase block mb-1">
          INQUIRY RECEIVED
        </span>

        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
          THANK YOU, {name ? name.toUpperCase() : "CLIENT"}.
        </h3>

        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
          We have received your project details. Our technical team in Rose-Hill will review your brief and contact you shortly.
        </p>

        <button
          onClick={handleReset}
          className="px-6 py-2.5 bg-[#1F1F1F] hover:bg-[#282828] text-white border border-[#333333] hover:border-[#E52525] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
        >
          Submit Another Project
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 sm:p-5 lg:p-6 shadow-2xl relative overflow-hidden">
      {/* Subtle corner light wash */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#E52525]/5 rounded-bl-full pointer-events-none transition-all duration-500" />

      <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
        
        {/* 1. SERVICE REQUIRED PILLS */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
            01 / Select Service Required *
          </label>
          <div className="flex flex-wrap gap-1.5">
            {SERVICES.map((srv) => {
              const isSelected = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 border inline-flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#E52525] text-white border-[#E52525] shadow-sm"
                      : "bg-[#1B1B1B] text-neutral-300 border-[#2A2A2A] hover:border-[#444444] hover:text-white"
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  <span>{srv.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. CONTACT DETAILS GRID */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
            02 / Contact Information *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name *"
              className="w-full px-3 py-2 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-md text-white placeholder-neutral-500 text-xs sm:text-sm outline-none transition-all h-9"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company / Organization"
              className="w-full px-3 py-2 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-md text-white placeholder-neutral-500 text-xs sm:text-sm outline-none transition-all h-9"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work Email Address *"
              className="w-full px-3 py-2 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-md text-white placeholder-neutral-500 text-xs sm:text-sm outline-none transition-all h-9"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number / WhatsApp *"
              className="w-full px-3 py-2 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-md text-white placeholder-neutral-500 text-xs sm:text-sm outline-none transition-all h-9"
            />
          </div>
        </div>

        {/* 3. TIMELINE & BRIEF SPLIT */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
          {/* Estimated Timeline */}
          <div className="sm:col-span-5">
            <label className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
              03 / Timeline
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {TIMELINES.map((t) => {
                const isSelected = selectedTimeline === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTimeline(t.id)}
                    className={`py-1.5 px-2 rounded-md text-[11px] font-semibold uppercase tracking-wider text-center transition-all duration-200 border ${
                      isSelected
                        ? "bg-[#1E1E1E] text-white border-[#E52525] ring-1 ring-[#E52525]"
                        : "bg-[#1B1B1B] text-neutral-400 border-[#2A2A2A] hover:border-[#444444] hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Brief */}
          <div className="sm:col-span-7">
            <label className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
              04 / Project Brief &amp; Dimensions
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe requirements, materials, dimensions, or site..."
              className="w-full px-3 py-1.5 bg-[#1B1B1B] border border-[#2A2A2A] focus:border-[#E52525] focus:ring-1 focus:ring-[#E52525] rounded-md text-white placeholder-neutral-500 text-xs outline-none transition-all resize-none h-[54px]"
            />
          </div>
        </div>

        {/* 4. SLIM FILE UPLOAD ROW */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
            05 / Artwork &amp; Drawings (Optional)
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
              className="border border-dashed border-[#2E2E2E] hover:border-[#E52525]/70 rounded-lg p-2.5 flex items-center justify-center gap-2.5 bg-[#181818]/40 hover:bg-[#181818] transition-all cursor-pointer group"
            >
              <UploadCloud className="w-4 h-4 text-neutral-400 group-hover:text-[#E52525] transition-colors shrink-0" />
              <p className="text-white text-xs font-semibold group-hover:text-[#E52525] transition-colors truncate">
                Click to attach drawings or drop files (PDF, AI, DWG, PNG up to 25MB)
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between p-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E52525]" />
                <span className="text-white text-xs font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {file.name}
                </span>
                <span className="text-neutral-500 text-[10px]">
                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="p-1 text-neutral-400 hover:text-white rounded transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* 5. SUBMIT ACTION */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#E52525] hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-md shadow-red-950/40 hover:shadow-red-900/50 group cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "TRANSMITTING BRIEF..." : "SEND PROJECT BRIEF"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-center text-neutral-500 text-[10px] mt-1.5 font-mono">
            Direct review by Agigraphix Rose-Hill production studio · Mauritius
          </p>
        </div>

      </form>
    </div>
  );
}
