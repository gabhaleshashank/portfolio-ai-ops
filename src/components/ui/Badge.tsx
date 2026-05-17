import { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "purple" | "green" | "cyan" | "neutral";
};

const tones = {
  purple: "border-lab-purple/35 bg-lab-purple/10 text-purple-200",
  green: "border-lab-green/35 bg-lab-green/10 text-green-200",
  cyan: "border-lab-cyan/35 bg-lab-cyan/10 text-cyan-100",
  neutral: "border-white/10 bg-white/[0.04] text-zinc-300",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
