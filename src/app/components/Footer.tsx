import { Code2, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#080808", borderTop: "1px solid #1a1a1a" }}
      className="pt-12 pb-8"
    >
      <div className="w-full px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div style={{ backgroundColor: "#f97316" }} className="w-8 h-8 flex items-center justify-center">
                <Code2 size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f5f5f5" }}
                className="tracking-tight"
              >
                Nash<span style={{ color: "#f97316" }}>.</span>dev
              </span>
            </div>
            <p style={{ color: "#555555", fontSize: "0.8125rem", lineHeight: 1.75 }}>
              Odoo SaaS specialist building custom modules and ERP solutions for Odoo 17, 18 & 19.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Github size={16} />, label: "GitHub", href: "#" },
                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
                { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
                { icon: <Mail size={16} />, label: "Email", href: "mailto:nash@ododev.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{ color: "#444444", border: "1px solid #1e1e1e", padding: "0.5rem", backgroundColor: "#0f0f0f" }}
                  className="flex items-center hover:text-[#f97316] hover:border-[#f97316] transition-colors duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ color: "#333333", fontSize: "0.7rem", letterSpacing: "0.12em", marginBottom: "1rem" }} className="uppercase">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{ color: "#555555", fontSize: "0.875rem" }}
                    className="hover:text-[#f97316] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Odoo versions */}
          <div>
            <div style={{ color: "#333333", fontSize: "0.7rem", letterSpacing: "0.12em", marginBottom: "1rem" }} className="uppercase">
              Specializations
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                "Odoo 17 Modules",
                "Odoo 18 Modules",
                "Odoo 19 Modules",
                "ERP Migration",
                "API Integration",
                "Performance Tuning",
              ].map((item) => (
                <li key={item}>
                  <span style={{ color: "#555555", fontSize: "0.875rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div style={{ color: "#333333", fontSize: "0.7rem", letterSpacing: "0.12em", marginBottom: "1rem" }} className="uppercase">
              Hire Me
            </div>
            <p style={{ color: "#555555", fontSize: "0.8125rem", lineHeight: 1.65, maxWidth: "180px", marginBottom: "1rem" }}>
              Available for freelance Odoo projects worldwide.
            </p>
            <button
              onClick={() => handleNavClick("#contact")}
              style={{ backgroundColor: "#f97316", color: "#fff", fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}
              className="hover:bg-[#ea580c] transition-colors duration-200"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: "1px solid #141414", paddingTop: "1.5rem" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span style={{ color: "#333333", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} Nash.dev — All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              backgroundColor: "#141414",
              border: "1px solid #1e1e1e",
              color: "#555555",
              padding: "0.5rem",
            }}
            className="flex items-center gap-2 hover:text-[#f97316] hover:border-[#f97316] transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
