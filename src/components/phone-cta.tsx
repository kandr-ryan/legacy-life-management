import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhoneCtaProps = {
  className?: string;
  variant?: "default" | "outline" | "secondary";
};

export function PhoneCta({ className, variant = "default" }: PhoneCtaProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a href={site.phoneHref} className={cn("tap-target", className)} />
      }
      variant={variant}
      size="lg"
      className="h-12 gap-2 px-5 text-base"
    >
      <Phone className="size-5" aria-hidden />
      Call {site.phoneDisplay}
    </Button>
  );
}
