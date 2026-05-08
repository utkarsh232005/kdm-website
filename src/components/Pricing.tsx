import { Check } from "lucide-react";

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    period: "forever",
    desc: "For solo developers running local clusters.",
    features: ["1 cluster", "Local & Minikube", "Live watch mode", "7-day log retention", "Community support"],
    cta: "Download CLI",
    primary: false,
  },
  {
    name: "Team",
    price: "$24",
    period: "/user/month",
    desc: "For teams shipping production workloads.",
    features: ["Unlimited clusters", "Cloud sync & dashboards", "30-day log retention", "Slack & PagerDuty alerts", "SSO + audit logs", "Priority support"],
    cta: "Start 14-day trial",
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    desc: "For regulated industries at scale.",
    features: ["Everything in Team", "On-prem deployment", "SOC 2 + HIPAA", "Custom retention", "Dedicated CSM", "99.99% SLA"],
    cta: "Contact sales",
    primary: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[1.4px] text-foreground/50 mb-4">
            // pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-4">
            Predictable pricing. No surprises.
          </h2>
          <p className="text-base text-foreground/70">
            Free for individuals. Scale per seat — never per cluster, container, or log line.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {tiers.map((t) => (
            <div key={t.name} className="bg-background p-8 flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-mono text-sm uppercase tracking-[1.4px]">{t.name}</h3>
                {t.primary && (
                  <span className="font-mono text-[10px] uppercase tracking-[1px] px-2 py-1 border border-[rgba(255,255,255,0.2)]">
                    popular
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground/70 mb-8">{t.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-mono text-5xl font-light tracking-tight">{t.price}</span>
                <span className="text-sm text-foreground/50">{t.period}</span>
              </div>
              <a
                href="#"
                className={`btn-mono text-center px-6 py-3 mb-8 transition-colors ${
                  t.primary
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-[rgba(255,255,255,0.2)] text-foreground hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {t.cta}
              </a>
              <ul className="space-y-3 mt-auto">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-foreground mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground/70">{f}</span>
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
