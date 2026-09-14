import React from "react";
import { BedDouble, Bus, Mountain, MapPin } from "lucide-react";

export default function UseCases() {
  const cases = [
    {
      icon: BedDouble,
      location: "HOSTELS & SLAAPZALEN",
      title: "Klem aan je stapelbed",
      description:
        "Geen goed werkende fan boven je bed? Klem CoolClip aan het houten of metalen frame van je stapelbed en richt de verkoelende stroom rechtstreeks op je gezicht of kussen.",
      stat: "Getest in 120+ hostels in SE-Azië",
    },
    {
      icon: Bus,
      location: "BUS & TREIN",
      title: "Lange nachtbussen & ritten",
      description:
        "Staan er 12 uur op een krappe sleeper bus op het programma? CoolClip past moeiteloos in het netje van de stoel voor je of klem je aan de leuning voor directe ventilatie.",
      stat: "Compact genoeg voor handbagage",
    },
    {
      icon: Mountain,
      location: "ONDERWEG & CAMPING",
      title: "Hiken, tent & festivals",
      description:
        "Klem hem overdag op de schouderband van je rugzak tijdens zware hikes in het regenwoud. Klem hem 's avonds bovenin de nok van je tent voor een frisse nachtrust.",
      stat: "IPX4 spatwaterdicht gebouwd",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#ECE8DD]/40 border-b border-[#1A1A1A]/10" id="situaties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] bg-[#C8C1AE]/50 px-3 py-1 rounded border border-[#1A1A1A]/15">
            <MapPin className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>FIELD TESTED LOCATIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Gemaakt voor waar jij naartoe reist
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            Of je nu eiland-hopt in Thailand, vulkanen beklimt in Guatemala of interrailt door Zuid-Europa — CoolClip hoort in jouw rugzak.
          </p>
        </div>

        {/* 3 Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#1A1A1A]/15 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image / Graphic Banner */}
                  <div className="h-40 bg-[#1A1A1A] p-6 relative flex items-end justify-between overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6E8F7E_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="relative z-10 w-12 h-12 rounded-lg bg-[#6E8F7E] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="relative z-10 text-[10px] font-mono font-bold tracking-widest text-[#F4F3ED] bg-[#2A2A2A] px-2.5 py-1 rounded border border-white/20">
                      {item.location}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-xl font-bold text-[#1A1A1A] group-hover:text-[#6E8F7E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Stat */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/80 flex items-center justify-between">
                    <span>STATUS:</span>
                    <span className="font-bold text-[#6E8F7E]">{item.stat}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
