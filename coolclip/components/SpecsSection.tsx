import React from "react";
import { Sliders, Scale, Zap, Volume2, ShieldAlert, Maximize, Cpu } from "lucide-react";

export default function SpecsSection() {
  const specs = [
    { icon: Scale, label: "Gewicht", value: "185 gram", note: "Lichter dan een gemiddelde smartphone" },
    { icon: Zap, label: "Batterijduur", value: "Tot 8 uur", note: "4000 mAh lithium-ion cel, USB-C" },
    { icon: Volume2, label: "Geluidsniveau", value: "< 35 dB", note: "Fluisterstil borstelloos motorsysteem" },
    { icon: ShieldAlert, label: "Waterbestendigheid", value: "IPX4 Rating", note: "Bestand tegen zweet, regen & spatwater" },
    { icon: Maximize, label: "Afmetingen", value: "98 × 72 × 45 mm", note: "Past gemakkelijk in je dagrugzak" },
    { icon: Cpu, label: "Klemwijdte", value: "Tot 45 mm", note: "High-tension anti-slip rubber klem" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F3ED] border-b border-[#1A1A1A]/10" id="specificaties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] bg-[#C8C1AE]/40 px-3 py-1 rounded">
            <Sliders className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>KERNCIJFERS & SPECS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Technische Specificaties
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            Geen vage beloftes. Dit zijn de exacte cijfers die CoolClip de ultieme backpacking gadget maken.
          </p>
        </div>

        {/* Specs Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#1A1A1A]/15 shadow-2xs hover:border-[#6E8F7E] transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase text-[#1A1A1A]/60">
                    {item.label}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F3ED] text-[#6E8F7E] flex items-center justify-center border border-[#1A1A1A]/5">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
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

        {/* Detailed Table View */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-[#1A1A1A] overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A]">
          <div className="bg-[#1A1A1A] text-[#F4F3ED] px-6 py-4 flex items-center justify-between font-mono text-xs">
            <span className="font-bold uppercase tracking-wider">COOLCLIP SPECIFICATION MATRIX</span>
            <span className="text-[#C8C1AE]">REVISION 2026</span>
          </div>

          <div className="divide-y divide-[#1A1A1A]/10 text-sm font-mono">
            <div className="grid grid-cols-3 px-6 py-3.5 bg-[#F4F3ED]/50">
              <span className="text-[#1A1A1A]/60 font-semibold">Oplaadpoort</span>
              <span className="col-span-2 text-[#1A1A1A] font-medium">USB Type-C (kabel meegeleverd)</span>
            </div>
            <div className="grid grid-cols-3 px-6 py-3.5">
              <span className="text-[#1A1A1A]/60 font-semibold">Materiaal behuizing</span>
              <span className="col-span-2 text-[#1A1A1A] font-medium">Gerycycled slagvast ABS polymer (Patagonia style durability)</span>
            </div>
            <div className="grid grid-cols-3 px-6 py-3.5 bg-[#F4F3ED]/50">
              <span className="text-[#1A1A1A]/60 font-semibold">Koelsnelheden</span>
              <span className="col-span-2 text-[#1A1A1A] font-medium">3 standen: Eco Breeze (8h), Balanced (5h), Turbo Chill (3h)</span>
            </div>
            <div className="grid grid-cols-3 px-6 py-3.5">
              <span className="text-[#1A1A1A]/60 font-semibold">Certificeringen</span>
              <span className="col-span-2 text-[#1A1A1A] font-medium">CE, RoHS, UN38.3 (Vliegtuig handbagage veilig)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
