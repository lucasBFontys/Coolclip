"use client";

import React, { useState } from "react";
import { Download, Gift, Check, FileText } from "lucide-react";

export default function PacklistLeadMagnet() {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#ECE8DD]/60 border-b border-[#1A1A1A]/10" id="packlist">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-8 sm:p-12 shadow-[6px_6px_0px_0px_#1A1A1A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 bg-[#6E8F7E]/20 border border-[#6E8F7E] px-3.5 py-1 rounded-full text-xs font-mono-accent text-[#6E8F7E] font-bold">
              <Gift className="w-3.5 h-3.5" />
              <span>CIALDINI #1: GRATIS DOWNLOAD (WEDERKERIGHEID)</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Gratis Download: De Ultieme Backpacker Packlist 2026
            </h2>

            <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed">
              Ontvang onze complete inpaklijst (PDF) speciaal samengesteld voor backpackers naar tropische bestemmingen. Inclusief hacks tegen hitte, must-have medicatie en gear tips.
            </p>

            <ul className="space-y-2 text-xs font-mono-accent text-[#1A1A1A]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6E8F7E]" /> Samengesteld door ervaren Zuidoost-Azië & LatAm reizigers
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6E8F7E]" /> Inclusief 10 bespaartips voor hostels & nachtbussen
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6E8F7E]" /> Direct in je mailbox als PDF (Print-friendly)
              </li>
            </ul>

          </div>

          {/* Right Download Form */}
          <div className="lg:col-span-5 bg-[#F4F3ED] p-6 rounded-xl border border-[#1A1A1A]/15 space-y-4">
            
            {downloaded ? (
              <div className="bg-[#6E8F7E] text-white p-6 rounded-lg text-center space-y-2 animate-in fade-in duration-200">
                <FileText className="w-8 h-8 mx-auto" />
                <div className="font-heading font-bold text-lg">Je PDF is onderweg!</div>
                <p className="text-xs text-white/90">
                  We hebben de packlist gestuurd naar <strong className="underline">{email}</strong>. Veel plezier met voorbereiden!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="packlist-email" className="block text-xs font-mono-accent font-bold uppercase text-[#1A1A1A]">
                  Ontvang de Packlist PDF
                </label>
                
                <input
                  id="packlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Vul je e-mailadres in..."
                  className="w-full bg-white text-[#1A1A1A] px-4 py-3 rounded-lg text-sm border border-[#1A1A1A]/20 focus:outline-none focus:ring-2 focus:ring-[#6E8F7E]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#6E8F7E] hover:bg-[#577364] text-white px-5 py-3 rounded-lg font-heading font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Packlist (Gratis PDF)
                </button>

                <p className="text-[10px] font-mono-accent text-[#1A1A1A]/50 text-center">
                  Geen spam. Afmelden kan altijd met 1 klik.
                </p>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
