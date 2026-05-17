import { motion } from "framer-motion";
import { BrainCircuit, Gauge, Wrench } from "lucide-react";
import { profile } from "../data/profile";
import { Section } from "./ui/Section";

const traits = [
  {
    label: "AI-assisted",
    detail: "Uses modern tools to prototype faster while still understanding the flow.",
    icon: BrainCircuit,
  },
  {
    label: "System-minded",
    detail: "Thinks in inputs, triggers, pipelines, feedback, and deployment paths.",
    icon: Gauge,
  },
  {
    label: "Practical builder",
    detail: "Turns rough experiments into usable interfaces and automation workflows.",
    icon: Wrench,
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Builder profile"
      title="About"
      description="First-person, practical, and focused on how the work gets built."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="glass-panel p-5 sm:p-6"
        >
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-3">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.article
                key={trait.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className="glass-panel hover-glow p-4"
              >
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-lab-amber/20 bg-lab-amber/10 text-lab-amber">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{trait.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {trait.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
