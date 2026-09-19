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

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 text-primary"
        >
          <BrandMark className="size-11 shrink-0 sm:size-12" />
          <span>
            <span className="block font-heading text-[0.95rem] leading-tight font-semibold tracking-wide uppercase sm:text-base">
              <span className="block">Legacy</span>
              <span className="hidden sm:block">Life Management</span>
            </span>
            <span className="mt-1 hidden max-w-[11rem] text-[0.65rem] leading-snug tracking-[0.12em] text-muted-foreground uppercase lg:block">
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
          <a
            href={site.phoneHref}
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground sm:h-12 sm:px-5"
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href={site.emailHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-primary underline-offset-4 hover:underline xl:inline-flex"
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
              className="text-center text-base font-medium underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
