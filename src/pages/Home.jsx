import { AboutSection } from "../components/About";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle } from "../components/ThemeToggle";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      

      {/* Navbar */}
      <Navbar />
      
      <main>
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
      </main>

    </div>
  );
};