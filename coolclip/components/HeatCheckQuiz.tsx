"use client";

import React, { useState } from "react";
import { ThermometerSun, Check, RefreshCw, Wind, ArrowRight } from "lucide-react";

export default function HeatCheckQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    destination: "",
    sleepIssue: "",
    transport: "",
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setAnswers({ destination: "", sleepIssue: "", transport: "" });
    setStep(1);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#ECE8DD]/70 border-b border-[#1A1A1A]/10" id="hitte-check">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#1A1A1A]">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#6E8F7E]" />
              <span className="font-mono-accent text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                INTERACTIEVE TROPEN HITTE-CHECK
              </span>
            </div>
            <span className="bg-[#6E8F7E]/15 text-[#6E8F7E] text-[11px] font-mono-accent px-2.5 py-1 rounded font-bold">
              CIALDINI COMMITMENT CHECK
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
            Reis jij binnenkort naar warme of tropische bestemmingen?
          </h2>

          <p className="text-sm text-[#1A1A1A]/70 mb-6 font-normal">
            Beantwoord 3 korte vragen en ontdek hoeveel impact hitte heeft op jouw slaap en energie tijdens je reis.
          </p>

          {/* Quiz Step 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="font-mono-accent text-xs text-[#6E8F7E] font-bold block uppercase">
                VRAAG 1 VAN 3: Wat is je volgende reisbestemming?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Zuidoost-Azië (Thailand, Vietnam, Bali)",
                  "Latijns-Amerika (Colombia, Mexico, Peru)",
                  "Zuid-Europa / Festivals / Zomer-camping",
                ].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect("destination", option)}
                    className="p-4 rounded-xl border border-[#1A1A1A]/20 hover:border-[#6E8F7E] hover:bg-[#F4F3ED] text-left font-medium text-sm text-[#1A1A1A] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{option}</span>
                    <ArrowRight className="w-4 h-4 text-[#6E8F7E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Step 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="font-mono-accent text-xs text-[#6E8F7E] font-bold block uppercase">
                VRAAG 2 VAN 3: Waar maak jij je de meeste zorgen om bij hitte?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Slecht slapen in hete 30°C+ hostelkamers",
                  "Zwetend vastzitten op een 12u nachtbus",
                  "Oververhitting tijdens hikes en trektochten",
                ].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect("sleepIssue", option)}
                    className="p-4 rounded-xl border border-[#1A1A1A]/20 hover:border-[#6E8F7E] hover:bg-[#F4F3ED] text-left font-medium text-sm text-[#1A1A1A] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{option}</span>
                    <ArrowRight className="w-4 h-4 text-[#6E8F7E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Step 3 */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="font-mono-accent text-xs text-[#6E8F7E] font-bold block uppercase">
                VRAAG 3 VAN 3: Hoeveel nachten slaap jij naar verwachting in hostels of tenten?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Meer dan 14 nachten",
                  "Tussen 5 en 14 nachten",
                  "Enkele nachten / Korte vakantie",
                ].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect("transport", option)}
                    className="p-4 rounded-xl border border-[#1A1A1A]/20 hover:border-[#6E8F7E] hover:bg-[#F4F3ED] text-left font-medium text-sm text-[#1A1A1A] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{option}</span>
                    <ArrowRight className="w-4 h-4 text-[#6E8F7E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result Outcome */}
          {step > 3 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="p-5 rounded-xl bg-[#6E8F7E]/15 border border-[#6E8F7E] space-y-3">
                <div className="flex items-center gap-2 text-[#6E8F7E]">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span className="font-mono-accent text-sm font-bold uppercase">
                    UITSLAG HITTE-CHECK: HOOG RISICO OP HITTE-UITPUTTING
                  </span>
                </div>
                <p className="text-sm text-[#1A1A1A] font-medium leading-relaxed">
                  Op jouw reis naar <strong className="text-[#6E8F7E]">{answers.destination}</strong> is de kans 85%+ dat je te maken krijgt met stroomuitval of uitgevallen airco. CoolClip is voor jou een absolute essential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={resetQuiz}
                  className="text-xs font-mono-accent text-[#1A1A1A]/60 hover:text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Opnieuw invullen
                </button>

                <a
                  href="#pre-order"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6E8F7E] hover:bg-[#577364] text-white px-6 py-3 rounded-md font-heading font-bold text-sm transition-all"
                >
                  <Wind className="w-4 h-4" />
                  Verzeker je CoolClip (€49,95)
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
