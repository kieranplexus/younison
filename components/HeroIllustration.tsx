export default function HeroIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Abstract illustration of customer conversations arriving in a single inbox"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="yn-surface" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2236" />
          <stop offset="100%" stopColor="#070a12" />
        </linearGradient>
      </defs>

      {/* backdrop panel */}
      <rect
        x="40"
        y="60"
        width="400"
        height="300"
        rx="20"
        fill="url(#yn-surface)"
        stroke="#ffffff"
        strokeOpacity="0.08"
      />

      {/* central inbox card */}
      <rect x="186" y="168" width="108" height="84" rx="14" fill="#3eebbe" />
      <rect x="206" y="190" width="68" height="8" rx="4" fill="#0b0f1a" opacity="0.85" />
      <rect x="206" y="206" width="50" height="8" rx="4" fill="#0b0f1a" opacity="0.55" />
      <rect x="206" y="222" width="60" height="8" rx="4" fill="#0b0f1a" opacity="0.4" />

      {/* incoming speech bubbles */}
      <g>
        <rect x="70" y="96" width="120" height="58" rx="16" fill="#1a2236" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="86" y="116" width="64" height="7" rx="3.5" fill="#e8ecf4" opacity="0.8" />
        <rect x="86" y="130" width="44" height="7" rx="3.5" fill="#8b95a9" opacity="0.6" />
      </g>

      <g>
        <rect x="292" y="92" width="116" height="56" rx="16" fill="#1a2236" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="308" y="111" width="60" height="7" rx="3.5" fill="#e8ecf4" opacity="0.8" />
        <rect x="308" y="125" width="40" height="7" rx="3.5" fill="#8b95a9" opacity="0.6" />
      </g>

      <g>
        <rect x="78" y="252" width="118" height="56" rx="16" fill="#1a2236" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="94" y="271" width="58" height="7" rx="3.5" fill="#e8ecf4" opacity="0.8" />
        <rect x="94" y="285" width="42" height="7" rx="3.5" fill="#8b95a9" opacity="0.6" />
      </g>

      <g>
        <rect x="296" y="256" width="112" height="56" rx="16" fill="#1a2236" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="312" y="275" width="54" height="7" rx="3.5" fill="#e8ecf4" opacity="0.8" />
        <rect x="312" y="289" width="38" height="7" rx="3.5" fill="#8b95a9" opacity="0.6" />
      </g>

      {/* connecting lines toward inbox */}
      <g stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" fill="none" strokeDasharray="4 6">
        <path d="M150 150 C 170 168, 180 178, 192 188" />
        <path d="M324 148 C 312 160, 300 172, 290 184" />
        <path d="M158 252 C 174 240, 182 232, 192 224" />
        <path d="M320 256 C 308 244, 300 238, 290 230" />
      </g>

      {/* accent dots */}
      <circle cx="180" cy="92" r="6" fill="#3eebbe" />
      <circle cx="408" cy="148" r="6" fill="#3eebbe" />
      <circle cx="72" cy="252" r="6" fill="#3eebbe" />
      <circle cx="408" cy="312" r="6" fill="#3eebbe" />
      <circle cx="240" cy="150" r="5" fill="#3eebbe" />
    </svg>
  );
}
