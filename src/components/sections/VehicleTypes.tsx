import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function VehicleTypes() {
  return (
    <Section
      className="bg-[var(--color-muted)]"
      aria-labelledby="vehicle-types-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="vehicle-types-heading"
            className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)] sm:text-2xl"
          >
            Sedans to fleets—tint, PPF, and wraps
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
            Daily drivers · EVs · trucks · performance cars · PPF combos · color
            wraps
          </p>
        </div>
      </Container>
    </Section>
  );
}
