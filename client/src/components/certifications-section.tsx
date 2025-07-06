import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function CertificationsSection() {
  const { t } = useLanguage();

  const certifications = [
    {
      id: 1,
      title: "Curso de React.js",
      provider: "Origamid",
      date: "2024",
      description: "Desenvolvimento completo de aplicações React com hooks, context e TypeScript",
      link: "https://origamid.com",
      icon: "⚛️"
    },
    {
      id: 2,
      title: "Firebase para Web",
      provider: "Udemy",
      date: "2025",
      description: "Autenticação, banco de dados em tempo real e deploy com Firebase",
      link: "https://udemy.com",
      icon: "🔥"
    },
    {
      id: 3,
      title: "UX/UI Design para Desenvolvedores",
      provider: "Alura",
      date: "2024",
      description: "Princípios de design, prototipagem e ferramentas de UX/UI",
      link: "https://alura.com.br",
      icon: "🎨"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
            {t("certifications.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {cert.provider}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {cert.description}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("certifications.view")}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t("certifications.more")}
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
            onClick={() => window.open('https://linkedin.com/in/ricksouza', '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("certifications.linkedin")}
          </Button>
        </div>
      </div>
    </section>
  );
} 