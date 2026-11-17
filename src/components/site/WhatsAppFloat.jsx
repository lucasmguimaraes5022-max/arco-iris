import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/siteData";

export default function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1E6E71] text-white shadow-lg transition hover:scale-105 hover:bg-[#17585B]">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}