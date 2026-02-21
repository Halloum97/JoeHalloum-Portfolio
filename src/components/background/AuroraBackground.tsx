"use client";

import { cn } from "@/lib/cn";

export default function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-20 overflow-hidden",
        className
      )}
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Aurora mesh */}
      <div
        className="absolute -inset-[35%] opacity-90"
        style={{
          animation: "aurora-drift 18s ease-in-out infinite",
          background:
            "radial-gradient(closest-side at 30% 30%, rgba(124,58,237,0.35), transparent 62%)," +
            "radial-gradient(closest-side at 70% 40%, rgba(59,130,246,0.28), transparent 62%)," +
            "radial-gradient(closest-side at 55% 75%, rgba(45,212,191,0.20), transparent 62%)," +
            "radial-gradient(closest-side at 20% 80%, rgba(99,102,241,0.22), transparent 62%)",
          filter: "blur(28px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 0%, rgba(11,15,25,0.35) 55%, rgba(11,15,25,0.9) 100%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(/noise.png)" }}
      />
    </div>
  );
}
