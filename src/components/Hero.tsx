import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "./Terminal";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("npm install -g kdm-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
              <span className="text-muted-foreground">v2.4.0 · Cloud sync now in beta</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Monitor every <span className="text-gradient">pod & container</span> from your terminal.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              KDM is a cloud-native CLI that streams real-time health, logs, and metrics
              for Kubernetes clusters, Docker hosts, and Minikube — all from one unified command.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <button
                onClick={copy}
                className="group flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur font-mono text-sm hover:border-primary/50 transition-all"
              >
                <span className="text-muted-foreground">$</span>
                <span className="flex-1 text-left">npm install -g kdm-cli</span>
                {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow">
                Start free trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-card/40 backdrop-blur">
                View on GitHub
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div><span className="text-2xl font-bold text-foreground">12k+</span><div>Active clusters</div></div>
              <div className="w-px h-10 bg-border" />
              <div><span className="text-2xl font-bold text-foreground">99.99%</span><div>Uptime SLA</div></div>
              <div className="w-px h-10 bg-border" />
              <div><span className="text-2xl font-bold text-foreground">&lt;50ms</span><div>Stream latency</div></div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden />
            <div className="relative">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
