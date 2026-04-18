"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

const SCROLL_TOP_SHOW = 72;
const DELTA_THRESHOLD = 8;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuId = useId();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      if (open) return;

      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y < SCROLL_TOP_SHOW) {
        setNavHidden(false);
        return;
      }
      if (delta > DELTA_THRESHOLD) {
        setNavHidden(true);
      } else if (delta < -DELTA_THRESHOLD) {
        setNavHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transform-gpu transition-transform duration-300 ease-out will-change-transform ${
        navHidden && !open
          ? "pointer-events-none -translate-y-full"
          : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl justify-center px-4 pt-5 md:pt-6">
        <nav
          className="flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-white/10 bg-zinc-950/55 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl md:gap-3 md:px-5 md:py-2.5"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="group relative min-w-0 shrink-0 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-tight tracking-tight text-white sm:text-base md:text-lg"
          >
            <span className="block truncate sm:whitespace-normal">
              Arizona Tint
              <span className="hidden sm:inline"> Company</span>
            </span>
            <span
              className="mt-1 block h-0.5 w-10 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-amber-400/90 opacity-90 transition-[width] group-hover:w-14"
              aria-hidden
            />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
            <a
              href={site.phoneHref}
              className="hidden text-sm font-medium text-white/65 transition hover:text-white/95 xl:inline"
            >
              {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20 md:inline-flex"
            >
              {site.ctaLabel}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id={menuId}
        className={`mx-auto max-w-4xl px-4 pt-2 md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="rounded-2xl border border-white/10 bg-zinc-950/92 p-3 shadow-xl backdrop-blur-xl">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-white/10 pt-3">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-accent-foreground)]"
              onClick={() => setOpen(false)}
            >
              {site.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              className="mt-2 block py-2 text-center text-sm font-medium text-white/70"
              onClick={() => setOpen(false)}
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
