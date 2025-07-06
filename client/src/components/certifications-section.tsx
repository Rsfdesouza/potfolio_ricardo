import { ExternalLink, Award, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export function CertificationsSection() {
  const { t } = useLanguage();

  const certifications = [
    {
      title: "React.js Completo",
      issuer: "Origamid",
      date: "2024",
      description: "Curso completo de React.js com TypeScript e práticas modernas",
      link: "https://origamid.com",
      icon: "🎓"
    },
    {
      title: "Firebase para Web",
      issuer: "Udemy",
      date: "2025",
      description: "Desenvolvimento de aplicações web com Firebase",
      link: "https://udemy.com",
      icon: "🔥"
    },
    {
      title: "UX/UI Design para Desenvolvedores",
      issuer: "Alura",
      date: "2024",
      description: "Princípios de design e experiência do usuário",
      link: "https://alura.com.br",
      icon: "🎨"
    },
    {
      title: "TypeScript Avançado",
      issuer: "Rocketseat",
      date: "2024",
      description: "TypeScript em profundidade com práticas avançadas",
      link: "https://rocketseat.com.br",
      icon: "⚡"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 {t("certifications.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {cert.description}
              </p>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>{t("certifications.view")}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{t("certifications.linkedin")}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {t("certifications.more")}
          </Button>
        </div>
      </div>
    </section>
  );
} 