import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/siteData";
import Eyebrow from "@/components/site/Eyebrow";
import Reveal from "@/components/site/Reveal";
import FaqGroup from "@/components/site/FaqGroup";

const CATEGORIES = [
  { key: "quando", title: "Quando procurar atendimento?", hint: "Sinais que costumam trazer as famílias até a clínica." },
  { key: "consultas", title: "Como funcionam as consultas?", hint: "O que esperar do primeiro contato em diante." },
  { key: "avaliacoes", title: "Sobre avaliações e tratamentos", hint: "Como os processos de avaliação e cuidado acontecem." },
  { key: "clinica", title: "Sobre a clínica", hint: "Informações práticas sobre o Espaço Clínico Arco-Íris." },
];

export default function FamilyQuestions({ items = [] }) {
  const groups = CATEGORIES.map((c) => ({
    ...c,
    items: items
      .filter((i) => i.category === c.key)
      .sort((a, b) => (b.highlighted ? 1 : 0) - (a.highlighted ? 1 : 0) || (a.order ?? 999) - (b.order ?? 999)),
  })).filter((g) => g.items.length);

  if (!groups.length) return null;

  return (
    <section id="duvidas" className="border-y border-[#EDE7DC] bg-[#FDFBF6] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.35fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Dúvidas das famílias</Eyebrow>
              <h2 className="mt-4 font-heading text-[30px] font-medium leading-[1.12] text-[#14333C] md:text-[42px]">
                Dúvidas que toda família pode ter
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#5A6B6E]">
                Reunimos as perguntas que mais escutamos de pais, mães, responsáveis, adolescentes e adultos
                antes do primeiro atendimento. Não é preciso ter tudo esclarecido para dar o primeiro passo.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-[24px] border border-[#E5DED2] bg-white p-6">
                <p className="font-heading text-[19px] text-[#14333C]">Ainda ficou alguma dúvida?</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5A6B6E]">
                  Fale com a nossa equipe pelo WhatsApp. Escutamos o que você está vivendo e orientamos o
                  próximo passo com calma, sem compromisso.
                </p>
                <a
                  href={waLink("Olá! Tenho uma dúvida sobre os atendimentos no Espaço Clínico Arco-Íris.")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1E6E71] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#17585B]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Não encontrou sua dúvida? Fale conosco
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-12">
            {groups.map((g, idx) => (
              <Reveal key={g.key} delay={idx * 0.05}>
                <FaqGroup title={g.title} hint={g.hint} items={g.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}