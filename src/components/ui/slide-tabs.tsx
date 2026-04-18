"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export type SlideTabItem = {
  href: string;
  label: string;
};

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

function Cursor({ position }: { position: CursorPosition }) {
  return (
    <motion.li
      aria-hidden
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 34 }}
      className="pointer-events-none absolute top-1 bottom-1 z-0 rounded-full bg-[var(--color-ink)] shadow-md"
    />
  );
}

type TabProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  onSelect: () => void;
  onHover: () => void;
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(function Tab(
  { href, children, isActive, setPosition, onSelect, onHover },
  ref,
) {
  return (
    <li
      ref={ref}
      className="relative z-10"
      onMouseEnter={(e) => {
        onHover();
        const node = e.currentTarget;
        const { width } = node.getBoundingClientRect();
        setPosition({
          left: node.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      <a
        href={href}
        onClick={onSelect}
        className={`block cursor-pointer px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide outline-none ring-offset-2 ring-offset-[var(--color-surface)] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:px-5 md:py-2.5 md:text-sm ${
          isActive
            ? "text-white"
            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        }`}
      >
        {children}
      </a>
    </li>
  );
});

export type SlideTabsProps = {
  tabs: readonly SlideTabItem[];
  className?: string;
};

export function SlideTabs({ tabs, className = "" }: SlideTabsProps) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  const activeIndex =
    hoveredIndex !== null ? hoveredIndex : selected;

  const syncSelectedTab = useCallback(() => {
    const node = tabsRef.current[selected];
    if (!node) return;
    const { width } = node.getBoundingClientRect();
    setPosition({
      left: node.offsetLeft,
      width,
      opacity: 1,
    });
  }, [selected]);

  useEffect(() => {
    syncSelectedTab();
  }, [syncSelectedTab]);

  useEffect(() => {
    const onResize = () => syncSelectedTab();
    window.addEventListener("resize", onResize);
    const id = requestAnimationFrame(() => syncSelectedTab());
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [syncSelectedTab]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const idx = tabs.findIndex((t) => t.href === hash);
      if (idx >= 0) setSelected(idx);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [tabs]);

  const onLeave = () => {
    setHoveredIndex(null);
    syncSelectedTab();
  };

  return (
    <ul
      onMouseLeave={onLeave}
      className={`relative mx-auto flex w-fit rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_96%,transparent)] p-1 shadow-sm backdrop-blur-sm ${className}`}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.href}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          href={tab.href}
          isActive={activeIndex === i}
          setPosition={setPosition}
          onSelect={() => setSelected(i)}
          onHover={() => setHoveredIndex(i)}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}
