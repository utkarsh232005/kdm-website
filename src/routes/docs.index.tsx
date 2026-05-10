import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocView } from "@/components/docs/DocView";
import { getDoc } from "@/lib/docs";

export const Route = createFileRoute("/docs/")({
  component: DocsIndex,
  head: () => {
    const doc = getDoc("");
    return {
      meta: [
        { title: `${doc?.title ?? "Docs"} — KDM` },
        { name: "description", content: doc?.description ?? "KDM documentation." },
      ],
    };
  },
});

function DocsIndex() {
  const doc = getDoc("");
  if (!doc) throw notFound();
  return <DocView doc={doc} />;
}
