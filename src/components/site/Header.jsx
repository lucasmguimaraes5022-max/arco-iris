import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";
import { NAV, waLink } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#EDE7DC] bg-[#FDFBF6]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-3">
        <a href="#inicio" aria-label="Ir para o início" className="shrink-0"><Logo /></a>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-[14px] text-[#3C5257] xl:flex" aria-label="Menu principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-2.5 py-2 transition-colors hover:bg-[#DCEFEE]/60 hover:text-[#1E6E71]">{n.label}</a>
          ))}
        </nav>
        <a href={waLink()} target="_blank" rel="noreferrer" className="hidden min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-[#1E6E71] px-5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#17585B] xl:inline-flex">
          Agende uma consulta
        </a>
        <button className="flex h-11 w-11 items-center justify-center rounded-full text-[#1E6E71] xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#EDE7DC] bg-[#FDFBF6] px-6 pb-6 pt-2 xl:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-[#F1ECE3] py-3 text-[16px] text-[#3C5257]">{n.label}</a>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-[#1E6E71] text-sm font-semibold text-white">Agende uma consulta</a>
        </nav>
      )}
    </header>
  );
}