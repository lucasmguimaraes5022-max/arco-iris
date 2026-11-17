import { Image } from "@/components/ui/image";
import Reveal, { SectionTitle } from "@/components/site/Reveal";

export default function Insurance({ items }) {
  return (
    <section id="convenios" className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
      <SectionTitle eyebrow="Convênios" title="Convênios atendidos" center>
        Antes do agendamento, confirme com a nossa equipe a disponibilidade de atendimento e a cobertura do seu plano.
      </SectionTitle>
      {items.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((c) => (
            <Reveal key={c.id || c.name}>
              <div className="flex aspect-[3/2] items-center justify-center rounded-[20px] border border-[#EDE7DC] bg-white p-6">
                {c.logo_url ? <Image src={c.logo_url} alt={c.name} fittingType="fit" className="h-full w-full object-contain" /> : <span className="font-heading text-[18px] font-medium text-[#14333C]">{c.name}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="rounded-[22px] border border-dashed border-[#DCD5C8] bg-[#FBF7EF] p-10 text-center text-[15px] text-[#5A6B6E]">
          A relação de convênios será divulgada em breve. Fale com nossa equipe para saber mais.
        </div>
      )}
    </section>
  );
}