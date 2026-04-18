import { publicAsset } from "@/lib/public-path";

/**
 * Shop gallery — replace files in `public/gallery/` (01.jpg–05.jpg) with your own
 * finished work for the carousel. Keep similar aspect ratios for best results.
 */
export const showcaseCarImages = [
  {
    src: publicAsset("/gallery/01.jpg"),
    alt: "Automotive tint work — finished install",
  },
  {
    src: publicAsset("/gallery/02.jpg"),
    alt: "Sports car with window film installed",
  },
  {
    src: publicAsset("/gallery/03.jpg"),
    alt: "SUV side glass tint",
  },
  {
    src: publicAsset("/gallery/04.jpg"),
    alt: "Performance vehicle profile after tint",
  },
  {
    src: publicAsset("/gallery/05.jpg"),
    alt: "Windshield and cabin glass treatment",
  },
] as const;
