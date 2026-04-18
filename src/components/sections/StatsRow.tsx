import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

const stats = [
  { value: site.yelpRating, label: `Yelp rating · ${site.yelpReviewCount} reviews` },
  { value: "Scottsdale", label: "19246 N 88th Way · AZ 85255" },
  { value: "PPF", label: "Paint protection film & wraps (ask the shop)" },
] as const;

export function StatsRow() {
  return (
    <div className="border-y border-[color-mix(in_srgb,var(--color-border)_55%,transparent)] bg-[var(--color-surface)] py-10 md:py-12">
      <Container>
        <ul className="grid gap-6 text-center sm:grid-cols-3 sm:gap-8">
          {stats.map((s) => (
            <li key={s.label}>
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-[var(--color-ink-muted)]">
          Counts change—see{" "}
          <a
            href={site.yelpUrl}
            className="font-medium text-[var(--color-ink)] underline underline-offset-2 hover:text-[var(--color-accent-strong)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yelp
          </a>{" "}
          for current reviews.
        </p>
      </Container>
    </div>
  );
}
