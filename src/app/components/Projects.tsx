import { useState } from "react";
import { ExternalLink, Github, Tag, ChevronRight } from "lucide-react";
import ProjectDetail from "./ProjectDetail";

type Project = {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  versions: string[];
  category: string;
  features: string[];
  status: "Production" | "Open Source" | "Client Work";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Advanced HR Attendance Module",
    description: "A comprehensive attendance management system with biometric device integration, overtime calculation, and multi-shift support for Odoo 17 & 18.",
    longDesc: "Extends the native Odoo HR Attendance module with support for biometric hardware, automatic overtime rules, multi-shift scheduling, and exportable payroll reports.",
    tags: ["Python", "OWL", "QWeb", "PostgreSQL"],
    versions: ["v17", "v18"],
    category: "HR",
    features: [
      "Biometric device (ZKTeco) integration via socket",
      "Automated overtime & late arrival calculation",
      "Multi-shift scheduling with break deductions",
      "Manager dashboard with attendance analytics",
      "Payroll-ready export reports (Excel / PDF)",
    ],
    status: "Client Work",
  },
  {
    id: 2,
    title: "Multi-Company Invoicing Bridge",
    description: "Enables seamless cross-company invoice generation, reconciliation, and intercompany journal entries for enterprise Odoo deployments.",
    longDesc: "Designed for holding companies managing multiple subsidiaries on Odoo, this module automates intercompany billing and keeps books balanced across entities.",
    tags: ["Python", "Accounting", "XML-RPC", "PostgreSQL"],
    versions: ["v17", "v18", "v19"],
    category: "Accounting",
    features: [
      "Automatic intercompany invoice generation",
      "Cross-company reconciliation engine",
      "Configurable cost allocation rules per company",
      "Consolidated financial report view",
      "Real-time sync with multi-currency support",
    ],
    status: "Client Work",
  },
  {
    id: 3,
    title: "Custom Approval Workflow Engine",
    description: "A dynamic multi-level approval framework that attaches configurable approval chains to any Odoo model — purchases, leaves, expenses, and custom objects.",
    longDesc: "Built as a generic approval engine, this module allows admins to configure N-level approval chains with escalation rules, delegation, and deadline enforcement.",
    tags: ["Python", "OWL", "Workflow", "Mail Thread"],
    versions: ["v17", "v18"],
    category: "Operations",
    features: [
      "Drag-and-drop approval chain builder",
      "Role-based approver assignment",
      "Auto-escalation on deadline breach",
      "Approval delegation with audit log",
      "Email & in-app notification system",
    ],
    status: "Open Source",
  },
  {
    id: 4,
    title: "E-Commerce Sync Connector",
    description: "Real-time product, inventory, and order synchronization between Odoo and WooCommerce / Shopify stores via REST API webhooks.",
    longDesc: "A connector module that keeps Odoo as the single source of truth, pushing product updates and pulling orders from external storefronts automatically.",
    tags: ["Python", "REST API", "Webhooks", "Cron"],
    versions: ["v17", "v18", "v19"],
    category: "E-Commerce",
    features: [
      "Bidirectional product & stock sync",
      "Real-time order import via webhooks",
      "Customer mapping and deduplication",
      "Image & variant synchronization",
      "Sync error log with retry mechanism",
    ],
    status: "Client Work",
  },
  {
    id: 5,
    title: "Payroll Localization Pack (Africa)",
    description: "Country-specific payroll computation module covering tax brackets, social security contributions, and statutory deductions for multiple African countries.",
    longDesc: "Extends Odoo Payroll with locally compliant tax structures, provident fund integrations, and government-format report generation.",
    tags: ["Python", "Payroll", "QWeb", "PDF Reports"],
    versions: ["v17"],
    category: "Payroll",
    features: [
      "Configurable tax bracket engine",
      "Social security & pension contributions",
      "Government-mandated payslip format",
      "Annual tax reconciliation report",
      "Multi-currency net salary computation",
    ],
    status: "Client Work",
  },
  {
    id: 6,
    title: "Project Gantt Advanced",
    description: "An enhanced Gantt view for Odoo Projects with drag-resize task editing, critical path highlighting, resource load balancing, and milestone tracking.",
    longDesc: "Rebuilds the Odoo project Gantt using OWL and a performant rendering strategy, adding features expected in dedicated PM tools.",
    tags: ["OWL", "JavaScript", "QWeb", "Python"],
    versions: ["v19"],
    category: "Project Management",
    features: [
      "Drag-and-drop task rescheduling",
      "Critical path algorithm visualization",
      "Resource capacity & overload indicators",
      "Milestone markers with dependency arrows",
      "Export to PDF / image",
    ],
    status: "Open Source",
  },
];

