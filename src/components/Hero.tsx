import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            AI Developer & Creative Technologist
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="heading-xl mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          I teach machines to think,{" "}
          <span className="gradient-text italic">sometimes they listen</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Building the future with AI, one neural network at a time
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="glow-box hover-glow">
            <a href="#projects">Explore My Work</a>
          </Button>
          <Button variant="ghost" size="lg" className="border border-border/50">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover-glow transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover-glow transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="p-3 rounded-full glass hover-glow transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
