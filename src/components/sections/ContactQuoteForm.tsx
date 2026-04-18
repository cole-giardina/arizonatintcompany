"use client";

import * as React from "react";

import { site } from "@/lib/site";

export function ContactQuoteForm() {
  const [name, setName] = React.useState("");
  const [vehicle, setVehicle] = React.useState("");
  const [note, setNote] = React.useState("");
  const [submittedHint, setSubmittedHint] = React.useState<string | null>(null);

  const buildBody = () => {
    const lines = [
      "Quote request — Arizona Tint",
      name.trim() && `Name: ${name.trim()}`,
      vehicle.trim() && `Vehicle: ${vehicle.trim()}`,
      note.trim() && `Notes: ${note.trim()}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = buildBody();
    const href = `${site.smsHref}?body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmittedHint(
      `If Messages did not open, text ${site.phoneDisplay} or call us with the same details.`,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-[color-mix(in_srgb,var(--color-surface)_18%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_40%,#000)] p-6 text-left sm:p-8"
      aria-labelledby="quote-form-heading"
    >
      <h3
        id="quote-form-heading"
        className="text-sm font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--color-surface)_70%,#000)]"
      >
        Request a time (text)
      </h3>
      <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--color-surface)_78%,#000)]">
        We&apos;ll open your SMS app with this note prefilled—no account required. You can
        also call or text us directly.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
            Name
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[color-mix(in_srgb,var(--color-surface)_22%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_55%,#000)] px-3 py-2.5 text-sm text-[var(--color-surface)] placeholder:text-[color-mix(in_srgb,var(--color-surface)_45%,#000)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
            Year, make &amp; model
          </span>
          <input
            type="text"
            name="vehicle"
            autoComplete="off"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[color-mix(in_srgb,var(--color-surface)_22%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_55%,#000)] px-3 py-2.5 text-sm text-[var(--color-surface)] placeholder:text-[color-mix(in_srgb,var(--color-surface)_45%,#000)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            placeholder="e.g. 2022 Tesla Model Y"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-[color-mix(in_srgb,var(--color-surface)_65%,#000)]">
            What you need
          </span>
          <textarea
            name="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-1 w-full resize-y rounded-lg border border-[color-mix(in_srgb,var(--color-surface)_22%,#000)] bg-[color-mix(in_srgb,var(--color-ink)_55%,#000)] px-3 py-2.5 text-sm text-[var(--color-surface)] placeholder:text-[color-mix(in_srgb,var(--color-surface)_45%,#000)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            placeholder="Tint, PPF, wrap, or questions…"
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Send via SMS
        </button>
        {submittedHint ? (
          <p className="text-xs text-[color-mix(in_srgb,var(--color-surface)_72%,#000)]">
            {submittedHint}
          </p>
        ) : null}
      </div>
    </form>
  );
}
