import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 pt-5 pb-14 sm:pt-7 sm:pb-16", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 max-w-3xl"
      >
        {eyebrow ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-lab-amber">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
            {description}
          </p>
        ) : null}
      </motion.div>
      {children}
    </section>
  );
}
