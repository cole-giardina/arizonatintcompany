import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "What are your shop hours?",
    a: `Listed hours: ${site.hours}. Closed Sunday and Monday.`,
  },
  {
    q: "How dark can I go and stay street legal in Arizona?",
    a: "Arizona law sets visible light transmission (VLT) limits that differ by window position and vehicle type—for example, front side windows and the windshield have stricter rules than many rear combinations on SUVs and trucks. We don’t guess from a chart online: we confirm what applies to your year, make, and model and recommend a setup that matches your goals and compliance.",
  },
  {
    q: "Is the back of my car treated differently than the front under AZ law?",
    a: "Often yes. Rear passenger glass and back windows frequently allow darker films than front doors, but the exact pattern depends on whether you’re in a sedan versus an SUV/truck and how the statute reads for your configuration. We’ll explain what’s legal for your specific vehicle before we cut film.",
  },
  {
    q: "Ceramic vs carbon vs dyed—what’s the difference?",
    a: "Dyed films prioritize value and appearance; carbon adds durability and strong heat rejection without a metal layer; ceramic and IR-ceramic lines target maximum heat rejection and clarity in harsh sun—typically at a higher price. Warranty length, manufacturer reputation, and how you use the car (daily commuter vs weekend car) all factor into what we recommend.",
  },
  {
    q: "How long until I can roll windows down?",
    a: "Most automotive installs need a short cure window—often 24–72 hours depending on film and weather. You’ll get exact guidance at pickup.",
  },
  {
    q: "Do you install PPF or wraps?",
    a: "Yes—public listings include paint protection film and vehicle wraps alongside window tint. Ask what makes sense for your goals and timeline.",
  },
  {
    q: "What warranty comes with my tint?",
    a: "Warranty terms are set by the film manufacturer and the series you choose—coverage for fading, peeling, adhesive failure, and color stability can differ. We review the warranty with you at install and keep records so you know who to call if something’s off.",
  },
] as const;

export function FaqSection() {
  return (
    <Section id="faq" className="bg-[var(--color-muted)]" aria-labelledby="faq-heading">
      <Container>
        <h2
          id="faq-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ink)] sm:text-4xl"
        >
          Questions we hear every week
        </h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-[color-mix(in_srgb,var(--color-border)_65%,transparent)] rounded-2xl bg-[var(--color-surface)] px-2 shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-border)_55%,transparent)] md:mt-10">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="px-4 py-1 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                {item.q}
                <span className="text-xl text-[var(--color-ink-muted)]" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
