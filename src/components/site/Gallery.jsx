import { useState } from "react";
import { Camera } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import Reveal, { SectionTitle } from "@/components/site/Reveal";

const PLACEHOLDERS = ["Recepção", "Consultórios", "Salas de atendimento", "Espaços de atendimento infantil", "Brinquedos e materiais lúdicos", "Ambientes de acolhimento"];
const TINTS = ["#FBF0B6", "#DCEFEE", "#F8E0EC", "#E7DEF4", "#FBEBD4", "#E6F1E4"];

export default function Gallery({ photos }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="espaco" className="border-y border-[#EDE7DC] bg-[#FBF7EF] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionTitle eyebrow="Nosso espaço" title="Um ambiente pensado para acolher">
          Um espaço preparado com carinho para que cada pessoa se sinta segura e à vontade.
        </SectionTitle>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.length > 0 ? photos.map((p, i) => (
            <Reveal key={p.id || i} delay={(i % 3) * 0.05}>
              <button onClick={() => setOpen(p)} className={`group relative block w-full overflow-hidden rounded-[22px] border border-[#EDE7DC] ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <Image src={p.image_url} alt={p.caption || p.category || "Foto da clínica"} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                {p.caption && <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14333C]/70 to-transparent p-4 text-left text-[14px] font-medium text-white">{p.caption}</span>}
              </button>
            </Reveal>
          )) : PLACEHOLDERS.map((t, i) => (
            <Reveal key={t} delay={(i % 3) * 0.05}>
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[22px] border border-dashed border-[#DCD5C8] p-4 text-center" style={{ background: TINTS[i] }}>
                <Camera className="h-5 w-5 text-[#1E6E71]/70" />
                <span className="font-heading text-[16px] font-medium text-[#14333C]">{t}</span>
                <span className="text-[12px] text-[#708183]">Em breve</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[13px] text-[#93A3A5]">As fotos reais do nosso espaço serão publicadas em breve.</p>
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl overflow-hidden rounded-[24px] border-[#EDE7DC] p-2">
          <DialogTitle className="sr-only">{open?.caption || "Foto da clínica"}</DialogTitle>
          {open && <img src={open.image_url} alt={open.caption || "Foto da clínica"} className="max-h-[80vh] w-full rounded-[18px] object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
}