"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import {
  marqueeColumnFirst,
  marqueeColumnSecond,
  marqueeColumnThird,
} from "@/lib/testimonials-marquee-data";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-28 bg-background py-12 md:py-16"
      aria-labelledby="reviews-heading"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <h2
            id="reviews-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            What drivers say
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-foreground/70 md:text-base">
            A plan for your car—not a one-size film. Excerpts from recent{" "}
            <a
              href={site.yelpUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-[var(--color-accent-strong)] underline underline-offset-2 hover:text-[var(--color-accent)]"
            >
              Yelp
            </a>{" "}
            reviews ({site.yelpRating} · {site.yelpReviewCount}).
          </p>
        </motion.div>

        <div className="mx-auto mt-8 flex max-h-[640px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)] md:mt-10 md:gap-6">
          <TestimonialsColumn testimonials={marqueeColumnFirst} duration={15} />
          <TestimonialsColumn
            testimonials={marqueeColumnSecond}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={marqueeColumnThird}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </Container>
    </section>
  );
}
