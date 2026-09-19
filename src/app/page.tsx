import {
  CalendarDays,
  FolderKanban,
  HeartHandshake,
  Home,
  ListChecks,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { EmailCta } from "@/components/email-cta";
import { PhoneCta } from "@/components/phone-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

const waysIHelp = [
  {
    title: "Important appointments",
    body: "Accompanying someone to an appointment so they are not navigating it alone — notes, questions, and a calm presence.",
    icon: CalendarDays,
  },
  {
    title: "Moves to senior living",
    body: "Coordinating the many details of a move so the family can stay focused on the person, not the checklist.",
    icon: Home,
  },
  {
    title: "Funeral-related tasks",
    body: "Helping a family organize funeral-related coordination when grief already fills the day.",
    icon: HeartHandshake,
  },
  {
    title: "Special projects",
    body: "Managing a defined project — vendors, schedules, follow-up — until it is actually finished.",
    icon: FolderKanban,
  },
  {
    title: "Everyday logistics",
    body: "Tackling the growing list of ordinary things that still have to get done.",
    icon: ListChecks,
  },
] as const;

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <section
        id="top"
        className="relative overflow-hidden border-b border-border"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.9_0.03_80)_0%,transparent_45%),linear-gradient(180deg,oklch(0.975_0.01_85),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div>
            <p className="text-base font-semibold tracking-wide text-brass uppercase">
              {site.legalName}
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-semibold text-ink sm:text-5xl sm:leading-[1.15]">
              You don’t have to do it all alone.
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed">
              I’m {site.owner}. I created Legacy Life Management so older adults
              and their families have a trusted person to call when life becomes
              difficult to manage alone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PhoneCta />
              <EmailCta />
            </div>
            <p className="mt-5 text-base text-muted-foreground">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="font-heading text-2xl font-semibold text-primary">
              I’m here to help.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              That might mean an appointment, a move to senior living,
              funeral-related tasks, a special project, or the everyday list
              that keeps growing.
            </p>
            <Separator className="my-6" />
            <p className="text-lg leading-relaxed">
              My goal is simple: to listen, organize, coordinate, and help get
              things done — with dignity, respect, and kindness.
            </p>
          </aside>
        </div>
      </section>

      <section id="how-i-help" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-base font-semibold tracking-wide text-brass uppercase">
          How I help
        </p>
        <h2 className="mt-2 max-w-3xl font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Practical support for complicated days
        </h2>
        <p className="mt-4 max-w-3xl text-xl leading-relaxed">
          Throughout my career, the most meaningful work has been stepping into
          a complicated situation, bringing organization to the details, and
          helping people feel supported along the way.
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {waysIHelp.map((item) => (
            <li key={item.title}>
              <Card className="h-full bg-card py-6 text-base ring-foreground/8">
                <CardHeader className="gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-6" aria-hidden />
                  </div>
                  <CardTitle className="font-heading text-2xl font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed text-foreground">
                    {item.body}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wide text-brass uppercase">
              About Bobbie
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              {site.owner}, {site.ownerRole}
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              My professional background spans operations, program coordination,
              community engagement, event planning, and administrative support.
            </p>
            <p className="mt-4 text-xl leading-relaxed">
              I’ve worked closely with families, community organizations,
              nonprofit leaders, educators, volunteers, and other professionals
              — often as the person responsible for keeping communication clear,
              coordinating moving pieces, and making sure important details
              don’t get overlooked.
            </p>
          </div>
          <div className="space-y-5 text-xl leading-relaxed">
            <p>
              That experience is at the heart of Legacy Life Management. I
              know how to coordinate schedules and logistics, communicate with
              many different people, manage confidential information with
              discretion, and keep complex projects moving forward.
            </p>
            <p>
              In previous roles, I served as a liaison among clients, donors,
              community partners, leadership, and the public, and coordinated
              meetings, travel, events, communications, and follow-up. I’ve
              also managed large community projects involving vendors,
              sponsors, volunteers, organizations, and numerous logistical
              details.
            </p>
            <p>
              I bring those same skills to every client — but in a much more
              personal way.
            </p>
          </div>
        </div>
      </section>

      <section id="not-medical" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border-2 border-primary/20 bg-secondary/70 px-6 py-10 sm:px-10">
          <p className="text-base font-semibold tracking-wide text-brass uppercase">
            Please know
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
            This is not medical care or home health
          </h2>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed">
            Legacy Life Management is not a medical or home-health service. It
            is personal, practical support for the moments when you or someone
            you love could simply use another capable person by your side.
          </p>
        </div>
      </section>

      <section id="questions" className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Common questions
          </h2>
          <Accordion className="mt-8">
            <AccordionItem value="who">
              <AccordionTrigger className="py-4 text-lg font-semibold">
                Who do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-foreground">
                Older adults and their families — anyone who needs a trusted
                person to organize details and stay beside them when life is
                hard to manage alone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="medical">
              <AccordionTrigger className="py-4 text-lg font-semibold">
                Do you provide nursing or home health?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-foreground">
                No. Legacy Life Management is not a medical or home-health
                service. I offer personal, practical coordination and
                companionship for logistics — not clinical care.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="start">
              <AccordionTrigger className="py-4 text-lg font-semibold">
                How do we start?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-foreground">
                Call or email Bobbie. Share what is on your plate. We will talk
                through whether practical support is the right fit, then take
                the next step together.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-base font-semibold tracking-wide text-brass uppercase">
              Get in touch
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              I’m here when you are ready
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              You don’t have to do it all alone. I’m here to help.
            </p>
            <address className="mt-8 space-y-3 not-italic text-xl">
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
              <p className="text-lg text-muted-foreground">{site.tagline}</p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneCta />
              <EmailCta />
            </div>
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
