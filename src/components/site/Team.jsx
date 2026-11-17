import { useState } from "react";
import Reveal, { SectionTitle } from "@/components/site/Reveal";
import Avatar from "@/components/site/Avatar";
import TeamDrawer from "@/components/site/TeamDrawer";

export default function Team({ team, specialties, filter, setFilter }) {
  const [selected, setSelected] = useState(null);
  const list = filter === "all" ? team : team.filter((p) => p.areas?.includes(filter));
  const chips = [{ key: "all", name: "Todos" }, ...specialties];
  return (
    <section id="equipe" className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
      <SectionTitle eyebrow="Nossa equipe" title="Pessoas que cuidam com dedicação">
        Profissionais de diferentes áreas, dedicados ao cuidado e ao acolhimento das famílias. Clique para conhecer cada um.
      </SectionTitle>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por especialidade">
        {chips.map((c) => (
          <button key={c.key} onClick={() => setFilter(c.key)} aria-pressed={filter === c.key}
            className={`min-h-10 rounded-full border px-4 text-[13px] font-semibold transition ${filter === c.key ? "border-[#1E6E71] bg-[#1E6E71] text-white" : "border-[#E4DED2] bg-white text-[#5A6B6E] hover:border-[#B7DAD6] hover:text-[#1E6E71]"}`}>
            {c.name}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 0.05}>
            <button onClick={() => setSelected(p)} className="group w-full text-left">
              <Avatar person={p} className="aspect-[4/5] w-full rounded-t-[120px] rounded-b-[20px]" />
              <h3 className="mt-4 font-heading text-[19px] font-medium text-[#14333C] group-hover:text-[#1E6E71]">{p.name}</h3>
              <p className="mt-0.5 text-[14px] text-[#5A6B6E]">{p.role}</p>
              {p.registry && <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-[#93A3A5]">{p.registry}</p>}
            </button>
          </Reveal>
        ))}
      </div>
      {list.length === 0 && <p className="text-[15px] text-[#5A6B6E]">Nenhum profissional cadastrado nesta área ainda.</p>}
      <TeamDrawer person={selected} specialties={specialties} onClose={() => setSelected(null)} />
    </section>
  );
}