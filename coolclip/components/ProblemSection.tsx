import React from "react";
import { ThermometerSun, BedDouble, Bus, Tent, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: BedDouble,
      tag: "SLAAPZAAL NACHTMERRIE",
      title: "35°C in een 12-persoons hostel",
      description:
        "Je komt aan in Bangkok of Medellín. De hostelventilator piept zachtjes aan het plafond, maar blaast alleen maar hete lucht rond. Slapen is onmogelijk.",
    },
    {
      icon: Bus,
      tag: "ONONDERBROKEN ZWETEN",
      title: "14 uur in een benauwde nachtbus",
      description:
        "De airco in de bus valt halverwege de nacht uit. Ramen kunnen niet open. Je plakt aan je stoel vast terwijl er nog 800 kilometer te gaan is.",
    },
    {
      icon: Tent,
      tag: "TROPISCHE OCHTEND",
      title: "Wakker worden in een broeikas tent",
      description:
        "Om 07:00 uur ’s ochtends verandert je tent op de camping of het festivalterrein direct in een sauna zodra de zon de eerste stralen laat zien.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#ECE8DD]/60 border-b border-[#1A1A1A]/10" id="probleem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-3 py-1 rounded text-xs font-mono tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span>HERKEN JE DIT?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Reizen is fantastisch. Extreme hitte niet.
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            Als backpacker tussen de 20 en 25 wil je de wereld ontdekken — niet uitgewoond en uitgeput aankomen op je volgende bestemming door een gebrek aan koeling.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#1A1A1A]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#F4F3ED] border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#6E8F7E] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1A1A1A]/50 uppercase bg-[#C8C1AE]/30 px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#1A1A1A] pt-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1A1A]/5 flex items-center gap-2 text-xs font-mono text-[#6E8F7E]">
                  <ThermometerSun className="w-3.5 h-3.5" />
                  <span>OPLOSSING: COOLCLIP</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="inline-block bg-white px-6 py-3 rounded-full border border-[#1A1A1A]/10 text-sm font-medium text-[#1A1A1A]">
            💡 <strong className="font-bold">CoolClip</strong> is ontworpen om exact deze 3 nachtmerries op te lossen.
          </p>
        </div>

      </div>
    </section>
  );
}
