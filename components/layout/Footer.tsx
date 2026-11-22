"use client";

import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-agigraphix-black text-white/60 py-4 border-t border-white/10 text-xs">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-6 whitespace-nowrap overflow-x-auto">
        <div className="flex items-center gap-x-3 shrink-0">
          <Link href="/" className="text-white text-sm font-black tracking-wider shrink-0">
            AGI<span className="text-agigraphix-red">GRAPHIX</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="hidden md:inline">Visual Communication Solutions</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span>6 Wellington Street, Rose-Hill, Mauritius</span>
          <span className="text-white/20">|</span>
          <span>+230 465 1111</span>
          <span className="text-white/20">|</span>
          <span>hello@agigraphix.mu</span>
        </div>
        
        <div className="flex items-center gap-x-3 shrink-0">
          <span>© 2026 Agigraphix Ltd. All rights reserved.</span>
          <span className="text-white/20">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-white/20">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
