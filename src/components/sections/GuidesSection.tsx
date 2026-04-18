import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const guides = [
  {
    title: "Arizona tint law (the practical version)",
    body: (
      <>
        <p>
          Arizona sets limits on how dark and reflective front side windows and windshields can
          be—rear passenger and rear glass are generally more flexible for SUVs and trucks, but
          the exact combination still depends on vehicle class. We recommend a legal, comfortable
          setup for daily driving and visibility—not “how dark can we sneak it.”
        </p>
        <p className="mt-3">
          Front-door limits are where most compliance questions come from; we’ll show you VLT
          options that match your goals and stay within the rules that apply to your vehicle.
        </p>
      </>
    ),
  },
  {
    title: "Ceramic vs carbon vs dyed",
    body: (
      <>
        <p>
          <strong className="text-[var(--color-ink)]">Dyed film</strong> is often the value tier:
          good looks and privacy, with heat rejection that depends on the specific line.
        </p>
        <p className="mt-3">
          <strong className="text-[var(--color-ink)]">Carbon</strong> adds durability and solid
          heat rejection without a metal layer—useful when you want less signal interference than
          some older metalized films.
        </p>
        <p className="mt-3">
          <strong className="text-[var(--color-ink)]">Ceramic / IR‑blocking ceramics</strong> are
          the premium tier for heat and clarity in Phoenix sun, with pricing to match. We’ll match
          the film to how long you keep the car and how you use it.
        </p>
      </>
    ),
  },
];

export function GuidesSection() {
  return (
    <Section
      id="guides"
      className="bg-[var(--color-muted)]"
      aria-labelledby="guides-heading"
    >
      <Container>
        <h2
          id="guides-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ink)] sm:text-4xl"
        >
          Quick guides: Arizona rules &amp; film types
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-ink-muted)] md:text-base">
          Short, honest context for two of the highest-intent searches we see—full legal detail is
          vehicle-specific; call with your year, make, and model.
        </p>
        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          {guides.map((g) => (
            <article
              key={g.title}
              className="rounded-2xl border border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_45%,transparent)] md:p-8"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                {g.title}
              </h3>
              <div className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {g.body}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
