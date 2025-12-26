import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <p className="section-title">Get In Touch</p>
            <h2 className="heading-lg mb-4">
              Let's Build Something Ridiculous Together
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Got a project idea? Need help with AI? Just want to chat about the
              existential crisis of your CI/CD pipeline?
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="glass border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="glass border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="glass border-border/50 focus:border-primary resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full glow-box hover-glow">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
