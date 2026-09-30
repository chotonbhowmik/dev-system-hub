import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowRight } from "lucide-react";
import { projects, coreStrengths } from "@/data/portfolio";
import { HeroParticleField } from "@/components/motion/HeroParticleField";

const featuredSlugs = ["gym-city", "simply-eloped", "ryogen-ai", "aat-3d"];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const stats = [
  { value: "7+", label: "Years building" },
  { value: "30+", label: "Projects launched" },
  { value: "100%", label: "Responsive delivery" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-grid">
        <HeroParticleField />
        <div className="container relative z-10">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Availability + label */}
            <div className="flex items-center gap-3 mb-6">
              <CodeLabel>Full-stack web developer · Based in Bangladesh</CodeLabel>
              <span className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for work
              </span>
            </div>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              I design and build
              <br />
              <span className="text-primary">digital experiences</span>
              <br />
              <span className="text-muted-foreground">that sell.</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              I help brands and businesses launch faster, sharper websites using
              React.js, Vue.js, WordPress, Webflow, Wix, and modern front-end
              systems built for performance and conversion.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  Explore the work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono">
                <Link to="/contact">Book a project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <p className="font-mono text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Core Strengths" />
          </div>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up stagger-1">
            {coreStrengths.map((strength) => (
              <span
                key={strength}
                className="font-mono text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Selected Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 1, 4)}`}
              >
                <ProjectCard project={project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link
              to="/work"
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all {projects.length} projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
