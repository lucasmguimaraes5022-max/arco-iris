import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/siteData";
import Eyebrow from "@/components/site/Eyebrow";
import Reveal from "@/components/site/Reveal";
import TestimonialCard from "@/components/site/TestimonialCard";

export default function TestimonialsSection({ items = [] }) {
  const list = [...items].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <section className="border-y border-[#EDE7DC] bg-[#FBF7EF] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="max-w-[720px]">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-4 font-heading text-[30px] font-medium leading-[1.12] text-[#14333C] md:text-[42px]">
            Histórias de cuidado, confiança e acolhimento
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#5A6B6E]">
            A confiança das famílias é muito importante para nós. Conheça algumas experiências de quem já
            passou pelo Espaço Clínico Arco-Íris.
          </p>
        </Reveal>

        {list.length > 0 ? (
          <Reveal delay={0.08}>
            <Carousel opts={{ align: "start", loop: false }} className="mt-10">
              <CarouselContent>
                {list.map((item, i) => (
                  <CarouselItem key={item.id || i} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <TestimonialCard item={item} index={i} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex items-center gap-3">
                <CarouselPrevious className="static left-auto top-auto h-11 w-11 translate-y-0 border-[#14333C]/15 bg-white text-[#14333C] shadow-sm hover:bg-white/70 disabled:opacity-35" />
                <CarouselNext className="static right-auto top-auto h-11 w-11 translate-y-0 border-[#14333C]/15 bg-white text-[#14333C] shadow-sm hover:bg-white/70 disabled:opacity-35" />
                <span className="ml-1 text-[13px] text-[#5A6B6E]">Depoimentos autorizados pelas famílias</span>
              </div>
            </Carousel>
          </Reveal>
        ) : (
          <Reveal delay={0.08}>
            <div className="mt-10 rounded-[24px] border border-[#EDE7DC] bg-white p-8 md:p-10">
              <p className="font-heading text-[22px] leading-snug text-[#14333C]">
                Este espaço é reservado às histórias reais das famílias que atendemos.
              </p>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#5A6B6E]">
                Publicamos apenas depoimentos enviados voluntariamente e autorizados, com respeito à
                privacidade de crianças, adolescentes e adultos. Se você já é atendido pelo Arco-Íris e
                deseja compartilhar sua experiência, sua história é muito bem-vinda.
              </p>
              <a
                href={waLink("Olá! Gostaria de compartilhar minha experiência com o Espaço Clínico Arco-Íris.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1E6E71] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#17585B]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Compartilhar minha experiência
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}