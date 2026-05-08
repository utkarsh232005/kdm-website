import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    period: "forever",
    desc: "For solo developers running local clusters.",
    features: ["1 cluster", "Local & Minikube", "Live watch mode", "7-day log retention", "Community support"],
    cta: "Download CLI",
  },
  {
    name: "Team",
    price: "$24",
    period: "/user/month",
    desc: "For teams shipping production workloads.",
    features: ["Unlimited clusters", "Cloud sync & dashboards", "30-day log retention", "Slack & PagerDuty alerts", "SSO + audit logs", "Priority support"],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    desc: "For regulated industries at scale.",
    features: ["Everything in Team", "On-prem deployment", "SOC 2 + HIPAA", "Custom retention", "Dedicated CSM", "99.99% SLA"],
    cta: "Contact sales",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-mono text-primary mb-3">// PRICING</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Predictable pricing. <span className="text-gradient">No surprises.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Free for individuals. Scale per seat — never per cluster, container, or log line.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-2xl border backdrop-blur transition-all ${
                t.featured
                  ? "border-primary/60 bg-gradient-card shadow-glow scale-[1.02]"
                  : "border-border bg-card/40"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-medium text-primary-foreground">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.period}</span>
              </div>
              <Button
                className={`w-full mb-6 ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground border-0 hover:opacity-90"
                    : ""
                }`}
                variant={t.featured ? "default" : "outline"}
              >
                {t.cta}
              </Button>
              <ul className="space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
