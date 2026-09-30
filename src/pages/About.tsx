import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { coreStrengths } from "@/data/portfolio";

const stack = ["React.js", "Next.js", "Vue.js", "WordPress", "Webflow", "Wix"];

const services = [
  "Business & marketing websites",
  "CMS development (WordPress, Webflow CMS)",
  "Web apps & product experiences",
  "API integration",
  "UI systems & responsive builds",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A little context
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Choton Bhowmik</span>, a
                  full-stack web developer based in Bangladesh. I build digital
                  experiences that are fast, useful, and memorable.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  As a full-stack web developer, I work across React.js, Vue.js,
                  Next.js, WordPress, Webflow, and Wix to create polished websites,
                  storefronts, and digital products that balance design quality with
                  performance, usability, and measurable business goals.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's a business website, a CMS build, a portfolio, or a
                  marketing experience, my focus is the same: turn your idea into a
                  clear, polished web presence that works hard for your goals.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="What I do" />
              </div>

              <ul className="space-y-3 opacity-0 animate-fade-in-up stagger-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="font-mono text-primary mt-1">→</span>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Core Strengths */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Core Strengths <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {coreStrengths.map((strength) => (
                    <li key={strength} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platforms */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Platforms <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>7+ years building for the web</p>
                  <p>30+ projects launched</p>
                  <p>100% responsive delivery</p>
                  <p>Clients across Austria, the US, Germany, Curaçao & Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
