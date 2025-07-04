import { useProfile } from "@/hooks/use-profile";
import { MapPin, Calendar, Briefcase, GraduationCap, Plane, Music } from "lucide-react";

export function TimelineSection() {
  const { activeProfile } = useProfile();

  const professionalTimeline = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Senior",
      description: "Liderando projetos de desenvolvimento web com React, Node.js e tecnologias modernas. Foco em arquitetura de software e mentoria de equipe.",
      date: "2022 - Presente",
      location: "Suécia",
      icon: <Briefcase className="h-4 w-4" />,
      category: "career",
      color: "blue"
    },
    {
      id: 2,
      title: "Mudança para a Suécia",
      description: "Transição de carreira internacional, adaptação a novas culturas de trabalho e desenvolvimento de projetos globais.",
      date: "2021",
      location: "Estocolmo, Suécia",
      icon: <Plane className="h-4 w-4" />,
      category: "personal",
      color: "green"
    },
    {
      id: 3,
      title: "Desenvolvedor Full Stack",
      description: "Desenvolvimento de aplicações web e mobile para startups brasileiras. Especialização em React, TypeScript e metodologias ágeis.",
      date: "2018 - 2021",
      location: "São Paulo, Brasil",
      icon: <Briefcase className="h-4 w-4" />,
      category: "career",
      color: "blue"
    },
    {
      id: 4,
      title: "Formação em Ciência da Computação",
      description: "Graduação com foco em desenvolvimento de software, algoritmos e estruturas de dados. Projetos acadêmicos em inteligência artificial.",
      date: "2014 - 2018",
      location: "Universidade de São Paulo",
      icon: <GraduationCap className="h-4 w-4" />,
      category: "education",
      color: "purple"
    }
  ];

  const personalTimeline = [
    {
      id: 1,
      title: "Descobrindo a Cultura Sueca",
      description: "Aprendendo sobre lagom, fika e as particularidades de viver em um país nórdico. Compartilhando experiências sobre a vida no exterior.",
      date: "2024",
      location: "Suécia",
      icon: <MapPin className="h-4 w-4" />,
      category: "travel",
      color: "purple"
    },
    {
      id: 2,
      title: "Aventuras Musicais",
      description: "Explorando a cena musical local e conectando com artistas de diferentes culturas. Música como ponte entre Brasil e Suécia.",
      date: "2023",
      location: "Estocolmo",
      icon: <Music className="h-4 w-4" />,
      category: "music",
      color: "pink"
    },
    {
      id: 3,
      title: "Primeira Viagem para a Europa",
      description: "O início de uma jornada que mudaria minha vida. Descobrindo a Espanha, Portugal e eventualmente a Suécia.",
      date: "2021",
      location: "Europa",
      icon: <Plane className="h-4 w-4" />,
      category: "travel",
      color: "green"
    },
    {
      id: 4,
      title: "Raízes Brasileiras",
      description: "Crescendo no Brasil, construindo a base que me levaria ao mundo. Família, amigos e as origens que sempre carrego comigo.",
      date: "1990 - 2020",
      location: "Brasil",
      icon: <MapPin className="h-4 w-4" />,
      category: "personal",
      color: "yellow"
    }
  ];

  const timeline = activeProfile === "professional" ? professionalTimeline : personalTimeline;
  const title = activeProfile === "professional" ? "Minha Trajetória Profissional" : "Minha Jornada Pessoal";
  const subtitle = activeProfile === "professional" 
    ? "Uma caminhada através do mundo da tecnologia e inovação"
    : "Histórias, descobertas e aventuras pelo mundo";

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { 
        bg: "bg-blue-100 dark:bg-blue-900", 
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      green: { 
        bg: "bg-green-100 dark:bg-green-900", 
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      purple: { 
        bg: "bg-purple-100 dark:bg-purple-900", 
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800"
      },
      pink: { 
        bg: "bg-pink-100 dark:bg-pink-900", 
        text: "text-pink-600 dark:text-pink-400",
        border: "border-pink-200 dark:border-pink-800"
      },
      yellow: { 
        bg: "bg-yellow-100 dark:bg-yellow-900", 
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.id} className={`relative flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}>
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:text-right"
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-gray-200 dark:border-gray-700">
                    <div className={`flex items-center space-x-3 mb-3 ${
                      index % 2 === 0 ? "" : "md:justify-end md:flex-row-reverse md:space-x-reverse"
                    }`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        getColorClasses(item.color).bg
                      }`}>
                        <span className={getColorClasses(item.color).text}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                          {item.location && (
                            <>
                              <span>•</span>
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}