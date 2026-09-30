import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Business website",
  "CMS build (WordPress / Webflow / Wix)",
  "Web app (React / Vue / Next.js)",
  "API integration",
  "UI systems & design",
  "Something else",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's make something worth remembering.
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a business website, a CMS build, a portfolio, or a
              marketing experience, I can help turn your idea into a clear, polished
              web presence.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Inquiry Form */}
            <div>
              <CodeDivider label="Send Inquiry" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    <span className="text-primary">//</span> Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    <span className="text-primary">//</span> Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="font-mono text-sm">
                    <span className="text-primary">//</span> Project type
                  </Label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full h-10 rounded-md border border-border bg-card px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="font-mono text-sm">
                    <span className="text-primary">//</span> Project details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Tell me about your project, goals, timeline, and what you need."
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send inquiry
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Availability */}
            <div>
              <CodeDivider label="Availability" />

              <div className="p-6 bg-card border border-border rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <p className="font-mono text-sm text-foreground">Available for work</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Currently open to new client projects. I work with clients worldwide —
                  from business websites to full web applications — with clear
                  communication and fast turnaround.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> What happens next <span className="text-primary">*/</span>
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">01</span>
                    I review your inquiry and reply quickly.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">02</span>
                    We hop on a call to align on scope and goals.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-primary">03</span>
                    I get to work — with regular updates along the way.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
