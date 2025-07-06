import { MapPin, Briefcase, GraduationCap, Heart, Coffee, Music, Code, Database, Palette, Zap } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";
import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { activeProfile } = useProfile();
  const { t } = useLanguage();

  const professionalContent = {
    title: t("about.professional.title"),
    description: t("about.professional.description"),
    details: [
      { icon: <MapPin className="h-5 w-5" />, text: t("location.stockholm") },
      { icon: <Briefcase className="h-5 w-5" />, text: t("status.available") },
      { icon: <GraduationCap className="h-5 w-5" />, text: t("education.computer_science") }
    ],
    stats: [
      { number: "30+", label: t("stats.projects") },
      { number: "6+", label: t("stats.experience") }
    ],
    image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ricardo Souza - Full Stack Developer"
  };

  const personalContent = {
    title: t("about.personal.title"),
    description: "Explorando conexões entre tecnologia, cultura e vida internacional. Profissional de tecnologia com vivência entre Brasil e Suécia, compartilho experiências reais sobre inovação, música e a rotina no exterior — sempre com uma visão prática, autêntica e inspiradora.",
    details: [
      { icon: <MapPin className="h-5 w-5" />, text: t("location.brazil_sweden") },
      { icon: <Coffee className="h-5 w-5" />, text: t("coffee.addict") },
      { icon: <Music className="h-5 w-5" />, text: t("music.always") }
    ],
    stats: [
      { number: "2", label: t("stats.countries") },
      { number: "∞", label: t("stats.stories") }
    ],
    image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Rick - Exploring life between cultures"
  };

  const content = activeProfile === "professional" ? professionalContent : personalContent;
  const iconColor = "text-blue-600 dark:text-blue-400";
  const statColor = "text-blue-600 dark:text-blue-400";

  const specialties = [
    { icon: <Code className="h-5 w-5" />, name: "React.js & Next.js", color: "text-blue-600" },
    { icon: <Code className="h-5 w-5" />, name: "TypeScript", color: "text-blue-600" },
    { icon: <Database className="h-5 w-5" />, name: "Firebase & PostgreSQL", color: "text-green-600" },
    { icon: <Palette className="h-5 w-5" />, name: "UI/UX Design", color: "text-purple-600" },
    { icon: <Zap className="h-5 w-5" />, name: "Performance Web", color: "text-yellow-600" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={content.image}
              alt={content.alt}
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {content.description}
              </p>
            </div>

            {/* Especialidades */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Especialidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className={specialty.color}>
                      {specialty.icon}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {specialty.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {content.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className={iconColor}>
                    {detail.icon}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{detail.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
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
