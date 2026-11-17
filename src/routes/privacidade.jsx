import { Link } from "@tanstack/react-router";

export default function Privacy() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-20 text-[16px] leading-relaxed text-[#5A6B6E]">
      <Link to="/" className="text-[14px] font-semibold text-[#1E6E71]">← Voltar ao site</Link>
      <h1 className="mt-6 font-heading text-[36px] font-medium text-[#14333C]">Política de privacidade</h1>
      <p className="mt-6">O Espaço Clínico Arco-íris respeita a sua privacidade. Ao preencher o formulário de contato, os dados informados são organizados em uma mensagem e direcionados ao WhatsApp da clínica. A mensagem só é enviada quando você confirma o envio no próprio WhatsApp.</p>
      <p className="mt-4">O site não possui banco de dados próprio e não armazena os dados preenchidos no formulário. O tratamento posterior das informações segue as políticas e configurações do WhatsApp e da clínica.</p>
      <p className="mt-4">Para dúvidas sobre o tratamento das informações pela clínica, entre em contato pelo WhatsApp (48) 99129-1234.</p>
      <p className="mt-4 text-[14px] text-[#93A3A5]">Este texto é um modelo inicial e deve ser revisado pela clínica.</p>
    </main>
  );
}