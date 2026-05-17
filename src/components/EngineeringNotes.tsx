import { motion } from "framer-motion";
import { BookOpenText, TerminalSquare } from "lucide-react";
import { buildLogs } from "../data/buildLogs";
import { Section } from "./ui/Section";

export function EngineeringNotes() {
  return (
    <Section
      id="notes"
      eyebrow="Build logs"
      title="Engineering Notes"
      description="Short observations from debugging, hardware integration, and AI-assisted iteration."
    >
      <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-panel p-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lab-amber/20 bg-lab-amber/10 text-lab-amber">
              <TerminalSquare size={19} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                local log
              </p>
              <h3 className="text-lg font-semibold text-white">
                Practical iteration trail
              </h3>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/35 p-4 font-mono text-xs leading-6 text-zinc-400">
            <p className="text-lab-amber">$ tail engineering-notes.log</p>
            <p className="mt-2">watching sensors...</p>
            <p>comparing camera input...</p>
            <p>checking model output...</p>
            <p>shipping the rough system, then improving it.</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {buildLogs.map((log, index) => (
            <motion.article
              key={log}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              className="glass-panel hover-glow p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <BookOpenText size={17} className="text-lab-amber" />
                <span className="font-mono text-[11px] text-zinc-600">
                  NOTE_{String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-6 text-zinc-300">{log}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
