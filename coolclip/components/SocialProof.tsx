import React from "react";
import { Star, MessageSquare, Info } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sanne v.D. (22)",
      trip: "3 maanden Zuidoost-Azië",
      quote:
        "“In Ha Giang was ons hostel snikheet en viel de stroom uit. De CoolClip aan mijn stapelbed was letterlijk mijn redding die nacht.”",
      location: "Vietnam sleeper bus & hostel test",
      rating: 5,
    },
    {
      name: "Lars K. (24)",
      trip: "Backpacken Zuid-Amerika",
      quote:
        "“Bussen in Colombia zijn of ijskoud of stikheet. Met de klem op mijn rugzakband blaast de CoolClip precies genoeg koeling zonder dat ik me erger aan geluid.”",
      location: "Medellín tot Cartagena route",
      rating: 5,
    },
    {
      name: "Milan & Tess (21 & 23)",
      trip: "Island hopping Thailand",
      quote:
        "“We namen hem mee naar een strandfeest en klemden hem 's nachts in de tent. Ging de hele nacht mee op één lading via de powerbank.”",
      location: "Koh Phangan beach test",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#ECE8DD]/50 border-b border-[#1A1A1A]/10" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          
          {/* Explicit Placeholder Notice Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F4F3ED] border border-[#C8C1AE] px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider">
            <Info className="w-3.5 h-3.5 text-[#6E8F7E]" />
            <span className="font-bold">PLACEHOLDER SECTIE</span>
            <span className="text-[#C8C1AE]">// EARLY TESTERS FEEDBACK</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Ervaringen van eerste backpacker testers
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            Voorbeeld-reviews van onze eerste prototype testers in het veld (20-25 jaar).
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-[#1A1A1A]/15 shadow-sm relative flex flex-col justify-between"
            >
              {/* Top Watermark Tag */}
              <div className="absolute top-4 right-4 bg-[#F4F3ED] border border-[#1A1A1A]/10 px-2 py-0.5 rounded text-[10px] font-mono text-[#1A1A1A]/50">
                DUMMY CONTENT
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#6E8F7E]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#1A1A1A]/85 italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10">
                <div className="font-heading font-bold text-sm text-[#1A1A1A]">
                  {item.name}
                </div>
                <div className="text-xs text-[#6E8F7E] font-medium">
                  {item.trip}
                </div>
                <div className="text-[11px] font-mono text-[#1A1A1A]/50 mt-1">
                  📍 {item.location}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small Notice Footer */}
        <div className="mt-8 text-center text-xs font-mono text-[#1A1A1A]/60">
          ⚠️ *Opmerking: Dit betreft een conceptuele starter-website demonstratie. Reviews zijn ter illustratie geplaatst.
        </div>

      </div>
    </section>
  );
}
