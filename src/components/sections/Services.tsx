import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const items = [
  {
    title: "Automotive window tint",
    body: "Ceramic and performance films for daily drivers, EVs, and weekend cars—heat and glare control with a clean, factory-style finish.",
    points: [
      "Ceramic & performance stacks for heat and glare",
      "Legal shade guidance for AZ",
      "Edges and dot-matrix areas done with care",
    ],
  },
  {
    title: "Paint protection film (PPF)",
    body: "Help protect high-impact paint from chips and debris—ask what coverage makes sense for how you drive.",
    points: ["Clear bra options", "Patterned kits", "Showroom-style finish goals"],
  },
  {
    title: "Vehicle wraps",
    body: "Color change or branded graphics for a cohesive look—pair with tint and PPF for a full exterior story.",
    points: ["Fleet-ready appearance", "Design consult", "Coordinated install planning"],
  },
] as const;

export function Services() {
  return (
    <Section
      id="services"
      className="bg-[var(--color-surface)]"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-strong)]">
            What we install
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            Automotive-first: tint, PPF, and wraps.
          </h2>
          <p className="mt-3 text-base text-[var(--color-ink-muted)] md:text-lg">
            We take the time each vehicle needs—then match film, PPF, or wrap plan
            to your goals.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl bg-[var(--color-muted)] p-6 shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_70%,transparent)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {item.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] pt-5 text-sm text-[var(--color-ink)]">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
