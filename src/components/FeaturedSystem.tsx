import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  ExternalLink,
  GitBranch,
  HardDrive,
  Radar,
} from "lucide-react";
import { featuredSystem } from "../data/projects";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";
import { Section } from "./ui/Section";

export function FeaturedSystem() {
  return (
    <Section
      id="featured-system"
      eyebrow="Primary module"
      title="Featured System"
      description="An active inspection module built around sensors, edge capture, computer vision, and alerting."
    >
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="glass-panel p-5 sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge tone="purple">{featuredSystem.code}</Badge>
            <Badge tone="green">Status: {featuredSystem.status}</Badge>
            <Badge tone="cyan">Model: {featuredSystem.model}</Badge>
          </div>

          <h3 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
            {featuredSystem.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
            {featuredSystem.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="data-cell">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <Radar size={16} className="text-lab-purple" />
                Problem
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {featuredSystem.problem}
              </p>
            </div>
            <div className="data-cell">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <Cpu size={16} className="text-lab-green" />
                Solution
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {featuredSystem.solution}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-lab-purple/25 bg-lab-purple/10 p-4 font-mono text-xs text-purple-100">
            <div className="mb-2 text-zinc-500">PIPELINE</div>
            <div className="break-words">{featuredSystem.pipeline}</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#featured-system" variant="primary">
              View Case Study
              <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink disabled variant="secondary">
              <GitBranch size={17} />
              GitHub Repo
            </ButtonLink>
            <ButtonLink href="#architecture" variant="outline">
              Architecture
              <ExternalLink size={17} />
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-6"
        >
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
            <img
              src={featuredSystem.visual}
              alt="AI dashboard visual for the seed quality detection system"
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="data-cell">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <HardDrive size={16} className="text-lab-purple" />
                Hardware
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                {featuredSystem.hardwareStack.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lab-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="data-cell">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <Cpu size={16} className="text-lab-cyan" />
                Software
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                {featuredSystem.softwareStack.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lab-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {featuredSystem.metrics.map((metric) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="metric-tile"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {metric.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">{metric.note}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
