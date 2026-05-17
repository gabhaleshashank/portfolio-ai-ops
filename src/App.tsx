import { useState } from "react";
import { About } from "./components/About";
import { ArchitectureFlow } from "./components/ArchitectureFlow";
import { CommandPalette } from "./components/CommandPalette";
import { Contact } from "./components/Contact";
import { EngineeringNotes } from "./components/EngineeringNotes";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { FeaturedSystem } from "./components/FeaturedSystem";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="lab-grid min-h-screen bg-graphite-950 text-zinc-100">
      <Header onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette
        open={commandOpen}
        onOpen={() => setCommandOpen(true)}
        onClose={() => setCommandOpen(false)}
      />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedSystem />
        <ArchitectureFlow />
        <Projects />
        <EngineeringNotes />
        <ExperienceTimeline />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
