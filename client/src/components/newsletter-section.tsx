import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Globe } from "lucide-react";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useProfile } from "@/hooks/use-profile";

export function NewsletterSection() {
  const { activeProfile } = useProfile();
  const { toast } = useToast();

  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
      name: "",
      language: "pt",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Obrigado por se inscrever! Em breve você receberá conteúdos exclusivos.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erro na inscrição",
        description: error.message || "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertNewsletter) => {
    newsletterMutation.mutate(data);
  };

  if (activeProfile === "professional") {
    return null; // Newsletter only appears in personal profile
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Receba conteúdos exclusivos sobre tecnologia, vida na Suécia, 
            dicas de carreira e histórias que não compartilho em lugar nenhum.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                  Seu nome
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Como posso te chamar?"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
                />
              </div>
              <div>
                <Label htmlFor="language" className="text-white text-sm font-medium mb-2 block">
                  Idioma
                </Label>
                <select
                  {...form.register("language")}
                  className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white focus:border-white focus:ring-1 focus:ring-white"
                >
                  <option value="pt" className="text-gray-900">Português</option>
                  <option value="en" className="text-gray-900">English</option>
                  <option value="es" className="text-gray-900">Español</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                Seu melhor e-mail
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="seu@email.com"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={newsletterMutation.isPending}
              className="w-full bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              {newsletterMutation.isPending ? (
                "Inscrevendo..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Quero me inscrever
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Sem spam, prometo!</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Conteúdo exclusivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}