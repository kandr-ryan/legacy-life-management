export const site = {
  legalName: "Legacy Life Management, LLC",
  shortName: "Legacy Life Management",
  owner: "Bobbie Libbey",
  ownerRole: "Owner",
  tagline: "Support Today. Brighter Tomorrows.",
  phoneDisplay: "812-598-5423",
  phoneHref: "tel:8125985423",
  email: "legacylifemanagementllc@gmail.com",
  emailHref: "mailto:legacylifemanagementllc@gmail.com",
  region: "Southern Indiana",
  /** Canonical production origin (custom domain). */
  siteUrl: "https://legacylifemanagementllc.com",
  /** Firebase Hosting fallback (same deploy). */
  backupUrl: "https://legacy-life-management.web.app",
} as const;

export const navLinks = [
  { href: "/#top", label: "Home" },
  { href: "/about", label: "About Bobbie" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/help", label: "How I can help" },
  { href: "/rates", label: "Rates and fees" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#contact", label: "Contact" },
] as const;
