import type { Metadata } from "next";

import { LeafMotif } from "@/components/leaf-motif";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates and fees",
  description: `How ${site.shortName} talks through rates for personal support — not medical or home health.`,
};

export default function RatesPage() {
  return (
    <main id="main" className="relative flex-1 overflow-hidden bg-sage">
      <LeafMotif className="pointer-events-none absolute -bottom-16 -left-10 w-64 text-sage-leaf sm:w-80" />
      <section className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {site.shortName}
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink sm:text-5xl">
          Rates and fees
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Rates depend on the kind of help you need. We’ll talk through the
            work first, and I’ll be clear about fees before anything starts.
          </p>
          <p>
            This is personal, practical support for older adults and families —
            not medical care or home health.
          </p>
        </div>
        <a
          href="/#contact"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
        >
          Let’s talk →
        </a>
      </section>
    </main>
  );
}
