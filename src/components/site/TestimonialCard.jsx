import { Quote, Star, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";

const TONES = ["#FFEDE9", "#E6F4F3", "#F0EAFB", "#FFF6D6"];

function formatDate(value) {
  if (!value) return "";
  const parts = String(value).slice(0, 10).split("-");
  if (parts.length !== 3) return "";
  const d = new Date(Date.UTC(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])));
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", { timeZone: "UTC", month: "long", year: "numeric" });
}

export default function TestimonialCard({ item, index }) {
  const tone = TONES[index % TONES.length];
  const date = formatDate(item.testimonial_date || item.created_date);
  const initials = (item.author || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <figure
      className="flex h-full flex-col rounded-[24px] border border-[#EDE7DC] p-7"
      style={{ backgroundColor: tone }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-body text-[11px] uppercase tracking-[0.18em] text-[#5A6B6E]">
          ({String(index + 1).padStart(2, "0")})
        </span>
        {item.featured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[#1E6E71]">
            <Sparkles className="h-3 w-3" aria-hidden="true" /> Destaque
          </span>
        ) : (
          <Quote className="h-5 w-5 text-[#1E6E71]/40" aria-hidden="true" />
        )}
      </div>

      {item.rating > 0 && (
        <span className="mt-4 flex gap-0.5" aria-label={`${item.rating} de 5 estrelas`}>
          {Array.from({ length: item.rating }).map((_, k) => (
            <Star key={k} className="h-3.5 w-3.5 fill-[#C99B1E] text-[#C99B1E]" aria-hidden="true" />
          ))}
        </span>
      )}

      <blockquote className="mt-4 flex-1 font-heading text-[19px] leading-[1.45] text-[#14333C]">
        “{item.text}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-[#14333C]/12 pt-4">
        {item.photo_url ? (
          <Image
            src={item.photo_url}
            alt={item.author}
            className="h-11 w-11 shrink-0 overflow-hidden rounded-full object-cover"
          />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 font-heading text-[15px] text-[#1E6E71]">
            {initials}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-heading text-[16px] font-medium text-[#14333C]">{item.author}</span>
          <span className="block text-[12.5px] leading-snug text-[#5A6B6E]">
            {[item.relation, date].filter(Boolean).join(" · ")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}