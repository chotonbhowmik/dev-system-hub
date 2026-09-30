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
    <Link to={`/work/${project.slug}`}>
      <article
        className={cn(
          "group p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer h-full",
          className
        )}
      >
        {/* Project Name */}
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="font-mono text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>

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
      </article>
    </Link>
  );
}
