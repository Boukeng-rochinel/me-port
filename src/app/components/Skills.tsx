import { Database, Code, Cpu, Server, GitBranch, Terminal, Layers, Globe } from "lucide-react";

const skillGroups = [
  {
    title: "Odoo Platform",
    icon: <Layers size={18} style={{ color: "#f97316" }} />,
    skills: [
      { name: "Odoo 17", level: 95 },
      { name: "Odoo 18", level: 90 },
      { name: "Odoo 19", level: 80 },
      { name: "OWL Framework", level: 85 },
      { name: "QWeb Templates", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={18} style={{ color: "#f97316" }} />,
    skills: [
      { name: "Python 3", level: 92 },
      { name: "ORM / Models", level: 95 },
      { name: "Wizards & Workflows", level: 88 },
      { name: "Scheduled Actions", level: 85 },
      { name: "XML-RPC / JSONRPC", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: <Code size={18} style={{ color: "#f97316" }} />,
    skills: [
      { name: "JavaScript / ES6+", level: 82 },
      { name: "XML / QWeb", level: 90 },
      { name: "SCSS / CSS", level: 78 },
      { name: "React (Standalone)", level: 75 },
      { name: "REST API Design", level: 85 },
    ],
  },
  {
    title: "Infrastructure",
    icon: <Database size={18} style={{ color: "#f97316" }} />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Docker", level: 78 },
      { name: "Nginx / Apache", level: 72 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux / Ubuntu", level: 80 },
    ],
  },
];

const techBadges = [
  { label: "Python", icon: <Terminal size={14} /> },
  { label: "Odoo SaaS", icon: <Layers size={14} /> },
  { label: "PostgreSQL", icon: <Database size={14} /> },
  { label: "OWL", icon: <Cpu size={14} /> },
  { label: "JavaScript", icon: <Code size={14} /> },
  { label: "Git", icon: <GitBranch size={14} /> },
  { label: "Docker", icon: <Server size={14} /> },
  { label: "REST API", icon: <Globe size={14} /> },
  { label: "QWeb", icon: <Code size={14} /> },
  { label: "XML-RPC", icon: <Terminal size={14} /> },
  { label: "SCSS", icon: <Code size={14} /> },
  { label: "Linux", icon: <Terminal size={14} /> },
];

export function Skills() {
  return (
    <section
      id="skills"
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
            Skills & Tools
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
            marginBottom: "3rem",
          }}
        >
          Technologies I Work With
        </h2>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
              className="p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
                  className="p-2"
                >
                  {group.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#e0e0e0",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                  }}
                >
                  {group.title}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span style={{ color: "#aaaaaa", fontSize: "0.8125rem" }}>{skill.name}</span>
                      <span style={{ color: "#555555", fontSize: "0.75rem" }}>{skill.level}%</span>
                    </div>
                    <div
                      style={{ backgroundColor: "#1e1e1e", height: "3px", width: "100%" }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: "100%",
                          backgroundColor: "#f97316",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div
          style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
          className="p-6"
        >
          <div
            style={{ color: "#555555", fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: "1.25rem" }}
            className="uppercase"
          >
            All Technologies
          </div>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                style={{
                  backgroundColor: "#161616",
                  border: "1px solid #262626",
                  color: "#aaaaaa",
                  fontSize: "0.8125rem",
                  padding: "0.375rem 0.875rem",
                }}
                className="flex items-center gap-2 hover:border-[#f97316] hover:text-[#f97316] transition-colors duration-200"
              >
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
