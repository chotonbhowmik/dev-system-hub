import { Link } from "react-router-dom";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span> © {currentYear} Choton Bhowmik
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status */}
          <p className="font-mono text-sm text-muted-foreground">
            Full-stack web developer <span className="text-primary">·</span> Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
