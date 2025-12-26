import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechCorp AI Labs",
    period: "2022 - Present",
    description:
      "Leading the development of conversational AI systems and ML pipelines. Reduced model inference time by 40% and improved accuracy by 25%.",
    technologies: ["Python", "TensorFlow", "AWS", "Kubernetes"],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech Solutions",
    period: "2020 - 2022",
    description:
      "Built scalable web applications serving 100K+ users. Implemented microservices architecture and CI/CD pipelines.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Machine Learning Engineer",
    company: "DataDriven Inc.",
    period: "2019 - 2020",
    description:
      "Developed recommendation systems and NLP models for e-commerce platforms. Increased user engagement by 35%.",
    technologies: ["Python", "PyTorch", "Spark", "Redis"],
  },
  {
    title: "Software Developer Intern",
    company: "StartupXYZ",
    period: "2018 - 2019",
    description:
      "Contributed to the development of a SaaS platform. Built REST APIs and frontend components.",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
  },
];

const Experience = () => {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveIndices((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    dotRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-title">Career Journey</p>
          <h2 className="heading-lg mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A timeline of roles where I've turned caffeine into code and ideas into reality
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot with Scroll Glow */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  data-index={index}
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 z-10 transition-all duration-500 ${
                    activeIndices.has(index)
                      ? "bg-primary shadow-[0_0_20px_hsl(270_80%_60%),0_0_40px_hsl(270_80%_60%/0.5),0_0_60px_hsl(280_100%_70%/0.3)] scale-125"
                      : "bg-muted-foreground"
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-xl p-4 sm:p-6 hover-glow transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg font-display">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
