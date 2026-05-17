import { type ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-lab-amber/70 bg-lab-amber text-black shadow-amber-glow hover:bg-lab-amberSoft",
  secondary:
    "border-white/10 bg-white/[0.07] text-zinc-100 hover:border-lab-amber/35 hover:bg-lab-amber/10 hover:text-amber-100",
  ghost:
    "border-transparent bg-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
  outline:
    "border-lab-amber/30 bg-transparent text-amber-100 hover:border-lab-amber/60 hover:bg-lab-amber/10",
};

export function ButtonLink({
  className,
  variant = "secondary",
  disabled,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lab-amber",
    variants[variant],
    disabled && "cursor-not-allowed opacity-55",
    className,
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
