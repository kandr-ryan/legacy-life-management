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

The contact form validates in the browser and logs the request. It does not send email until you connect a live inbox.

## Live

- Site: https://legacy-life-management.web.app
- GitHub: https://github.com/kandr-ryan/legacy-life-management
- Firebase project: `legacy-life-management`

Deploy static Hosting after a production build:

```bash
npm run build
npx firebase-tools deploy --only hosting --project legacy-life-management
```

No authentication and no database. Copy `.env.example` to `.env.local` only if you add Firebase client keys later.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
