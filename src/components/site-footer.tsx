import { Mail, MapPin, Phone } from "lucide-react";

import { BrandLockup } from "@/components/brand-mark";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div
        className="relative overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(16 35 24 / 0.55), rgb(16 35 24 / 0.82)), url(/southern-indiana-horizon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-primary-foreground/95">
          Let’s talk about how I can help you or your loved one.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-5 text-base font-semibold text-primary"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex h-12 max-w-full items-center gap-2 rounded-full bg-background px-5 text-base font-semibold text-primary"
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            <span className="truncate">{site.email}</span>
          </a>
          <p className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/40 px-5 text-base">
            <MapPin className="size-4" aria-hidden />
            Serving {site.region}
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="/"
          className="inline-flex max-w-[18rem] items-center rounded-md bg-background px-3 py-2"
        >
          <BrandLockup className="h-24 w-auto object-contain" />
        </a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-primary-foreground/75">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
