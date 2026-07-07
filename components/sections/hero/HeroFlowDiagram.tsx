
export default function HeroFlowDiagram() {
  return (
    <div className="w-full max-w-[480px] aspect-square">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Locoomo delivery network diagram"
        role="img"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#006CDF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#006CDF" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow circle */}
        <circle cx="240" cy="240" r="200" fill="url(#bgGrad)" />

        {/* Route paths */}
        <path id="route1" d="M 120 150 Q 200 140 240 240" stroke="#006CDF" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
        <path id="route2" d="M 240 240 Q 300 300 360 300" stroke="#3D93E0" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
        <path id="route3" d="M 150 320 Q 190 280 240 240" stroke="#006CDF" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.35" />
        <path id="route4" d="M 240 240 Q 330 180 390 160" stroke="#3D93E0" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.3" />

        {/* Animated travel dots */}
        <circle r="4" fill="#006CDF" opacity="0.9" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#route1" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#3D93E0" opacity="0.8" filter="url(#glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s">
            <mpath href="#route2" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#005CBE" opacity="0.6" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#route4" />
          </animateMotion>
        </circle>

        {/* SENDER node */}
        <circle cx="120" cy="150" r="28" fill="#EDF3FB" stroke="#006CDF" strokeWidth="1.5" />
        <text x="120" y="143" textAnchor="middle" fontSize="18">📦</text>
        <text x="120" y="158" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#006CDF" fontWeight="600">SENDER</text>
        <circle cx="120" cy="150" r="28" fill="none" stroke="#006CDF" strokeWidth="1.5" opacity="0">
          <animate attributeName="r" values="28;44" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* PICKUP STATION hub */}
        <circle cx="240" cy="240" r="38" fill="#006CDF" stroke="#3D93E0" strokeWidth="2" />
        <circle cx="240" cy="240" r="44" fill="none" stroke="#006CDF" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="38;54" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="240" y="232" textAnchor="middle" fontSize="20">🏪</text>
        <text x="240" y="249" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fill="white" fontWeight="700">PICKUP</text>
        <text x="240" y="259" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fill="white" fontWeight="700">STATION</text>

        {/* RECIPIENT node */}
        <circle cx="360" cy="300" r="28" fill="#EDF3FB" stroke="#3D93E0" strokeWidth="1.5" />
        <text x="360" y="293" textAnchor="middle" fontSize="18">🏠</text>
        <text x="360" y="308" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#3D93E0" fontWeight="600">RECIPIENT</text>
        <circle cx="360" cy="300" r="28" fill="none" stroke="#3D93E0" strokeWidth="1.5" opacity="0">
          <animate attributeName="r" values="28;44" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0.4;0" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
        </circle>

        {/* RIDER node */}
        <circle cx="390" cy="160" r="24" fill="#EDF3FB" stroke="#3D93E0" strokeWidth="1.5" />
        <text x="390" y="153" textAnchor="middle" fontSize="16">🛵</text>
        <text x="390" y="168" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3D93E0" fontWeight="600">RIDER</text>

        {/* NEARBY SHOP node */}
        <circle cx="150" cy="320" r="24" fill="#EDF3FB" stroke="#006CDF" strokeWidth="1.5" />
        <text x="150" y="313" textAnchor="middle" fontSize="16">🏬</text>
        <text x="150" y="328" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#006CDF" fontWeight="600">NEARBY SHOP</text>

        {/* Route labels */}
        <text x="170" y="175" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#006CDF" opacity="0.6" transform="rotate(-8,170,175)">drop off</text>
        <text x="295" y="265" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#3D93E0" opacity="0.6" transform="rotate(18,295,265)">collect</text>
      </svg>
    </div>
  );
}