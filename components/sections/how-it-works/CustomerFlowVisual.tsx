/** SVG visual for the "Customers (Sending)" tab. */
export default function CustomerFlowVisual() {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[85%] h-[85%]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#006CDF" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#3D93E0" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" rx="20" fill="url(#cgGrad)" />
      {/* Phone body */}
      <rect x="120" y="40" width="120" height="220" rx="16" fill="white" stroke="#006CDF" strokeWidth="1.5" opacity="0.9" />
      <rect x="148" y="52" width="64" height="6" rx="3" fill="#E0E8F5" />
      {/* App header */}
      <rect x="128" y="66" width="104" height="28" rx="6" fill="#006CDF" opacity="0.9" />
      <text x="180" y="84" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9" fill="white" fontWeight="700">LOCOOMO</text>
      {/* Step 1 */}
      <rect x="132" y="102" width="96" height="36" rx="8" fill="#EDF3FB" stroke="#006CDF" strokeWidth="0.75" opacity="0.9" />
      <text x="148" y="116" fontSize="11">📦</text>
      <text x="164" y="116" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#006CDF" fontWeight="600">Book delivery</text>
      <text x="164" y="126" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#7a8fa8">Choose your option</text>
      {/* Connector */}
      <line x1="180" y1="138" x2="180" y2="150" stroke="#006CDF" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      {/* Step 2 */}
      <rect x="132" y="150" width="96" height="36" rx="8" fill="#006CDF" opacity="0.9" />
      <text x="148" y="164" fontSize="11">🏪</text>
      <text x="164" y="164" fontFamily="DM Sans,sans-serif" fontSize="8" fill="white" fontWeight="600">Drop off</text>
      <text x="164" y="174" fontFamily="DM Sans,sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Nearby Pickup Station</text>
      {/* Connector */}
      <line x1="180" y1="186" x2="180" y2="198" stroke="#3D93E0" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      {/* Step 3 */}
      <rect x="132" y="198" width="96" height="36" rx="8" fill="#EDF3FB" stroke="#3D93E0" strokeWidth="0.75" opacity="0.9" />
      <text x="148" y="212" fontSize="11">✅</text>
      <text x="164" y="212" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3D93E0" fontWeight="600">Delivered</text>
      <text x="164" y="222" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#7a8fa8">Recipient notified</text>
      {/* Decorative nodes */}
      <circle cx="80" cy="120" r="18" fill="#EDF3FB" stroke="#006CDF" strokeWidth="1.5" />
      <text x="80" y="124" textAnchor="middle" fontSize="14">👤</text>
      <line x1="98" y1="120" x2="120" y2="120" stroke="#006CDF" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="280" cy="220" r="18" fill="#EDF3FB" stroke="#3D93E0" strokeWidth="1.5" />
      <text x="280" y="224" textAnchor="middle" fontSize="14">🏠</text>
      <line x1="240" y1="220" x2="262" y2="220" stroke="#3D93E0" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      {/* Label */}
      <text x="180" y="300" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="11" fill="#006CDF" fontWeight="700">3 simple steps</text>
      <text x="180" y="316" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7a8fa8">to send any package</text>
    </svg>
  );
}