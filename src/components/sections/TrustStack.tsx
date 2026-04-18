import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const items = [
  {
    title: "Warranty you can read",
    body:
      "Film warranties depend on the manufacturer and series you choose—coverage length, transfer rules, and what’s excluded (e.g. abuse or improper cleaning) vary. At install we walk through the paperwork so you know exactly what’s covered before you leave.",
  },
  {
    title: "Trusted film lines",
    body:
      "We install premium ceramic and carbon automotive films from established suppliers—not generic no-name rolls. If you have a preferred brand, ask what we’re stocking and what we recommend for Arizona sun and your budget.",
  },
  {
    title: "Shop credentials",
    body:
      "We’re happy to answer questions about insurance, licensing, and how we handle your vehicle before you book. No dodge—just ask when you call or text.",
  },
] as const;

export function TrustStack() {
  return (
    <Section
      id="trust"
      className="border-y border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[var(--color-surface)]"
      aria-labelledby="trust-heading"
    >
      <Container>
        <h2
          id="trust-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ink)] sm:text-4xl"
        >
          Warranty, film lines &amp; peace of mind
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-ink-muted)] md:text-base">
          Competitors often hand-wave this—we prefer specifics you can scan in seconds.
        </p>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[color-mix(in_srgb,var(--color-border)_60%,transparent)] bg-[var(--color-muted)]/50 p-6 shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_45%,transparent)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
