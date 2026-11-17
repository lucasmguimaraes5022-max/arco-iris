import { MapPin, Phone, MessageCircle, Instagram, Clock } from "lucide-react";
import Reveal, { SectionTitle } from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";
import { ADDRESS, PHONE_LABEL, INSTAGRAM_URL, WHATSAPP, waLink } from "@/lib/siteData";

const ROWS = [
  { icon: Phone, label: "Telefone", value: PHONE_LABEL, href: `tel:+${WHATSAPP}` },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_LABEL, href: waLink() },
  { icon: Instagram, label: "Instagram", value: "@espacoclinicoarcoiris", href: INSTAGRAM_URL },
  { icon: MapPin, label: "Endereço", value: ADDRESS },
  { icon: Clock, label: "Horários de funcionamento", value: "Consulte nossa equipe para confirmar os horários." },
];

export default function Contact() {
  return (
    <section id="contato" className="border-t border-[#EDE7DC] bg-[#FBF7EF] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionTitle eyebrow="Agendamento e contato" title="Estamos aqui para acolher você e sua família.">
          Entre em contato para conhecer nosso espaço e obter informações sobre os atendimentos.
        </SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              {ROWS.map((r) => (
                <div key={r.label} className="flex items-start gap-4 border-t border-[#E4DED2] py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1E6E71]"><r.icon className="h-4 w-4" strokeWidth={1.8} /></span>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#93A3A5]">{r.label}</p>
                    {r.href ? <a href={r.href} target="_blank" rel="noreferrer" className="text-[15px] text-[#14333C] underline-offset-4 hover:underline">{r.value}</a> : <p className="text-[15px] text-[#14333C]">{r.value}</p>}
                  </div>
                </div>
              ))}
              <a href={waLink()} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#1E6E71] px-7 text-[15px] font-semibold text-white transition hover:bg-[#17585B]">
                <MessageCircle className="h-4 w-4" /> Falar com a equipe
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
        <Reveal className="mt-10">
          <iframe title="Mapa da localização do Espaço Clínico Arco-íris" loading="lazy" className="h-72 w-full rounded-[22px] border border-[#EDE7DC]" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} />
        </Reveal>
      </div>
    </section>
  );
}