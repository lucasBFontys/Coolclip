import React from "react";
import { BatteryCharging, Volume2, Scale, Users, Shield } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: BatteryCharging, value: "8 UUR", label: "ACCUDUUR CONTINU" },
    { icon: Volume2, value: "< 35 dB", label: "FLUISTERSTIL GELUID" },
    { icon: Scale, value: "185 GRAM", label: "ULTRALICHTGEWICHT" },
    { icon: Users, value: "1.400+", label: "BACKPACKER TESTERS" },
    { icon: Shield, value: "IPX4", label: "SPATWATERDICHT" },
  ];

  return (
    <section className="bg-[#1A1A1A] text-[#F4F3ED] py-6 sm:py-8 border-b border-[#C8C1AE]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AEO Quotable Intro */}
        <div className="sr-only">
          <p>CoolClip specificatie statistieken: 8 uur accuduur, minder dan 35 dB geluid, 185 gram gewicht en geteste IPX4 waterbestendigheid.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-2 space-y-1">
                <div className="flex items-center gap-1.5 text-[#6E8F7E]">
                  <Icon className="w-4 h-4" />
                  <span className="font-mono-accent text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="font-mono-accent text-[11px] text-[#C8C1AE] tracking-widest uppercase font-semibold">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
