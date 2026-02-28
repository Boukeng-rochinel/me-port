import React from "react";
import { X, ExternalLink, Github, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  versions: string[];
  category: string;
  features: string[];
  status: string;
};

export function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center p-6">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />

      <div
        style={{ maxWidth: "980px" }}
        className="relative bg-[var(--color-card)] text-[var(--color-card-foreground)] rounded-md shadow-xl overflow-auto w-full max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700 }}>{project.title}</h3>
            <div style={{ color: "var(--color-muted-foreground)", fontSize: "0.9rem" }}>{project.category} • {project.versions.join(", ")}</div>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="px-3 py-1 rounded" style={{ backgroundColor: "transparent", color: "var(--color-muted-foreground)" }}>
              <Github size={16} />
            </a>
            <a href="#" className="px-3 py-1 rounded" style={{ backgroundColor: "transparent", color: "var(--color-muted-foreground)" }}>
              <ExternalLink size={16} />
            </a>
            <button aria-label="Close" onClick={onClose} className="p-2">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p style={{ color: "var(--color-foreground)", marginBottom: "1rem" }}>{project.longDesc}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1rem" }}>
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Key Features</h4>
                <ul className="flex flex-col gap-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <ChevronRight size={14} style={{ color: "var(--color-accent)" }} />
                      <span style={{ color: "var(--color-muted-foreground)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Description</h4>
                <div style={{ color: "var(--color-muted-foreground)" }}>{project.description}</div>
              </div>
            </div>

            <aside>
              <div style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)", padding: "1rem", borderRadius: "6px" }}>
                <div style={{ marginBottom: "0.5rem", color: "var(--color-muted-foreground)", fontSize: "0.8rem" }} className="uppercase">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} style={{ backgroundColor: "var(--color-popover)", color: "var(--color-popover-foreground)", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem" }}>{t}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
