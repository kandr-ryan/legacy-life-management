import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { BobbiePortrait } from "@/components/bobbie-portrait";
import { ContactForm } from "@/components/contact-form";
import { LeafMotif } from "@/components/leaf-motif";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { personYouCanCall, site } from "@/lib/site";

const services = [
  {
    title: "Appointments & health-related organization",
    body: "Be informed. Feel supported.",
    image: "/service-appointments.webp",
    alt: "Stethoscope on a clipboard",
  },
  {
    title: "Moves & transitions",
    body: "Helping life’s changes feel more manageable.",
    image: "/service-moves.webp",
    alt: "Moving boxes labeled Next Chapter",
  },
  {
    title: "Funeral & family project support",
    body: "Compassionate help when it matters most.",
    image: "/service-funeral.webp",
    alt: "White lily on a dark surface",
  },
  {
    title: "Everyday life assistance",
    body: "Practical help for daily living.",
    image: "/service-everyday.webp",
    alt: "Mug and blanket on a sofa",
  },
  {
    title: "Special Projects",
    body: "Personalized support for the things that don’t fit neatly on a to-do list.",
    image: "/service-special.webp",
    alt: "Checklist notebook on a desk",
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

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <section id="top" className="relative overflow-hidden bg-background">
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

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
            <a href="/about" aria-label="About Bobbie">
              <BobbiePortrait priority />
            </a>
            <p className="mt-5 text-center">
              <a href="/about" className="hover:underline">
                <span className="block font-heading text-xl font-semibold">
                  {site.owner}
                </span>
                <span className="block text-base text-muted-foreground">
                  {site.ownerRole}
                </span>
                <span className="block text-base text-muted-foreground">
                  {site.legalName}
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-center bg-sage">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-center text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            How I can help
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Practical support for real life
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {services.map((item) => (
              <li key={item.title} className="text-center">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 18vw"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg leading-snug font-semibold text-ink">
                  {item.title}
                </h3>
                <span
                  className="mx-auto mt-3 block h-px w-10 bg-primary"
                  aria-hidden
                />
                <p className="mx-auto mt-3 max-w-[16rem] text-base text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="font-heading text-3xl font-semibold text-ink">
          About Bobbie
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          Get to know the heart behind Legacy Life Management and my commitment
          to serving older adults and their families.
        </p>
        <a
          href="/about"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
        >
          Learn more →
        </a>
        </div>
      </section>

      <section id="how-it-works" className="section-center bg-sage">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg leading-relaxed">
            A simple process to get the support you need.
          </p>
          <ol className="mt-10 grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
            {steps.map((step, index) => (
              <StepWithArrow key={step.n} step={step} showArrow={index < 2} />
            ))}
          </ol>
        </div>
      </section>

      <section id="about-bobbie" className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            The person you can call
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Hi, I’m {site.owner}.
          </h2>
          <div className="mt-6 space-y-4 text-xl leading-relaxed">
            {personYouCanCall.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p className="pt-4 font-heading text-2xl font-semibold text-ink">
              {site.owner}
            </p>
            <p className="text-lg text-muted-foreground">
              {site.ownerRole} | {site.legalName}
            </p>
          </div>
        </div>
      </section>

      <section id="not-medical" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl bg-sage px-6 py-8 text-center sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            This is not medical care or home health
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-xl leading-relaxed">
            Legacy Life Management is not a medical or home-health service. It
            is personal, practical support for the moments when you or someone
            you love could simply use another capable person by your side.
          </p>
        </div>
      </section>

      <section id="contact" className="section-center bg-sage">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-16">
        <Card className="bg-card py-6 ring-foreground/8">
          <CardHeader>
            <CardTitle className="font-heading text-2xl font-semibold">
              Send a short note
            </CardTitle>
            <CardDescription className="text-lg text-foreground">
              Leave your name, a way to reach you, and a few sentences. For the
              fastest reply, call.
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

function StepWithArrow({
  step,
  showArrow,
}: {
  step: (typeof steps)[number];
  showArrow: boolean;
}) {
  return (
    <>
      <li className="flex aspect-square flex-col justify-center rounded-2xl border border-border bg-background px-5 text-center shadow-sm">
        <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {step.n}
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
          {step.title}
        </h3>
        <p className="mt-2 text-base text-muted-foreground">{step.body}</p>
      </li>
      {showArrow ? (
        <li className="flex justify-center" aria-hidden>
          <ArrowRight className="hidden size-8 text-primary md:block" />
          <ArrowDown className="size-8 text-primary md:hidden" />
        </li>
      ) : null}
    </>
  );
}
