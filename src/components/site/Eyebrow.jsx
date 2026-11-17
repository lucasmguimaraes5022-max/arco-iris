export default function Eyebrow({ children, className = "" }) {
  return (
    <span className={`flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E6E71] ${className}`}>
      <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
        {["#D192DD", "#86CBC6", "#FFE782", "#FFCC82", "#F47C7C"].map((c) => (
          <i key={c} style={{ background: c }} className="block h-full w-[3px] rounded-full" />
        ))}
      </span>
      {children}
    </span>
  );
}