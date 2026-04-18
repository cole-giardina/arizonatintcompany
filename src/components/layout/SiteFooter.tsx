import { Container } from "@/components/layout/Container";
import { footerColumns, navLinks, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--color-border)_45%,transparent)] bg-[var(--color-ink)] text-[var(--color-surface)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-surface)_82%,#000)]">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm font-semibold text-[var(--color-surface)]">
              {site.ctaLabel}?
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-foreground)] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {site.phoneDisplay}
            </a>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--color-surface)_70%,#000)]">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label + link.href}>
                    <a
                      href={link.href}
                      className="text-[color-mix(in_srgb,var(--color-surface)_88%,#000)] hover:text-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      rel={
                        link.href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--color-surface)_70%,#000)]">
              On this page
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[color-mix(in_srgb,var(--color-surface)_88%,#000)] hover:text-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color-mix(in_srgb,var(--color-surface)_22%,#000)] pt-8 text-xs text-[color-mix(in_srgb,var(--color-surface)_65%,#000)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}</p>
          <p>
            Not the official business website—confirm details on{" "}
            <a
              href={site.yelpUrl}
              className="underline underline-offset-2 hover:text-[var(--color-surface)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Yelp
            </a>{" "}
            or by phone before visiting.
          </p>
        </div>
      </Container>
    </footer>
  );
}
