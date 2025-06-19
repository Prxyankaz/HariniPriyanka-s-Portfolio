import {
  Linkedin,
  Mail,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Centered Connect With Me Block */}
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/harini-priyanka-w-9b7390272"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Prxyankaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:hpriyanka1710@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
