import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Good work travels.
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A few words from people who trusted me with their ideas, websites,
              and next big launch.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={`Client notes / ${String(testimonials.length).padStart(2, "0")}`} />
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {testimonials.map((t, index) => (
              <figure
                key={index}
                className={`p-6 bg-card border border-border rounded-lg flex flex-col opacity-0 animate-fade-in-up stagger-${Math.min((index % 4) + 1, 4)} hover-lift`}
              >
                <span className="font-mono text-4xl text-primary leading-none mb-4">“</span>
                <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-sm text-foreground">{t.author}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {t.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center opacity-0 animate-fade-in-up stagger-4">
            <p className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-primary">{"//"}</span> Want to be the next note on this page?
            </p>
            <Button asChild size="lg" className="font-mono">
              <Link to="/contact">
                Book a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
