import type { Metadata } from "next";

import { BrandMark } from "@/components/brand-mark";
import { LeafMotif } from "@/components/leaf-motif";
import { ratesSheet, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates and fees",
  description: `${site.shortName} service and rate information: $20 per hour in the Evansville area, billed in 1-hour increments. Personal support — not medical, legal, or financial advice.`,
};

function RateList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RatesPage() {
  return (
    <main id="main" className="relative flex-1 overflow-hidden bg-background">
      <LeafMotif className="pointer-events-none absolute -bottom-20 -left-12 w-64 text-sage-leaf sm:w-80" />
      <article className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="relative text-center">
          <p className="absolute top-0 right-0 hidden max-w-[10rem] text-right font-heading text-base leading-snug text-ink sm:block">
            {ratesSheet.eyebrow}
          </p>
          <BrandMark className="mx-auto h-20 w-auto object-contain sm:h-24" />
          <p className="mt-4 font-heading text-sm font-semibold tracking-[0.18em] text-primary uppercase sm:text-base">
            {site.shortName}
          </p>
          <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase sm:text-xs">
            {site.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-xs font-heading text-xl leading-snug text-ink sm:hidden">
            {ratesSheet.eyebrow}
          </p>
        </header>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-primary/40" aria-hidden />
          <h1 className="text-center font-heading text-2xl font-semibold tracking-[0.06em] text-ink uppercase sm:text-3xl">
            {ratesSheet.title}
          </h1>
          <span className="h-px flex-1 bg-primary/40" aria-hidden />
        </div>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-muted-foreground">
          {ratesSheet.subtitle}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.hourly.heading}
              </h2>
              <RateList items={ratesSheet.hourly.items} />
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.largerProjects.heading}
              </h2>
              <RateList items={ratesSheet.largerProjects.items} />
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.expenses.heading}
              </h2>
              <RateList items={ratesSheet.expenses.items} />
            </section>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.included.heading}
              </h2>
              <p className="mt-3 text-lg leading-relaxed">
                {ratesSheet.included.intro}
              </p>
              <RateList items={ratesSheet.included.items} />
              <p className="mt-3 text-lg leading-relaxed">
                {ratesSheet.included.close}
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.notIncluded.heading}
              </h2>
              <p className="mt-3 text-lg leading-relaxed">
                {ratesSheet.notIncluded.body}
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold tracking-wide text-ink uppercase">
                {ratesSheet.commitment.heading}
              </h2>
              <RateList items={ratesSheet.commitment.items} />
            </section>
          </div>
        </div>

        <footer className="mt-14 border-t border-primary/25 pt-8 text-center">
          <p className="font-heading text-2xl font-semibold text-ink italic">
            {site.tagline}
          </p>
          <p className="mt-4 flex flex-col items-center justify-center gap-2 text-base sm:flex-row sm:gap-3">
            <a
              href={site.phoneHref}
              className="font-semibold underline-offset-4 hover:underline"
            >
              {site.phoneDisplay}
            </a>
            <span className="hidden text-muted-foreground sm:inline" aria-hidden>
              |
            </span>
            <a
              href={site.emailHref}
              className="break-all font-semibold underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
