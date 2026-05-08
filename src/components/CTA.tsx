import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-12 lg:p-20 text-center">
          <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Ship with <span className="text-gradient">confidence.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of engineers who replaced six dashboards with one CLI.
              Install in 30 seconds. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow">
                Start free trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-card/40 backdrop-blur">
                Read the docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
