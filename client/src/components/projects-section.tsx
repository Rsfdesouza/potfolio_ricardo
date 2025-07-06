import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "App de Controle Financeiro",
      description: "Aplicativo completo para gestão de gastos pessoais com dashboard interativo e relatórios detalhados.",
      technologies: ["React Native", "Firebase", "Expo", "TypeScript"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/finance-app",
      demoUrl: "https://finance-app.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Moderno",
      description: "Plataforma de vendas online com carrinho de compras, pagamentos e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/ecommerce-app",
      demoUrl: "https://ecommerce-app.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Profissional",
      description: "Site pessoal responsivo com modo claro/escuro, múltiplos idiomas e design moderno.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/portfolio",
      demoUrl: "https://ricksouza.online",
      featured: true
    },
    {
      id: 4,
      title: "Sistema de Gestão",
      description: "Dashboard administrativo para controle de estoque, vendas e relatórios em tempo real.",
      technologies: ["React", "Firebase", "Chart.js", "Material-UI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/management-system",
      demoUrl: "https://management-system.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "App de Tarefas",
      description: "Aplicativo para organização pessoal com categorização, lembretes e sincronização em nuvem.",
      technologies: ["React", "LocalStorage", "CSS Modules", "PWA"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/todo-app",
      demoUrl: "https://todo-app-ricksouza.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "API REST Completa",
      description: "Backend robusto com autenticação JWT, validação de dados e documentação automática.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      githubUrl: "https://github.com/ricksouza/api-backend",
      demoUrl: "https://api-ricksouza.herokuapp.com/docs",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 {t("projects.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projetos em Destaque */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            ⭐ {t("projects.featured")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Todos os Projetos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            📦 {t("projects.all")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => window.open('https://github.com/ricksouza', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Imagem do Projeto */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-yellow-500 text-white px-2 py-1 text-xs">
              ⭐ Destaque
            </Badge>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Botões */}
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Globe className="mr-2 h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
