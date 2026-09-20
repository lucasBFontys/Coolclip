"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X, Wind, Flame } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Gebruikssituaties", href: "#situaties" },
    { name: "Specificaties", href: "#specificaties" },
    { name: "Reisverhaal", href: "#verhaal" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121815]/90 backdrop-blur-md text-[#F7F6F0] transition-all">
      
      {/* Top Scarcity Micro-Banner (Vibrant Palette) */}
      <div className="bg-gradient-to-r from-[#121815] via-[#1E2622] to-[#121815] text-[#F7F6F0] text-[11px] font-mono-accent tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-2 border-b border-white/10">
        <span className="inline-block w-2 h-2 rounded-full bg-[#5CE1E6] animate-ping" />
        <span className="font-bold uppercase text-[#5CE1E6]">BATCH #1 PRE-ORDER:</span>
        <span>NOG 42 STUKS BESCHIKBAAR VOOR €49,95 (NORM. €69,95)</span>
        <Flame className="w-3.5 h-3.5 text-[#5CE1E6] hidden sm:inline" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo (Dark Theme Variant - White C + White/Sage Snowflake) */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#4E876A] rounded-md p-1">
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5CE1E6] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-mono-accent uppercase tracking-wider text-[#DFD6BE] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              FIELD TESTED 2026
            </span>

            <a
              href="#pre-order"
              className="inline-flex items-center gap-2 bg-[#4E876A] hover:bg-[#37634C] text-white px-5 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 border border-[#63A382]"
            >
              <Wind className="w-4 h-4 text-[#5CE1E6]" />
              Pre-order (€49,95)
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#pre-order"
              className="bg-[#4E876A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Pre-order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#121815] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#pre-order"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#4E876A] text-white px-4 py-3 rounded-xl font-heading font-semibold text-center"
            >
              <Wind className="w-4 h-4 text-[#5CE1E6]" />
              Pre-order CoolClip (€49,95)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
