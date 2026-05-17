import { CircuitBoard, Code2 } from "lucide-react";
import type { PipelineMode } from "../data/projects";

type PipelineModeToggleProps = {
  activeMode: PipelineMode;
  onChange: (mode: PipelineMode) => void;
};

const modes: Array<{
  id: PipelineMode;
  label: string;
  Icon: typeof Code2;
}> = [
  { id: "software", label: "Software", Icon: Code2 },
  { id: "hardware", label: "Hardware", Icon: CircuitBoard },
];

export function PipelineModeToggle({
  activeMode,
  onChange,
}: PipelineModeToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-white/10 bg-white/[0.04] p-1">
      {modes.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-pressed={activeMode === id}
          onClick={() => onChange(id)}
          className={`inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-lab-purple ${
            activeMode === id
              ? "bg-lab-purple text-black"
              : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
          }`}
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </div>
  );
}
