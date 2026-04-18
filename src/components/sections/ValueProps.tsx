import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const props = [
  {
    kicker: "Clear.",
    title: "Film choices explained for your vehicle—not a script.",
    quote:
      "“Less guesswork on VLT and heat numbers; more clarity on what you’re buying.”",
    attribution: "— Typical review theme",
  },
  {
    kicker: "Tailored.",
    title: "Tint, PPF, or wraps—matched to how you use the car.",
    quote:
      "“They actually cared about sensors, trim, and finish—not just slapping film on.”",
    attribution: "— Typical review theme",
  },
  {
    kicker: "Durable.",
    title: "Edges, cure time, and care—so it stays clean in desert heat.",
    quote:
      "“Professional shop vibe; no rushed one-hour turnaround pressure.”",
    attribution: "— Typical review theme",
  },
] as const;

export function ValueProps() {
  return (
    <Section
      className="bg-[var(--color-surface)]"
      aria-labelledby="value-props-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="value-props-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl"
          >
            A plan for your car—not a one-size film.
          </h2>
          <p className="mt-3 text-base text-[var(--color-ink-muted)] md:text-lg">
            Themes we hear often—see full reviews on Yelp.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3 lg:gap-6">
          {props.map((p) => (
            <li
              key={p.kicker}
              className="flex flex-col rounded-2xl bg-[var(--color-muted)] p-6 text-left shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_70%,transparent)] md:p-7"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-strong)]">
                {p.kicker}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)] md:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-[var(--color-ink)]">
                {p.quote}
              </p>
              <p className="mt-4 text-xs text-[var(--color-ink-muted)]">
                {p.attribution}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
