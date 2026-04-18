import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Services } from "@/components/sections/Services";
import { StatsRow } from "@/components/sections/StatsRow";
import { Steps123 } from "@/components/sections/Steps123";
import { TeamSection } from "@/components/sections/TeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStack } from "@/components/sections/TrustStack";
import { ValueProps } from "@/components/sections/ValueProps";
import { VehicleTypes } from "@/components/sections/VehicleTypes";
import { WorkGallery } from "@/components/sections/WorkGallery";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only left-4 top-4 z-[100] rounded-md bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-lg outline outline-2 outline-[var(--color-accent)] focus:absolute focus:not-sr-only"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" aria-labelledby="hero-heading">
        <Hero />
        <ValueProps />
        <VehicleTypes />
        <WorkGallery />
        <ProductShowcase />
        <Steps123 />
        <StatsRow />
        <Services />
        <TrustStack />
        <TeamSection />
        <Testimonials />
        <GuidesSection />
        <FaqSection />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
