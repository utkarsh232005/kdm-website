import type { ReactNode } from "react";

interface DocPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function DocPage({ eyebrow, title, intro, children }: DocPageProps) {
  return (
    <article className="text-foreground">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[1.4px] text-foreground/50 mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="font-mono text-4xl md:text-5xl tracking-tight mb-6">{title}</h1>
      {intro && <p className="text-lg text-foreground/70 leading-relaxed mb-10">{intro}</p>}
      <div className="doc-prose space-y-6 leading-relaxed text-foreground/80">{children}</div>
    </article>
  );
}
