import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    link: "https://www.cncf.io/certification/cka/",
  },
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    link: "https://cloud.google.com/certification/cloud-architect",
  },
  {
    title: "Full Stack Developer Certification",
    issuer: "Meta Front-End Engineer",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
];

const Certifications = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-title">Credentials</p>
          <h2 className="heading-lg mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Industry-recognized credentials and professional achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-4 md:p-6 hover-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold mb-2 font-display text-sm leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
