import { CheckCircle, Coffee, Globe, Layers } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Modules Built" },
  { value: "3", label: "Odoo Versions" },
  { value: "15+", label: "Clients Served" },
];

const highlights = [
  "Custom module development for Odoo 17, 18 & 19",
  "OWL framework & QWeb template design",
  "Business process automation & workflow customization",
  "REST API integrations with third-party services",
  "Database migrations and version upgrades",
  "Performance optimization and code review",
];

export function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#0f0f0f", borderTop: "1px solid #1a1a1a" }}
      className="py-24"
    >
      <div className="w-full px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#f97316" }} />
          <span
            style={{ color: "#f97316", fontSize: "0.8125rem", letterSpacing: "0.15em" }}
            className="uppercase"
          >
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f5f5f5",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Building Reliable Odoo Solutions for Modern Businesses
            </h2>
            <p style={{ color: "#888888", lineHeight: 1.85, marginTop: "1.25rem", fontSize: "0.9375rem" }}>
              I'm Nash, a software engineer specializing in Odoo SaaS platform development and 
              custom module architecture. I've spent the last few years working with businesses 
              to transform their operations through tailored ERP solutions built on Odoo.
            </p>
            <p style={{ color: "#888888", lineHeight: 1.85, marginTop: "1rem", fontSize: "0.9375rem" }}>
              My work spans across Odoo versions 17 through 19, covering everything from module 
              scaffolding to production deployment. I care about clean code, scalable architecture, 
              and delivering solutions that actually solve business problems.
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-1 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    style={{ color: "#f97316", flexShrink: 0, marginTop: "0.2rem" }}
                  />
                  <span style={{ color: "#c0c0c0", fontSize: "0.9rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats + Cards */}
          <div className="flex flex-col gap-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{ backgroundColor: "#141414", border: "1px solid #222222" }}
                  className="px-6 py-6"
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#f97316",
                      fontSize: "2rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: "#666666", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Layers size={18} style={{ color: "#f97316" }} />,
                  title: "Full-Stack Odoo Dev",
                  desc: "Backend Python models to frontend OWL components",
                },
                {
                  icon: <Globe size={18} style={{ color: "#f97316" }} />,
                  title: "Remote-First",
                  desc: "Working with clients globally across multiple time zones",
                },
                {
                  icon: <Coffee size={18} style={{ color: "#f97316" }} />,
                  title: "Always Learning",
                  desc: "Keeping up with every Odoo release and new API patterns",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{ backgroundColor: "#141414", border: "1px solid #222222" }}
                  className="flex items-start gap-4 px-5 py-4"
                >
                  <div
                    style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
                    className="p-2 flex-shrink-0"
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ color: "#e0e0e0", fontSize: "0.9rem", fontWeight: 500 }}>{card.title}</div>
                    <div style={{ color: "#666666", fontSize: "0.8125rem", marginTop: "0.2rem" }}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
