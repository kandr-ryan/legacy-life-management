import Image from "next/image";
import {
  CalendarDays,
  Check,
  FolderKanban,
  Heart,
  Home,
  Leaf,
  Users,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { LeafMotif } from "@/components/leaf-motif";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { site } from "@/lib/site";

const services = [
  {
    title: "Appointments & health-related organization",
    body: "Be informed. Feel supported.",
    icon: CalendarDays,
  },
  {
    title: "Moves & life transitions",
    body: "Smoother transitions. Brighter tomorrows.",
    icon: Home,
  },
  {
    title: "Funeral & family project support",
    body: "Compassionate help when it matters most.",
    icon: Heart,
  },
  {
    title: "Everyday life assistance",
    body: "Practical help for daily living.",
    icon: Users,
  },
  {
    title: "Special projects",
    body: "Flexible support for your unique needs.",
    icon: FolderKanban,
  },
] as const;

const steps = [
  {
    n: "1",
    title: "Talk about your needs",
    body: "We start with a conversation — what is on your plate, and who needs to feel supported.",
  },
  {
    n: "2",
    title: "Create a plan that fits",
    body: "I organize the details, the people, and the next steps so nothing important is left hanging.",
  },
  {
    n: "3",
    title: "I get to work for you",
    body: "I coordinate, follow through, and stay in touch until the work is actually done.",
  },
] as const;

const resources = [
  "Planning checklist",
  "Trusted local resources",
  "Helpful articles",
  "Frequently asked questions",
] as const;

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <section id="top" className="relative overflow-hidden">
        <LeafMotif className="pointer-events-none absolute -top-10 -left-8 w-56 text-sage-leaf sm:w-72 lg:w-80" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Practical support for a brighter tomorrow
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-5xl leading-[1.12] font-semibold text-ink sm:text-6xl">
              Life’s details matter.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed">
              Personal support, practical solutions, and peace of mind for older
              adults and their families of {site.region}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
              >
                Let’s talk →
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-base font-semibold text-foreground"
              >
                How I can help →
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative mx-auto aspect-square w-full max-w-[15.5rem] overflow-hidden rounded-full bg-sage-leaf/30 shadow-sm sm:max-w-[16.5rem]">
              <Image
                src="/bobbie-libbey.jpg"
                alt="Bobbie Libbey, owner of Legacy Life Management"
                fill
                priority
                className="object-cover object-[center_0%]"
                sizes="(max-width: 768px) 15.5rem, 16.5rem"
              />
            </div>
            <aside className="absolute top-2 right-0 hidden w-36 rounded-md border border-border bg-card p-3 text-center shadow-sm sm:block">
              <p className="font-heading text-sm leading-snug text-ink">
                You don’t have to do it all alone.
              </p>
              <Leaf className="mx-auto mt-2 size-4 text-primary" aria-hidden />
            </aside>
            <p className="mt-5 text-center">
              <span className="block font-heading text-xl font-semibold">
                {site.owner}
              </span>
              <span className="block text-base text-muted-foreground">
                {site.ownerRole}
              </span>
              <span className="block text-base text-muted-foreground">
                {site.legalName}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-sage">
        <ul className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {services.map((item) => (
            <li key={item.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="size-6" aria-hidden />
              </div>
              <h2 className="mt-4 font-heading text-lg leading-snug font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-3">
        <div id="about">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            About Bobbie
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Get to know the heart behind Legacy Life Management and my
            commitment to serving older adults and their families.
          </p>
          <a
            href="#about-bobbie"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
          >
            Learn more →
          </a>
        </div>
        <div id="how-it-works">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            How it works
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            A simple process to get the support you need.
          </p>
          <ol className="mt-6 space-y-4">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="mt-1 text-base text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div id="resources">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Resources
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Helpful tools and information for you and your family.
          </p>
          <ul className="mt-6 space-y-3">
            {resources.map((item) => (
              <li key={item} className="flex items-start gap-2 text-lg">
                <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#questions"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
          >
            View resources →
          </a>
        </div>
      </section>

      <section id="about-bobbie" className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            The person you can call
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Hi, I’m {site.owner}.
          </h2>
          <div className="mt-6 grid gap-6 text-xl leading-relaxed lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Throughout my career, I’ve found that some of the most
                meaningful work happens when you can step into a complicated
                situation, bring organization to the details, and help people
                feel supported along the way.
              </p>
              <p>
                My professional background spans operations, program
                coordination, community engagement, event planning, and
                administrative support. I’ve worked closely with families,
                community organizations, nonprofit leaders, educators,
                volunteers, and other professionals — often serving as the
                person responsible for keeping communication clear, coordinating
                moving pieces, and making sure important details don’t get
                overlooked.
              </p>
              <p>That experience is at the heart of Legacy Life Management.</p>
            </div>
            <div className="space-y-4">
              <p>
                I created Legacy Life Management to provide older adults and
                their families with a trusted person they can call when life
                becomes difficult to manage alone. That might mean accompanying
                someone to an important appointment, coordinating the details of
                a move to senior living, helping a family organize
                funeral-related tasks, managing a special project, or simply
                tackling the growing list of everyday things that need to get
                done.
              </p>
              <p>
                My goal is simple: to listen, organize, coordinate, and help get
                things done while treating every client with dignity, respect,
                and kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="not-medical" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl bg-sage px-6 py-8 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            This is not medical care or home health
          </h2>
          <p className="mt-4 max-w-4xl text-xl leading-relaxed">
            Legacy Life Management is not a medical or home-health service. It
            is personal, practical support for the moments when you or someone
            you love could simply use another capable person by your side.
          </p>
        </div>
      </section>

      <section id="questions" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h2 className="font-heading text-3xl font-semibold text-ink">
          Frequently asked questions
        </h2>
        <dl className="mt-8 space-y-6 text-lg">
          <div>
            <dt className="font-semibold">Who do you work with?</dt>
            <dd className="mt-2 text-muted-foreground">
              Older adults and their families in {site.region} — anyone who
              needs a trusted person to organize details when life is hard to
              manage alone.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Do you provide nursing or home health?</dt>
            <dd className="mt-2 text-muted-foreground">
              No. I offer personal, practical coordination — not clinical care.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">How do we start?</dt>
            <dd className="mt-2 text-muted-foreground">
              Call or email Bobbie. Share what is on your plate. We will talk
              through whether practical support is the right fit.
            </dd>
          </div>
        </dl>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Let’s talk
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              You don’t have to do it all alone.
            </h2>
            <p className="mt-5 text-xl leading-relaxed">I’m here to help.</p>
            <address className="mt-8 space-y-2 not-italic text-xl">
              <p className="font-heading text-2xl font-semibold">{site.owner}</p>
              <p>
                {site.ownerRole} | {site.legalName}
              </p>
              <p>
                <a className="font-semibold underline underline-offset-4" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  className="break-all font-semibold underline underline-offset-4"
                  href={site.emailHref}
                >
                  {site.email}
                </a>
              </p>
              <p className="text-lg text-muted-foreground">
                Serving {site.region}. {site.tagline}
              </p>
            </address>
          </div>
          <Card className="bg-card py-6 ring-foreground/8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl font-semibold">
                Send a short note
              </CardTitle>
              <CardDescription className="text-lg text-foreground">
                Leave your name, a way to reach you, and a few sentences. For
                the fastest reply, call.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
