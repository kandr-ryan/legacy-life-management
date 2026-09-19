export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 28V13.2c0-.7.5-1.2 1.2-1.2H22c3.4 0 5.8 2.2 5.8 5.3 0 2.3-1.3 4-3.4 4.8L28.8 28h-4.1l-4.4-6.3H16.6V28H12Zm4.6-9.6h4.8c1.8 0 2.9-1.1 2.9-2.6s-1.1-2.6-2.9-2.6h-4.8v5.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
