/** Hub-and-spoke network SVG for the Locoomo Model section. */
export default function ModelNetworkDiagram() {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-label="Locoomo network hub diagram"
      role="img"
    >
      <defs>
        <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0050b3" />
          <stop offset="100%" stopColor="#3D93E0" />
        </linearGradient>
      </defs>
      {/* Orbit rings */}
      <circle cx="170" cy="170" r="140" stroke="#006CDF" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
      <circle cx="170" cy="170" r="100" stroke="#006CDF" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />

      {/* Spoke lines */}
      <line x1="170" y1="120" x2="170" y2="55"  stroke="#006CDF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <line x1="220" y1="170" x2="285" y2="170" stroke="#3D93E0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <line x1="170" y1="220" x2="170" y2="285" stroke="#005CBE" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <line x1="120" y1="170" x2="55"  y2="170" stroke="#006CDF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />

      {/* Hub */}
      <circle cx="170" cy="170" r="50" fill="url(#hubGrad)" />
      <circle cx="170" cy="170" r="55" fill="none" stroke="#3D93E0" strokeWidth="1.5" opacity="0.4">
        <animate attributeName="r" values="50;65" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="170" y="163" textAnchor="middle" fontSize="22">🏪</text>
      <text x="170" y="180" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fill="white" fontWeight="700">PICKUP</text>
      <text x="170" y="190" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fill="white" fontWeight="700">STATION</text>

      {/* Customer (top) */}
      <circle cx="170" cy="38" r="22" fill="#EDF3FB" stroke="#006CDF" strokeWidth="1.5" />
      <text x="170" y="34" textAnchor="middle" fontSize="14">👤</text>
      <text x="170" y="47" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#006CDF" fontWeight="600">CUSTOMER</text>

      {/* Rider (right) */}
      <circle cx="302" cy="170" r="22" fill="#EDF3FB" stroke="#3D93E0" strokeWidth="1.5" />
      <text x="302" y="166" textAnchor="middle" fontSize="14">🛵</text>
      <text x="302" y="179" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#3D93E0" fontWeight="600">RIDER</text>

      {/* Recipient (bottom) */}
      <circle cx="170" cy="302" r="22" fill="#EDF3FB" stroke="#005CBE" strokeWidth="1.5" />
      <text x="170" y="298" textAnchor="middle" fontSize="14">🏠</text>
      <text x="170" y="311" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#005CBE" fontWeight="600">RECIPIENT</text>

      {/* Business (left) */}
      <circle cx="38" cy="170" r="22" fill="#EDF3FB" stroke="#006CDF" strokeWidth="1.5" />
      <text x="38" y="166" textAnchor="middle" fontSize="14">🏢</text>
      <text x="38" y="179" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#006CDF" fontWeight="600">BUSINESS</text>

      {/* Travel particles */}
      <path id="m-top"   d="M 170 55 L 170 120" opacity="0" />
      <path id="m-right" d="M 285 170 L 220 170" opacity="0" />
      <circle r="4" fill="#006CDF" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite"><mpath href="#m-top" /></animateMotion>
      </circle>
      <circle r="3.5" fill="#3D93E0" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s"><mpath href="#m-right" /></animateMotion>
      </circle>
    </svg>
  );
}