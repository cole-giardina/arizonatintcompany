import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { publicAsset } from "@/lib/public-path";
import { site } from "@/lib/site";

const heroImage = publicAsset("/gallery/hero.jpg");

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-hero-bg)] text-[var(--color-hero-fg)]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Automotive glass and vehicle exterior at the shop"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover opacity-35 motion-reduce:opacity-20"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--color-hero-bg)_82%,#000)] via-[#0a101c]/90 to-[#070b12]"
          aria-hidden
        />
      </div>

      <Container className="relative pt-28 pb-16 text-center md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Scottsdale · Auto tint, PPF &amp; wraps
        </p>
        <h1
          id="hero-heading"
          className="mx-auto mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Cooler glass. Cleaner installs. Built for Arizona heat.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color-mix(in_srgb,var(--color-hero-fg)_88%,#000)]">
          {site.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm italic text-[color-mix(in_srgb,var(--color-hero-fg)_72%,#000)]">
          “{site.motto}”
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] shadow-lg shadow-black/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {site.ctaLabel}
          </a>
          <a
            href={site.yelpUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-hero-fg)_28%,#000)] px-8 py-3 text-sm font-semibold text-[var(--color-hero-fg)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Read Yelp reviews
          </a>
        </div>

        <p
          className="mx-auto mt-12 max-w-xl text-sm text-[color-mix(in_srgb,var(--color-hero-fg)_78%,#000)]"
          aria-label={`${site.yelpRating} stars on Yelp, ${site.yelpReviewCount} reviews. Serving Scottsdale and the Valley.`}
        >
          <span className="text-amber-300" aria-hidden>
            ★★★★★
          </span>{" "}
          <span className="font-semibold text-[var(--color-hero-fg)]">
            {site.yelpRating}
          </span>{" "}
          Yelp · {site.yelpReviewCount} reviews · Scottsdale &amp; Valley-wide
        </p>
      </Container>
    </div>
  );
}
