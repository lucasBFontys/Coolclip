import React from "react";
import Logo from "./Logo";
import { Compass, Leaf, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F4F3ED] border-t border-[#1A1A1A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Logo with snowflake */}
            <div className="flex items-center gap-2 bg-[#2A2A2A] w-fit p-2 rounded-lg border border-white/10">
              <Logo variant="dark" />
            </div>

            <p className="text-xs font-mono-accent text-[#C8C1AE] uppercase tracking-widest">
              JOUW VERKOELING, WAAR JE OOK GAAT
            </p>

            <p className="text-sm text-[#F4F3ED]/70 leading-relaxed max-w-sm">
              Gemaakt om reizigers koel te houden in de meest extreme tropische hostels, benauwde bussen en outdoor bivaks. Ontworpen met oog voor duurzaamheid en robuustheid.
            </p>

            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2A2A2A] px-3 py-1.5 rounded text-xs font-mono-accent text-[#6E8F7E] border border-white/10">
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Recycled Polymer Casing</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono-accent text-xs font-bold uppercase tracking-wider text-[#C8C1AE]">
              NAVIGATIE
            </h4>
            <ul className="space-y-2 text-sm text-[#F4F3ED]/80">
              <li>
                <a href="#hero" className="hover:text-[#6E8F7E] transition-colors">Home</a>
              </li>
              <li>
                <a href="#hoe-het-werkt" className="hover:text-[#6E8F7E] transition-colors">Hoe het werkt</a>
              </li>
              <li>
                <a href="#situaties" className="hover:text-[#6E8F7E] transition-colors">Gebruikssituaties</a>
              </li>
              <li>
                <a href="#specificaties" className="hover:text-[#6E8F7E] transition-colors">Specificaties</a>
              </li>
              <li>
                <a href="#verhaal" className="hover:text-[#6E8F7E] transition-colors">Reisverhaal</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#6E8F7E] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#pre-order" className="hover:text-[#6E8F7E] transition-colors font-bold text-[#6E8F7E]">Pre-order (€49,95)</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Community Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono-accent text-xs font-bold uppercase tracking-wider text-[#C8C1AE]">
              COMMUNITY & SOCIALS (#CoolClip)
            </h4>
            <p className="text-xs text-[#F4F3ED]/60">
              Sluit je aan bij de #CoolClipAdventurers community op reis.
            </p>

            {/* Social Placeholders Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono-accent border border-white/10 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono-accent border border-white/10 transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono-accent border border-white/10 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://strava.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono-accent border border-white/10 transition-colors"
              >
                Outdoor Club
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-accent text-[#F4F3ED]/50 gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#6E8F7E]" />
            <span>© {new Date().getFullYear()} CoolClip Outdoor Gear. Alle rechten voorbehouden.</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Designed for backpackers with</span>
            <Heart className="w-3 h-3 text-[#6E8F7E] fill-current" />
            <span>in Netherlands</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
