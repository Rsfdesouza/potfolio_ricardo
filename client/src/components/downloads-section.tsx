import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BookOpen, CheckSquare, Users } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export function DownloadsSection() {
  const { activeProfile } = useProfile();

  const downloads = [
    {
      id: 1,
      title: "Currículo - Desenvolvedor Full Stack",
      description: "Meu currículo completo com experiência profissional, habilidades técnicas e projetos realizados.",
      category: "cv",
      language: "pt",
      fileUrl: "/downloads/cv-ricardo-souza-pt.pdf",
      downloads: 234,
      icon: <FileText className="h-5 w-5" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Resume - Full Stack Developer",
      description: "Professional resume with work experience, technical skills and accomplished projects.",
      category: "cv",
      language: "en",
      fileUrl: "/downloads/resume-ricardo-souza-en.pdf",
      downloads: 189,
      icon: <FileText className="h-5 w-5" />,
      color: "blue"
    },
    {
      id: 3,
      title: "Guia: Mudança para a Suécia",
      description: "Guia completo com dicas práticas para quem está planejando se mudar para a Suécia. Documentos, custo de vida e adaptação.",
      category: "guide",
      language: "pt",
      fileUrl: "/downloads/guia-mudanca-suecia.pdf",
      downloads: 567,
      icon: <BookOpen className="h-5 w-5" />,
      color: "green"
    },
    {
      id: 4,
      title: "Checklist: Planejamento de Eventos Tech",
      description: "Lista completa para organização de eventos de tecnologia, desde o planejamento inicial até a execução.",
      category: "checklist",
      language: "pt",
      fileUrl: "/downloads/checklist-eventos-tech.pdf",
      downloads: 123,
      icon: <CheckSquare className="h-5 w-5" />,
      color: "purple"
    },
    {
      id: 5,
      title: "Guia: Networking para Desenvolvedores",
      description: "Como construir uma rede profissional sólida no mundo da tecnologia, especialmente trabalhando remotamente.",
      category: "guide",
      language: "pt",
      fileUrl: "/downloads/networking-desenvolvedores.pdf",
      downloads: 298,
      icon: <Users className="h-5 w-5" />,
      color: "orange"
    }
  ];

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      cv: "Currículo",
      guide: "Guia",
      checklist: "Checklist"
    };
    return categoryMap[category] || category;
  };

  const getLanguageName = (language: string) => {
    const languageMap: { [key: string]: string } = {
      pt: "Português",
      en: "English",
      es: "Español"
    };
    return languageMap[language] || language;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { 
        bg: "bg-blue-100 dark:bg-blue-900", 
        text: "text-blue-600 dark:text-blue-400",
        hover: "hover:bg-blue-600 hover:text-white"
      },
      green: { 
        bg: "bg-green-100 dark:bg-green-900", 
        text: "text-green-600 dark:text-green-400",
        hover: "hover:bg-green-600 hover:text-white"
      },
      purple: { 
        bg: "bg-purple-100 dark:bg-purple-900", 
        text: "text-purple-600 dark:text-purple-400",
        hover: "hover:bg-purple-600 hover:text-white"
      },
      orange: { 
        bg: "bg-orange-100 dark:bg-orange-900", 
        text: "text-orange-600 dark:text-orange-400",
        hover: "hover:bg-orange-600 hover:text-white"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  if (activeProfile === "professional") {
    return null; // Downloads section only appears in personal profile
  }

  return (
    <section id="downloads" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Downloads Gratuitos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Materiais úteis que criei para compartilhar conhecimento e experiências. 
            Tudo gratuito para a comunidade!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  getColorClasses(item.color).bg
                }`}>
                  <span className={getColorClasses(item.color).text}>
                    {item.icon}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    {getCategoryName(item.category)}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {getLanguageName(item.language)}
                  </Badge>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.downloads} downloads
                </span>
                <Button
                  className={`flex items-center space-x-2 transition-colors duration-200 ${
                    getColorClasses(item.color).text
                  } ${getColorClasses(item.color).hover}`}
                  variant="outline"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Quer mais conteúdo?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Se inscreva na minha newsletter para receber novos guias, 
              checklists e conteúdos exclusivos sobre tecnologia e vida no exterior.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Quero me inscrever
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}