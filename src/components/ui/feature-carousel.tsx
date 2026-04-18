"use client";

import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FeatureCarouselImage {
  src: string;
  alt: string;
}

export interface FeatureCarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle: string;
  images: readonly FeatureCarouselImage[];
  /** Optional id for the heading (e.g. for section aria-labelledby). */
  titleId?: string;
}

export const FeatureCarousel = React.forwardRef<
  HTMLDivElement,
  FeatureCarouselProps
>(({ title, subtitle, images, titleId, className, ...props }, ref) => {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = React.useState(() =>
    Math.floor(images.length / 2),
  );

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext, images.length, reduceMotion]);

  if (images.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-x-hidden bg-background p-4 text-foreground",
        "py-12 md:py-16",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 opacity-25" aria-hidden>
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(217,119,6,0.25),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(15,20,25,0.12),rgba(255,255,255,0))]" />
      </div>

      <div className="z-10 flex w-full max-w-5xl flex-col items-center space-y-6 text-center md:space-y-12">
        <div className="space-y-3">
          <h2
            id={titleId}
            className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="relative flex h-[320px] w-full items-center justify-center md:h-[420px]">
          <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const total = images.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) {
                pos -= total;
              }

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;

              return (
                <div
                  key={image.src}
                  className={cn(
                    "absolute flex h-96 w-48 items-center justify-center transition-all duration-500 ease-in-out md:h-[450px] md:w-64",
                  )}
                  style={{
                    transform: `
                        translateX(${pos * 45}%)
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${pos * -10}deg)
                      `,
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                    visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-[var(--color-ink)]/10">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 192px, 256px"
                      className="object-cover"
                      priority={isCenter}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm sm:left-8"
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm sm:right-8"
            onClick={handleNext}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
});

FeatureCarousel.displayName = "FeatureCarousel";
