import Image from "next/image";

import { cn } from "@/lib/utils";

export const BOBBIE_PORTRAIT_SRC = "/bobbie-official-20260920.jpg";

export function BobbiePortrait({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative block aspect-square h-64 w-64 min-h-64 min-w-64 shrink-0 overflow-hidden rounded-full bg-sage-leaf/30 shadow-sm",
        className,
      )}
    >
      <Image
        src={BOBBIE_PORTRAIT_SRC}
        alt="Bobbie Libbey, owner of Legacy Life Management"
        fill
        priority={priority}
        className="object-cover object-[50%_18%]"
        sizes="16rem"
      />
    </span>
  );
}
