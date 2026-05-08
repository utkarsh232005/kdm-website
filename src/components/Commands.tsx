import { useState } from "react";

const commands = [
  {
    name: "show",
    sig: "kdm show <target>",
    desc: "List running runners, pods, containers, or minikube clusters.",
    output: `> kdm show pods
NAMESPACE   NAME                    READY   STATUS    AGE
default     api-server-7d4f8b       1/1     Running   3d
default     worker-queue-2c9a1      1/1     Running   3d
ingress     traefik-controller-x9   1/1     Running  14d
monitoring  prometheus-0            2/2     Running  21d`,
  },
  {
    name: "health",
    sig: "kdm health <target>",
    desc: "Detailed health, liveness, and resource pressure diagnostics.",
    output: `> kdm health pods
✓ api-server-7d4f8b       healthy    cpu 12%   mem 248Mi
✓ worker-queue-2c9a1      healthy    cpu 34%   mem 512Mi
⚠ log-shipper-abc12       degraded   restarts: 3 (last 1h)
✗ batch-runner-99fa1      failing    OOMKilled · 2x in 5m`,
  },
  {
    name: "watch",
    sig: "kdm watch",
    desc: "Live monitoring dashboard right inside your terminal.",
    output: `> kdm watch
┌─ Live · 14:02:31 ──────────────────────────┐
│ pods: 24 running · 1 pending · 0 failed    │
│ cpu:  ▆▆▇▇█▇▆▅▅▆▇█▇▆  62%                 │
│ mem:  ▃▄▄▅▅▆▆▇▇▆▅▄▄▃  41%                 │
│ net:  ↓ 124 MB/s   ↑ 38 MB/s               │
└────────────────────────────────────────────┘`,
  },
  {
    name: "logs",
    sig: "kdm logs <name>",
    desc: "Tail logs with structured parsing and instant search.",
    output: `> kdm logs api-server-7d4f8b -f
14:02:30 INFO  request GET /api/users 200 12ms
14:02:30 INFO  request POST /api/auth 201 48ms
14:02:31 WARN  cache miss key=user:8821
14:02:31 INFO  request GET /api/orders 200 18ms`,
  },
];

export const Commands = () => {
  const [active, setActive] = useState(0);
  const cmd = commands[active];

  return (
    <section id="commands" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-mono text-primary mb-3">// COMMANDS</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple syntax. <span className="text-gradient">Powerful output.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {commands.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-xl border transition-all whitespace-nowrap lg:whitespace-normal ${
                  active === i
                    ? "border-primary/60 bg-primary/10 shadow-glow"
                    : "border-border bg-card/40 hover:border-border hover:bg-card/70"
                }`}
              >
                <div className="font-mono text-sm font-semibold mb-1">{c.sig}</div>
                <div className="text-xs text-muted-foreground hidden lg:block">{c.desc}</div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur shadow-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-warning/80" />
                <span className="w-3 h-3 rounded-full bg-success/80" />
              </div>
              <span className="ml-3 text-xs font-mono text-muted-foreground">{cmd.sig}</span>
            </div>
            <pre className="p-6 font-mono text-sm leading-relaxed text-foreground/90 overflow-x-auto whitespace-pre">
{cmd.output}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
