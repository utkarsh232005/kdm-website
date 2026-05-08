import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "kdm show pods", delay: 0 },
  { text: "NAME                    READY   STATUS    CPU    MEM", out: true, delay: 700 },
  { text: "api-server-7d4f8b       1/1     Running   12%    248Mi", out: true, delay: 800 },
  { text: "worker-queue-2c9a1      1/1     Running   34%    512Mi", out: true, delay: 900 },
  { text: "redis-cache-0           1/1     Running   3%     64Mi", out: true, delay: 1000 },
  { prompt: "$", text: "kdm health containers", delay: 1400 },
  { text: "✓ nginx-proxy        healthy   uptime 14d", out: true, delay: 2100, color: "success" },
  { text: "✓ postgres-main      healthy   uptime 28d", out: true, delay: 2200, color: "success" },
  { text: "⚠ log-shipper        degraded  restarts: 3", out: true, delay: 2300, color: "warning" },
  { prompt: "$", text: "kdm watch", delay: 2700, blink: true },
];

export const Terminal = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisible((v) => Math.max(v, i + 1)), 300 + i * 280)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-xl border border-border bg-card/80 backdrop-blur shadow-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-destructive/80" />
          <span className="w-3 h-3 rounded-full bg-warning/80" />
          <span className="w-3 h-3 rounded-full bg-success/80" />
        </div>
        <span className="ml-3 text-xs font-mono text-muted-foreground">~/cluster — kdm</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[360px]">
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} className="flex gap-2">
            {l.prompt && <span className="text-primary">{l.prompt}</span>}
            <span
              className={
                l.color === "success"
                  ? "text-success"
                  : l.color === "warning"
                  ? "text-warning"
                  : l.out
                  ? "text-muted-foreground"
                  : "text-foreground"
              }
            >
              {l.text}
              {l.blink && i === visible - 1 && (
                <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle animate-blink" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
