import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import { ButtonLink } from "./ui/Button";
import { Section } from "./ui/Section";

export function Contact() {
  const email = socials.find((social) => social.id === "email");
  const github = socials.find((social) => social.id === "github");
  const linkedin = socials.find((social) => social.id === "linkedin");

  return (
    <Section
      id="contact"
      eyebrow="Open channel"
      title="Contact"
      description={profile.contactCta}
      className="pb-10"
    >
      <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lab-purple/60 to-transparent" />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              collaboration endpoint
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold text-white">
              Fast prototypes, practical systems, useful interfaces.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Reach out for full-stack work, AI-assisted builds, cloud internships,
              automation workflows, or computer vision experiments.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {email ? (
              <ButtonLink href={email.href} variant="primary">
                <Mail size={17} />
                Email Me
              </ButtonLink>
            ) : null}
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
          </div>
        </div>
      </div>
    </Section>
  );
}
