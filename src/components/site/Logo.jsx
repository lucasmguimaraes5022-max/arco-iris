export function LogoMark({ className = "h-12 w-12" }) {
  return (
    <svg viewBox="40 30 520 540" className={className} role="img" aria-label="Logotipo Arco-Íris">
      <circle cx="418" cy="108" r="62" fill="#FFE782" />
      <rect x="128" y="303" width="54" height="162" rx="27" fill="#D192DD" />
      <rect x="198" y="270" width="54" height="230" rx="27" fill="#86CBC6" />
      <rect x="268" y="190" width="54" height="265" rx="27" fill="#FFE782" />
      <rect x="338" y="270" width="54" height="260" rx="27" fill="#FFCC82" />
      <rect x="408" y="303" width="54" height="194" rx="27" fill="#F47C7C" />
      <path d="M80 548 A88 88 0 0 1 256 548 Z" fill="#ADAF40" stroke="#fff" strokeWidth="8" />
      <path d="M70 303 L297 76 L523 303" fill="none" stroke="#FA9EC3" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RainbowArc({ className = "h-16 w-24" }) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <path d="M10 68 A50 50 0 0 1 110 68" fill="none" stroke="#F5B8CE" strokeWidth="9" strokeLinecap="round" />
      <path d="M22 68 A38 38 0 0 1 98 68" fill="none" stroke="#F8E6A0" strokeWidth="9" strokeLinecap="round" />
      <path d="M34 68 A26 26 0 0 1 86 68" fill="none" stroke="#B7DAD6" strokeWidth="9" strokeLinecap="round" />
      <path d="M46 68 A14 14 0 0 1 74 68" fill="none" stroke="#D9C6EE" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex shrink-0 items-center gap-3 whitespace-nowrap">
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7D8F92]">Espaço Clínico</span>
        <span className={`font-heading text-[26px] font-semibold ${light ? "text-white" : "text-[#1E6E71]"}`}>Arco-íris</span>
      </span>
    </span>
  );
}