export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "en";

export const ui = {
  en: {
    // Navigation
    "nav.index": "Index",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.words": "Words",
    "nav.contact": "Contact",
    "nav.light": "Light",
    "nav.dark": "Dark",

    // Hero Section
    "hero.currently": "Currently —",
    "hero.cta.contact": "Get in touch",

    // About Section
    "about.index": "Index · About",
    "about.title.line1": "Pragmatic engineering",
    "about.title.line2": "measured, typed, and shipped.",
    "about.basedIn": "Based in",
    "about.focus": "Focus",
    "about.focus.value": "Full-stack · Applied AI · Cloud",
    "about.writes": "Writes",
    "about.writes.value": "Python · TypeScript · SQL",
    "about.speaks": "Speaks",
    "about.speaks.value": "Portuguese · English",
    "about.certs": "Certs",
    "about.certs.value": "AWS AI · AWS CP",

    // Experience Section
    "experience.index": "Index · Experience",
    "experience.title": "Where I've shipped.",

    // Stack Section
    "stack.index": "Index · Stack",
    "stack.title": "Tools of the trade.",
    "stack.main": "Main stack",
    "stack.experience": "Experience with",
    "stack.certs": "Certifications",

    // Projects Section
    "projects.index": "Index · Selected work",
    "projects.title": "Projects.",
    "projects.filter.all": "All",
    "projects.filter.products": "Products",
    "projects.filter.apis": "APIs",
    "projects.filter.ai": "Applied AI",
    "projects.more": "More —",

    // Testimonials Section
    "testimonials.index": "Index · Words",
    "testimonials.title": "What others say.",
    "testimonials.prev": "Previous",
    "testimonials.next": "Next",

    // Contact Section
    "contact.index": "Index · Contact",
    "contact.title.line1": "Let's build",
    "contact.title.line2": "something together.",
    "contact.fastest": "01 · Fastest",
    "contact.anytime": "02 · Anytime",
    "contact.email": "Email",
    "contact.professional": "03 · Professional",
    "contact.linkedin": "LinkedIn",
    "contact.code": "04 · Code",
    "contact.github": "GitHub",

    // Footer
    "footer.built": "© 2026 · Built with Astro, React & care",
    "footer.designed": "Designed with Claude Design",
    "footer.lastRefactor": "Last refactor · Apr 2026",
    "footer.backToTop": "Back to top ↑",

    // Common
    "common.bullet": "·",
    "common.arrow": "→",
  },
  pt: {
    // Navigation
    "nav.index": "Índice",
    "nav.work": "Trabalhos",
    "nav.experience": "Experiência",
    "nav.stack": "Stack",
    "nav.words": "Depoimentos",
    "nav.contact": "Contato",
    "nav.light": "Claro",
    "nav.dark": "Escuro",

    // Hero Section
    "hero.currently": "Atualmente —",
    "hero.cta.contact": "Entre em contato",

    // About Section
    "about.index": "Índice · Sobre",
    "about.title.line1": "Engenharia pragmática",
    "about.title.line2": "medida, tipada e entregue.",
    "about.basedIn": "Baseado em",
    "about.focus": "Foco",
    "about.focus.value": "Full-stack · IA Aplicada · Cloud",
    "about.writes": "Escreve",
    "about.writes.value": "Python · TypeScript · SQL",
    "about.speaks": "Fala",
    "about.speaks.value": "Português · Inglês",
    "about.certs": "Certificações",
    "about.certs.value": "AWS AI · AWS CP",

    // Experience Section
    "experience.index": "Índice · Experiência",
    "experience.title": "Onde entreguei.",

    // Stack Section
    "stack.index": "Índice · Stack",
    "stack.title": "Ferramentas do ofício.",
    "stack.main": "Stack principal",
    "stack.experience": "Experiência com",
    "stack.certs": "Certificações",

    // Projects Section
    "projects.index": "Índice · Trabalhos selecionados",
    "projects.title": "Projetos.",
    "projects.filter.all": "Todos",
    "projects.filter.products": "Produtos",
    "projects.filter.apis": "APIs",
    "projects.filter.ai": "IA Aplicada",
    "projects.more": "Mais —",

    // Testimonials Section
    "testimonials.index": "Índice · Depoimentos",
    "testimonials.title": "O que outros dizem.",
    "testimonials.prev": "Anterior",
    "testimonials.next": "Próximo",

    // Contact Section
    "contact.index": "Índice · Contato",
    "contact.title.line1": "Vamos construir",
    "contact.title.line2": "algo juntos.",
    "contact.fastest": "01 · Mais rápido",
    "contact.anytime": "02 · Qualquer hora",
    "contact.email": "E-mail",
    "contact.professional": "03 · Profissional",
    "contact.linkedin": "LinkedIn",
    "contact.code": "04 · Código",
    "contact.github": "GitHub",

    // Footer
    "footer.built": "© 2026 · Construído com Astro, React & cuidado",
    "footer.designed": "Projetado com Claude Design",
    "footer.lastRefactor": "Última refatoração · Abr 2026",
    "footer.backToTop": "Voltar ao topo ↑",

    // Common
    "common.bullet": "·",
    "common.arrow": "→",
  },
} as const;

export type Lang = keyof typeof languages;
