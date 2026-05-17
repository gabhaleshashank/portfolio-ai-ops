import { motion } from "framer-motion";
import { ArrowRight, CircuitBoard } from "lucide-react";
import { architectureFlow } from "../data/projects";
import { Section } from "./ui/Section";

export function ArchitectureFlow() {
  return (
    <Section
      id="architecture"
      eyebrow="System flow"
      title="Sensor to AI Inspection Pipeline"
      description="How environmental signals move through capture, detection, output, and monitoring."
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {architectureFlow.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className="group relative"
          >
            <div className="flow-card">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-lab-amber">
                  {item.step}
                </span>
                <CircuitBoard
                  size={18}
                  className="text-zinc-600 transition group-hover:text-lab-amber"
                />
              </div>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
            {index < architectureFlow.length - 1 ? (
              <div className="pointer-events-none hidden xl:block">
                <ArrowRight
                  size={19}
                  className="pipeline-arrow absolute -right-3 top-1/2 z-10 text-lab-amber"
                />
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
