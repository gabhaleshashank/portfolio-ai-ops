import { motion } from "framer-motion";
import { Braces, Database, Layers, ServerCog, Sparkles, Terminal } from "lucide-react";
import { skillGroups } from "../data/skills";
import { Section } from "./ui/Section";

const icons = [Braces, Layers, ServerCog, Database, Sparkles, ServerCog, Terminal];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tooling map"
      title="Skills"
      description="Tools I use across interfaces, services, data, AI models, cloud, and automation workflows."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <motion.article
              key={group.group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.38, delay: index * 0.035 }}
              className="glass-panel hover-glow p-5"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lab-purple/20 bg-lab-purple/10 text-lab-purple">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
