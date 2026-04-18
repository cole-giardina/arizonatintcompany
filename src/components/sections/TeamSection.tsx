import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function TeamSection() {
  return (
    <Section className="bg-[var(--color-muted)]" aria-labelledby="team-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="team-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            Led by people reviewers know by name.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Yelp reviewers often mention Chris for deep knowledge of automotive
            window film and straight answers—without a rushed, high-volume shop
            vibe.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-[var(--color-surface)] p-7 text-center shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_65%,transparent)] md:mt-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-strong)]">
            Owner &amp; installer
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
            Chris
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Described in public listings as passionate about cars and unwilling to
            cut corners to “turn” a car in an hour—because quality and clean edges
            come first.
          </p>
        </div>
      </Container>
    </Section>
  );
}
