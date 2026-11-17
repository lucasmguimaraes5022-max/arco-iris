import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Logo, { RainbowArc } from "@/components/site/Logo";
import { NAV, ADDRESS, INSTAGRAM_URL, waLink } from "@/lib/siteData";

export default function Footer({ specialties }) {
  return (
    <footer className="border-t border-[#EDE7DC] bg-[#FDFBF6]">
      <div className="mx-auto max-w-[1180px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#5A6B6E]">Clínica multidisciplinar em Santo Amaro da Imperatriz, com cuidado humanizado e acompanhamento individualizado em cada etapa da vida.</p>
            <RainbowArc className="mt-5 h-10 w-16" />
          </div>
          <div>
            <h4 className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#93A3A5]">Navegação</h4>
            <ul className="space-y-1.5 text-[14px] text-[#5A6B6E]">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-[#1E6E71]">{n.label}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#93A3A5]">Especialidades</h4>
            <ul className="space-y-1.5 text-[14px] text-[#5A6B6E]">{specialties.map((s) => <li key={s.key}><a href="#especialidades" className="hover:text-[#1E6E71]">{s.name}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#93A3A5]">Contato</h4>
            <p className="flex gap-2 text-[14px] text-[#5A6B6E]"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1E6E71]" />{ADDRESS}</p>
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 text-[14px] text-[#5A6B6E] hover:text-[#1E6E71]"><MessageCircle className="h-4 w-4 text-[#1E6E71]" />WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-1.5 flex items-center gap-2 text-[14px] text-[#5A6B6E] hover:text-[#1E6E71]"><Instagram className="h-4 w-4 text-[#1E6E71]" />@espacoclinicoarcoiris</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#EDE7DC] pt-6 text-[12px] text-[#93A3A5] sm:flex-row">
          <span>© {new Date().getFullYear()} Espaço Clínico Arco-íris. Todos os direitos reservados.</span>
          <Link to="/privacidade" className="underline underline-offset-4 hover:text-[#1E6E71]">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}