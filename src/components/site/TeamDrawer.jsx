import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Avatar from "@/components/site/Avatar";
import { waLink } from "@/lib/siteData";

export default function TeamDrawer({ person, specialties, onClose }) {
  const areas = person ? specialties.filter((s) => person.areas?.includes(s.key)) : [];
  return (
    <Sheet open={!!person} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-full overflow-y-auto border-[#EDE7DC] bg-[#FDFBF6] sm:max-w-md">
        {person && (
          <>
            <Avatar person={person} className="mt-6 aspect-[4/3] w-full rounded-t-[90px] rounded-b-[20px]" />
            <SheetHeader className="mt-6 text-left">
              <SheetTitle className="font-heading text-[26px] font-medium text-[#14333C]">{person.name}</SheetTitle>
              <SheetDescription className="text-[15px] text-[#5A6B6E]">
                {person.role}{person.registry ? ` · ${person.registry}` : ""}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#5A6B6E]">
              {person.formation && <div><h4 className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E6E71]">Formação e especializações</h4><p className="whitespace-pre-line">{person.formation}</p></div>}
              <div><h4 className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E6E71]">Atuação</h4>
                <p>{person.bio || "Integra a equipe multidisciplinar do Espaço Clínico Arco-íris. A apresentação completa deste profissional será publicada em breve."}</p></div>
              {areas.length > 0 && (
                <div><h4 className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E6E71]">Especialidades atendidas</h4>
                  <div className="flex flex-wrap gap-2">{areas.map((a) => <span key={a.key} className="rounded-full bg-[#DCEFEE] px-3 py-1 text-[13px] font-medium text-[#1E6E71]">{a.name}</span>)}</div></div>
              )}
            </div>
            <a href={waLink(`Olá! Gostaria de agendar um atendimento com ${person.name}.`)} target="_blank" rel="noreferrer"
              className="mt-8 flex min-h-[52px] items-center justify-center rounded-full bg-[#1E6E71] text-[15px] font-semibold text-white hover:bg-[#17585B]">
              Agendar com este profissional
            </a>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}