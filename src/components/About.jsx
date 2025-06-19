import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
  <div className="flex justify-center w-full">
  <div className="space-y-7 max-w-3xl">

    <div className="grid grid-cols-1 gap-5 mt-10">
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-muted-foreground">
              I'm a Computer Science student passionate about Full-Stack Development, Machine Learning and IoT. I enjoy building smart, end-to-end solutions that seamlessly integrate software with real-world hardware.
            </p>
          </div>
        </div>
      </div>

      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-muted-foreground">
              From designing dynamic web applications to developing intelligent embedded systems, I thrive on solving practical problems through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Project Management</h4>
            <p className="text-muted-foreground">
              Leading projects from conception to completion with agile methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


        
      </div>
    </section>
  );
};
