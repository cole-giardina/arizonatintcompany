export const site = {
  name: "Arizona Tint Company",
  /** Public listings (Yelp, maps) use “AZTintCo” in copy. */
  nickname: "AZTintCo",
  tagline:
    "Scottsdale shop focused on automotive window tint, paint protection film, and wraps—quality over quantity for the greater Phoenix area.",
  motto: "If it isn't right, it isn't done.",
  phoneDisplay: "(480) 912-1793",
  phoneHref: "tel:+14809121793",
  /** SMS — use for mobile tap-to-text links; append ?body= for prefilled text. */
  smsHref: "sms:+14809121793",
  /** No public email found on listings — primary contact is phone. */
  addressStreet: "19246 N 88th Way",
  addressLocality: "Scottsdale, AZ 85255",
  addressLine: "19246 N 88th Way, Scottsdale, AZ 85255",
  hours: "Tue–Fri 8am–5pm · Sat 9am–3pm · Closed Sun & Mon",
  ctaLabel: "Call for a quote",
  /** [Yelp business page](https://www.yelp.com/biz/arizona-tint-company-scottsdale) */
  yelpUrl: "https://www.yelp.com/biz/arizona-tint-company-scottsdale",
  yelpRating: "5.0",
  yelpReviewCount: "200+",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=19246+N+88th+Way%2C+Scottsdale%2C+AZ+85255",
  /**
   * Embedded map iframe (OpenStreetMap — no API key). Pair with `mapsUrl` for Google Maps.
   * bbox: min lon, min lat, max lon, max lat around the shop.
   */
  mapsEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-111.893%2C33.6575%2C-111.8855%2C33.6635&layer=mapnik&marker=33.66039%2C-111.88941",
} as const;

/** Primary header nav — keep short; other anchors live in the page & footer. */
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#guides", label: "Guides" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Learn",
    links: [
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Gallery" },
      { href: "#guides", label: "Guides" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Visit",
    links: [
      { href: "#contact", label: "Hours & location" },
      { href: site.phoneHref, label: site.phoneDisplay },
      { href: site.mapsUrl, label: "Directions" },
      { href: site.yelpUrl, label: "Yelp reviews" },
    ],
  },
] as const;
