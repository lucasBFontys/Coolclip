import React from "react";
import { BatteryCharging, Shield, VolumeX, CheckCircle, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: BatteryCharging,
      title: "8 Uur Continu Koeling",
      highlight: "USB-C Oplaadbaar",
      description:
        "Uitgerust met een krachtige 4000mAh lithium cel. Genoeg stroom om een hele nacht door te koelen zonder stopcontact in de buurt.",
      details: ["Snel opgeladen via powerbank", "3 standen (Eco, Medium, Turbo)", "Energy-efficient borstelloze motor"],
    },
    {
      icon: Shield,
      title: "Heavy-Duty Clip-systeem",
      highlight: "Recycled Polymer Clamp",
      description:
        "Klem hem in 2 seconden vast op het frame van je hostel stapelbed, de schouderband van je rugzak of de nok van je tent.",
      details: ["Rubber anti-slip grip", "360° roterende blaaskop", "Bestand tegen stoten en vallen"],
    },
    {
      icon: VolumeX,
      title: "Fluisterstil (<35 dB)",
      highlight: "Slaapzaal Vriendelijk",
      description:
        "Speciaal ontworpen aerodynamische bladen produceren een rustgevende, vrijwel onhoorbare luchtstroom. Je kamergenoten merken niks.",
      details: ["Stiller dan de meeste hostel fans", "Geen irritante hoge pieptoon", "Gecertificeerd voor dorm-gebruik"],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F0] border-b border-[#121815]/10" id="hoe-het-werkt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono-accent uppercase tracking-wider text-[#4E876A] bg-[#4E876A]/10 px-3.5 py-1.5 rounded-full border border-[#4E876A]/30 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#4E876A]" />
            ESSENTIËLE OUTDOOR TECHNOLOGIE
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#121815]">
            Drie pijlers van no-nonsense koeling
          </h2>

          <p className="text-base sm:text-lg text-[#121815]/75 leading-relaxed">
            Geen overbodige gadgets. CoolClip focust 100% op wat telt als je onderweg bent: betrouwbaarheid, grip en stilte.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border-2 border-[#121815] shadow-[6px_6px_0px_0px_#121815] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#4E876A]"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4E876A] to-[#37634C] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7 text-[#5CE1E6]" />
                    </div>
                    <span className="text-[11px] font-mono-accent font-bold text-[#121815] bg-[#EFEAD8] px-3 py-1 rounded-full border border-[#121815]/10">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#121815] mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#121815]/75 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Feature details bullet points */}
                <div className="pt-4 border-t border-[#121815]/10 space-y-2.5">
                  {feat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-[#121815]">
                      <CheckCircle className="w-4 h-4 text-[#4E876A] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
