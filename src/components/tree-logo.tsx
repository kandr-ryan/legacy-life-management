export function TreeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 8c-7.2 0-13 6-13 14.2 0 2.4.6 4.6 1.6 6.6C16.4 30 14 34.2 14 39c0 7.2 6.4 12 18 12s18-4.8 18-12c0-4.8-2.4-9-6.6-10.2 1-2 1.6-4.2 1.6-6.6C45 14 39.2 8 32 8Z"
        fill="currentColor"
      />
      <path
        d="M29.5 48.5V58h5V48.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M22 26c3 1.4 6.4 2.2 10 2.2s7-.8 10-2.2M20 36c3.6 1.8 7.6 2.7 12 2.7s8.4-.9 12-2.7"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
