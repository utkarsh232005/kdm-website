import type { Doc } from "@/lib/docs";

export function DocView({ doc }: { doc: Doc }) {
  return (
    <article className="text-foreground">
      {doc.eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[1.4px] text-foreground/50 mb-4">
          {doc.eyebrow}
        </p>
      )}
      <h1 className="font-mono text-4xl md:text-5xl tracking-tight mb-6">{doc.title}</h1>
      {doc.description && (
        <p className="text-lg text-foreground/70 leading-relaxed mb-10">{doc.description}</p>
      )}
      <div
        className="doc-prose space-y-5 leading-relaxed text-foreground/80"
        dangerouslySetInnerHTML={{ __html: doc.html }}
      />
    </article>
  );
}
