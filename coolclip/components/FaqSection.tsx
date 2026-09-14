"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "../data/faqData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F4F3ED] border-b border-[#1A1A1A]/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] bg-[#C8C1AE]/40 px-3 py-1 rounded">
            <HelpCircle className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>VEELGESTELDE VRAGEN</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Alles wat je wilt weten over CoolClip
          </h2>

          <p className="text-base text-[#1A1A1A]/70">
            Duidelijke antwoorden voor je op reis gaat.
          </p>
        </div>

        {/* Accordion Component List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#1A1A1A]/15 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-[#1A1A1A] flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F4F3ED]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#6E8F7E] font-semibold">
                      0{idx + 1}.
                    </span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6E8F7E] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-button-${idx}`}
                    className="px-6 pb-6 text-sm text-[#1A1A1A]/80 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 animate-in fade-in-50 duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions link */}
        <div className="mt-10 text-center text-xs font-mono text-[#1A1A1A]/60">
          Heb je een specifieke vraag over je reis? Mail het team op{" "}
          <a href="mailto:support@coolclip.nl" className="text-[#6E8F7E] underline font-bold">
            support@coolclip.nl
          </a>
        </div>

      </div>
    </section>
  );
}
