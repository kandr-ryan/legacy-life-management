"use client";

import { useState } from "react";
import { Mail, Menu, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site";

const headerCtaClass =
  "inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground sm:h-12 sm:px-5";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:py-4">
        <a
          href="/"
          className="flex min-w-0 shrink items-center gap-3 text-primary"
        >
          <BrandMark className="size-16 shrink-0 sm:size-[4.75rem]" />
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-heading text-sm leading-none font-semibold tracking-wide uppercase sm:text-base">
              Legacy Life Management
            </span>
            <span className="mt-1.5 block whitespace-nowrap text-[0.65rem] leading-none tracking-[0.06em] text-muted-foreground uppercase sm:text-xs">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 whitespace-nowrap xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={site.phoneHref} className={headerCtaClass}>
            <Phone className="size-4" aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href={site.emailHref}
            className={headerCtaClass}
            title={site.email}
          >
            <Mail className="size-4" aria-hidden />
            <span>Email</span>
          </a>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="tap-target xl:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[min(100%,22rem)] text-base">
          <SheetHeader>
            <SheetTitle className="font-heading text-xl">
              {site.shortName}
            </SheetTitle>
            <SheetDescription className="text-base text-muted-foreground">
              {site.tagline}
            </SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-lg font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 p-4">
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
            >
              <Mail className="size-4" aria-hidden />
              Email
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
