import { cn } from "@/lib/cn";

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-6 py-20 scroll-mt-24",
        className
      )}
    >
      {(title || eyebrow) && (
        <header className="mb-10">
          {eyebrow && (
            <p className="font-[var(--font-mono)] text-xs tracking-widest text-white/55">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white text-balance">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
