import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export function HeroSection() {
  const { activeProfile } = useProfile();
  
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlog = () => {
    const element = document.getElementById("blog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const professionalContent = {
    greeting: "Olá! Bem-vindo 👋",
    name: "Ricardo Souza",
    title: "Desenvolvedor Full Stack & Trabalhador Digital",
    description: "Criar soluções digitais modernas e funcionais é minha paixão. Especializado em React, TypeScript e tecnologias web modernas. Vivendo entre o Brasil e a Suécia.",
    location: "Suécia • Brasil",
    primaryButton: "Ver Projetos",
    secondaryButton: "Download CV",
    availability: "Disponível para projetos"
  };

  const personalContent = {
    greeting: "Oi! Que bom te ver aqui 🇸🇪",
    name: "Rick Souza",
    title: "Entusiasta do Digital & Contador de Histórias",
    description: "Compartilho minha jornada entre o Brasil e a Suécia, tecnologia, música e as curiosidades da vida no exterior. Aqui você encontra histórias autênticas e dicas práticas.",
    location: "Explorando a Suécia",
    primaryButton: "Ler Blog",
    secondaryButton: "Minha Jornada",
    availability: "Sempre conectado"
  };

  const content = activeProfile === "professional" ? professionalContent : personalContent;
  const gradientClass = activeProfile === "professional" 
    ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"
    : "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900";

  return (
    <section
      id="home"
      className={`pt-20 min-h-screen flex items-center ${gradientClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className={`font-medium mb-2 ${activeProfile === "professional" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>
                {content.greeting}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Eu sou{" "}
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  activeProfile === "professional" 
                    ? "from-blue-600 to-purple-600" 
                    : "from-purple-600 to-pink-600"
                }`}>
                  {content.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4">
                {content.title}
              </h2>
              <div className="flex items-center space-x-2 mt-4">
                <MapPin className={`h-5 w-5 ${activeProfile === "professional" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`} />
                <span className="text-gray-600 dark:text-gray-300">{content.location}</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={activeProfile === "professional" ? scrollToProjects : scrollToBlog}
                className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center text-white ${
                  activeProfile === "professional" 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                <Eye className="mr-2 h-4 w-4" />
                {content.primaryButton}
              </Button>
              <Button
                variant="outline"
                className={`border-2 px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeProfile === "professional" 
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white" 
                    : "border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white"
                }`}
              >
                <Download className="mr-2 h-4 w-4" />
                {content.secondaryButton}
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 transition-colors duration-200 ${
                  activeProfile === "professional" 
                    ? "hover:text-blue-600 dark:hover:text-blue-400" 
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 transition-colors duration-200 ${
                  activeProfile === "professional" 
                    ? "hover:text-blue-600 dark:hover:text-blue-400" 
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 transition-colors duration-200 ${
                  activeProfile === "professional" 
                    ? "hover:text-blue-600 dark:hover:text-blue-400" 
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:contato@ricksouza.online"
                className={`text-gray-600 dark:text-gray-300 transition-colors duration-200 ${
                  activeProfile === "professional" 
                    ? "hover:text-blue-600 dark:hover:text-blue-400" 
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img
              src={activeProfile === "professional" 
                ? "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              }
              alt={activeProfile === "professional" 
                ? "Workspace de desenvolvedor moderno com monitores e código"
                : "Paisagem da Suécia com montanhas e lagos"
              }
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  activeProfile === "professional" ? "bg-green-500" : "bg-purple-500"
                }`}></div>
                <span className="text-sm font-medium">{content.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
