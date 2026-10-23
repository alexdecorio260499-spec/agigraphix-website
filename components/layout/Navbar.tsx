"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "About us", href: "/about" },
  { name: "Our services", href: "/services" },
  { name: "Previous Work", href: "/work" },
];

function NavbarContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-agigraphix-black/95 backdrop-blur-md py-4 shadow-md"
          : "bg-agigraphix-black py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl md:text-3xl font-black tracking-wider flex items-center">
            AGI<span className="text-agigraphix-red">GRAPHIX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base lg:text-lg font-semibold tracking-wide transition-colors hover:text-agigraphix-red",
                  pathname === link.href ? "text-agigraphix-red" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-agigraphix-red text-white px-6 py-3 rounded text-base font-bold tracking-wide hover:bg-red-700 transition-colors inline-flex items-center"
            >
              Start a Project <span className="ml-2">→</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-agigraphix-black border-t border-white/10 p-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xl font-semibold",
                  pathname === link.href ? "text-agigraphix-red" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="/contact"
                className="bg-agigraphix-red text-white px-6 py-3.5 rounded text-lg font-bold tracking-wide hover:bg-red-700 transition-colors w-full flex justify-center items-center"
              >
                Start a Project <span className="ml-2">→</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavbarSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-agigraphix-black py-6">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl md:text-3xl font-black tracking-wider flex items-center">
            AGI<span className="text-agigraphix-red">GRAPHIX</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base lg:text-lg font-semibold tracking-wide text-white/90 hover:text-agigraphix-red"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-agigraphix-red text-white px-6 py-3 rounded text-base font-bold tracking-wide"
            >
              Start a Project <span className="ml-2">→</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Navbar() {
  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <NavbarContent />
    </Suspense>
  );
}
