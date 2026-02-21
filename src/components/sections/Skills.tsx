"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Chip from "@/components/ui/Chip";
import { content } from "@/content/content";

export default function Skills() {
  const { skills } = content;

  return (
    <Section id="skills" eyebrow="SKILLS" title="Tools I ship with">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-sm font-semibold text-white/90">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
