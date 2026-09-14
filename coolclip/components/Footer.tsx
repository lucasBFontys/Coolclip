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
            <div className="flex items-center gap-2 bg-[#2A2A2A] w-fit p-2 rounded-lg border border-white/10">
              {/* White/Light Logo for dark background */}
              <div className="inline-flex items-center gap-2.5 font-bold tracking-tight text-white select-none">
                <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 20 6 C 12 6 6 12 6 20 C 6 28 12 34 20 34 C 23.5 34 26.5 32.8 28.8 30.5 L 24.5 26.2 C 23.3 27.4 21.8 28.1 20 28.1 C 15.5 28.1 12 24.6 12 20.1 C 12 15.6 15.5 12.1 20 12.1 C 21.8 12.1 23.3 12.8 24.5 14 L 28.8 9.7 C 26.5 7.4 23.5 6 20 6 Z"
                    fill="#FFFFFF"
                  />
                  <circle cx="28.5" cy="19.8" r="3.2" fill="#6E8F7E" />
                </svg>
                <span className="font-heading text-lg font-bold text-white">
                  Cool<span className="text-[#6E8F7E]">Clip</span>
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-[#C8C1AE] uppercase tracking-widest">
              FOR BACKPACKERS & ADVENTURERS
            </p>

            <p className="text-sm text-[#F4F3ED]/70 leading-relaxed max-w-sm">
              Gemaakt om reizigers koel te houden in de meest extreme tropische hostels, benauwde bussen en outdoor bivaks. Ontworpen met oog voor duurzaamheid en robuustheid.
            </p>

            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2A2A2A] px-3 py-1.5 rounded text-xs font-mono text-[#6E8F7E] border border-white/10">
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Recycled Polymer Casing</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8C1AE]">
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
                <a href="#faq" className="hover:text-[#6E8F7E] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#pre-order" className="hover:text-[#6E8F7E] transition-colors font-bold text-[#6E8F7E]">Pre-order (€49,95)</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Community Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8C1AE]">
              COMMUNITY & SOCIALS
            </h4>
            <p className="text-xs text-[#F4F3ED]/60">
              Volg onze testreizen en backpacker avonturen via onze kanalen.
            </p>

            {/* Social Placeholders Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono border border-white/10 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono border border-white/10 transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono border border-white/10 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://strava.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#6E8F7E] text-white px-3 py-1.5 rounded text-xs font-mono border border-white/10 transition-colors"
              >
                Outdoor Club
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F4F3ED]/50 gap-4">
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
