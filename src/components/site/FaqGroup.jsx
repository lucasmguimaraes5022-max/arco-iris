import { useState } from "react";

export default function FaqGroup({ title, hint, items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <h3 className="font-heading text-[22px] font-medium leading-snug text-[#14333C]">{title}</h3>
      {hint && <p className="mt-2 text-[14.5px] leading-relaxed text-[#5A6B6E]">{hint}</p>}
      <div className="mt-5 border-l border-[#14333C]/15">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.id || i}>
              <h4>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start gap-4 border-b border-[#14333C]/15 py-4 pl-5 pr-2 text-left transition-colors hover:bg-white/70"
                >
                  <span aria-hidden="true" className="relative mt-[6px] block h-4 w-4 shrink-0 text-[#1E6E71]">
                    <span className="absolute left-0 top-[7px] h-[2px] w-4 rounded-full bg-current" />
                    <span className={`absolute left-[7px] top-0 h-4 w-[2px] rounded-full bg-current transition-all duration-300 ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-[17px] font-medium leading-snug text-[#14333C] group-hover:text-[#1E6E71]">
                      {item.question}
                    </span>
                    {item.highlighted && (
                      <span className="mt-2 inline-flex rounded-full bg-[#FFF1B8] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[#7A5B00] sm:hidden">
                        Mais procurada
                      </span>
                    )}
                  </span>
                  {item.highlighted && (
                    <span className="mt-[3px] hidden shrink-0 rounded-full bg-[#FFF1B8] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[#7A5B00] sm:block">
                      Mais procurada
                    </span>
                  )}
                </button>
              </h4>
              <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="border-b border-[#14333C]/10 pb-5 pl-[52px] pr-2 pt-1 text-[15px] leading-[1.7] text-[#5A6B6E]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}