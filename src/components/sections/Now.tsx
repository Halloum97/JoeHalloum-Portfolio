"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import { content } from "@/content/content";

export default function Now() {
  return (
    <Section id="now" eyebrow="NOW" title="Currently">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <GlassCard className="p-7 md:p-9">
          <ul className="space-y-3 text-sm text-white/70">
            {content.now.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60 shadow-[0_0_24px_rgba(45,212,191,0.35)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
