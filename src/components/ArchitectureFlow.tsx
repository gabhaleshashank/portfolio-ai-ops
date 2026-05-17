import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircuitBoard } from "lucide-react";
import { pipelineFlows, type PipelineMode } from "../data/projects";
import { PipelineModeToggle } from "./PipelineModeToggle";
import { Section } from "./ui/Section";

export function ArchitectureFlow() {
  const [pipelineMode, setPipelineMode] = useState<PipelineMode>("software");
  const activePipeline = pipelineFlows[pipelineMode];

  return (
    <Section
      id="architecture"
      eyebrow="System flow"
      title={activePipeline.label}
      description={activePipeline.summary}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          {activePipeline.command}
        </p>
        <PipelineModeToggle
          activeMode={pipelineMode}
          onChange={setPipelineMode}
        />
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {activePipeline.steps.map((item, index) => (
          <motion.div
            key={`${pipelineMode}-${item.step}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className="group relative"
          >
            <div className="flow-card">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-lab-purple">
                  {item.step}
                </span>
                <CircuitBoard
                  size={18}
                  className="text-zinc-600 transition group-hover:text-lab-purple"
                />
              </div>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
            {index < activePipeline.steps.length - 1 ? (
              <div className="pointer-events-none hidden xl:block">
                <ArrowRight
                  size={19}
                  className="pipeline-arrow absolute -right-3 top-1/2 z-10 text-lab-purple"
                />
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
