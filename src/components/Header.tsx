import { useEffect, useState } from "react";
import { Command, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { socials } from "../data/socials";

type HeaderProps = {
  onOpenCommand: () => void;
};

const navItems = [
  { label: "System", href: "#featured-system" },
  { label: "Flow", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export function Header({ onOpenCommand }: HeaderProps) {
  const github = socials.find((social) => social.id === "github");
  const linkedin = socials.find((social) => social.id === "linkedin");
  const email = socials.find((social) => social.id === "email");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
    }

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lab-amber"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-lab-amber/30 bg-lab-amber/10 font-mono text-xs font-bold text-lab-amber">
            SG
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white">
              {profile.name}
            </span>
            <span className="block truncate font-mono text-[11px] uppercase text-zinc-500">
              AI OPS / ENGINEERING LAB
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lab-amber"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-button"
              >
                <Github size={17} />
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-button"
              >
                <Linkedin size={17} />
              </a>
            ) : null}
            {email ? (
              <a href={email.href} aria-label="Email" className="icon-button">
                <Mail size={17} />
              </a>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onOpenCommand}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:border-lab-amber/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lab-amber"
            aria-label="Open quick navigation"
          >
            <Command size={16} />
          </button>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-[2px] overflow-hidden"
      >
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-purple-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
}
