import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{profile.footerNote}</p>
        <p className="font-mono text-xs uppercase tracking-[0.22em]">
          {profile.name} / AI OPS PORTFOLIO
        </p>
      </div>
    </footer>
  );
}
