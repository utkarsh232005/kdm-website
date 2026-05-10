import { createFileRoute } from "@tanstack/react-router";
import { DocPage } from "@/components/docs/DocPage";

export const Route = createFileRoute("/docs/installation")({
  component: InstallationDoc,
  head: () => ({
    meta: [
      { title: "Installation — KDM Docs" },
      { name: "description", content: "Install the KDM CLI on macOS, Linux, and Windows." },
    ],
  }),
});

function InstallationDoc() {
  return (
    <DocPage
      eyebrow="Guide"
      title="Installation"
      intro="Install KDM in seconds with your preferred package manager."
    >
      <h2>macOS / Linux</h2>
      <pre className="font-mono text-sm border border-border p-4 bg-foreground/5 overflow-x-auto">
        <code>curl -fsSL https://get.kdm.sh | sh</code>
      </pre>
      <h2>npm</h2>
      <pre className="font-mono text-sm border border-border p-4 bg-foreground/5 overflow-x-auto">
        <code>npm install -g kdm-cli</code>
      </pre>
      <h2>Verify</h2>
      <pre className="font-mono text-sm border border-border p-4 bg-foreground/5 overflow-x-auto">
        <code>kdm --version</code>
      </pre>
    </DocPage>
  );
}
