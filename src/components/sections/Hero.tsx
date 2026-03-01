"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { content } from "@/content/content";

export default function Hero() {
  const c = content;

  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-6 pt-20 pb-14 scroll-mt-24">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
        {/* ── Text column ── */}
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-[var(--font-mono)] text-xs tracking-widest text-white/55">
            FULL‑STACK • AI • CLOUD
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            <span className="text-white">{c.profile.name}</span>
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-200 to-teal-200">
              {c.profile.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
            {c.profile.about}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}>
              View projects
            </Button>

            <Button
              href={c.contact.linkedin}
              external
              variant="ghost"
            >
              LinkedIn
            </Button>

            <Button
              href={c.contact.resumePath}
              variant="ghost"
            >
              Download resume
            </Button>
          </div>
        </motion.div>

        {/* ── Photo column ── */}
        <motion.div
          className="flex-shrink-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative h-52 w-52 md:h-72 md:w-72 rounded-full overflow-hidden ring-2 ring-white/10 shadow-lg shadow-purple-500/10">
            <Image
              src="/profile.jpg"
              alt={c.profile.name}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
