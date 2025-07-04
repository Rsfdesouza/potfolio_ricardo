import { Button } from "@/components/ui/button";
import { Briefcase, Heart, User } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export function ProfileToggle() {
  const { activeProfile, setActiveProfile } = useProfile();

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <Button
        variant={activeProfile === "professional" ? "default" : "ghost"}
        size="sm"
        onClick={() => setActiveProfile("professional")}
        className={`flex items-center space-x-2 transition-all duration-200 ${
          activeProfile === "professional"
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700"
        }`}
      >
        <Briefcase className="h-4 w-4" />
        <span className="hidden sm:inline">Profissional</span>
      </Button>
      <Button
        variant={activeProfile === "personal" ? "default" : "ghost"}
        size="sm"
        onClick={() => setActiveProfile("personal")}
        className={`flex items-center space-x-2 transition-all duration-200 ${
          activeProfile === "personal"
            ? "bg-purple-600 text-white shadow-md"
            : "text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700"
        }`}
      >
        <Heart className="h-4 w-4" />
        <span className="hidden sm:inline">Pessoal</span>
      </Button>
    </div>
  );
}