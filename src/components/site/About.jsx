import Reveal, { SectionTitle } from "@/components/site/Reveal";

const PILLARS = [
  { title: "Acolhimento", text: "Escuta atenta e cuidado em cada encontro." },
  { title: "Segurança", text: "Um ambiente preparado para a pessoa e a família." },
  { title: "Individualidade", text: "Respeito ao tempo e ao universo de cada um." },
];

const MVV = [
  { title: "Missão", text: "Oferecer cuidado integrado, humano e individualizado, apoiando o desenvolvimento e o bem-estar em cada etapa da vida." },
  { title: "Visão", text: "Ser referência em cuidado multidisciplinar, reconhecida pelo acolhimento e pela qualidade do trabalho em equipe." },
  { title: "Valores", text: "Acolhimento, respeito à individualidade, ética profissional, trabalho em equipe e compromisso com o desenvolvimento humano." },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-t-[170px] rounded-b-[28px] border-[8px] border-[#F5D8E7]/70">
            <div role="img" aria-label="Ilustração de um espaço de acolhimento" className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[#DCEFEE] via-[#F5D8E7] to-[#FBF0B6]"><div className="rounded-[28px] border border-white/70 bg-white/55 px-8 py-10 text-center shadow-sm"><span className="block font-heading text-5xl text-[#1E6E71]">♡</span><span className="mt-3 block font-heading text-xl text-[#14333C]">Acolhimento e cuidado</span></div></div>
          </div>
          <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden rounded-[20px] border-[6px] border-white shadow-lg sm:block">
            <div role="img" aria-label="Ilustração de brinquedos coloridos" className="flex aspect-square items-center justify-center bg-[#FFF1B8]"><div className="flex items-end gap-2"><span className="h-12 w-9 rounded-t-full bg-[#1E6E71]/80"/><span className="h-16 w-10 rounded-t-lg bg-[#E9A6BD]"/><span className="h-10 w-10 rounded-full bg-[#D9B65B]"/></div></div>
          </div>
          <p className="mt-4 text-[11px] text-[#93A3A5]">Ilustrações decorativas.</p>
        </Reveal>

        <div>
          <SectionTitle eyebrow="Sobre o espaço" title="Um espaço pensado para acolher.">
            Acreditamos na importância de oferecer um ambiente acolhedor, seguro e preparado para acompanhar pessoas e suas famílias em diferentes fases da vida.
          </SectionTitle>
          <p className="-mt-8 mb-8 text-[17px] leading-relaxed text-[#5A6B6E]">
            Cada pessoa possui seu próprio universo, suas emoções, descobertas e desafios. Nosso compromisso é respeitar essas particularidades e oferecer um atendimento humanizado, com onze especialidades trabalhando de forma integrada.
          </p>
          <div className="space-y-0">
            {PILLARS.map((p) => (
              <div key={p.title} className="border-t border-[#EDE7DC] py-4">
                <h3 className="font-heading text-[19px] font-medium text-[#14333C]">{p.title}</h3>
                <p className="mt-1 text-[15px] text-[#5A6B6E]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {MVV.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <div className="h-full rounded-[22px] border border-[#EDE7DC] bg-white/70 p-7">
              <h3 className="font-heading text-[20px] font-medium text-[#1E6E71]">{m.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5A6B6E]">{m.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}