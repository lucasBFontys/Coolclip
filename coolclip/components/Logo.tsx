import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-7", showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-[#1A1A1A] select-none ${className}`}>
      {/* SVG Icon: Stylized bold 'C' with a distinct dot next to it */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="CoolClip logo icon"
      >
        {/* Bold outer 'C' shape */}
        <path
          d="M 20 6 C 12 6 6 12 6 20 C 6 28 12 34 20 34 C 23.5 34 26.5 32.8 28.8 30.5 L 24.5 26.2 C 23.3 27.4 21.8 28.1 20 28.1 C 15.5 28.1 12 24.6 12 20.1 C 12 15.6 15.5 12.1 20 12.1 C 21.8 12.1 23.3 12.8 24.5 14 L 28.8 9.7 C 26.5 7.4 23.5 6 20 6 Z"
          fill="#1A1A1A"
        />
        {/* Separate cooling dot / point next to the C */}
        <circle cx="28.5" cy="19.8" r="3.2" fill="#6E8F7E" />
      </svg>

      {showText && (
        <span className="font-heading text-xl font-bold tracking-tight text-[#1A1A1A] flex items-baseline">
          Cool<span className="text-[#6E8F7E]">Clip</span>
        </span>
      )}
    </div>
  );
}
