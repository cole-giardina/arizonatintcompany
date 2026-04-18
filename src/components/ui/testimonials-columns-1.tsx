"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ColumnTestimonial } from "@/lib/testimonials-marquee-data";

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: ColumnTestimonial[];
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={
          reduceMotion
            ? { translateY: "0%" }
            : {
                translateY: "-50%",
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: props.duration ?? 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex flex-col gap-4 pb-4 bg-background"
      >
        {Array.from({ length: 2 }).map((_, dupIndex) => (
          <React.Fragment key={dupIndex}>
            {props.testimonials.map((item, i) => (
              <div
                className="w-full max-w-xs rounded-2xl bg-background p-6 shadow-md ring-1 ring-[color-mix(in_srgb,var(--color-border)_65%,transparent)]"
                key={`${dupIndex}-${i}-${item.name}`}
              >
                <div className="text-sm leading-relaxed text-foreground">
                  {item.text}
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    width={40}
                    height={40}
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-foreground">
                      {item.name}
                    </div>
                    <div className="leading-5 opacity-60 tracking-tight text-foreground">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
