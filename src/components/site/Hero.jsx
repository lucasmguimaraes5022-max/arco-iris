import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Home, Sprout } from "lucide-react";
import { Image } from "@/components/ui/image";
import { LogoMark, RainbowArc } from "@/components/site/Logo";
import Eyebrow from "@/components/site/Eyebrow";
import { waLink } from "@/lib/siteData";

const TRUST = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: Home, label: "Ambiente acolhedor" },
  { icon: Sprout, label: "Respeito à individualidade" },
];

export default function Hero({ photoUrl }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Eyebrow>Clínica multidisciplinar · Santo Amaro da Imperatriz</Eyebrow>
          <h1 className="mt-6 max-w-[15ch] font-heading text-[38px] font-medium leading-[1.08] text-[#14333C] md:text-[54px]">
            Cada pessoa é única. Cada{" "}
            <span className="box-decoration-clone bg-[#FBF0B6] px-2">desenvolvimento</span> também.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5A6B6E] md:text-[18px]">
            No Espaço Clínico Arco-íris, diferentes especialidades se unem para oferecer acolhimento, cuidado e acompanhamento individualizado em cada etapa da vida.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#sobre" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#DCEFEE] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#14333C] shadow-sm transition hover:border-[#1E6E71]/30 hover:shadow">
              Conheça nosso espaço <ArrowRight className="h-4 w-4" />
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#1E6E71] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#17585B]">
              Agende uma consulta
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-[14px] text-[#5A6B6E]">
                <t.icon className="h-4 w-4 text-[#1E6E71]" strokeWidth={1.7} /> {t.label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-[520px]">
          <span className="absolute -top-8 right-4 h-24 w-24 rounded-full bg-[#F8E6A0]/80 md:h-28 md:w-28" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[210px] rounded-b-[36px] border-[9px] border-[#F5D8E7] bg-[#F3EFE6]">
            {photoUrl ? (
              <Image src={photoUrl} alt="Sala de atendimento infantil do Espaço Clínico Arco-íris" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#FBF0B6] via-[#F5D8E7]/60 to-[#DCEFEE] p-14">
                <LogoMark className="w-full opacity-80" />
              </div>
            )}
          </div>
          <RainbowArc className="absolute -bottom-6 -left-8 h-16 w-24 md:-left-10 md:h-20 md:w-28" />
          <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] text-[#5A6B6E]">Imagem ilustrativa</span>
        </motion.div>
      </div>
    </section>
  );
}