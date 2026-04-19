import { Container } from "@/components/layout/Container";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { showcaseCarImages } from "@/lib/showcase-car-images";

export function WorkGallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 bg-background"
      aria-labelledby="gallery-heading"
    >
      <FeatureCarousel
        titleId="gallery-heading"
        title={
          <>
            In the shop:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-strong)] to-[var(--color-accent)]">
              real builds
            </span>
          </>
        }
        subtitle="Photos live in public/gallery—swap the files anytime to show your own work."
        images={showcaseCarImages}
      />
    </section>
  );
}
