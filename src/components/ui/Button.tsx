"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "ring-soft inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-white/10 hover:bg-white/14 border border-white/12 hover:border-white/18 bloom"
      : "bg-transparent hover:bg-white/6 border border-white/10 hover:border-white/14";

  const cls = cn(base, styles, "active:scale-[0.98]", className);

  if (href) {
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}
