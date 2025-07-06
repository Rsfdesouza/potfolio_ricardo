import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { activeProfile } = useProfile();
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const professionalContent = {
    greeting: "👋 Olá, seja bem-vindo!",
    name: "Ricardo Souza",
    title: "Desenvolvedor Full Stack",
    subtitle: "Soluções digitais modernas, escaláveis e sob medida para o seu negócio.",
    description: "Especialista em React, TypeScript e tecnologias web modernas. Atuo com foco em performance, usabilidade e inovação para entregar produtos digitais de alto valor.",
    location: "📍 Baseado em Estocolmo, Suécia — com atuação internacional.",
    primaryButton: "Ver Projetos",
    secondaryButton: "Download CV",
    availability: "Disponível para projetos"
  };

  const personalContent = {
    greeting: "Oi! Bem Vindo ao meu Mundo! 🇸🇪",
    name: "Rick Souza",
    title: "Profissional digital apaixonado por tecnologia, cultura e comunicação.",
    subtitle: "Vivendo entre Brasil e Suécia, compartilho experiências reais, curiosidades e aprendizados da vida no exterior.",
    description: "",
    location: undefined,
    primaryButton: "Ler Blog",
    secondaryButton: "Minha Jornada",
    availability: "Sempre conectado"
  };

  const content = activeProfile === "professional" ? professionalContent : personalContent;
  const gradientClass = "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900";

  return (
    <section
      id="home"
      className={`pt-20 min-h-screen flex items-center ${gradientClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                {content.greeting}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {content.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
                {content.subtitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {content.description}
              </p>
              {content.location && (
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {content.location}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection(activeProfile === "professional" ? "projects" : "blog")}
                className="px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700"
              >
                <Eye className="mr-2 h-4 w-4" />
                {content.primaryButton}
              </Button>
              <Button
                variant="outline"
                className="border-2 px-8 py-3 rounded-lg font-medium transition-colors duration-200 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                {content.secondaryButton}
              </Button>
            </div>

            {/* CTAs secundários */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("blog")}
                variant="outline"
                className="px-6 py-2 rounded-lg font-medium transition-colors duration-200 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                → {t("hero.cta.blog")}
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-2 rounded-lg font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white"
              >
                🔍 {t("hero.cta.projects")}
              </Button>
            </div>

            {/* Redes sociais */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:contato@ricksouza.online"
                className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img
              src={activeProfile === "professional" 
                ? "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              }
              alt={activeProfile === "professional" 
                ? "Workspace de desenvolvedor moderno com monitores e código"
                : "Paisagem da Suécia com montanhas e lagos"
              }
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full animate-pulse bg-green-500"></div>
                <span className="text-sm font-medium">{content.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
