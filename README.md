# Legacy Life Management

Marketing website for **Legacy Life Management, LLC** — personal, practical support for older adults and families. Owner: **Bobbie Libbey**.

This is not a medical or home-health service.

Tagline: **Support Today. Brighter Tomorrows.**

## Run locally

```bash
npm install
npm run dev
```

The app listens on **http://127.0.0.1:43147**.

Open that URL, then use Call / Email, the section links, and the contact form (empty fields show errors; a complete note shows a thank-you).

## Contact

- Phone: 812-598-5423
- Email: legacylifemanagementllc@gmail.com

The contact form validates on the server and logs the request. It does not send email until you connect a live inbox or Firebase.

## Firebase (later)

Config lives in `firebase.json`, `.firebaserc`, `apphosting.yaml`, and `src/lib/firebase.ts`. Copy `.env.example` to `.env.local` when you have a real project. The site runs without those keys.

No authentication and no database.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
