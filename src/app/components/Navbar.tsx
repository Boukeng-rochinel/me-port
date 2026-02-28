import React, { useEffect, useState } from "react";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "About", href: "#about-us" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#about-us") {
      window.location.hash = "#about-us";
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "var(--color-background)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "var(--color-accent)" }}>
              <Code2 size={16} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--color-foreground)" }} className="tracking-tight">
              Nash<span style={{ color: "var(--color-accent)" }}>.</span>dev
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{ color: "var(--color-muted-foreground)", fontSize: "0.875rem" }}
                  className="hover:text-[#f97316] transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => { if (!mounted) return; setTheme(theme === "dark" ? "light" : "dark"); }}
              aria-label="Toggle theme"
              className="p-2 rounded-md"
              style={{ color: "var(--color-foreground)" }}
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button
              onClick={() => handleNavClick("#contact")}
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)", fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
              className="transition-colors duration-200"
            >
              Hire Me
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => { if (!mounted) return; setTheme(theme === "dark" ? "light" : "dark"); }}
              style={{ color: "var(--color-foreground)" }}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <button className="md:hidden" style={{ color: "var(--color-foreground)" }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}>
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)} style={{ color: "var(--color-muted-foreground)", fontSize: "0.9375rem" }} className="text-left hover:text-[#f97316] transition-colors duration-200 py-1">
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick("#contact")} style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)", fontSize: "0.875rem", padding: "0.625rem" }} className="mt-2 transition-colors duration-200">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
