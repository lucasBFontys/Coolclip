import React from "react";
import { Wind, ShieldCheck, BatteryCharging, Zap, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F3ED] pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-[#1A1A1A]/10" id="hero">
      {/* Background subtle topography line grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tagline / Patagonia Style Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8C1AE]/40 border border-[#1A1A1A]/15 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#1A1A1A]">
              <span className="w-2 h-2 rounded-full bg-[#6E8F7E]" />
              <span className="font-semibold uppercase">FOR BACKPACKERS & ADVENTURERS</span>
              <span className="text-[#1A1A1A]/40">|</span>
              <span className="text-[#1A1A1A]/80">20 - 25 JR</span>
            </div>

            {/* Main H1 - Single H1 on page */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
              Overleef elke hitte. <br />
              <span className="text-[#6E8F7E] underline decoration-[#C8C1AE] decoration-wavy decoration-2 underline-offset-8">
                Klem direct verkoeling
              </span>{" "}
              op je gear.
            </h1>

            {/* Proposition Body Text */}
            <p className="text-lg sm:text-xl text-[#1A1A1A]/80 font-normal leading-relaxed max-w-2xl">
              Geen slapeloze nachten meer in 35°C hostels, benauwde 14-uur nachtbussen of een snikhete tent. <strong className="font-semibold text-[#1A1A1A]">CoolClip</strong> is de ultralichte, klembare mini-airco die 8 uur lang een krachtige, ijskoele luchtstroom levert.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A1A1A] bg-white/70 backdrop-blur border border-[#1A1A1A]/10 p-2.5 rounded-md shadow-2xs">
                <BatteryCharging className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>8 uur batterijduur</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A1A1A] bg-white/70 backdrop-blur border border-[#1A1A1A]/10 p-2.5 rounded-md shadow-2xs">
                <Wind className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>Micro-verdamping</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A1A1A] bg-white/70 backdrop-blur border border-[#1A1A1A]/10 p-2.5 rounded-md shadow-2xs col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>185 gram ultra-light</span>
              </div>
            </div>

            {/* CTA Buttons & Micro Copy */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#pre-order"
                  className="inline-flex items-center justify-center gap-3 bg-[#6E8F7E] hover:bg-[#577364] text-white px-8 py-4 rounded-md font-heading font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Wind className="w-5 h-5" />
                  Pre-order CoolClip (€49,95)
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#hoe-het-werkt"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#C8C1AE]/30 text-[#1A1A1A] border border-[#1A1A1A]/20 px-6 py-4 rounded-md font-heading font-semibold text-base transition-colors text-center"
                >
                  Bekijk hoe het werkt
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#1A1A1A]/70 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8F7E]" /> Spatwaterdicht (IPX4)
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8F7E]" /> Gratis verzending in EU
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup Container (Patagonia Rugged Gear Style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card frame with outdoor badges */}
              <div className="relative rounded-2xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] transition-transform hover:translate-x-1 hover:translate-y-1">
                
                {/* Header inside mockup */}
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#6E8F7E]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      COOLCLIP // MODEL v1.0
                    </span>
                  </div>
                  <span className="bg-[#C8C1AE]/50 border border-[#1A1A1A]/20 text-[10px] font-mono px-2 py-0.5 rounded uppercase">
                    RUGGED EDITION
                  </span>
                </div>

                {/* SVG Visual Graphic of CoolClip Device */}
                <div className="relative aspect-4/3 rounded-xl bg-radial from-[#F4F3ED] to-[#C8C1AE]/40 flex items-center justify-center p-8 border border-[#1A1A1A]/10 overflow-hidden">
                  
                  {/* Airflow waves animation background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-25">
                    <div className="w-48 h-48 rounded-full border border-[#6E8F7E] animate-ping" />
                    <div className="w-36 h-36 rounded-full border border-[#6E8F7E] animate-pulse" />
                  </div>

                  {/* High Quality CoolClip Device Vector Illustration */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-44 h-44 rounded-3xl bg-[#1A1A1A] p-4 shadow-xl border-4 border-[#C8C1AE] flex flex-col justify-between relative">
                      
                      {/* Heavy Duty Clip Clamp Top */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#6E8F7E] rounded-t-lg border-2 border-[#1A1A1A] flex items-center justify-center shadow-md">
                        <div className="w-16 h-2 bg-[#1A1A1A]/40 rounded-full" />
                      </div>

                      {/* Cool Vent Grill */}
                      <div className="w-full h-24 bg-[#2A2A2A] rounded-xl border border-white/10 p-2 grid grid-cols-6 gap-1 items-center justify-center mt-2">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div key={i} className="h-4 bg-[#6E8F7E]/80 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>

                      {/* Brand Logo & Controls on Device */}
                      <div className="flex items-center justify-between text-white px-1 pt-1">
                        <div className="flex items-center gap-1">
                          <span className="font-heading text-xs font-bold tracking-tight text-white">C</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F7E]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono text-[#C8C1AE]">35 dB</span>
                          <div className="w-3 h-3 rounded-full bg-[#6E8F7E] border border-white/50 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Cold breeze mist badge floating */}
                    <div className="mt-4 inline-flex items-center gap-2 bg-[#6E8F7E] text-white text-xs font-mono px-3 py-1 rounded-full shadow-md">
                      <Wind className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                      <span>ICEY BREEZE ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Bottom spec callout card */}
                <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[#1A1A1A]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#6E8F7E]" />
                    <span>SE ASIA & LATAM TESTED</span>
                  </div>
                  <span className="font-mono font-bold text-[#1A1A1A]">€49,95</span>
                </div>

              </div>

              {/* Floating Badge (Patagonia style) */}
              <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] text-[#F4F3ED] px-4 py-2 rounded-lg font-mono text-xs border border-[#C8C1AE] shadow-lg hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6E8F7E]" />
                <span>2 JAAR GARANTIE OP REIS</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
