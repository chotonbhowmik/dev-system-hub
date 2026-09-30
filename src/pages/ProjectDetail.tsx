import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link
            to="/work"
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <p className="font-mono text-sm text-primary mb-3">
              {project.category} <span className="text-muted-foreground">· {project.year}</span>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </div>

            {/* Platform */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Built with {project.platform}
              </span>
            </div>
          </div>

          {/* Next Project */}
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Next Project" />
            <Link
              to={`/work/${nextProject.slug}`}
              className="group mt-6 flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">
                  {nextProject.category}
                </p>
                <p className="font-mono text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {nextProject.name}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-8 mt-8 border-t border-border opacity-0 animate-fade-in-up stagger-3">
            <Button asChild className="font-mono">
              <Link to="/contact">
                Book a similar project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit live site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
