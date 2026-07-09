// src/data/specs.ts

// ---------- TIPOS (formato dos dados) ----------

export interface Spec {
  label: string;
  value: string;
  icon?: string; // opcional, usaremos depois com ícones
}

export interface SpecGroup {
  category: string;
  items: Spec[];
}

export interface GamePerformance {
  game: string;
  fps: string;
  settings: string; // ex: "Alto, 1080p"
}

export interface Differential {
  title: string;
  description: string;
}

// ---------- DADOS DO PRODUTO ----------

export const productInfo = {
  title: "Setup Gamer Completo",
  heroHeadline: "Um setup gamer completo, pronto para elevar sua experiência.",
  heroSubheadline:
    "Processador Ryzen 5, placa de vídeo RX 7600 e periféricos de alta performance — tudo reunido em um único setup.",
  ctaText: "Falar com o vendedor",
  whatsappNumber: "5579998452332",
  whatsappMessage:
    "Olá. Vi o anúncio do setup gamer e gostaria de obter mais informações.",
};

// ---------- ESPECIFICAÇÕES TÉCNICAS ----------

export const specGroups: SpecGroup[] = [
  {
    category: "PC",
    items: [
      { label: "Placa-mãe", value: "ASUS TUF Gaming A520" },
      { label: "Processador", value: "Ryzen 5 5500" },
      { label: "Placa de vídeo", value: "RX 7600 XFX 8GB" },
      { label: "Memória RAM", value: "16GB (2x8) 3200MHz Dual Channel" },
      { label: "Armazenamento", value: "SSD NVMe 512GB" },
      { label: "Fonte", value: "MSI MAG 650W" },
      { label: "Gabinete", value: "Mancer com 4 fans RGB" },
    ],
  },
  {
    category: "Periféricos",
    items: [
      { label: "Monitor", value: "Duex 180Hz" },
      { label: "Teclado", value: "Machenike K500 60%" },
      { label: "Mouse", value: "Attack Shark sem fio + dock" },
      { label: "Headset", value: "Havit H2002D" },
    ],
  },
];

// ---------- PERFORMANCE EM JOGOS (estimativa) ----------

export const gamePerformance: GamePerformance[] = [
  { game: "Valorant", fps: "300+ FPS", settings: "Alto, 1080p" },
  { game: "CS2", fps: "250+ FPS", settings: "Alto, 1080p" },
  { game: "Fortnite", fps: "170+ FPS", settings: "Alto, 1080p" },
  { game: "GTA V", fps: "150+ FPS", settings: "Muito Alto, 1080p" },
  { game: "Cyberpunk 2077", fps: "60+ FPS", settings: "Médio-Alto, 1080p" },
];

// ---------- DIFERENCIAIS ----------

export const differentials: Differential[] = [
  {
    title: "Pronto para uso imediato",
    description:
      "Equipamento testado e configurado, permitindo uso imediato após a aquisição.",
  },
  {
    title: "Excelente custo-benefício",
    description:
      "Performance equivalente a setups de valor consideravelmente superior.",
  },
  {
    title: "Acabamento premium",
    description:
      "Iluminação RGB sincronizada e acabamento refinado em todos os componentes.",
  },
  {
    title: "Alta taxa de atualização",
    description:
      "Monitor de 180Hz, indicado para jogos competitivos que exigem fluidez e resposta rápida.",
  },
];

// ---------- PERGUNTAS FREQUENTES ----------

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "À vista,cartão de crédito ou trocas coerentes.",
  },
  {
    question: "É possível ver o setup funcionando antes de fechar negócio?",
    answer:
      "Sim, é possível testar o equipamento pessoalmente antes da confirmação da compra.",
  },
  {
    question: "Vocês realizam entrega?",
    answer:
      "A entrega pode ser combinada conforme a localidade. Entre em contato para verificar a disponibilidade para sua região.",
  },
];