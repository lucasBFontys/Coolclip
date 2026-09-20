import React from "react";
import { Heart, ShieldCheck, MapPin, Compass } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-[#1A1A1A] text-[#F4F3ED] border-b border-[#1A1A1A]" id="verhaal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#2A2A2A] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono-accent tracking-wider text-[#C8C1AE]">
              <Compass className="w-3.5 h-3.5 text-[#6E8F7E]" />
              <span className="font-bold uppercase text-[#6E8F7E]">OUR MISSION & STORY</span>
              <span>// PATAGONIA / COTOPAXI VIBE</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Geboren in een snikhete nachtbus in Ha Giang.
            </h2>

            {/* AEO Summary */}
            <div className="p-4 rounded-xl bg-[#2A2A2A] border-l-4 border-[#6E8F7E] text-sm text-[#F4F3ED]/90 leading-relaxed font-mono-accent">
              CoolClip is opgericht door Nederlandse backpackers die na talloze slapeloze nachten in tropische hostels besloten dat koeling op reis geen luxe, maar een essentieel hulpmiddel moet zijn.
            </div>

            <p className="text-base sm:text-lg text-[#F4F3ED]/80 leading-relaxed">
              Het idee voor CoolClip ontstond in 2024 tijdens een reis door Zuidoost-Azië. Na weer een nacht bij 34°C in een hostel zonder airco vroegen we ons af: waarom is er geen compacte, robuuste koeler die je overal aan vast kunt klemmen?
            </p>

            <p className="text-sm sm:text-base text-[#F4F3ED]/70 leading-relaxed">
              We hebben 18 maanden gebouwd aan een prototype dat bestand is tegen regen, vallen en continu gebruik. Geen goedkope troep die na twee weken kapotgaat, maar gear gebouwd voor jarenlang avontuur.
            </p>

            {/* Patagonia Style 1% Pledge */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] p-4 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#6E8F7E] font-mono-accent font-bold text-xs uppercase">
                  <ShieldCheck className="w-4 h-4" /> 100% RECYCLED POLYMER
                </div>
                <p className="text-xs text-[#F4F3ED]/70">
                  De behuizing is gemaakt van 100% gerecycled ABS kunststof.
                </p>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#6E8F7E] font-mono-accent font-bold text-xs uppercase">
                  <Heart className="w-4 h-4" /> REPARATIE BELOFTE
                </div>
                <p className="text-xs text-[#F4F3ED]/70">
                  Defect op reis? Wij sturen vervangende onderdelen waar je ook bent.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Founder / Field Test Visual Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border-2 border-[#C8C1AE]/40 overflow-hidden shadow-2xl bg-[#2A2A2A] p-3">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                <img
                  src="https://placehold.co/800x600/2A2A2A/6E8F7E/png?text=CoolClip+Founders+Field+Testing+In+Vietnam"
                  alt="CoolClip oprichters aan het testen in Zuidoost-Azië"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/90 backdrop-blur text-xs font-mono-accent px-3 py-1.5 rounded border border-white/20 text-[#C8C1AE] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6E8F7E]" />
                  <span>VIETNAM // FIELD TEST 2024</span>
                </div>
              </div>

              <div className="p-3 text-center text-xs font-mono-accent text-[#C8C1AE]">
                “Gear moet gewoon werken wanneer het 35 graden is.”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
