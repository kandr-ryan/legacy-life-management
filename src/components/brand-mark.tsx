import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand-tree.webp"
      alt=""
      width={646}
      height={527}
      className={className}
    />
  );
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <Image
      src="/brand-logo.webp"
      alt="Legacy Life Management, LLC"
      width={1536}
      height={1024}
      className={className}
    />
  );
}
