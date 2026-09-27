// Simple line illustrations of each lift type, in brand colours.
// Used on the Products page in place of stock or AI imagery.

const stroke = "#12213b"; // primary navy
const accent = "#f59e0b"; // amber-500
const soft = "#fde68a"; // amber-200
const line = "#94a3b8"; // slate-400

function Floors({ levels = [60, 140, 220], width = 240 }) {
  return levels.map((y) => (
    <line key={y} x1="0" y1={y} x2={width} y2={y} stroke={line} strokeWidth="2" strokeDasharray="6 6" />
  ));
}

function Passenger() {
  return (
    <>
      <Floors />
      {/* shaft */}
      <rect x="70" y="10" width="100" height="220" fill="#f8fafc" stroke={stroke} strokeWidth="3" />
      {/* ropes */}
      <line x1="110" y1="10" x2="110" y2="80" stroke={stroke} strokeWidth="2" />
      <line x1="118" y1="10" x2="118" y2="80" stroke={stroke} strokeWidth="2" />
      {/* counterweight */}
      <line x1="155" y1="10" x2="155" y2="150" stroke={stroke} strokeWidth="2" />
      <rect x="148" y="150" width="14" height="40" fill={stroke} />
      {/* car */}
      <rect x="80" y="80" width="62" height="60" fill={accent} stroke={stroke} strokeWidth="3" />
      <circle cx="111" cy="97" r="6" fill={stroke} />
      <path d="M111 104 V120 M102 112 H120 M111 120 L104 134 M111 120 L118 134" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* machine */}
      <circle cx="114" cy="10" r="8" fill={stroke} />
    </>
  );
}

function Home() {
  return (
    <>
      <line x1="0" y1="130" x2="240" y2="130" stroke={line} strokeWidth="2" strokeDasharray="6 6" />
      <line x1="0" y1="226" x2="240" y2="226" stroke={stroke} strokeWidth="3" />
      {/* rails */}
      <line x1="92" y1="30" x2="92" y2="226" stroke={stroke} strokeWidth="3" />
      <line x1="148" y1="30" x2="148" y2="226" stroke={stroke} strokeWidth="3" />
      {/* glass cabin */}
      <rect x="96" y="140" width="48" height="84" rx="4" fill="#e0f2fe" stroke={stroke} strokeWidth="3" />
      <line x1="104" y1="150" x2="104" y2="214" stroke="#ffffff" strokeWidth="3" />
      <rect x="96" y="140" width="48" height="10" fill={accent} />
      {/* sofa + plant for a home feel */}
      <rect x="20" y="196" width="50" height="22" rx="6" fill={soft} stroke={stroke} strokeWidth="2" />
      <rect x="20" y="186" width="12" height="32" rx="4" fill={soft} stroke={stroke} strokeWidth="2" />
      <circle cx="200" cy="190" r="16" fill="#bbf7d0" stroke={stroke} strokeWidth="2" />
      <rect x="192" y="204" width="16" height="20" fill={accent} stroke={stroke} strokeWidth="2" />
      {/* picture on upper floor */}
      <rect x="180" y="70" width="36" height="28" fill="#ffffff" stroke={stroke} strokeWidth="2" />
    </>
  );
}

function Platform() {
  return (
    <>
      <line x1="0" y1="226" x2="240" y2="226" stroke={stroke} strokeWidth="3" />
      {/* steps */}
      <path d="M150 226 V200 H175 V174 H200 V148 H240" fill="none" stroke={stroke} strokeWidth="3" />
      {/* enclosure */}
      <rect x="40" y="80" width="100" height="146" fill="#f8fafc" stroke={stroke} strokeWidth="3" />
      {/* platform */}
      <rect x="46" y="208" width="88" height="10" fill={accent} stroke={stroke} strokeWidth="2" />
      {/* wheelchair user */}
      <circle cx="92" cy="186" r="16" fill="none" stroke={stroke} strokeWidth="3" />
      <path d="M80 160 H100 L106 180" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M84 158 V136" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <circle cx="86" cy="124" r="8" fill={stroke} />
      <path d="M84 146 L102 150" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* control */}
      <rect x="122" y="140" width="10" height="18" fill={stroke} />
    </>
  );
}

function Goods() {
  return (
    <>
      <Floors levels={[120, 226]} />
      <rect x="40" y="20" width="160" height="206" fill="#f8fafc" stroke={stroke} strokeWidth="3" />
      {/* car */}
      <rect x="50" y="126" width="140" height="98" fill="#e2e8f0" stroke={stroke} strokeWidth="3" />
      {/* pallet + boxes */}
      <rect x="70" y="208" width="100" height="10" fill={stroke} />
      <rect x="74" y="168" width="42" height="40" fill={accent} stroke={stroke} strokeWidth="2" />
      <rect x="120" y="178" width="46" height="30" fill={soft} stroke={stroke} strokeWidth="2" />
      <rect x="84" y="140" width="28" height="28" fill={soft} stroke={stroke} strokeWidth="2" />
      <line x1="95" y1="168" x2="95" y2="208" stroke={stroke} strokeWidth="1.5" />
      {/* ropes */}
      <line x1="120" y1="20" x2="120" y2="126" stroke={stroke} strokeWidth="2" />
    </>
  );
}

function Dumbwaiter() {
  return (
    <>
      <line x1="0" y1="226" x2="240" y2="226" stroke={stroke} strokeWidth="3" />
      {/* counter */}
      <rect x="20" y="150" width="200" height="76" fill="#f1f5f9" stroke={stroke} strokeWidth="3" />
      <rect x="14" y="142" width="212" height="10" fill={stroke} />
      {/* wall shaft */}
      <rect x="70" y="20" width="100" height="122" fill="#f8fafc" stroke={stroke} strokeWidth="3" />
      {/* car with shelves */}
      <rect x="80" y="40" width="80" height="96" fill={accent} stroke={stroke} strokeWidth="3" />
      <line x1="80" y1="88" x2="160" y2="88" stroke={stroke} strokeWidth="3" />
      {/* cups & teapot */}
      <rect x="90" y="70" width="12" height="16" rx="2" fill="#ffffff" stroke={stroke} strokeWidth="2" />
      <rect x="108" y="70" width="12" height="16" rx="2" fill="#ffffff" stroke={stroke} strokeWidth="2" />
      <path d="M126 86 V66 Q138 58 150 66 V86 Z" fill="#ffffff" stroke={stroke} strokeWidth="2" />
      <rect x="92" y="112" width="56" height="20" rx="3" fill="#ffffff" stroke={stroke} strokeWidth="2" />
      {/* hatch doors */}
      <line x1="70" y1="20" x2="70" y2="142" stroke={stroke} strokeWidth="5" />
      <line x1="170" y1="20" x2="170" y2="142" stroke={stroke} strokeWidth="5" />
    </>
  );
}

const variants = { passenger: Passenger, home: Home, platform: Platform, goods: Goods, dumbwaiter: Dumbwaiter };

export default function LiftIllustration({ type, title }) {
  const Drawing = variants[type] ?? Passenger;
  return (
    <svg viewBox="0 0 240 240" role="img" aria-label={title} className="h-full w-full">
      <Drawing />
    </svg>
  );
}
