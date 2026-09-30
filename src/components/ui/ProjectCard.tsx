import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer h-full",
        className
      )}
    >
      <Link to={`/work/${project.slug}`} className="block">
        {/* Project Name */}
        <h3 className="font-mono text-lg font-medium text-foreground pr-10 mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>

        {/* Category + Year */}
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-3">
          <span>{project.category}</span>
          <span className="text-primary">·</span>
          <span>{project.year}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>
      </Link>

      {/* Live site — opens in a new window */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} live site (opens in a new tab)`}
        title="Visit live site"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-6 right-6 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 hover:translate-x-0.5 transition-all"
      >
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}
