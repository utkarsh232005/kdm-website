import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight">
            kdm<span className="text-primary">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#commands" className="hover:text-foreground transition-colors">Commands</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
};
