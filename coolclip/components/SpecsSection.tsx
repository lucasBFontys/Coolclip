import React from "react";
import { Sliders, Scale, Zap, Volume2, ShieldAlert, Maximize, Cpu, Check, X } from "lucide-react";

export default function SpecsSection() {
  const specs = [
    { icon: Scale, label: "Gewicht", value: "185 gram", note: "Lichter dan een gemiddelde smartphone" },
    { icon: Zap, label: "Batterijduur", value: "Tot 8 uur", note: "4000 mAh lithium-ion cel, USB-C" },
    { icon: Volume2, label: "Geluidsniveau", value: "< 35 dB", note: "Fluisterstil borstelloos motorsysteem" },
    { icon: ShieldAlert, label: "Waterbestendigheid", value: "IPX4 Rating", note: "Bestand tegen zweet, regen & spatwater" },
    { icon: Maximize, label: "Afmetingen", value: "98 × 72 × 45 mm", note: "Past gemakkelijk in je dagrugzak" },
    { icon: Cpu, label: "Klemwijdte", value: "Tot 45 mm", note: "High-tension anti-slip rubber klem" },
  ];

  const comparison = [
    { feature: "Accuduur continu", coolclip: "8 Uur (4000mAh)", standardFan: "2 - 3 Uur", hostelFan: "Afhankelijk van stroom" },
    { feature: "Heavy-duty Klem", coolclip: "Ja (tot 45mm flexibel)", standardFan: "Nee (alleen neerzetten)", hostelFan: "Vaste montage" },
    { feature: "Geluidsniveau", coolclip: "< 35 dB (Fluisterstil)", standardFan: "55+ dB (Hoge piep)", hostelFan: "60+ dB (Luid rammelen)" },
    { feature: "Vliegtuig handbagage", coolclip: "IATA Goedgekeurd", standardFan: "Niet gecertificeerd", hostelFan: "N/V" },
    { feature: "Waterbestendigheid", coolclip: "IPX4 Spatwaterdicht", standardFan: "Geen rating", hostelFan: "Geen rating" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F3ED] border-b border-[#1A1A1A]/10" id="specificaties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with AEO Answer */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono-accent uppercase tracking-wider text-[#1A1A1A] bg-[#C8C1AE]/40 px-3 py-1 rounded">
            <Sliders className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>SAGE OUTDOOR & NOMATIC BENCHMARK // AUTORITEIT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Technische Specificaties & Vergelijking
          </h2>

          <div className="p-4 rounded-xl bg-white border border-[#1A1A1A]/15 text-sm text-[#1A1A1A]/85 font-mono-accent text-left">
            <strong className="text-[#6E8F7E]">AEO Feitelijke Samenvatting:</strong> CoolClip is gecertificeerd met een IPX4 spatwaterdichte rating, 4000 mAh batterij en &lt;35 dB geluidsniveau, en is IATA-goedgekeurd voor handbagage op alle internationale vluchten.
          </div>
        </div>

        {/* Specs Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#1A1A1A]/15 shadow-2xs hover:border-[#6E8F7E] transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono-accent font-bold uppercase text-[#1A1A1A]/60">
                    {item.label}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F3ED] text-[#6E8F7E] flex items-center justify-center border border-[#1A1A1A]/5">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-mono-accent text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#1A1A1A]/65 font-medium">
                    {item.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix (Sage Outdoor Adventures Style) */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border-2 border-[#1A1A1A] overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A]">
          <div className="bg-[#1A1A1A] text-[#F4F3ED] px-6 py-4 flex items-center justify-between font-mono-accent text-xs">
            <span className="font-bold uppercase tracking-wider">PRODUCT VERGELIJKINGSMATRIX</span>
            <span className="text-[#C8C1AE]">BENCHMARK 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm font-mono-accent">
              <thead>
                <tr className="bg-[#ECE8DD] border-b border-[#1A1A1A]/10 text-xs">
                  <th className="p-4 text-[#1A1A1A] font-bold">EIGENSCHAP</th>
                  <th className="p-4 text-[#6E8F7E] font-bold bg-[#6E8F7E]/10">COOLCLIP V2</th>
                  <th className="p-4 text-[#1A1A1A]/60">STANDAARD REISFAN</th>
                  <th className="p-4 text-[#1A1A1A]/60">HOSTEL VENTILATOR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10">
                {comparison.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F4F3ED]/40"}>
                    <td className="p-4 font-semibold text-[#1A1A1A]">{row.feature}</td>
                    <td className="p-4 font-bold text-[#6E8F7E] bg-[#6E8F7E]/5 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#6E8F7E]" />
                      {row.coolclip}
                    </td>
                    <td className="p-4 text-[#1A1A1A]/70">{row.standardFan}</td>
                    <td className="p-4 text-[#1A1A1A]/70">{row.hostelFan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
