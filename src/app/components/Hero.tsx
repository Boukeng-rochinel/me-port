import { ArrowRight, Github, Linkedin, Mail, Terminal } from "lucide-react";

export function Hero() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}
      className="flex items-center relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.3,
        }}
      />

      <div className="w-full px-6 py-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
              className="flex items-center gap-2 px-4 py-2"
            >
              <div
                style={{ backgroundColor: "#f97316" }}
                className="w-2 h-2 rounded-full"
              />
              <span style={{ color: "#888888", fontSize: "0.8125rem" }} className="tracking-widest uppercase">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#f5f5f5",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Hi, I'm Nash —<br />
            <span style={{ color: "#f97316" }}>Odoo SaaS</span> Engineer
          </h1>

          {/* Description */}
          <p
            style={{ color: "#888888", fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "560px" }}
            className="mt-6 mb-10"
          >
            I build production-ready custom Odoo modules for versions{" "}
            <span style={{ color: "#d1d1d1" }}>17, 18 &amp; 19</span>. Specializing in
            business process automation, ERP customization, and scalable module
            architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => handleNavClick("#projects")}
              style={{ backgroundColor: "#f97316", color: "#fff", padding: "0.75rem 1.75rem" }}
              className="flex items-center gap-2 hover:bg-[#ea580c] transition-colors duration-200"
            >
              View Projects
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              style={{
                backgroundColor: "transparent",
                color: "#d1d1d1",
                border: "1px solid #2a2a2a",
                padding: "0.75rem 1.75rem",
              }}
              className="hover:border-[#f97316] hover:text-[#f97316] transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <span style={{ color: "#555555", fontSize: "0.8125rem" }}>Connect:</span>
            {[
              { icon: <Github size={18} />, label: "GitHub", href: "#" },
              { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
              { icon: <Mail size={18} />, label: "Email", href: "#contact" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={
                  s.href.startsWith("#")
                    ? (e) => {
                        e.preventDefault();
                        handleNavClick(s.href);
                      }
                    : undefined
                }
                style={{ color: "#555555" }}
                className="hover:text-[#f97316] transition-colors duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Floating terminal card */}
        <div
          style={{
            position: "absolute",
            right: "2rem",
            bottom: "6rem",
            backgroundColor: "#111111",
            border: "1px solid #2a2a2a",
            width: "320px",
          }}
          className="hidden lg:block"
        >
          <div
            style={{ borderBottom: "1px solid #2a2a2a", backgroundColor: "#161616" }}
            className="flex items-center gap-2 px-4 py-3"
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ef4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f97316" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
            <span style={{ color: "#555555", fontSize: "0.75rem" }} className="ml-2 flex items-center gap-1">
              <Terminal size={12} /> odoo_module.py
            </span>
          </div>
          <div className="px-5 py-4" style={{ fontFamily: "monospace", fontSize: "0.8125rem", lineHeight: 1.8 }}>
            <div style={{ color: "#555555" }}># Odoo Custom Module</div>
            <div>
              <span style={{ color: "#f97316" }}>class</span>{" "}
              <span style={{ color: "#d1d1d1" }}>CustomApproval</span>
              <span style={{ color: "#888888" }}>(models.</span>
              <span style={{ color: "#f97316" }}>Model</span>
              <span style={{ color: "#888888" }}>):</span>
            </div>
            <div style={{ paddingLeft: "1rem" }}>
              <span style={{ color: "#888888" }}>_name = </span>
              <span style={{ color: "#22c55e" }}>'approval.request'</span>
            </div>
            <div style={{ paddingLeft: "1rem" }}>
              <span style={{ color: "#888888" }}>_inherit = </span>
              <span style={{ color: "#22c55e" }}>'mail.thread'</span>
            </div>
            <div className="mt-1">
              <span style={{ color: "#f97316" }}>def</span>{" "}
              <span style={{ color: "#60a5fa" }}>action_approve</span>
              <span style={{ color: "#888888" }}>(self):</span>
            </div>
            <div style={{ paddingLeft: "1rem", color: "#888888" }}>
              self.state = <span style={{ color: "#22c55e" }}>'approved'</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#555555" }}
      >
        <span style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{ width: "1px", height: "40px", backgroundColor: "#555555" }}
          className="animate-pulse"
        />
      </div>
    </section>
  );
}
