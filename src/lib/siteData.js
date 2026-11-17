export const WHATSAPP = "5548991291234";
export const PHONE_LABEL = "(48) 99129-1234";
export const INSTAGRAM_URL = "https://www.instagram.com/espacoclinicoarcoiris/";
export const ADDRESS = "R. Clemente Tiago Diniz, 110 - Sala 304, Centro, Santo Amaro da Imperatriz - SC";

export const waLink = (msg = "Olá! Gostaria de agendar um atendimento no Espaço Clínico Arco-Íris.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Nossa equipe", href: "#equipe" },
  { label: "Nosso espaço", href: "#espaco" },
  { label: "Convênios", href: "#convenios" },
  { label: "Contato", href: "#contato" },
];

export const DEFAULT_SPECIALTIES = [
  { key: "psicopedagogia", name: "Psicopedagogia", icon: "Puzzle", tint: "#FFF1B8", description: "Apoio ao processo de aprendizagem, observando como cada pessoa aprende, se organiza e se relaciona com o conhecimento." },
  { key: "neuropsicopedagogia", name: "Neuropsicopedagogia", icon: "Brain", tint: "#DDF1EF", description: "Olhar para a aprendizagem integrando conhecimentos sobre o funcionamento do cérebro, a cognição e o desenvolvimento." },
  { key: "to", name: "Terapia Ocupacional", icon: "Hand", tint: "#FFE0EB", description: "Trabalha a autonomia e a participação nas atividades do dia a dia, respeitando o ritmo e as necessidades de cada pessoa." },
  { key: "psicologia", name: "Psicologia", icon: "HeartHandshake", tint: "#E8DDF7", description: "Espaço de escuta e acolhimento para compreender emoções, comportamentos e relações em cada fase da vida." },
  { key: "neuropsicologia", name: "Neuropsicologia", icon: "Lightbulb", tint: "#FFE9C7", description: "Avaliação e acompanhamento das funções cognitivas, como atenção, memória, linguagem e funções executivas." },
  { key: "fono", name: "Fonoaudiologia", icon: "MessageCircle", tint: "#DDF1EF", description: "Cuidado com a comunicação, a linguagem, a fala, a voz, a audição e a alimentação, da infância à vida adulta." },
  { key: "at", name: "Assistência Terapêutica", icon: "Users", tint: "#FFE0EB", description: "Acompanhamento próximo e individualizado, que apoia o dia a dia e dá continuidade ao cuidado em diferentes contextos." },
  { key: "fisio", name: "Fisioterapia", icon: "Activity", tint: "#E3F3E4", description: "Cuidado com o movimento, a postura e o desenvolvimento motor, com atenção às necessidades de cada paciente." },
  { key: "medicina", name: "Medicina", icon: "Stethoscope", tint: "#E8DDF7", description: "Avaliação clínica e acompanhamento médico integrados ao trabalho das demais especialidades da clínica." },
  { key: "nutricao", name: "Nutrição", icon: "Apple", tint: "#FFF1B8", description: "Orientação alimentar individualizada, considerando rotina, preferências e necessidades de cada pessoa e família." },
  { key: "reforco", name: "Reforço Escolar", icon: "BookOpen", tint: "#FFE9C7", description: "Apoio pedagógico nas disciplinas escolares, com acompanhamento individualizado e atenção ao ritmo do aluno." },
];

const P = (name, role, registry, areas, extra = {}) => ({ name, role, registry, areas, formation: "", bio: "", photo_url: "", ...extra });

export const DEFAULT_TEAM = [
  P("Janaina Grah", "Neuropsicopedagoga, CEO e fundadora", "", ["neuropsicopedagogia", "psicopedagogia"]),
  P("Haniel Willen", "Médico", "CRM-SC 38.444", ["medicina"]),
  P("Gabrielle Inda", "Médica", "CRM-SC 44.539", ["medicina"]),
  P("Matheus Balestrin", "Psicólogo", "CRP 12/24009", ["psicologia"]),
  P("Amanda Meurer", "Psicóloga", "CRP 12/23898", ["psicologia"]),
  P("Chaiane da Silva", "Neuropsicóloga", "CRP 12/26719", ["neuropsicologia"]),
  P("Rubiane Corrêa", "Neuropsicopedagoga", "", ["neuropsicopedagogia"]),
  P("Lucélia Assis", "Neuropsicopedagoga", "", ["neuropsicopedagogia"]),
  P("Stefany Ribeiro", "Fonoaudióloga", "CRFa 3-11009", ["fono"]),
  P("Jayne Rodrigues", "Terapeuta Ocupacional", "CREFITO 26148-TO", ["to"]),
  P("Thais Caetano", "Fisioterapeuta", "CREFITO 10/395827-F", ["fisio"]),
  P("Nattanael Ferreira", "Osteopata Pediátrico", "CREFITO 227448-F", ["fisio"]),
  P("Elisa Farias", "Nutricionista", "CRN 10 7171", ["nutricao"]),
  P("Leandro Santos", "Professor de Matemática", "", ["reforco"]),
  P("Bianca Castro", "Professora de Português", "", ["reforco"]),
  P("Bia Froio", "Enfermeira", "", []),
];

export const STEPS = [
  { title: "Primeiro contato", text: "A família entra em contato com a clínica pelo WhatsApp, telefone ou formulário." },
  { title: "Entendimento da necessidade", text: "Identificamos a demanda e a especialidade mais adequada para cada caso." },
  { title: "Encaminhamento", text: "Orientamos a família para o profissional correspondente." },
  { title: "Acompanhamento", text: "Atendimento e acompanhamento conforme as necessidades individuais." },
];