import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  ClipboardList,
  Heart,
  House,
  Users,
} from "lucide-react";

import { LeafMotif } from "@/components/leaf-motif";
import { helpServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How I can help",
  description: `Practical support for real life from ${site.shortName}: appointments, moves, funeral and family projects, everyday help, and special projects.`,
};

type HelpIcon = (typeof helpServices)[number]["icon"];

function ServiceIcon({ name }: { name: HelpIcon }) {
  const className = "size-6 text-primary";
  switch (name) {
    case "calendar":
      return <CalendarDays className={className} aria-hidden />;
    case "home":
      return <House className={className} aria-hidden />;
    case "heart":
      return <Heart className={className} aria-hidden />;
    case "people":
      return <Users className={className} aria-hidden />;
    case "clipboard":
      return <ClipboardList className={className} aria-hidden />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export default function HelpPage() {
  return (
    <main id="main" className="relative flex-1 overflow-hidden bg-background">
      <LeafMotif className="pointer-events-none absolute -bottom-20 -left-12 w-64 text-sage-leaf sm:w-80" />
      <article className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="relative">
          <p className="absolute top-0 right-0 hidden max-w-[11rem] text-right font-heading text-base leading-snug text-ink sm:block">
            You don’t have to do it all alone.
          </p>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-primary/40" aria-hidden />
              <h1 className="font-heading text-2xl font-semibold tracking-[0.08em] text-ink uppercase sm:text-3xl">
                How I can help
              </h1>
              <span className="h-px flex-1 bg-primary/40" aria-hidden />
            </div>
            <p className="mt-3 font-heading text-2xl font-semibold text-ink sm:text-3xl">
              Practical support for real life
            </p>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
              Thoughtful help for today, and a more organized tomorrow.
            </p>
            <p className="mt-4 font-heading text-base leading-snug text-ink sm:hidden">
              You don’t have to do it all alone.
            </p>
          </div>
        </header>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
          {helpServices.map((service) => (
            <li key={service.title} className="text-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 18vw"
                />
              </div>
              <span className="mx-auto mt-5 flex size-10 items-center justify-center rounded-full border border-primary/25 bg-sage">
                <ServiceIcon name={service.icon} />
              </span>
              <h2 className="mt-4 font-heading text-base leading-snug font-semibold tracking-wide text-ink uppercase">
                {service.title}
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                {service.body}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-base leading-relaxed">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

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
