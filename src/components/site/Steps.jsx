import { ArrowRight } from "lucide-react";
import Reveal, { SectionTitle } from "@/components/site/Reveal";
import { STEPS, waLink } from "@/lib/siteData";

export default function Steps() {
  return (
    <section className="border-y border-[#EDE7DC] bg-[#FBF7EF] py-20 md:py-28">
      <div className="mx-auto max-w-[980px] px-6">
        <SectionTitle eyebrow="Atendimento" title="Como funciona o atendimento?">
          Um caminho simples, do primeiro contato ao acompanhamento.
        </SectionTitle>
        <div className="grid gap-0 md:grid-cols-2 md:gap-x-14">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.04}>
              <div className="flex gap-5 border-t border-[#E4DED2] py-6">
                <span className="font-heading text-[22px] font-medium text-[#1E6E71]/45">0{i + 1}</span>
                <div>
                  <h3 className="font-heading text-[20px] font-medium text-[#14333C]">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#5A6B6E]">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#1E6E71] px-7 text-[15px] font-semibold text-white transition hover:bg-[#17585B]">
          Falar no WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}