const categories = ["All", "HR", "Accounting", "Operations", "E-Commerce", "Payroll", "Project Management"];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  Production: { bg: "#0d2e0d", color: "#4ade80", border: "#166534" },
  "Open Source": { bg: "#172033", color: "#60a5fa", border: "#1e40af" },
  "Client Work": { bg: "#2a1a0a", color: "#f97316", border: "#9a3412" },
};

const versionColors: Record<string, string> = {
  v17: "#f97316",
  v18: "#fb923c",
  v19: "#fdba74",
};

export function Projects() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{ backgroundColor: "#0f0f0f", borderTop: "1px solid #1a1a1a" }}
      className="py-24"
    >
      <div className="w-full px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#f97316" }} />
          <span
            style={{ color: "#f97316", fontSize: "0.8125rem", letterSpacing: "0.15em" }}
            className="uppercase"
          >
            Projects
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#f5f5f5",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Custom Odoo Modules
          </h2>
          <p style={{ color: "#666666", fontSize: "0.875rem", maxWidth: "280px" }}>
            {projects.length} modules built across 3 major Odoo versions
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                backgroundColor: active === cat ? "#f97316" : "#141414",
                color: active === cat ? "#fff" : "#888888",
                border: active === cat ? "1px solid #f97316" : "1px solid #222222",
                fontSize: "0.8125rem",
                padding: "0.375rem 1rem",
              }}
              className="transition-colors duration-200 hover:border-[#f97316] hover:text-[#f97316]"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #1f1f1f",
              }}
              className="flex flex-col hover:border-[#2e2e2e] transition-colors duration-200"
            >
              {/* Card header */}
              <div style={{ borderBottom: "1px solid #1a1a1a" }} className="p-5 flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div
                    style={{
                      ...statusColors[project.status],
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.625rem",
                      border: `1px solid ${statusColors[project.status].border}`,
                      letterSpacing: "0.05em",
                    }}
                    className="uppercase"
                  >
                    {project.status}
                  </div>
                  <div className="flex gap-1.5">
                    {project.versions.map((v) => (
                      <span
                        key={v}
                        style={{ color: versionColors[v], fontSize: "0.7rem", opacity: 0.9 }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#e0e0e0",
                    fontSize: "1rem",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginBottom: "0.625rem",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: "#666666", fontSize: "0.8125rem", lineHeight: 1.7 }}>
                  {project.description}
                </p>

                {/* Expanded features */}
                {expanded === project.id && (
                  <div style={{ marginTop: "1rem", borderTop: "1px solid #1e1e1e", paddingTop: "1rem" }}>
                    <div style={{ color: "#555555", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }} className="uppercase">
                      Key Features
                    </div>
                    <ul className="flex flex-col gap-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <ChevronRight size={13} style={{ color: "#f97316", flexShrink: 0, marginTop: "0.2rem" }} />
                          <span style={{ color: "#aaaaaa", fontSize: "0.8rem", lineHeight: 1.5 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card footer */}
              <div className="p-4 flex items-center justify-between gap-2">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#161616",
                        border: "1px solid #222222",
                        color: "#666666",
                        fontSize: "0.7rem",
                        padding: "0.15rem 0.5rem",
                      }}
                      className="flex items-center gap-1"
                    >
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      color: "#f97316",
                      fontSize: "0.75rem",
                      border: "1px solid #222222",
                      padding: "0.25rem 0.625rem",
                      backgroundColor: "#141414",
                    }}
                    className="hover:text-[#f97316] hover:border-[#f97316] transition-colors duration-200 whitespace-nowrap"
                  >
                    Details
                  </button>
                  <a
                    href="#"
                    style={{ color: "#555555" }}
                    className="hover:text-[#f97316] transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#555555" }}
                    className="hover:text-[#f97316] transition-colors duration-200"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
