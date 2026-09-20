"use client";

import React, { useState } from "react";
import { Wind, ShieldCheck, Truck, Clock, Sparkles, Flame, CheckCircle2 } from "lucide-react";

export default function CtaTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#DFD6BE] border-b border-[#121815]/10 relative overflow-hidden" id="pre-order">
      
      {/* Topography Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#121815 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#121815] text-[#F7F6F0] rounded-3xl p-8 sm:p-12 border-4 border-white shadow-2xl space-y-8">
          
          {/* Header Badges with Scarcity Ticker */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#4E876A] text-white px-3.5 py-1.5 rounded-full text-xs font-mono-accent tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#5CE1E6]" />
              <span>EARLY BIRD BATCH #1 PRE-ORDER</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-accent text-[#DFD6BE] bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Flame className="w-4 h-4 text-[#5CE1E6] animate-pulse" />
              <span className="font-bold text-white">NOG 42 STUKS BESCHIKBAAR</span>
              <span className="text-white/50">| VERWACHT: ZOMER 2026</span>
            </div>
          </div>

          {/* Main Content & Product Showcase Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Jouw verkoeling, waar je ook gaat.
              </h2>
              <p className="text-base sm:text-lg text-[#F7F6F0]/80 leading-relaxed">
                Wees er als eerste bij en claim jouw CoolClip Adventure Kit tegen de scherpste introductievoorwaarden. Inclusief reisetui, USB-C kabel, rugzakband en 2 jaar garantie.
              </p>

              {/* Product Showcase Thumbnail preview */}
              <div className="pt-2 rounded-2xl overflow-hidden border border-white/15 max-w-lg shadow-lg">
                <img
                  src="/product-showcase.jpg"
                  alt="CoolClip Adventure Kit product showcase"
                  className="w-full h-48 object-cover"
                />
                <div className="bg-[#1E2622] p-2.5 text-[11px] font-mono-accent text-[#DFD6BE] flex items-center justify-between">
                  <span>✓ VOLLEDIGE ADVENTURE KIT MEEGELEVERD</span>
                  <span className="text-[#5CE1E6] font-bold">€49,95</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="lg:col-span-5 bg-[#1E2622] rounded-2xl p-6 border border-white/15 text-center space-y-4">
              <span className="text-xs font-mono-accent text-[#DFD6BE] uppercase tracking-wider block">
                INTRODUCTIEPRIJS (LIMITED BATCH #1)
              </span>

              <div className="flex items-baseline justify-center gap-3">
                <span className="font-heading text-5xl font-extrabold text-white">
                  €49,95
                </span>
                <span className="text-lg text-white/50 line-through font-mono-accent">
                  €69,95
                </span>
              </div>

              <span className="inline-block bg-[#4E876A]/30 text-[#5CE1E6] text-xs font-mono-accent font-bold px-3.5 py-1.5 rounded-full border border-[#4E876A]">
                BESPAAR €20,00 TIJDENS PRE-ORDER
              </span>

              <ul className="text-left text-xs font-mono-accent text-[#F7F6F0]/80 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5CE1E6]" /> CoolClip Mini Airco Unit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5CE1E6]" /> Heavy-Duty Clip Klem & Backpack Strap
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5CE1E6]" /> Waterafstotende Reisetui & Laadkabel
                </li>
              </ul>
            </div>

          </div>

          {/* Pre-order Action Form */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            {submitted ? (
              <div className="bg-[#4E876A]/20 border border-[#4E876A] text-[#F7F6F0] p-6 rounded-xl text-center space-y-2 animate-in fade-in duration-300">
                <div className="font-heading text-xl font-bold text-[#5CE1E6]">
                  ✓ Gefeliciteerd! Je bent toegevoegd aan Pre-order Batch #1.
                </div>
                <p className="text-sm text-[#F7F6F0]/80">
                  We hebben een bevestiging gestuurd naar <strong className="text-white">{email}</strong>. Zodra de leverdatum definitief is ontvang je bericht!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Vul je e-mailadres in voor pre-order toegang..."
                  className="w-full sm:flex-1 bg-white text-[#121815] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4E876A] placeholder:text-[#121815]/40"
                  id="preorder-email-input"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#4E876A] hover:bg-[#37634C] text-white px-8 py-4 rounded-xl font-heading font-bold text-base transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg border border-[#63A382]"
                  id="preorder-submit-button"
                >
                  <Wind className="w-5 h-5 text-[#5CE1E6]" />
                  Pre-order Nu (€49,95)
                </button>
              </form>
            )}

            {/* Guarantee Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono-accent text-[#F7F6F0]/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#5CE1E6] shrink-0" />
                <span>Gratis EU & NL verzending</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5CE1E6] shrink-0" />
                <span>30 Dagen niet-goed-geld-terug</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5CE1E6] shrink-0" />
                <span>Inclusief 2 Jaar Avontuur Garantie</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
