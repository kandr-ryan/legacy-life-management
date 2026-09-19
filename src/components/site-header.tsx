"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { PhoneCta } from "@/components/phone-cta";
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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 text-primary focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <BrandMark className="size-10 shrink-0 text-primary" />
          <span className="min-w-0">
            <span className="block font-heading text-lg leading-tight font-semibold sm:text-xl">
              <span className="sm:hidden">Legacy Life</span>
              <span className="hidden sm:inline">{site.shortName}</span>
            </span>
            <span className="hidden text-sm text-muted-foreground sm:block">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PhoneCta className="hidden sm:inline-flex" />
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="tap-target lg:hidden"
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
            <PhoneCta className="w-full" />
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
