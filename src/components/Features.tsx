import { Eye, HeartPulse, Radio, ScrollText, Cloud, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Unified visibility",
    desc: "Show running pods, containers, runners, and Minikube nodes — across clouds — in a single command.",
    cmd: "kdm show <target>",
  },
  {
    icon: HeartPulse,
    title: "Health diagnostics",
    desc: "Probe liveness, readiness, restarts, and resource pressure with intelligent severity scoring.",
    cmd: "kdm health <target>",
  },
  {
    icon: Radio,
    title: "Live watch mode",
    desc: "Stream metrics in real time with millisecond updates. Pin services, filter noise, alert on drift.",
    cmd: "kdm watch",
  },
  {
    icon: ScrollText,
    title: "Smart log tailing",
    desc: "Tail container or pod logs with structured parsing, multi-line stitching, and instant search.",
    cmd: "kdm logs <name>",
  },
  {
    icon: Cloud,
    title: "Cloud-synced state",
    desc: "Securely sync cluster state across your team. Share dashboards, runbooks, and incident timelines.",
    cmd: "Cloud · auto",
  },
  {
    icon: Shield,
    title: "Zero-trust by default",
    desc: "Read-only kubeconfig context, scoped tokens, and end-to-end encrypted streams. SOC 2 ready.",
    cmd: "Built-in",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3">// FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            One CLI for the <span className="text-gradient">entire stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From local Minikube clusters to multi-region production, KDM gives you the same crisp
            experience whether you're debugging on a laptop or paging at 3 AM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl border border-border bg-gradient-card backdrop-blur hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <f.icon className="h-5 w-5" />
                </div>
                <code className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                  {f.cmd}
                </code>
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
