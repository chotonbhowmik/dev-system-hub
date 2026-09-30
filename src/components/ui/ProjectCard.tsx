import { useRef } from "react";
import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import gsap from "gsap";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || event.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    gsap.to(card, {
      rotateY: x * 3,
      rotateX: y * -3,
      y: -4,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 900,
      overwrite: "auto",
    });
  };

  const resetCard = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      className={cn(
        "group relative p-6 bg-card border border-border rounded-lg transition-colors hover:border-primary/50 hover:bg-card/80 cursor-pointer h-full will-change-transform",
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
