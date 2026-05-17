import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { projectFilters, projects, type ProjectFilter } from "../data/projects";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      eyebrow="System catalog"
      title="Projects"
      description="Practical builds across computer vision, web systems, APIs, and data-backed tools."
    >
      <div className="mb-6 flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`min-h-10 rounded-lg px-4 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-lab-amber ${
              activeFilter === filter
                ? "bg-lab-amber text-black"
                : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
            className="glass-panel hover-glow p-5"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge tone="cyan">{project.type}</Badge>
              {project.status ? <Badge tone="amber">{project.status}</Badge> : null}
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-lab-amber/20 bg-lab-amber/10 text-lab-amber">
                <Layers3 size={19} />
              </span>
              <div className="min-w-0">
                <h3 className="text-balance text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.highlight}
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-white/10 pt-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-lab-amber"
                >
                  <GitBranch size={16} />
                  GitHub Repo
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-zinc-500">
                  <GitBranch size={16} />
                  Repo placeholder
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
