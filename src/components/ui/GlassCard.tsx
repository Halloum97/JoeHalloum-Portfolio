import { cn } from "@/lib/cn";

export default function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("glass rounded-3xl", className)}>
      {children}
    </div>
  );
}
