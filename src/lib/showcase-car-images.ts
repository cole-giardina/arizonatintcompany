import { publicAsset } from "@/lib/public-path";

/**
 * Shop gallery — images live in `public/gallery/`. Swap files anytime.
 */
export const showcaseCarImages = [
  {
    src: publicAsset("/gallery/carousel-1.png"),
    alt: "Blue Porsche 911 GT3 side profile in the shop with tinted glass",
  },
  {
    src: publicAsset("/gallery/carousel-2.png"),
    alt: "Metallic gray Mercedes-Benz convertible with tinted windows on a residential street",
  },
  {
    src: publicAsset("/gallery/carousel-3.png"),
    alt: "Orange McLaren 650S Spider with top down in a parking lot",
  },
  {
    src: publicAsset("/gallery/carousel-4.png"),
    alt: "Dark gray Ford Mustang side profile on a sunny suburban driveway",
  },
] as const;
