"use client";

import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Short description for screen readers */
  alt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = React.useState(50);
  const id = React.useId();

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[var(--color-muted)] shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_40%,transparent)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full md:aspect-[2/1]">
        {/* Base: “before”; overlay: “after” revealed left-to-right as the slider increases */}
        <Image
          src={beforeSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${100 - position}%)` }}
          aria-hidden
        >
          <Image
            src={afterSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-[var(--color-surface)] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-ink)]/85 text-xs font-bold text-[var(--color-surface)] shadow-lg"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          ⇄
        </div>
      </div>

      <div className="border-t border-[color-mix(in_srgb,var(--color-border)_50%,transparent)] bg-[var(--color-surface)] px-4 py-4">
        <p id={`${id}-desc`} className="sr-only">
          {alt}. Drag the slider to compare before and after.
        </p>
        <label
          htmlFor={`${id}-range`}
          className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]"
        >
          <span>{beforeLabel}</span>
          <span>{afterLabel}</span>
        </label>
        <input
          id={`${id}-range`}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="mt-3 h-3 w-full cursor-ew-resize appearance-none rounded-full bg-[var(--color-muted)] accent-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          aria-valuetext={`${position}% toward ${afterLabel}`}
          aria-describedby={`${id}-desc`}
        />
      </div>
    </div>
  );
}
