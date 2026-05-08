export const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-[1.4px]">kdm</span>
            <span className="text-xs text-foreground/50">© 2026 KDM Labs</span>
          </div>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-[1px] text-foreground/70">
            <a href="#" className="hover:text-foreground/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground/40 transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground/40 transition-colors">Status</a>
            <a href="#" className="hover:text-foreground/40 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
