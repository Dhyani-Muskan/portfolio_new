import { Zap } from "lucide-react";
import profileImg from "@/assets/profile.png";

const techStack = [
  "Machine Learning",
  "React & TypeScript",
  "PostgreSQL",
  "Neural Networks",
  "Python & TensorFlow",
  "Node.js",
  "REST APIs",
  "DevOps",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="section-title text-center mb-4">About Me</p>
        
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Text Content */}
          <div>
            <h2 className="heading-lg mb-6">
              Hey there! I'm Alex Chen, a software developer who accidentally
              taught a machine learning model to write haikus.{" "}
              <span className="text-muted-foreground">
                It wasn't very good at it, but we're working on it.
              </span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience building everything from
              intelligent chatbots to enterprise web applications, I've learned
              that the best code is the kind that solves real problems (and
              occasionally makes people smile).
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not debugging neural networks or arguing with TypeScript,
              you'll find me experimenting with the latest AI models,
              contributing to open source, or convincing my coffee maker it
              needs a REST API.
            </p>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold">Tech Stack</h3>
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:sticky lg:top-32">
            <div className="relative w-72 mx-auto lg:mx-0">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl" />
              <img
                src={profileImg}
                alt="Alex Chen"
                className="relative rounded-2xl border border-border/50 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
