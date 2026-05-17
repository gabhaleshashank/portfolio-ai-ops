import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpenText,
  BriefcaseBusiness,
  Cpu,
  Layers3,
  Mail,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

type CommandPaletteProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const commandItems = [
  {
    label: "Featured System",
    href: "#featured-system",
    description: "Seed Quality Detection using Enhanced YOLOv8",
    icon: Cpu,
  },
  {
    label: "Architecture Flow",
    href: "#architecture",
    description: "Sensor to camera to AI model to alert pipeline",
    icon: Layers3,
  },
  {
    label: "Projects",
    href: "#projects",
    description: "AI, full-stack, frontend, and cloud experiments",
    icon: Sparkles,
  },
  {
    label: "Engineering Notes",
    href: "#notes",
    description: "Build logs and practical debugging observations",
    icon: BookOpenText,
  },
  {
    label: "Experience",
    href: "#experience",
    description: "AWS cloud and data science internships",
    icon: BriefcaseBusiness,
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Email, GitHub, and LinkedIn",
    icon: Mail,
  },
];

export function CommandPalette({ open, onOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) {
          onClose();
        } else {
          onOpen();
        }
      }

      if (event.key === "Escape" && open) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onOpen, open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commandItems;

    return commandItems.filter((item) =>
      `${item.label} ${item.description}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-20 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-graphite-900 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search size={18} className="shrink-0 text-lab-amber" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search systems, notes, projects..."
            className="h-10 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
          />
          <button
            type="button"
            onClick={onClose}
            className="icon-button"
            aria-label="Close quick navigation"
          >
            <X size={17} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-start gap-3 rounded-lg px-3 py-3 transition",
                    "hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-lab-amber",
                  )}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-lab-amber/20 bg-lab-amber/10 text-lab-amber">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-500">
                      {item.description}
                    </span>
                  </span>
                </a>
              );
            })
          ) : (
            <div className="px-3 py-8 text-center text-sm text-zinc-500">
              No matching command found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
