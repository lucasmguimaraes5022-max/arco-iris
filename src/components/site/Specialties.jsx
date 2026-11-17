import { useState } from "react";
import { Puzzle, Brain, Hand, HeartHandshake, Lightbulb, MessageCircle, Users, Activity, Stethoscope, Apple, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Reveal, { SectionTitle } from "@/components/site/Reveal";

const ICONS = { Puzzle, Brain, Hand, HeartHandshake, Lightbulb, MessageCircle, Users, Activity, Stethoscope, Apple, BookOpen };

export default function Specialties({ specialties, team, onSeeTeam }) {
  const [active, setActive] = useState(null);
  const people = active ? team.filter((p) => p.areas?.includes(active.key)) : [];
  return (
    <section id="especialidades" className="border-y border-[#EDE7DC] bg-[#FBF7EF] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionTitle eyebrow="Especialidades" title="Cuidado em diferentes momentos da vida">
          Conheça as frentes de cuidado do Espaço Clínico Arco-íris, pensadas para acompanhar cada pessoa e sua família com escuta, respeito e delicadeza.
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <Reveal key={s.key} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-[22px] border border-[#EDE7DC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B7DAD6] hover:shadow-[0_18px_36px_-24px_rgba(20,51,60,0.35)]">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-[#1E6E71]" style={{ background: s.tint || "#DCEFEE" }}><Icon className="h-6 w-6" strokeWidth={1.6} /></span>
                  <h3 className="font-heading text-[21px] font-medium leading-snug text-[#14333C]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#5A6B6E]">{s.description}</p>
                  <button onClick={() => setActive(s)} className="mt-5 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[#1E6E71] transition group-hover:gap-2.5">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg rounded-[24px] border-[#EDE7DC] bg-[#FDFBF6]">
          <DialogHeader>
            <DialogTitle className="font-heading text-[26px] font-medium text-[#14333C]">{active?.name}</DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-[#5A6B6E]">{active?.description}</DialogDescription>
          </DialogHeader>
          {people.length > 0 && <p className="text-[15px] text-[#5A6B6E]"><strong className="text-[#14333C]">Profissionais:</strong> {people.map((p) => p.name).join(", ")}</p>}
          <button onClick={() => { const k = active.key; setActive(null); onSeeTeam(k); }} className="min-h-12 rounded-full bg-[#1E6E71] px-6 text-[15px] font-semibold text-white hover:bg-[#17585B]">
            Ver profissionais desta área
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}