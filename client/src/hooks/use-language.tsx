import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.downloads": "Downloads",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.professional.headline": "Full Stack Developer",
    "hero.professional.subtitle": "Modern, scalable and custom digital solutions for your business.",
    "hero.professional.specialty": "Expert in React, TypeScript and modern web technologies. I work with focus on performance, usability and innovation to deliver high-value digital products.",
    "hero.cta.blog": "Read blog articles",
    "hero.cta.projects": "See My Projects",
    
    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Here are some of the projects I've developed, applying my skills with modern technologies and focusing on real solutions.",
    "projects.featured": "Featured Projects",
    "projects.all": "All Projects",
    "projects.viewAll": "View All Projects",
    
    // About Section
    "about.professional.title": "About Me",
    "about.professional.description": "Full-stack developer passionate about creating digital solutions that make a difference. Specialized in transforming complex ideas into simple, elegant, and functional applications. Currently based in Sweden, working with European companies.",
    "about.personal.title": "About Rick",
    "about.personal.description": "Exploring connections between technology, culture and international life. Technology professional with experience between Brazil and Sweden, I share real experiences about innovation, music and routine abroad — always with a practical, authentic and inspiring vision.",
    
    // Common
    "location.stockholm": "Stockholm, Sweden",
    "location.brazil_sweden": "Between Brazil and Sweden",
    "status.available": "Available for projects",
    "education.computer_science": "Computer Science, USP",
    "coffee.addict": "Swedish coffee addict",
    "music.always": "Always listening to something new",
    
    // Stats
    "stats.projects": "Projects Delivered",
    "stats.experience": "Years of Experience",
    "stats.countries": "Countries Called Home",
    "stats.stories": "Stories to Tell",
    
    // Certifications
    "certifications.title": "Certifications",
    "certifications.subtitle": "Continuous learning and professional development",
    "certifications.view": "View Certificate",
    "certifications.more": "Want to see more?",
    "certifications.linkedin": "View on LinkedIn",
    
    // Language names
    "lang.en": "English",
    "lang.pt": "Português",
    "lang.es": "Español",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.blog": "Blog",
    "nav.downloads": "Downloads",
    "nav.contact": "Contato",
    
    // Hero Section
    "hero.professional.headline": "Desenvolvedor Full Stack",
    "hero.professional.subtitle": "Soluções digitais modernas, escaláveis e sob medida para o seu negócio.",
    "hero.professional.specialty": "Especialista em React, TypeScript e tecnologias web modernas. Atuo com foco em performance, usabilidade e inovação para entregar produtos digitais de alto valor.",
    "hero.cta.blog": "Ler artigos no blog",
    "hero.cta.projects": "Ver Meus Projetos",
    
    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.subtitle": "Aqui estão alguns dos projetos que desenvolvi, aplicando na prática minhas habilidades com tecnologias modernas e foco em soluções reais.",
    "projects.featured": "Projetos em Destaque",
    "projects.all": "Todos os Projetos",
    "projects.viewAll": "Ver Todos os Projetos",
    
    // About Section
    "about.professional.title": "Sobre Mim",
    "about.professional.description": "Desenvolvedor full-stack apaixonado com mais de 6 anos de experiência criando soluções digitais que fazem a diferença. Especializado em transformar ideias complexas em aplicações simples, elegantes e funcionais. Atualmente baseado na Suécia, trabalhando com empresas europeias.",
    "about.personal.title": "Sobre o Rick",
    "about.personal.description": "Explorando conexões entre tecnologia, cultura e vida internacional. Profissional de tecnologia com vivência entre Brasil e Suécia, compartilho experiências reais sobre inovação, música e a rotina no exterior — sempre com uma visão prática, autêntica e inspiradora.",
    
    // Common
    "location.stockholm": "Estocolmo, Suécia",
    "location.brazil_sweden": "Entre Brasil e Suécia",
    "status.available": "Disponível para projetos",
    "education.computer_science": "Ciência da Computação, USP",
    "coffee.addict": "Viciado em café sueco",
    "music.always": "Sempre ouvindo algo novo",
    
    // Stats
    "stats.projects": "Projetos Entregues",
    "stats.experience": "Anos de Experiência",
    "stats.countries": "Países Chamados de Casa",
    "stats.stories": "Histórias para Contar",
    
    // Certifications
    "certifications.title": "Certificações",
    "certifications.subtitle": "Aprendizado contínuo e desenvolvimento profissional",
    "certifications.view": "Ver Certificado",
    "certifications.more": "Quer ver mais?",
    "certifications.linkedin": "Ver no LinkedIn",
    
    // Language names
    "lang.en": "English",
    "lang.pt": "Português",
    "lang.es": "Español",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.downloads": "Descargas",
    "nav.contact": "Contacto",
    
    // Hero Section
    "hero.professional.headline": "Desarrollador Full Stack",
    "hero.professional.subtitle": "Soluciones digitales modernas, escalables y a medida para tu negocio.",
    "hero.professional.specialty": "Especialista en React, TypeScript y tecnologías web modernas. Actúo con enfoque en rendimiento, usabilidad e innovación para entregar productos digitales de alto valor.",
    "hero.cta.blog": "Leer artículos del blog",
    "hero.cta.projects": "Ver Mis Proyectos",
    
    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Aquí están algunos de los proyectos que he desarrollado, aplicando en la práctica mis habilidades con tecnologías modernas y enfoque en soluciones reales.",
    "projects.featured": "Proyectos Destacados",
    "projects.all": "Todos los Proyectos",
    "projects.viewAll": "Ver Todos los Proyectos",
    
    // About Section
    "about.professional.title": "Sobre Mí",
    "about.professional.description": "Desarrollador full-stack apasionado con más de 6 años de experiencia creando soluciones digitales que marcan la diferencia. Especializado en transformar ideas complejas en aplicaciones simples, elegantes y funcionales. Actualmente radicado en Suecia, trabajando con empresas europeas.",
    "about.personal.title": "Sobre Rick",
    "about.personal.description": "Explorando conexiones entre tecnología, cultura y vida internacional. Profesional de tecnología con vivencia entre Brasil y Suecia, comparto experiencias reales sobre innovación, música y la rutina en el exterior — siempre con una visión práctica, auténtica e inspiradora.",
    
    // Common
    "location.stockholm": "Estocolmo, Suecia",
    "location.brazil_sweden": "Entre Brasil y Suecia",
    "status.available": "Disponible para proyectos",
    "education.computer_science": "Ciencias de la Computación, USP",
    "coffee.addict": "Adicto al café sueco",
    "music.always": "Siempre escuchando algo nuevo",
    
    // Stats
    "stats.projects": "Proyectos Entregados",
    "stats.experience": "Años de Experiencia",
    "stats.countries": "Países Llamados Hogar",
    "stats.stories": "Historias para Contar",
    
    // Language names
    "lang.en": "English",
    "lang.pt": "Português",
    "lang.es": "Español",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 