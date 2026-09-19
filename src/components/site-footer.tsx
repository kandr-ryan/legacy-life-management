import { BrandMark } from "@/components/brand-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="flex gap-4">
          <BrandMark className="size-11 shrink-0 text-primary-foreground" />
          <div>
            <p className="font-heading text-xl font-semibold">{site.legalName}</p>
            <p className="mt-1 text-base text-primary-foreground/90">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/85">
              Personal, practical support for older adults and families. Not a
              medical or home-health service.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-base">
          <p className="font-heading text-lg font-semibold">{site.owner}</p>
          <p>{site.ownerRole}</p>
          <p>
            <a
              className="underline decoration-primary-foreground/50 underline-offset-4 hover:decoration-primary-foreground"
              href={site.phoneHref}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              className="break-all underline decoration-primary-foreground/50 underline-offset-4 hover:decoration-primary-foreground"
              href={site.emailHref}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
