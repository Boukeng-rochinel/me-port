import React from "react";
import { X } from "lucide-react";

export function AboutUs({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-6">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[var(--color-card)] text-[var(--color-card-foreground)] rounded-md overflow-auto">
        <div className="flex items-center justify-between p-4 border-b" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700 }}>About Us</h3>
          <button aria-label="Close" onClick={onClose} className="p-2">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <p style={{ color: "var(--color-foreground)", marginBottom: "1rem" }}>
            Nash.dev is a small consultancy specializing in custom Odoo modules and SaaS ERP solutions. We deliver
            production-ready modules, migration support, and integrations tailored to business workflows.
          </p>

          <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Our Approach</h4>
          <p style={{ color: "var(--color-muted-foreground)" }}>
            We focus on maintainable code, automated testing, and scalable architecture. Our modules follow best
            practices for Odoo module structure and are designed for long-term maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
