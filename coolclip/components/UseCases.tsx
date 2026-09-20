"use client";

import React, { useState } from "react";
import { useCasesData } from "../data/useCasesData";
import { Compass, MapPin } from "lucide-react";

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Alle Activiteiten" },
    { id: "hostel", label: "Hostels & Dorms" },
    { id: "transport", label: "Nachtbussen & Treinen" },
    { id: "trekking", label: "Trekking & Hiken" },
    { id: "camping", label: "Camping & Festivals" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? useCasesData
      : useCasesData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-[#F4F3ED] border-b border-[#1A1A1A]/10" id="situaties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with AEO Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono-accent uppercase tracking-wider text-[#1A1A1A] bg-[#C8C1AE]/40 px-3 py-1 rounded">
            <Compass className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>YETI BENCHMARK // SHOP OP ACTIVITEIT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Gebruikssituaties per reisbestemming
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            CoolClip is veelzijdig inzetbaar dankzij de heavy-duty klem en 360° verstelbare luchtstroom.
          </p>
        </div>

        {/* Filter Category Tabs (YETI Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono-accent uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#1A1A1A] text-white shadow-md"
                  : "bg-white text-[#1A1A1A] hover:bg-[#C8C1AE]/40 border border-[#1A1A1A]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-[#1A1A1A] overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A] flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-16/9 bg-[#1A1A1A] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 text-white backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono-accent flex items-center gap-1.5 border border-white/20">
                    <MapPin className="w-3 h-3 text-[#6E8F7E]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-xs font-mono-accent font-bold uppercase text-[#6E8F7E] tracking-wider block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Stat Footer */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-[#1A1A1A]/10 text-xs font-mono-accent text-[#1A1A1A]/70 flex items-center justify-between">
                  <span>VELDTEST RESULTAAT:</span>
                  <span className="font-bold text-[#6E8F7E]">{item.stat}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
