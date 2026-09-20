import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "light" | "sage";
}

export default function Logo({
  className = "h-8",
  showText = true,
  variant = "light",
}: LogoProps) {
  // Determine color palette based on variant
  const isDarkBg = variant === "dark";
  const cColor = isDarkBg ? "#FFFFFF" : "#1A1A1A";
  const snowflakeColor = isDarkBg ? "#FFFFFF" : "#6E8F7E";
  const textColor = isDarkBg ? "#FFFFFF" : "#1A1A1A";

  return (
    <div
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}
    >
      {/* SVG Icon: Bold 'C' with a 6-pointed Snowflake icon in the top-right opening */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="CoolClip logo icon with snowflake"
      >
        {/* Bold outer 'C' shape matching exact uploaded logo image geometry */}
        <path
          d="M 21.5 6.5 C 13.5 6.5 7.5 12.5 7.5 20.5 C 7.5 28.5 13.5 34.5 21.5 34.5 C 25.8 34.5 29.2 32.8 31.8 29.8 L 26.5 25.2 C 25.2 26.5 23.6 27.2 21.5 27.2 C 17.8 27.2 14.8 24.2 14.8 20.5 C 14.8 16.8 17.8 13.8 21.5 13.8 C 23.6 13.8 25.2 14.5 26.5 15.8 L 31.8 11.2 C 29.2 8.2 25.8 6.5 21.5 6.5 Z"
          fill={cColor}
        />

        {/* 6-Point Snowflake Vector Icon at the top-right opening of the C */}
        <g transform="translate(29.5, 12.5)" stroke={snowflakeColor} strokeWidth="1.8" strokeLinecap="round">
          {/* Main 3 axis lines crossing at center (6 arms) */}
          <line x1="0" y1="-5.5" x2="0" y2="5.5" />
          <line x1="-4.8" y1="-2.8" x2="4.8" y2="2.8" />
          <line x1="-4.8" y1="2.8" x2="4.8" y2="-2.8" />

          {/* Vertical arm branches */}
          <line x1="-1.5" y1="-3.5" x2="0" y2="-5" />
          <line x1="1.5" y1="-3.5" x2="0" y2="-5" />
          <line x1="-1.5" y1="3.5" x2="0" y2="5" />
          <line x1="1.5" y1="3.5" x2="0" y2="5" />

          {/* Diagonal top-right / bottom-left arm branches */}
          <line x1="2.2" y1="-3.2" x2="4.2" y2="-2.2" />
          <line x1="3.2" y1="-2.2" x2="4.2" y2="-4.2" />
          <line x1="-2.2" y1="3.2" x2="-4.2" y2="2.2" />
          <line x1="-3.2" y1="2.2" x2="-4.2" y2="4.2" />

          {/* Diagonal top-left / bottom-right arm branches */}
          <line x1="-2.2" y1="-3.2" x2="-4.2" y2="-2.2" />
          <line x1="-3.2" y1="-2.2" x2="-4.2" y2="-4.2" />
          <line x1="2.2" y1="3.2" x2="4.2" y2="2.2" />
          <line x1="3.2" y1="2.2" x2="4.2" y2="4.2" />
        </g>
      </svg>

      {showText && (
        <span
          className="font-heading text-xl font-bold tracking-tight flex items-baseline"
          style={{ color: textColor }}
        >
          Cool<span className="text-[#6E8F7E]">Clip</span>
        </span>
      )}
    </div>
  );
}
