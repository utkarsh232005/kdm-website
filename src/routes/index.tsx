import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Commands } from "@/components/Commands";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KDM — Kubernetes & Docker Monitor CLI" },
      {
        name: "description",
        content:
          "KDM is a cloud-native CLI for monitoring Kubernetes pods, Docker containers, and Minikube clusters in real time. Live health, logs, and metrics from one command.",
      },
      { property: "og:title", content: "KDM — Kubernetes & Docker Monitor CLI" },
      {
        property: "og:description",
        content: "Monitor every pod and container from your terminal. Live health, logs, metrics — one CLI.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Commands />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
