import { cn } from "@/lib/cn";

export default function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-white/75",
        className
      )}
    >
      {children}
    </span>
  );
}
