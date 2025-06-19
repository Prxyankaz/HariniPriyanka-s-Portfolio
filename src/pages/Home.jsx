import { Contact } from "lucide-react";
import { AboutSection } from "../components/About";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { ContactSection } from "../components/ContactSection";
import { SkillsSection } from "../components/SkillsSection";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Background Effects */}
      

      {/* Navbar */}
      <Navbar />
      
      <main>
        <HeroSection/>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

    </div>
  );
};