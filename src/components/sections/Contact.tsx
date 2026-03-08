"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { content } from "@/content/content";
import { useState } from "react";

export default function Contact() {
  const c = content.contact;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);  
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <Section id="contact" eyebrow="CONTACT" title="Let’s connect">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <GlassCard className="p-7 md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/60">Email</p>
              <p className="mt-1 font-[var(--font-mono)] text-sm text-white/85">
                {c.email}
              </p>
              {copied && (
                <p className="mt-2 text-xs text-teal-200/80">Copied!</p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={copy} variant="primary">
                Copy email
              </Button>

              <Button href={`mailto:${c.email}`} variant="ghost">
                Open email
              </Button>

              <Button href={c.linkedin} external variant="ghost">
                LinkedIn
              </Button>

              <Button href={c.github} external variant="ghost">
                GitHub
              </Button>

              <Button href={c.resumePath} variant="ghost">
                Resume
              </Button>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/45">
            Built with Next.js + Tailwind + Motion + Mux.
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
