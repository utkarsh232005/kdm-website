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
    cmd: "cloud · auto",
  },
  {
    icon: Shield,
    title: "Zero-trust by default",
    desc: "Read-only kubeconfig context, scoped tokens, and end-to-end encrypted streams. SOC 2 ready.",
    cmd: "built-in",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[1.4px] text-foreground/50 mb-4">
            // features
          </p>
          <h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-4">
            One CLI for the entire stack.
          </h2>
          <p className="text-base text-foreground/70">
            From local Minikube clusters to multi-region production, KDM gives you the same crisp
            experience whether you're debugging on a laptop or paging at 3 AM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-8 bg-background hover:bg-[rgba(255,255,255,0.03)] transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <f.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                <code className="font-mono text-xs uppercase tracking-[1px] text-foreground/50 px-2 py-1 border border-[rgba(255,255,255,0.2)]">
                  {f.cmd}
                </code>
              </div>
              <h3 className="text-lg font-normal mb-2">{f.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
