import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Personal, practical support for older adults and families: appointments, senior-living moves, funeral-related coordination, special projects, and everyday logistics. Not a medical or home-health service. Bobbie Libbey, owner.",
  icons: {
    icon: [
      { url: "/favicon-tree-20260921.ico", type: "image/x-icon" },
      { url: "/favicon.ico?v=20260921", type: "image/x-icon" },
      {
        url: "/favicon-32x32-20260921.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16-20260921.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon-20260921.png", sizes: "180x180" }],
  },
  openGraph: {
    title: site.shortName,
    description: site.tagline,
    url: site.siteUrl,
    siteName: site.shortName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${site.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${site.shortName} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortName,
    description: site.tagline,
    images: [`${site.siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
