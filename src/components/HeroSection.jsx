import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span
              style={{ fontFamily: "'Euphoria Script', cursive" }}
              className="text-7xl text-primary opacity-0 animate-fade-in-delay-1"
            >
              Harini
            </span>
            <span
              style={{ fontFamily: "'Euphoria Script', cursive" }}
              className="text-7xl text-primary ml-2 opacity-0 animate-fade-in-delay-2"
            >
              Priyanka
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Computer Science Student | Curious learner | Passionate builder
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            "Passionate CSE student fueled by curiosity and growth."
          </p>

          {/* 🌟 Interest Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-delay-3">
            {[
              "Machine Learning",
              "Backend Systems and Web ",
              "IoT",
              "UI/UX Design",
              "Cloud Integration",
              "Software Development"
              
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
