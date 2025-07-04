import { MapPin, Briefcase, GraduationCap, Heart, Coffee, Music } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export function AboutSection() {
  const { activeProfile } = useProfile();

  const professionalContent = {
    title: "Sobre Mim",
    description: "Desenvolvedor full-stack apaixonado com mais de 6 anos de experiência criando soluções digitais que fazem a diferença. Especializado em transformar ideias complexas em aplicações simples, elegantes e funcionais. Atualmente baseado na Suécia, trabalhando com empresas europeias.",
    details: [
      { icon: <MapPin className="h-5 w-5" />, text: "Estocolmo, Suécia" },
      { icon: <Briefcase className="h-5 w-5" />, text: "Disponível para projetos" },
      { icon: <GraduationCap className="h-5 w-5" />, text: "Ciência da Computação, USP" }
    ],
    stats: [
      { number: "30+", label: "Projetos Entregues" },
      { number: "6+", label: "Anos de Experiência" }
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Ricardo Souza - Desenvolvedor Full Stack"
  };

  const personalContent = {
    title: "Sobre o Rick",
    description: "Brasileiro vivendo na Suécia, apaixonado por tecnologia, música e histórias. Acredito que as melhores experiências vêm das conexões que fazemos e das aventuras que vivemos. Aqui compartilho minha jornada entre dois mundos, sempre com um café na mão e uma boa playlist tocando.",
    details: [
      { icon: <MapPin className="h-5 w-5" />, text: "Entre Brasil e Suécia" },
      { icon: <Coffee className="h-5 w-5" />, text: "Viciado em café sueco" },
      { icon: <Music className="h-5 w-5" />, text: "Sempre ouvindo algo novo" }
    ],
    stats: [
      { number: "2", label: "Países Chamados de Casa" },
      { number: "∞", label: "Histórias para Contar" }
    ],
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Rick - Explorando a vida entre culturas"
  };

  const content = activeProfile === "professional" ? professionalContent : personalContent;
  const iconColor = activeProfile === "professional" 
    ? "text-blue-600 dark:text-blue-400" 
    : "text-purple-600 dark:text-purple-400";
  const statColor = activeProfile === "professional" 
    ? "text-blue-600 dark:text-blue-400" 
    : "text-purple-600 dark:text-purple-400";

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={content.image}
              alt={content.alt}
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="space-y-4">
              {content.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className={iconColor}>
                    {detail.icon}
                  </span>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className={`text-3xl font-bold mb-2 ${statColor}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
