"use client";

import { useCallback, useState } from "react";
import { publicAsset } from "@/lib/public-path";

/** Order: existing hero clip → second HD → UHD; cycles on each `ended`. */
const HERO_VIDEOS = [
  publicAsset("/video/hero-bg.mp4"),
  publicAsset("/video/hero-loop-2.mp4"),
  publicAsset("/video/hero-loop-3.mp4"),
] as const;

export function HeroBackgroundVideo() {
  const [index, setIndex] = useState(0);

  const onEnded = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_VIDEOS.length);
  }, []);

  return (
    <video
      key={index}
      className="absolute inset-0 size-full min-h-full min-w-full object-cover object-center opacity-[0.4] motion-reduce:hidden pointer-events-none"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      onEnded={onEnded}
    >
      <source src={HERO_VIDEOS[index]} type="video/mp4" />
    </video>
  );
}
