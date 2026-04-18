import { Container } from "@/components/layout/Container";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { publicAsset } from "@/lib/public-path";
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

      <Container className="pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Before / after
          </h3>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)] md:text-base">
            Drag the slider to compare. Replace{" "}
            <span className="font-mono text-xs">before.jpg</span> and{" "}
            <span className="font-mono text-xs">after.jpg</span> in{" "}
            <span className="font-mono text-xs">public/gallery/</span> with a
            matched pair from your shop.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <BeforeAfterSlider
            beforeSrc={publicAsset("/gallery/before.jpg")}
            afterSrc={publicAsset("/gallery/after.jpg")}
            beforeLabel="Before"
            afterLabel="After"
            alt="Comparison of vehicle appearance before and after tint"
          />
        </div>
      </Container>
    </section>
  );
}
