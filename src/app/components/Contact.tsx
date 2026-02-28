import { useState } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Clock } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#141414",
    border: "1px solid #222222",
    color: "#e0e0e0",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    color: "#666666",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#0f0f0f", borderTop: "1px solid #1a1a1a" }}
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
            Contact
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
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
            Let's Work Together
          </h2>
          <p style={{ color: "#666666", fontSize: "0.875rem" }}>
            Open to freelance projects & consulting
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Availability badge */}
            <div
              style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
              className="p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  style={{ width: "8px", height: "8px", backgroundColor: "#22c55e", borderRadius: "50%" }}
                  className="animate-pulse"
                />
                <span style={{ color: "#22c55e", fontSize: "0.8125rem" }}>Available for work</span>
              </div>
              <p style={{ color: "#555555", fontSize: "0.8125rem", lineHeight: 1.65 }}>
                Currently accepting new Odoo projects. Typical response time is within 24 hours.
              </p>
            </div>

            {/* Contact info */}
            {[
              {
                icon: <Mail size={16} style={{ color: "#f97316" }} />,
                label: "Email",
                value: "nash@ododev.com",
                href: "mailto:nash@ododev.com",
              },
              {
                icon: <MessageSquare size={16} style={{ color: "#f97316" }} />,
                label: "Preferred Contact",
                value: "Email or LinkedIn",
                href: null,
              },
              {
                icon: <Clock size={16} style={{ color: "#f97316" }} />,
                label: "Timezone",
                value: "UTC+1 (WAT) — flexible",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
                className="flex items-start gap-4 p-5"
              >
                <div
                  style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
                  className="p-2 flex-shrink-0 mt-0.5"
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: "#555555", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: "#d1d1d1", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}
                      className="hover:text-[#f97316] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ color: "#d1d1d1", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
              className="p-5"
            >
              <div style={{ color: "#555555", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Social
              </div>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, label: "GitHub", href: "#" },
                  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
                  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      backgroundColor: "#161616",
                      border: "1px solid #222222",
                      color: "#666666",
                      padding: "0.625rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="hover:border-[#f97316] hover:text-[#f97316] transition-colors duration-200"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{ backgroundColor: "#111111", border: "1px solid #1f1f1f" }}
            className="lg:col-span-3 p-6"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-4">
                <div
                  style={{ backgroundColor: "#1a2a0a", border: "1px solid #2d5016" }}
                  className="p-4"
                >
                  <Send size={28} style={{ color: "#4ade80" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#e5e5e5",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "#666666", fontSize: "0.875rem", textAlign: "center", maxWidth: "300px" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{
                    border: "1px solid #2a2a2a",
                    color: "#888888",
                    fontSize: "0.8125rem",
                    padding: "0.5rem 1.25rem",
                    backgroundColor: "transparent",
                    marginTop: "0.5rem",
                  }}
                  className="hover:border-[#f97316] hover:text-[#f97316] transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div
                  style={{ color: "#444444", fontSize: "0.75rem", letterSpacing: "0.1em", borderBottom: "1px solid #1a1a1a", paddingBottom: "1rem" }}
                  className="uppercase"
                >
                  Send a Message
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      className="focus:border-[#f97316] transition-colors duration-200 placeholder:text-[#333]"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      className="focus:border-[#f97316] transition-colors duration-200 placeholder:text-[#333]"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, appearance: "none" }}
                    className="focus:border-[#f97316] transition-colors duration-200"
                  >
                    <option value="" disabled>Select a subject...</option>
                    <option value="custom-module">Custom Module Development</option>
                    <option value="migration">Odoo Version Migration</option>
                    <option value="consulting">ERP Consulting</option>
                    <option value="bug-fix">Bug Fix / Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your project or question..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    className="focus:border-[#f97316] transition-colors duration-200 placeholder:text-[#333]"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#f97316", color: "#fff", padding: "0.75rem" }}
                  className="flex items-center justify-center gap-2 hover:bg-[#ea580c] transition-colors duration-200"
                >
                  <Send size={15} strokeWidth={2.5} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
