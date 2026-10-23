"use client";

import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-agigraphix-black text-white/60 py-6 border-t border-white/10 text-xs">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col xl:flex-row flex-wrap items-center justify-center xl:justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-3 gap-y-2">
          <Link href="/" className="text-white text-sm font-black tracking-wider">
            AGI<span className="text-agigraphix-red">GRAPHIX</span>
          </Link>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Visual Communication Solutions</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>6 Wellington Street, Rose-Hill, Mauritius</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>+230 465 1111</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>hello@agigraphix.mu</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span>© 2026 Agigraphix Ltd. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
