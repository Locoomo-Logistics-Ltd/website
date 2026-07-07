/** SVG visual for the "Recipients (Collecting)" tab. */
export default function RecipientFlowVisual() {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[85%] h-[85%]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#006CDF" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#3D93E0" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" rx="20" fill="url(#rcGrad)" />
      {/* Notification card */}
      <rect x="70" y="60" width="220" height="70" rx="14" fill="white" stroke="#006CDF" strokeWidth="1.5" />
      <circle cx="95" cy="95" r="16" fill="#006CDF" />
      <text x="95" y="99" textAnchor="middle" fontSize="14">📬</text>
      <text x="118" y="86" fontFamily="Sora,sans-serif" fontSize="10" fill="#000E2E" fontWeight="700">Package Ready!</text>
      <text x="118" y="100" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#7a8fa8">Collect from Sunrise Pharmacy</text>
      <text x="118" y="113" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3D93E0">0.3km away · Open now</text>
      {/* Map card */}
      <rect x="70" y="150" width="220" height="130" rx="14" fill="#EDF3FB" stroke="#E0E8F5" strokeWidth="1" />
      <line x1="70" y1="175" x2="290" y2="175" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="70" y1="200" x2="290" y2="200" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="70" y1="225" x2="290" y2="225" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="120" y1="150" x2="120" y2="280" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="170" y1="150" x2="170" y2="280" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="220" y1="150" x2="220" y2="280" stroke="#c5d4e8" strokeWidth="0.5" />
      <line x1="270" y1="150" x2="270" y2="280" stroke="#c5d4e8" strokeWidth="0.5" />
      {/* Route on map */}
      <path d="M 155 260 Q 165 230 180 215" stroke="#006CDF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="180" cy="215" r="10" fill="#006CDF" />
      <text x="180" y="219" textAnchor="middle" fontSize="9">🏪</text>
      <circle cx="155" cy="260" r="8" fill="#3D93E0" />
      <text x="155" y="264" textAnchor="middle" fontSize="7">📍</text>
      <text x="200" y="210" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#006CDF" fontWeight="600">Pickup Station</text>
      {/* CTA button */}
      <rect x="100" y="296" width="160" height="30" rx="10" fill="#006CDF" />
      <text x="180" y="315" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="10" fill="white" fontWeight="700">Collect My Package →</text>
    </svg>
  );
}