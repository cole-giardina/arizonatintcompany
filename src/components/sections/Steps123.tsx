import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    phase: "Plan",
    step: "01",
    title: "Match film to your goals and your glass.",
    body: "Bring your vehicle in (or call ahead with year/make/model)—we’ll recommend VLT, film lines, PPF, or wrap options and a timeline that fits.",
  },
  {
    phase: "Install",
    step: "02",
    title: "Prep-first installation with clean edges.",
    body: "Contamination control, precise cuts, and finish work that looks OEM—not rushed.",
  },
  {
    phase: "Enjoy",
    step: "03",
    title: "Cooler, calmer, and easier on the eyes.",
    body: "We leave you with care steps and warranty details so performance lasts past the first heat wave.",
  },
] as const;

export function Steps123() {
  return (
    <Section
      id="how-it-works"
      className="bg-[var(--color-ink)] text-[var(--color-surface)]"
      aria-labelledby="steps-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Arizona Tint in 1-2-3
          </p>
          <h2
            id="steps-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Plan. Install. Enjoy the difference.
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl bg-[color-mix(in_srgb,var(--color-ink)_88%,#000)] p-6 ring-1 ring-[color-mix(in_srgb,var(--color-surface)_12%,transparent)]"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {s.phase}
              </p>
              <p
                className="mt-2 font-[family-name:var(--font-display)] text-5xl font-bold text-[color-mix(in_srgb,var(--color-surface)_52%,#1e293b)]"
                aria-hidden
              >
                {s.step}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-surface)_78%,#000)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
