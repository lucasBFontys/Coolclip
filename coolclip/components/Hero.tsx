import React from "react";
import { Wind, ShieldCheck, BatteryCharging, ArrowRight, Star, Sparkles, Volume2, Scale } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: BatteryCharging, value: "8 UUR", label: "ACCUDUUR CONTINU" },
    { icon: Volume2, value: "< 35 dB", label: "FLUISTERSTIL GELUID" },
    { icon: Scale, value: "185 GRAM", label: "ULTRALICHTGEWICHT" },
    { icon: ShieldCheck, value: "IPX4", label: "SPATWATERDICHT" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#121815] text-[#F7F6F0] pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-white/10" id="hero">
      
      {/* YouTube Background Video Stream (_nlQtWA7QfQ) Full-Bleed Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/_nlQtWA7QfQ?autoplay=1&mute=1&loop=1&playlist=_nlQtWA7QfQ&controls=0&showinfo=0&rel=0&enablejsapi=1&playsinline=1&modestbranding=1&disablekb=1"
            title="CoolClip Hero Background Video"
            className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] min-w-[100%] min-h-[100%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-45 scale-110"
            allow="autoplay; encrypted-media"
          />
        </div>

        {/* Dark Pine Vignette Overlay for maximum text readability & contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121815]/90 via-[#121815]/75 to-[#121815]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Above the Fold Tagline & Badge */}
        <div className="inline-flex items-center gap-2 bg-[#4E876A]/35 border border-[#4E876A] px-4 py-1.5 rounded-full text-xs font-mono-accent tracking-wider text-white hero-glow-badge backdrop-blur">
          <Sparkles className="w-3.5 h-3.5 text-[#5CE1E6]" />
          <span className="font-bold uppercase tracking-widest text-[#5CE1E6]">
            JOUW VERKOELING, WAAR JE OOK GAAT
          </span>
        </div>

        {/* Clean, Bold H1 Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">
          Overleef elke tropische hitte. <br />
          <span className="sage-gradient-text">
            Klem ijskoele lucht op je gear.
          </span>
        </h1>

        {/* Clean & Concise Subheading */}
        <p className="text-base sm:text-xl text-[#F7F6F0]/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Geen slapeloze nachten meer in 35°C hostels of benauwde nachtbussen. <strong className="font-semibold text-white">CoolClip</strong> is de ultralichte, klembare mini-airco die 8 uur lang ijskoele ventilatie levert.
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pre-order"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#4E876A] to-[#63A382] hover:from-[#37634C] hover:to-[#4E876A] text-white px-8 py-4 rounded-xl font-heading font-bold text-base shadow-[0_0_30px_rgba(78,135,106,0.5)] transition-all transform hover:-translate-y-0.5 text-center"
          >
            <Wind className="w-5 h-5 text-[#5CE1E6]" />
            Pre-order CoolClip (€49,95)
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#hitte-check"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-heading font-semibold text-base transition-colors text-center backdrop-blur"
          >
            Doe de Tropen Hitte-check
          </a>
        </div>

        {/* Micro Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-accent text-[#DFD6BE]/80 pt-2">
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#5CE1E6] fill-current" />
            <strong className="text-white">4.9 / 5.0</strong> (1.400+ Backpacker Testers)
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5CE1E6]" /> IATA Vliegtuig Goedgekeurd
          </span>
        </div>

        {/* Integrated Floating Stats Bar (Bottom of Hero) */}
        <div className="pt-12 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel-dark p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center space-y-1">
                <div className="flex items-center gap-2 text-[#5CE1E6]">
                  <Icon className="w-4 h-4" />
                  <span className="font-mono-accent text-2xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="font-mono-accent text-[10px] text-[#DFD6BE] tracking-widest uppercase font-semibold">
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
