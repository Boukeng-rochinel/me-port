import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Odoo Developer",
    company: "Freelance / Self-Employed",
    location: "Remote",
    period: "2022 — Present",
    type: "Freelance",
    description:
      "Building custom Odoo modules for clients across Africa, Europe, and the Middle East. Projects span HR, Accounting, Manufacturing, and E-Commerce domains on Odoo 17, 18, and 19.",
    achievements: [
      "Delivered 15+ production modules for small and mid-size businesses",
      "Led full Odoo 16 → 17 migration for a 200-employee manufacturing company",
      "Built REST API connectors integrating Odoo with WooCommerce and Shopify",
      "Developed a multi-country payroll localization module used by 5 companies",
    ],
  },
  {
    role: "Odoo Developer",
    company: "ERP Solutions Agency",
    location: "On-site / Hybrid",
    period: "2021 — 2022",
    type: "Full-time",
    description:
      "Worked in an agency team delivering Odoo ERP implementations for SMBs. Responsible for module customization, report generation, and client training.",
    achievements: [
      "Customized Odoo Sales, Purchase, and Inventory for 8 client deployments",
      "Reduced report generation time by 60% through optimized QWeb templates",
      "Implemented custom approval workflows for a logistics client",
      "Onboarded and mentored 2 junior developers on Odoo module structure",
    ],
  },
  {
    role: "Python Developer (Intern → Junior)",
    company: "Tech Startup",
    location: "On-site",
    period: "2020 — 2021",
    type: "Full-time",
    description:
      "Started as an intern building automation scripts, then transitioned to backend Python development and early Odoo module work.",
    achievements: [
      "Built data pipeline scripts for automated ETL processes",
      "Developed first Odoo module: a custom field configuration tool",
      "Maintained PostgreSQL schemas and wrote complex SQL queries",
      "Contributed to internal tooling using Django REST Framework",
    ],
  },
];

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
  Freelance: { bg: "#2a1a0a", color: "#f97316", border: "#9a3412" },
  "Full-time": { bg: "#0d2433", color: "#38bdf8", border: "#0c4a6e" },
};

export function Experience() {
  return (
    <section
      id="experience"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}
      className="py-24"
    >
      <div className="w-full px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#f97316" }} />
          <span
            style={{ color: "#f97316", fontSize: "0.8125rem", letterSpacing: "0.15em" }}
            className="uppercase"
          >
            Experience
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#f5f5f5",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "3.5rem",
          }}
        >
          Work History
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            style={{ backgroundColor: "#1f1f1f", width: "1px", position: "absolute", left: "0", top: "0", bottom: "0" }}
            className="hidden md:block"
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role + exp.company}
                className="relative md:pl-12"
                style={{ paddingBottom: idx < experiences.length - 1 ? "3rem" : 0 }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-0 top-2 -translate-x-1/2 w-3 h-3 items-center justify-center"
                  style={{ backgroundColor: "#f97316" }}
                >
                  <div style={{ width: "5px", height: "5px", backgroundColor: "#0a0a0a" }} />
                </div>

                <div
                  style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
                  className="p-6 hover:border-[#2a2a2a] transition-colors duration-200"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "#e5e5e5",
                          fontSize: "1.0625rem",
                          fontWeight: 600,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-1.5">
                        <span className="flex items-center gap-1.5" style={{ color: "#f97316", fontSize: "0.875rem" }}>
                          <Briefcase size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5" style={{ color: "#555555", fontSize: "0.8125rem" }}>
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5" style={{ color: "#555555", fontSize: "0.8125rem" }}>
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        ...typeColors[exp.type],
                        fontSize: "0.7rem",
                        padding: "0.2rem 0.75rem",
                        border: `1px solid ${typeColors[exp.type].border}`,
                        letterSpacing: "0.05em",
                        flexShrink: 0,
                      }}
                      className="uppercase"
                    >
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: "#666666", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div
                    style={{ borderTop: "1px solid #1a1a1a", paddingTop: "1rem" }}
                  >
                    <div
                      style={{ color: "#444444", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}
                      className="uppercase"
                    >
                      Key Achievements
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <div
                            style={{ width: "4px", height: "4px", backgroundColor: "#f97316", flexShrink: 0, marginTop: "0.45rem" }}
                          />
                          <span style={{ color: "#888888", fontSize: "0.8125rem", lineHeight: 1.55 }}>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
