"use client";

import React, { useState } from "react";
import { Wind, ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";

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
    <section className="py-16 sm:py-24 bg-[#C8C1AE] border-b border-[#1A1A1A]/10 relative overflow-hidden" id="pre-order">
      
      {/* Decorative background grid elements */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1A1A1A] text-[#F4F3ED] rounded-3xl p-8 sm:p-12 border-4 border-white shadow-2xl space-y-8">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#6E8F7E] text-white px-3.5 py-1 rounded-full text-xs font-mono tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EARLY BIRD BATCH #1 PRE-ORDER</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C8C1AE]">
              <Clock className="w-4 h-4 text-[#6E8F7E]" />
              <span>VERWACHTE LEVERING: ZOMER 2026</span>
            </div>
          </div>

          {/* Main Title & Price */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Klaar voor je volgende avontuur?
              </h2>
              <p className="text-base sm:text-lg text-[#F4F3ED]/80 leading-relaxed">
                Wees er als eerste bij en verzeker jezelf van de CoolClip tegen speciale introductievoorwaarden. Inclusief USB-C snellader, reisetui en 2 jaar adventure garantie.
              </p>
            </div>

            {/* Price Box */}
            <div className="lg:col-span-5 bg-[#2A2A2A] rounded-2xl p-6 border border-white/10 text-center space-y-3">
              <span className="text-xs font-mono text-[#C8C1AE] uppercase tracking-wider block">
                INTRODUCTIEPRIJS (LIMITED)
              </span>

              <div className="flex items-baseline justify-center gap-3">
                <span className="font-heading text-5xl font-extrabold text-white">
                  €49,95
                </span>
                <span className="text-lg text-white/50 line-through font-mono">
                  €69,95
                </span>
              </div>

              <span className="inline-block bg-[#6E8F7E]/20 text-[#6E8F7E] text-xs font-mono font-bold px-3 py-1 rounded border border-[#6E8F7E]/30">
                BESPAAR €20,00 TIJDENS PRE-ORDER
              </span>
            </div>

          </div>

          {/* Pre-order Action Form */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            {submitted ? (
              <div className="bg-[#6E8F7E]/20 border border-[#6E8F7E] text-[#F4F3ED] p-5 rounded-xl text-center space-y-2 animate-in fade-in duration-300">
                <div className="font-heading text-xl font-bold text-[#6E8F7E]">
                  ✓ Gefeliciteerd! Je bent toegevoegd aan Pre-order Batch #1.
                </div>
                <p className="text-sm text-[#F4F3ED]/80">
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
                  className="w-full sm:flex-1 bg-white text-[#1A1A1A] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6E8F7E] placeholder:text-[#1A1A1A]/40"
                  id="preorder-email-input"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#6E8F7E] hover:bg-[#577364] text-white px-8 py-4 rounded-xl font-heading font-bold text-base transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg"
                  id="preorder-submit-button"
                >
                  <Wind className="w-5 h-5" />
                  Pre-order Nu (€49,95)
                </button>
              </form>
            )}

            {/* Guarantee Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-[#F4F3ED]/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>Gratis EU & NL verzending</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>30 Dagen niet-goed-geld-terug</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-[#6E8F7E] shrink-0" />
                <span>Inclusief reisetui & kabel</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
