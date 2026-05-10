import { createFileRoute } from "@tanstack/react-router";
import { DocPage } from "@/components/docs/DocPage";

export const Route = createFileRoute("/docs/commands")({
  component: CommandsDoc,
  head: () => ({
    meta: [
      { title: "Commands — KDM Docs" },
      { name: "description", content: "Reference for all KDM CLI commands." },
    ],
  }),
});

const commands = [
  { name: "show <target>", desc: "Show running runners, pods, containers, or minikube." },
  { name: "health <target>", desc: "Show health status for pods or containers." },
  { name: "watch", desc: "Live monitoring mode." },
  { name: "logs <name>", desc: "Show logs for a container or pod." },
  { name: "help [command]", desc: "Display help for command." },
];

function CommandsDoc() {
  return (
    <DocPage
      eyebrow="Reference"
      title="Commands"
      intro="Every KDM subcommand, with examples."
    >
      <pre className="font-mono text-sm border border-border p-4 bg-foreground/5 overflow-x-auto">
        <code>{`Usage: kdm [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       display help for command`}</code>
      </pre>
      <h2>Subcommands</h2>
      <ul className="space-y-3">
        {commands.map((c) => (
          <li key={c.name} className="border border-border p-4">
            <div className="font-mono text-sm text-foreground">kdm {c.name}</div>
            <div className="text-sm text-foreground/60 mt-1">{c.desc}</div>
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
