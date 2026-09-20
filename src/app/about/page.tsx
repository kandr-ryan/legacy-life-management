import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { BobbiePortrait } from "@/components/bobbie-portrait";
import { BrandLockup } from "@/components/brand-mark";
import { LeafMotif } from "@/components/leaf-motif";
import { aboutStory, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Bobbie",
  description:
    "Meet Bobbie Libbey, owner of Legacy Life Management, LLC. Personal, practical support for older adults and families in Southern Indiana — not medical or home health.",
};

export default function AboutPage() {
  return (
    <main id="main" className="relative flex-1 overflow-hidden">
      <LeafMotif className="pointer-events-none absolute -bottom-16 -left-10 w-64 text-sage-leaf sm:w-80" />
      <LeafMotif className="pointer-events-none absolute top-24 -right-16 hidden w-56 text-sage-leaf lg:block" />

      <article className="relative mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="flex flex-col items-center">
            <BrandLockup className="h-auto w-56 object-contain sm:w-64" />
          </a>

          <div className="mt-10">
            <BobbiePortrait priority />
          </div>

          <p className="mt-10 max-w-xs font-heading text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            You don’t have to do it all alone.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            Meet
          </p>
          <h1 className="mt-2 font-heading text-6xl leading-none font-semibold text-ink sm:text-7xl">
            Bobbie
          </h1>
          <p className="mt-4 text-base tracking-wide text-muted-foreground uppercase">
            {site.ownerRole} | {site.legalName}
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {aboutStory.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p className="font-heading text-2xl font-semibold text-ink">
              You don’t have to do it all alone. I’m here to help.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="font-heading text-3xl font-semibold text-ink">
              {site.owner}
            </p>
            <p className="mt-1 text-base text-muted-foreground">
              {site.ownerRole} | {site.legalName}
            </p>
            <address className="mt-6 flex flex-col gap-3 not-italic sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
              >
                <Phone className="size-4" aria-hidden />
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 break-all font-semibold underline-offset-4 hover:underline"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {site.email}
              </a>
              <p className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" aria-hidden />
                Serving {site.region}
              </p>
            </address>
          </div>
        </div>
      </article>
    </main>
  );
}
