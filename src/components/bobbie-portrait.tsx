import Image from "next/image";

import { cn } from "@/lib/utils";

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
        "relative block size-64 shrink-0 overflow-hidden rounded-full bg-sage-leaf/30 shadow-sm",
        className,
      )}
    >
      <Image
        src="/bobbie-official.jpg"
        alt="Bobbie Libbey, owner of Legacy Life Management"
        fill
        priority={priority}
        className="object-cover object-[50%_22%]"
        sizes="16rem"
      />
    </span>
  );
}
