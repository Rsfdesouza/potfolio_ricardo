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
    "nav.timeline": "Timeline",
    "nav.blog": "Blog",
    "nav.downloads": "Downloads",
    "nav.contact": "Contact",
    "nav.journey": "Journey",
    
    // Hero Section
    "hero.professional.headline": "Full Stack Developer passionate about modern and creative solutions.",
    "hero.professional.specialty": "Specialized in React, TypeScript and web technologies.",
    "hero.cta.blog": "Read blog articles",
    "hero.cta.journey": "See my journey",
    "hero.cta.projects": "See My Projects",
    
    // About Section
    "about.professional.title": "About Me",
    "about.professional.description": "Full-stack developer passionate about creating digital solutions that make a difference. Specialized in transforming complex ideas into simple, elegant, and functional applications. Currently based in Sweden, working with European companies.",
    "about.personal.title": "About Rick",
    "about.personal.description": "Brazilian living in Sweden, passionate about technology, music, and stories. I believe the best experiences come from the connections we make and the adventures we live. Here I share my journey between two worlds, always with coffee in hand and a good playlist playing.",
    
    // About Rick Section
    "about.rick.title": "About me",
    "about.rick.intro": "I am Ricardo Souza, a Brazilian Full Stack developer living in Sweden. I have a passion for technology, music and telling stories through digital experiences.",
    "about.rick.specialties": "Currently I specialize in:",
    "about.rick.mission": "My mission is to create simple, modern solutions that connect people.",
    
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
    "nav.timeline": "Trajetória",
    "nav.blog": "Blog",
    "nav.downloads": "Downloads",
    "nav.contact": "Contato",
    "nav.journey": "Jornada",
    
    // Hero Section
    "hero.professional.headline": "Desenvolvedor Full Stack apaixonado por soluções modernas e criativas.",
    "hero.professional.specialty": "Especializado em React, TypeScript e tecnologias web.",
    "hero.cta.blog": "Ler artigos no blog",
    "hero.cta.journey": "Veja minha trajetória",
    "hero.cta.projects": "Ver Meus Projetos",
    
    // About Section
    "about.professional.title": "Sobre Mim",
    "about.professional.description": "Desenvolvedor full-stack apaixonado com mais de 6 anos de experiência criando soluções digitais que fazem a diferença. Especializado em transformar ideias complexas em aplicações simples, elegantes e funcionais. Atualmente baseado na Suécia, trabalhando com empresas europeias.",
    "about.personal.title": "Sobre o Rick",
    "about.personal.description": "Brasileiro vivendo na Suécia, apaixonado por tecnologia, música e histórias. Acredito que as melhores experiências vêm das conexões que fazemos e das aventuras que vivemos. Aqui compartilho minha jornada entre dois mundos, sempre com um café na mão e uma boa playlist tocando.",
    
    // About Rick Section
    "about.rick.title": "Sobre mim",
    "about.rick.intro": "Sou Ricardo Souza, desenvolvedor Full Stack brasileiro vivendo na Suécia. Tenho paixão por tecnologia, música e contar histórias através de experiências digitais.",
    "about.rick.specialties": "Atualmente me especializo em:",
    "about.rick.mission": "Minha missão é criar soluções simples, modernas e que conectem pessoas.",
    
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
    "nav.timeline": "Trayectoria",
    "nav.blog": "Blog",
    "nav.downloads": "Descargas",
    "nav.contact": "Contacto",
    "nav.journey": "Viaje",
    
    // Hero Section
    "hero.professional.headline": "Desarrollador Full Stack apasionado por soluciones modernas y creativas.",
    "hero.professional.specialty": "Especializado en React, TypeScript y tecnologías web.",
    "hero.cta.blog": "Leer artículos del blog",
    "hero.cta.journey": "Ver mi trayectoria",
    "hero.cta.projects": "Ver Mis Proyectos",
    
    // About Section
    "about.professional.title": "Sobre Mí",
    "about.professional.description": "Desarrollador full-stack apasionado con más de 6 años de experiencia creando soluciones digitales que marcan la diferencia. Especializado en transformar ideas complejas en aplicaciones simples, elegantes y funcionales. Actualmente radicado en Suecia, trabajando con empresas europeas.",
    "about.personal.title": "Sobre Rick",
    "about.personal.description": "Brasileño viviendo en Suecia, apasionado por la tecnología, música e historias. Creo que las mejores experiencias vienen de las conexiones que hacemos y las aventuras que vivimos. Aquí comparto mi viaje entre dos mundos, siempre con café en mano y una buena playlist sonando.",
    
    // About Rick Section
    "about.rick.title": "Sobre mí",
    "about.rick.intro": "Soy Ricardo Souza, desarrollador Full Stack brasileño viviendo en Suecia. Tengo pasión por la tecnología, música y contar historias a través de experiencias digitales.",
    "about.rick.specialties": "Actualmente me especializo en:",
    "about.rick.mission": "Mi misión es crear soluciones simples, modernas y que conecten personas.",
    
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
  const [language, setLanguage] = useState<Language>("en");

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