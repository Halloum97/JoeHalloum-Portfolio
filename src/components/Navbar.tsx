"use client";

import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(nav.map((n) => n.id));

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-40 border-b border-white/8 bg-[#0B0F19]/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => go("home")}
          className="ring-soft flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/6"
        >
          <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_24px_rgba(124,58,237,0.55)]" />
          Joe Halloum
        </button>

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => {
            const is = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={cn(
                  "ring-soft rounded-2xl px-3 py-2 text-xs font-medium transition",
                  is
                    ? "bg-white/10 text-white border border-white/16"
                    : "text-white/65 hover:text-white/90 hover:bg-white/6 border border-transparent"
                )}
              >
                {n.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
