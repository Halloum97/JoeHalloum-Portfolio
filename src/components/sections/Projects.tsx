"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import { content } from "@/content/content";

export default function Projects() {
  const projects = content.projects;
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  return (
    <Section id="projects" eyebrow="PROJECTS" title="Selected work">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
          >
            <GlassCard className="group overflow-hidden">
              {/* Cover image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0">
                  {!imgError[p.id] ? (
                    <Image
                      src={p.image}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={idx < 2}
                      onError={() =>
                        setImgError((prev) => ({ ...prev, [p.id]: true }))
                      }
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/8 via-purple-500/10 to-white/5">
                      <p className="text-xs text-white/40">
                        Add image at {p.image}
                      </p>
                    </div>
                  )}
                </div>

                {/* Top glow line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white/92">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  {p.youtubeUrl && (
                    <Button
                      href={p.youtubeUrl}
                      external
                      variant="ghost"
                      className="shrink-0"
                    >
                      Watch demo
                    </Button>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.links.repo && (
                    <Button href={p.links.repo} external variant="ghost">
                      GitHub
                    </Button>
                  )}
                  {p.links.live && (
                    <Button href={p.links.live} external variant="ghost">
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
