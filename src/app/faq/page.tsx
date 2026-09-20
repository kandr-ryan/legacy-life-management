import type { Metadata } from "next";

import { LeafMotif } from "@/components/leaf-motif";
import { aboutFaq, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers about what ${site.shortName} can help with, professional boundaries, and how the first conversation works.`,
};

export default function FaqPage() {
  return (
    <main id="main" className="relative flex-1 overflow-hidden bg-sage">
      <LeafMotif className="pointer-events-none absolute -bottom-16 -left-10 w-64 text-sage-leaf sm:w-80" />
      <section className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {site.shortName}
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <dl className="mt-10 space-y-8">
          {aboutFaq.map((item) => (
            <div key={item.question}>
              <dt className="font-heading text-xl font-semibold text-ink">
                {item.question}
              </dt>
              <dd className="mt-3 text-lg leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
