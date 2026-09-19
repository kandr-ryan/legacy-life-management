import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type EmailCtaProps = {
  className?: string;
  variant?: "default" | "outline" | "secondary";
};

export function EmailCta({ className, variant = "outline" }: EmailCtaProps) {
  return (
    <Button
      nativeButton={false}
      render={<a href={site.emailHref} className={cn("tap-target", className)} />}
      variant={variant}
      size="lg"
      className="h-12 gap-2 px-5 text-base"
    >
      <Mail className="size-5" aria-hidden />
      Email Bobbie
    </Button>
  );
}
