import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectAiChat from "@/assets/project-ai-chat.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectNeural from "@/assets/project-neural.jpg";
import projectTaskmaster from "@/assets/project-taskmaster.jpg";

const projects = [
  {
    title: "AI Conversation Engine",
    description:
      "A conversational AI that actually understands context (most of the time). Built with GPT-4 and fine-tuned to have better manners than your average chatbot.",
    image: projectAiChat,
    tags: ["React", "OpenAI", "TypeScript", "Node.js"],
    featured: true,
    liveDemo: "#",
    code: "#",
  },
  {
    title: "Smart E-Commerce Platform",
    description:
      "An online store with ML-powered product recommendations. It knows what you want before you do. Slightly creepy, mostly helpful.",
    image: projectEcommerce,
    tags: ["Next.js", "TensorFlow", "PostgreSQL"],
    liveDemo: "#",
    code: "#",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Because staring at matrices is boring. Watch your neural network learn in real-time with beautiful, mesmerizing visualizations.",
    image: projectNeural,
    tags: ["Python", "D3.js", "PyTorch"],
    code: "#",
  },
  {
    title: "Task Master 3000",
    description:
      "A productivity app that guilt-trips you into finishing tasks. Features include gentle reminders and not-so-gentle notifications.",
    image: projectTaskmaster,
    tags: ["React Native", "Firebase", "TypeScript"],
    liveDemo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-title">Portfolio Showcase</p>
          <h2 className="heading-lg mb-4">Things I've Built</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A collection of projects that range from "actually useful" to
            "seemed like a good idea at 2 AM"
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden hover-glow transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs border border-primary/30">
                      <Star className="w-3 h-3" />
                      Featured Project
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
