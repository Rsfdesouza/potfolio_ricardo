import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export function Footer() {
  const { activeProfile } = useProfile();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gradientClass = activeProfile === "professional" 
    ? "from-blue-400 to-purple-400" 
    : "from-purple-400 to-pink-400";

  const description = activeProfile === "professional"
    ? "Criando soluções digitais modernas e funcionais que fazem a diferença no mundo da tecnologia."
    : "Compartilhando histórias, experiências e conhecimento entre o Brasil e a Suécia. Um entusiasta do digital conectando culturas.";

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className={`text-3xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                RS
              </span>
            </div>
            <p className="text-gray-400 mb-2 max-w-md font-medium">
              {activeProfile === "personal" && "Um entusiasta do digital"}
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              {description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-200 ${
                  activeProfile === "professional" ? "hover:text-blue-400" : "hover:text-purple-400"
                }`}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-200 ${
                  activeProfile === "professional" ? "hover:text-blue-400" : "hover:text-purple-400"
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ricksouza"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-200 ${
                  activeProfile === "professional" ? "hover:text-blue-400" : "hover:text-purple-400"
                }`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@ricksouza.online"
                className={`text-gray-400 transition-colors duration-200 ${
                  activeProfile === "professional" ? "hover:text-blue-400" : "hover:text-purple-400"
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-400">Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ricardo Souza. Feito com ❤️ entre Brasil e Suécia.</p>
        </div>
      </div>
    </footer>
  );
}
