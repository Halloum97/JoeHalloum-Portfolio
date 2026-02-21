"use client";

import MuxPlayer from "@mux/mux-player-react";
import { cn } from "@/lib/cn";

type Props = {
  playbackId: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: "muted" | boolean;
  controls?: boolean;
  startTime?: number;
  posterTime?: number;
  minimalUI?: boolean;
};

export default function MuxPlayerClient({
  playbackId,
  className,
  muted,
  loop,
  autoPlay,
  controls = true,
  startTime,
  posterTime,
  minimalUI,
}: Props) {
  return (
    <MuxPlayer
      className={cn("w-full", className)}
      playbackId={playbackId}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      controls={controls}
      startTime={startTime}
      thumbnailTime={posterTime}
      style={
        minimalUI
          ? ({
              // Many UI tweaks are driven by CSS variables/parts; for a teaser we keep it minimal.
              "--controls": "none",
            } as React.CSSProperties)
          : undefined
      }
    />
  );
}
