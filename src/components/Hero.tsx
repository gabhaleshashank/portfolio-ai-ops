import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  const github = socials.find((social) => social.id === "github");
  const linkedin = socials.find((social) => social.id === "linkedin");

  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lab-amber/40 to-transparent" />
      <div className="grid min-h-[calc(100vh-10rem)] items-center gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {profile.subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-base text-zinc-500">
            <MapPin size={15} className="shrink-0 text-lab-amber" />
            <span>{profile.location}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#featured-system" variant="primary">
              View Systems
              <ArrowRight size={17} />
            </ButtonLink>
            {github ? (
              <ButtonLink
                href={github.href}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Github size={17} />
                GitHub
              </ButtonLink>
            ) : null}
            {linkedin ? (
              <ButtonLink
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Linkedin size={17} />
                LinkedIn
              </ButtonLink>
            ) : null}
            <ButtonLink href={profile.resumeUrl} variant="outline">
              <Download size={17} />
              Resume
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="glass-panel relative overflow-hidden p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-lab-amber/20 bg-lab-amber/10 text-lab-amber">
                <Terminal size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
                  status terminal
                </p>
                <p className="text-sm font-semibold text-white">
                  Currently exploring
                </p>
              </div>
            </div>
            <Badge tone="amber">LIVE</Badge>
          </div>

          <div className="space-y-3 font-mono text-sm">
            <div className="text-zinc-500">$ scan --focus-areas</div>
            {profile.currentlyExploring.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18 + index * 0.06 }}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-3 py-3 text-zinc-200"
              >
                <Sparkles size={15} className="shrink-0 text-lab-amber" />
                <span className="break-words">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center font-mono text-xs">
            <div>
              <p className="text-zinc-500">MODE</p>
              <p className="mt-1 text-lab-amber">BUILD</p>
            </div>
            <div>
              <p className="text-zinc-500">STACK</p>
              <p className="mt-1 text-lab-cyan">AI + WEB</p>
            </div>
            <div>
              <p className="text-zinc-500">OUTPUT</p>
              <p className="mt-1 text-lab-green">SYSTEMS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
