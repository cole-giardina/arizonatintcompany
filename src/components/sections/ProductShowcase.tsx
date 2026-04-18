import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const img =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80";

export function ProductShowcase() {
  return (
    <Section className="bg-[var(--color-surface)]" aria-labelledby="showcase-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-strong)]">
              Your install snapshot
            </p>
            <h2
              id="showcase-heading"
              className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
            >
              Know what you’re getting before we cut a single panel.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
              We align film options to your goals—heat rejection, glare, privacy,
              and legal limits—then walk through cure time and care so results
              stay crisp.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="rounded-xl bg-[var(--color-muted)] p-4 ring-1 ring-[color-mix(in_srgb,var(--color-border)_65%,transparent)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                  Today’s plan
                </p>
                <p className="mt-1 font-medium text-[var(--color-ink)]">
                  Ceramic 20% · sides &amp; rear · IR-focused stack
                </p>
              </li>
              <li className="rounded-xl bg-[var(--color-muted)] p-4 ring-1 ring-[color-mix(in_srgb,var(--color-border)_65%,transparent)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                  After install
                </p>
                <p className="mt-1 font-medium text-[var(--color-ink)]">
                  Roll windows after 48h · mild soap only · park in shade day one
                </p>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--color-border)_55%,transparent)]">
              <Image
                src={img}
                alt="Automotive detail emphasizing clean glass and trim"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
