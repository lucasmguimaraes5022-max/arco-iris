import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/siteData";

const field = "min-h-12 w-full rounded-[14px] border border-[#E4DED2] bg-white px-4 text-[15px] text-[#14333C] outline-none placeholder:text-[#A9B4B6] focus:border-[#1E6E71] focus:ring-2 focus:ring-[#1E6E71]/15";
const label = "mb-1.5 block text-[13px] font-semibold text-[#3C5257]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const text = [
      "Olá! Gostaria de entrar em contato com o Espaço Clínico Arco-Íris.",
      "",
      `Nome do responsável: ${name}`,
      `Telefone: ${phone}`,
      email ? `E-mail: ${email}` : "",
      `Mensagem: ${message}`,
      "",
      "Autorizo o contato para retorno desta mensagem.",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[22px] border border-[#EDE7DC] bg-white p-10 text-center">
        <CheckCircle2 className="mb-4 h-11 w-11 text-[#1E6E71]" strokeWidth={1.5} />
        <h3 className="font-heading text-[24px] font-medium text-[#14333C]">WhatsApp aberto</h3>
        <p className="mt-2 text-[15px] text-[#5A6B6E]">Confira os dados e envie a mensagem pelo WhatsApp para concluir o contato.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-5 rounded-full border border-[#DCEFEE] px-5 py-2 text-sm font-semibold text-[#1E6E71]">Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[22px] border border-[#EDE7DC] bg-white p-7">
      <h3 className="font-heading text-[24px] font-medium text-[#14333C]">Envie uma mensagem</h3>
      <p className="mb-5 mt-1 text-[14px] text-[#5A6B6E]">Você será direcionado ao WhatsApp para enviar seus dados à nossa equipe.</p>
      <div className="space-y-4">
        <label className="block"><span className={label}>Nome do responsável</span><input name="name" required maxLength={120} className={field} autoComplete="name" /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block"><span className={label}>Telefone</span><input name="phone" required maxLength={30} inputMode="tel" className={field} autoComplete="tel" /></label>
          <label className="block"><span className={label}>E-mail (opcional)</span><input name="email" type="email" maxLength={160} className={field} autoComplete="email" /></label>
        </div>
        <label className="block"><span className={label}>Mensagem</span><textarea name="message" required maxLength={1500} rows={4} className={`${field} py-3`} /></label>
        <p className="rounded-[12px] bg-[#FBF7EF] p-3 text-[12px] leading-relaxed text-[#7D8F92]">Para sua segurança, não inclua informações clínicas, diagnósticos ou dados sensíveis nesta mensagem.</p>
        <label className="flex items-start gap-3 text-[12px] leading-relaxed text-[#5A6B6E]"><input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#1E6E71]" />Li e concordo com a política de privacidade e autorizo o uso dos meus dados apenas para retorno deste contato.</label>
        <button className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#1E6E71] text-[15px] font-semibold text-white transition hover:bg-[#17585B]"><MessageCircle className="h-4 w-4" /> Continuar pelo WhatsApp</button>
      </div>
    </form>
  );
}
