import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { experiences } from "../data/experience";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Internship trace"
      title="Experience"
      description="Cloud deployment, scalable infrastructure basics, and practical data workflow exposure."
    >
      <div className="relative space-y-5 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/10 sm:before:left-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.role}-${experience.duration}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.42, delay: index * 0.06 }}
            className="relative pl-12 sm:pl-16"
          >
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-lg border border-lab-amber/25 bg-graphite-900 text-lab-amber sm:left-2">
              <BriefcaseBusiness size={16} />
            </span>
            <div className="glass-panel p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge tone="amber">{experience.duration}</Badge>
                <Badge tone="neutral">
                  <MapPin size={12} />
                  {experience.location}
                </Badge>
              </div>
              <p className="text-sm font-medium text-lab-amber">
                {experience.organization}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                {experience.role}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lab-amber" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
