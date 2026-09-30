import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import { projects, platformFilters } from "@/data/portfolio";

export default function Work() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.platform === filter);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Selected Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of {projects.length} projects across platforms — interfaces,
              storefronts, and digital systems built to make an impression.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-3 mb-8 opacity-0 animate-fade-in-up stagger-1">
            {platformFilters.map((f) => {
              const count =
                f === "All"
                  ? projects.length
                  : projects.filter((p) => p.platform === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "font-mono text-sm px-4 py-2 rounded-full border transition-colors",
                    filter === f
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                  )}
                >
                  {f} <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={`${filtered.length} project${filtered.length === 1 ? "" : "s"}`} />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {filtered.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min((index % 4) + 1, 4)}`}
              >
                <ProjectCard project={project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
