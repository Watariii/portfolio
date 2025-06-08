import { NavBar } from "../components/NavBar";
import { StarsBackground } from "../components/StarsBackground";

import { PersonSection } from "../components/PersonSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarsBackground />
      <NavBar />
      <main>
        <PersonSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
