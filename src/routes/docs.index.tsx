import { createFileRoute } from "@tanstack/react-router";
import { DocPage } from "@/components/docs/DocPage";

export const Route = createFileRoute("/docs/")({
  component: DocsIndex,
  head: () => ({
    meta: [
      { title: "Docs — KDM" },
      { name: "description", content: "Overview of the KDM CLI documentation." },
    ],
  }),
});

function DocsIndex() {
  return (
    <DocPage
      eyebrow="Overview"
      title="KDM Documentation"
      intro="KDM is a unified command-line monitor for Kubernetes pods, Docker containers, and Minikube clusters. These docs cover installation, commands, and live monitoring."
    >
      <h2>Get started</h2>
      <p>
        Install the CLI, point it at a cluster, and run <code>kdm show pods</code> to verify the
        connection. Every command works against local Docker, Minikube, and remote Kubernetes
        contexts.
      </p>
      <h2>Adding new docs</h2>
      <p>
        Documentation pages are file-based. Create a new route file at{" "}
        <code>src/routes/docs.&lt;slug&gt;.tsx</code> and add it to the sidebar list inside{" "}
        <code>src/routes/docs.tsx</code>. No build config required.
      </p>
    </DocPage>
  );
}
