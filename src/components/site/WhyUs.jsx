import { LayoutGrid, Users, UserRound, HeartHandshake, Network, HeartPulse } from "lucide-react";
import Reveal, { SectionTitle } from "@/components/site/Reveal";

const ITEMS = [
  { icon: LayoutGrid, t: "Diferentes especialidades em um só espaço" },
  { icon: Users, t: "Profissionais de diferentes áreas" },
  { icon: UserRound, t: "Atendimento individualizado" },
  { icon: HeartHandshake, t: "Olhar humanizado" },
  { icon: Network, t: "Integração entre conhecimentos" },
  { icon: HeartPulse, t: "Atenção a cada paciente e família" },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
      <SectionTitle eyebrow="Por que a Arco-íris" title="Cuidar é olhar para cada pessoa por inteiro." center />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.t} delay={(i % 3) * 0.06}>
            <div className="flex items-start gap-4 border-t border-[#EDE7DC] pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DCEFEE] text-[#1E6E71]"><it.icon className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="font-heading text-[19px] font-medium leading-snug text-[#14333C]">{it.t}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}