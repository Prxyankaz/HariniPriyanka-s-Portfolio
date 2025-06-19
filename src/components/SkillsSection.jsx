import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 95, category: "Languages" },
  { name: "C++", level: 85, category: "Languages" },
  { name: "Java", level: 70, category: "Languages" },
  { name: "Haskell", level: 80, category: "Languages" },
  { name: "Scala", level: 75, category: "Languages" },
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 40, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "SQL", level:85, category: "Backend" },
];

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});
 
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.entries(groupedSkills).map(([category, skillsList]) => (
            <div
              key={category}
              className="bg-card p-8 rounded-xl shadow-md card-hover space-y-5"
            >
              <h3 className="text-2xl font-semibold text-primary text-center">
                {category}
              </h3>

              <ul className="space-y-4">
                {skillsList.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
