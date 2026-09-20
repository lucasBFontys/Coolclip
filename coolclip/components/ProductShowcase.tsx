import React from "react";
import { Package, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function ProductShowcase() {
  const contents = [
    {
      title: "CoolClip Mini Airco Unit",
      description: "Sage green matte finish behuizing met C-sneeuwvlok logo, 4000mAh accu en borstelloze koelmotor.",
      tag: "FLAGSHIP UNIT",
    },
    {
      title: "Heavy-Duty Clip Klem",
      description: "Tactical klem met anti-slip rubberen binnenlaag voor stapelbedden, tentstokken en tafels.",
      tag: "QUICK CLAMP",
    },
    {
      title: "Verstelbare Rugzak Strap",
      description: "Nylon schouderband met CoolClip geweven badge om de koeler overdag vast te gespen.",
      tag: "TRAIL MOUNT",
    },
    {
      title: "USB-C Snellader + Kabelbinder",
      description: "USB-C laadkabel met op maat gemaakte C-sneeuwvlok siliconen kabelbinder.",
      tag: "FAST CHARGE",
    },
    {
      title: "Beschermende Reisetui",
      description: "Waterafstotende sage green etui met rits en draaglus om je kit veilig op te bergen.",
      tag: "TRAVEL POUCH",
    },
    {
      title: "Adventure Handleiding & Garantiekaart",
      description: "Gedrukte gids met hittehacks, onderhoudstips en 2 jaar avontuurgarantie certificaat.",
      tag: "MANUAL & WARRANTY",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#121815] text-[#F7F6F0] border-b border-white/10 relative overflow-hidden" id="product-kit">
      
      {/* Background Topography Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#4E876A]/30 border border-[#4E876A] px-4 py-1.5 rounded-full text-xs font-mono-accent tracking-wider text-[#5CE1E6] hero-glow-badge">
            <Package className="w-3.5 h-3.5 text-[#5CE1E6]" />
            <span className="font-bold uppercase tracking-widest">WAT ZIT ER IN DE BOX?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            De Complete CoolClip Adventure Kit
          </h2>

          <p className="text-base sm:text-lg text-[#F7F6F0]/80 leading-relaxed">
            Alles wat je nodig hebt om direct gekoeld op reis te gaan. Geen verborgen extra's, 100% compleet geleverd.
          </p>
        </div>

        {/* Featured Flat-Lay Product Photo Display */}
        <div className="mb-14 max-w-5xl mx-auto">
          <div className="glass-panel-dark rounded-3xl p-4 sm:p-6 border-2 border-white/20 shadow-2xl relative overflow-hidden group">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono-accent text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5CE1E6] animate-ping" />
                <span className="font-bold text-white uppercase">COOLCLIP BUNDLE SHOWCASE</span>
              </div>
              <span className="bg-[#4E876A] text-white px-3 py-1 rounded-full font-bold text-[10px] tracking-wider">
                OFFICIËLE INHOUD
              </span>
            </div>

            {/* Uploaded High-Res Product Showcase Flat-Lay Photo */}
            <div className="relative aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden border border-white/15 shadow-inner">
              <img
                src="/product-showcase.jpg"
                alt="CoolClip complete adventure kit: mini-airco, klem, reisetui, rugzakband, USB-C kabel en handleiding"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-4 bg-[#121815]/90 backdrop-blur text-white px-4 py-2 rounded-xl text-xs font-mono-accent flex items-center gap-2 border border-white/20 shadow-xl">
                <Sparkles className="w-4 h-4 text-[#5CE1E6]" />
                <span>INCLUSIEF ALLE ACCESSORIES (€49,95 INTRODUCTIE)</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Box Contents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-dark p-6 rounded-2xl border border-white/15 hover:border-[#4E876A] transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-accent font-bold text-[#5CE1E6] bg-[#4E876A]/25 px-2.5 py-0.5 rounded border border-[#4E876A]">
                    {item.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#4E876A]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#5CE1E6] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#F7F6F0]/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono-accent text-[#DFD6BE]/70 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4E876A]" />
                <span>Meegeleverd in de doos</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
