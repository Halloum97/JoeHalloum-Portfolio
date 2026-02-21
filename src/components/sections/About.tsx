"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import { content } from "@/content/content";

export default function About() {
  const c = content;

  return (
    <Section id="about" eyebrow="ABOUT" title="Who I am">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <GlassCard className="p-7 md:p-9">
          <p className="text-white/75 leading-relaxed">
            {c.profile.about}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1">
              {c.profile.education}
            </span>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
