"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { publicAsset } from "@/lib/public-path";
import { navLinks, site } from "@/lib/site";

/** Vector logo — true transparency; swap file to update. */
const logoSrc = publicAsset("/azt-logo.svg");

const SCROLL_TOP_SHOW = 72;
const DELTA_THRESHOLD = 8;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuId = useId();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
    }
  };

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
            onClick={onLogoClick}
            className="relative shrink-0 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
          >
            <Image
              src={logoSrc}
              alt={`${site.name} — home`}
              width={1215}
              height={247}
              unoptimized
              className="h-8 w-auto max-w-[min(88vw,380px)] object-contain object-left sm:h-9 md:h-10 md:max-w-[420px]"
              priority
              sizes="(max-width: 768px) 88vw, 420px"
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

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
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
          <div className="mt-2 border-t border-white/10 pt-3 md:hidden">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-accent-foreground)]"
              onClick={() => setOpen(false)}
            >
              {site.ctaLabel}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
