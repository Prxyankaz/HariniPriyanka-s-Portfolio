import { GraduationCap, Sparkles, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-6 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex justify-center w-full">
          <div className="space-y-7 max-w-3xl">
            <div className="grid grid-cols-1 gap-5 mt-10">

              {/* Education Card */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground">Education</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                    <p>Amrita Vishwa Vidyapeetham</p>
                    <p>CGPA: 8.4/10</p>
                  </div>
                </div>
              </div>

              {/* Interests and Domains */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Creative Technologist</h4>
                    <p className="text-muted-foreground">
                      I’m passionate about blending <span className="font-semibold">creativity</span> with <span className="font-semibold">technology</span>—
                      building end-to-end solutions that are smart, scalable, and user-focused.
                    </p>
                    <p className="text-muted-foreground">Domains I actively explore:</p>
                    <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-muted-foreground">
                      <li>Full-Stack Web Development</li>
                      <li>Machine Learning & AI Tools</li>
                      <li>IoT & Embedded Systems</li>
                      <li>Data Structures & Algorithms</li>
                      <li>Operating Systems & Networking</li>
                      <li>Database Management Systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personal Passion Statement */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground">
                      I'm a Computer Science student passionate about Full-Stack Development, Machine Learning, and IoT. I enjoy building smart, end-to-end solutions that seamlessly integrate software with real-world hardware.
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
