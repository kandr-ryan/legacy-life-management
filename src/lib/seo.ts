import type { Metadata } from "next";

import { aboutFaq, site } from "@/lib/site";

export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") {
    return site.siteUrl;
  }
  return `${site.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl(): string {
  return absoluteUrl(site.ogImagePath);
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** When true, `title` is the full document title (home). */
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle
    ? title
    : `${title} — ${site.shortName}`;
  const images = [
    {
      url: ogImageUrl(),
      width: 1200,
      height: 630,
      alt: `${site.shortName} — ${site.tagline}`,
    },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.shortName,
      type: "website",
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImageUrl()],
    },
  };
}

/** LocalBusiness + ProfessionalService + Person — NAP only from site copy (no street address). */
export function localBusinessJsonLd() {
  const businessId = absoluteUrl("/#business");
  const personId = absoluteUrl("/#bobbie");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: site.legalName,
        alternateName: site.shortName,
        description: site.defaultDescription,
        url: site.siteUrl,
        telephone: site.phoneE164,
        email: site.email,
        image: ogImageUrl(),
        logo: absoluteUrl("/brand-logo.webp"),
        slogan: site.tagline,
        areaServed: {
          "@type": "AdministrativeArea",
          name: site.region,
        },
        founder: { "@id": personId },
        employee: { "@id": personId },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneE164,
          email: site.email,
          contactType: "customer service",
          areaServed: site.region,
          availableLanguage: "English",
        },
        sameAs: [site.backupUrl],
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.owner,
        jobTitle: site.ownerRole,
        url: absoluteUrl("/about"),
        image: absoluteUrl("/bobbie-official-20260920.jpg"),
        telephone: site.phoneE164,
        email: site.email,
        worksFor: { "@id": businessId },
        knowsAbout: [
          "Personal assistance for older adults",
          "Appointment coordination",
          "Senior living moves and transitions",
          "Funeral and family project support",
          "Everyday life assistance",
        ],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: site.shortName,
        url: site.siteUrl,
        description: site.defaultDescription,
        publisher: { "@id": businessId },
        inLanguage: "en-US",
      },
    ],
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
