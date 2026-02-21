"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import MuxPlayerClient from "@/components/video/MuxPlayerClient";
import { content, Project } from "@/content/content";

function hasPlayableVideo(p: Project) {
  const id = p.video?.playbackId?.trim();
  return Boolean(id && id !== "REPLACE_ME");
}

function muxPosterUrl(playbackId: string, time?: number) {
  const t = typeof time === "number" ? `?time=${encodeURIComponent(time)}` : "";
  return `https://image.mux.com/${playbackId}/thumbnail.jpg${t}`;
}

export default function Projects() {
  const projects = content.projects;
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const openProject = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [openId, projects]
  );

  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;

  return (
    <Section id="projects" eyebrow="PROJECTS" title="Selected work">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => {
          const playable = hasPlayableVideo(p);
          const showTeaser = canHover && playable && hoverId === p.id;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
              onMouseEnter={() => playable && setHoverId(p.id)}
              onMouseLeave={() => setHoverId((cur) => (cur === p.id ? null : cur))}
            >
              <GlassCard className="group overflow-hidden">
                {/* Media */}
                <div className="relative aspect-video w-full overflow-hidden">
                  {/* Poster (always) */}
                  <div className="absolute inset-0">
                    {playable ? (
                      <Image
                        src={muxPosterUrl(p.video!.playbackId, p.video?.posterTime)}
                        alt={`${p.title} preview`}
                        fill
                        className="object-cover opacity-90 transition duration-500 group-hover:opacity-70"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={idx < 2}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/5">
                        <p className="text-xs text-white/55">
                          Add Mux playbackId to enable preview
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Teaser */}
                  {showTeaser && (
                    <div className="absolute inset-0">
                      <MuxPlayerClient
                        playbackId={p.video!.playbackId}
                        muted
                        loop
                        autoPlay="muted"
                        controls={false}
                        startTime={p.video?.teaserStartTime}
                        posterTime={p.video?.posterTime}
                        minimalUI
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                    </div>
                  )}

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

                    <Button
                      variant="ghost"
                      onClick={() => setOpenId(p.id)}
                      className="shrink-0"
                    >
                      Watch demo
                    </Button>
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
          );
        })}
      </div>

      {/* Modal */}
      <Modal
        open={Boolean(openProject)}
        onClose={() => setOpenId(null)}
        title={openProject?.title}
        className="p-0"
      >
        {openProject && (
          <div className="p-5 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white/90">
                  {openProject.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">{openProject.summary}</p>
              </div>
              <Button variant="ghost" onClick={() => setOpenId(null)}>
                Close
              </Button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              {hasPlayableVideo(openProject) ? (
                <MuxPlayerClient
                  playbackId={openProject.video!.playbackId}
                  controls
                  className="w-full"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center">
                  <p className="text-sm text-white/55">
                    Add a Mux playbackId to enable the demo video.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {openProject.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {openProject.links.repo && (
                <Button href={openProject.links.repo} external>
                  GitHub repo
                </Button>
              )}
              {openProject.links.live && (
                <Button href={openProject.links.live} external variant="ghost">
                  Live demo
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
