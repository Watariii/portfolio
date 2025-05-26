import { NavBar } from "../components/NavBar";
import { StarsBackground } from "../components/StarsBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { PersonSection } from "../components/PersonSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarsBackground />
      <NavBar />
      <main>
        <PersonSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};
