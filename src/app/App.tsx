import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { useEffect, useState } from "react";

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => setAboutOpen(window.location.hash === "#about-us");
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden transition-colors duration-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {aboutOpen && <AboutUs onClose={() => { window.history.replaceState(null, "", " "); setAboutOpen(false); }} />}
    </div>
  );
}
