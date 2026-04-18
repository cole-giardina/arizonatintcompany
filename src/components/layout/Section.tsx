import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className = "",
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`scroll-mt-28 py-12 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
