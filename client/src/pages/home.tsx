import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { DownloadsSection } from "@/components/downloads-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { CertificationsSection } from "@/components/certifications-section";
import { useProfile } from "@/hooks/use-profile";

export default function Home() {
  const { activeProfile } = useProfile();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <CertificationsSection />
      {activeProfile === "professional" && <ProjectsSection />}
      {activeProfile === "personal" && <BlogSection />}
      {activeProfile === "personal" && <DownloadsSection />}
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
