import type { Metadata, Viewport } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const pageTitle = `${site.name} | Automotive tint, PPF & wraps · Scottsdale`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arizonatint.example"),
  title: {
    default: pageTitle,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: pageTitle,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: site.name,
  description: site.tagline,
  telephone: site.phoneDisplay,
  sameAs: site.yelpUrl,
  areaServed: "Greater Phoenix metropolitan area",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressStreet,
    addressLocality: "Scottsdale",
    addressRegion: "AZ",
    postalCode: "85255",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${oswald.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
