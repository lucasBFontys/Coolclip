"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X, Wind, Compass } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Hoe het werkt", href: "#hoe-het-werkt" },
    { name: "Gebruik", href: "#situaties" },
    { name: "Specificaties", href: "#specificaties" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A]/10 bg-[#F4F3ED]/90 backdrop-blur-md transition-all">
      {/* Top micro-banner in Patagonia aesthetic */}
      <div className="bg-[#1A1A1A] text-[#F4F3ED] text-[11px] font-mono tracking-wider py-1 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6E8F7E] animate-ping" />
        <span className="font-semibold uppercase">LIMITED PRE-ORDER BATCH 01</span>
        <span className="hidden md:inline text-[#C8C1AE]">— SPECIAAL VOOR BACKPACKERS & AVONTURIERS (20-25JR)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6E8F7E] rounded-md p-1">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6E8F7E] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/60 bg-[#C8C1AE]/30 px-2.5 py-1 rounded border border-[#1A1A1A]/10">
              <Compass className="w-3.5 h-3.5 text-[#6E8F7E]" />
              FIELD TESTED
            </span>
            <a
              href="#pre-order"
              className="inline-flex items-center gap-2 bg-[#6E8F7E] hover:bg-[#577364] text-white px-5 py-2.5 rounded-md font-heading font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm active:translate-y-0"
            >
              <Wind className="w-4 h-4" />
              Pre-order CoolClip
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#pre-order"
              className="bg-[#6E8F7E] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Pre-order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1A1A1A] hover:bg-[#C8C1AE]/30 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#1A1A1A]/10 bg-[#F4F3ED] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#1A1A1A] hover:bg-[#C8C1AE]/30"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#pre-order"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#6E8F7E] text-white px-4 py-3 rounded-md font-heading font-semibold text-center"
            >
              <Wind className="w-4 h-4" />
              Pre-order CoolClip (€49,95)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
