import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactQuoteForm } from "@/components/sections/ContactQuoteForm";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <Section
      id="contact"
      className="bg-[var(--color-ink)] text-[var(--color-surface)]"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Got five minutes?
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Call to book—or get directions to the shop.
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-[color-mix(in_srgb,var(--color-surface)_82%,#000)] md:text-lg">
            Call with year, make, and model—or ask about PPF and wraps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {site.ctaLabel} · {site.phoneDisplay}
            </a>
            <a
              href={site.smsHref}
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-surface)_35%,#000)] px-8 py-3 text-sm font-semibold text-[var(--color-surface)] hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Text us
            </a>
            <a
              href={site.mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-surface)_35%,#000)] px-8 py-3 text-sm font-semibold text-[var(--color-surface)] hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Open in Maps
            </a>
            <a
              href={site.yelpUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-surface)_35%,#000)] px-8 py-3 text-sm font-semibold text-[var(--color-surface)] hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Yelp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-surface)_18%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_40%,#000)] shadow-lg ring-1 ring-[color-mix(in_srgb,var(--color-surface)_12%,#000)]">
          <iframe
            title="Map of Arizona Tint Company, Scottsdale"
            src={site.mapsEmbedUrl}
            className="aspect-[16/10] min-h-[220px] w-full border-0 sm:min-h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="border-t border-[color-mix(in_srgb,var(--color-surface)_12%,#000)] px-4 py-3 text-center text-xs text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
            Interactive map (OpenStreetMap). For turn-by-turn directions, use{" "}
            <a
              href={site.mapsUrl}
              className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Maps
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-[color-mix(in_srgb,var(--color-surface)_18%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_40%,#000)] p-6 text-left sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--color-surface)_70%,#000)]">
            Location &amp; hours
          </h3>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
                Address
              </dt>
              <dd className="mt-1 font-medium">
                {site.addressStreet}
                <br />
                {site.addressLocality}
              </dd>
            </div>
            <div>
              <dt className="text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
                Hours
              </dt>
              <dd className="mt-1 font-medium">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
                Phone
              </dt>
              <dd className="mt-1 font-medium">
                <a
                  href={site.phoneHref}
                  className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  {site.phoneDisplay}
                </a>
                {" · "}
                <a
                  href={site.smsHref}
                  className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  Text
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactQuoteForm />
      </Container>
    </Section>
  );
}
