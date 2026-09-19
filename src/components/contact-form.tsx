"use client";

import { useState, type FormEvent } from "react";

import { EmailCta } from "@/components/email-cta";
import { PhoneCta } from "@/components/phone-cta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const emptyFields: FormFields = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

function assertNever(value: never): never {
  throw new Error(`Unhandled form status: ${String(value)}`);
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setError(
          data.error ??
            "The note could not be sent. Please call or email Bobbie instead.",
        );
        return;
      }

      setStatus("success");
      setFields(emptyFields);
    } catch {
      setStatus("error");
      setError(
        "The note could not be sent. Please call or email Bobbie instead.",
      );
    }
  }

  function statusPanel() {
    switch (status) {
      case "idle":
        return (
          <p className="text-base text-muted-foreground">
            Prefer not to write? Call{" "}
            <a className="font-medium text-foreground underline underline-offset-4" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a className="font-medium text-foreground underline underline-offset-4" href={site.emailHref}>
              {site.email}
            </a>
            .
          </p>
        );
      case "submitting":
        return (
          <p role="status" aria-live="polite" className="text-base font-medium">
            Sending your note…
          </p>
        );
      case "success":
        return (
          <div
            role="status"
            aria-live="polite"
            className="rounded-xl border border-primary/20 bg-secondary px-4 py-4"
          >
            <p className="font-heading text-xl font-semibold text-primary">
              Thank you. Your note was received.
            </p>
            <p className="mt-2 text-base">
              If you need a reply today, please call Bobbie at {site.phoneDisplay}{" "}
              or email {site.email}.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <PhoneCta />
              <EmailCta />
            </div>
          </div>
        );
      case "error":
        return (
          <p
            role="alert"
            className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-base text-destructive"
          >
            {error}
          </p>
        );
      default:
        return assertNever(status);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-base">
          Your name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={fields.name}
          onChange={(event) =>
            setFields((current) => ({ ...current, name: event.target.value }))
          }
          className="h-12 bg-card text-base"
          placeholder="Full name"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) =>
              setFields((current) => ({ ...current, phone: event.target.value }))
            }
            className="h-12 bg-card text-base"
            placeholder="812-555-0100"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) =>
              setFields((current) => ({ ...current, email: event.target.value }))
            }
            className="h-12 bg-card text-base"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">
          How can Bobbie help?
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={fields.message}
          onChange={(event) =>
            setFields((current) => ({ ...current, message: event.target.value }))
          }
          className="min-h-36 bg-card text-base"
          placeholder="A few sentences are enough — an appointment, a move, a project, or everyday tasks."
        />
      </div>

      {statusPanel()}

      {status !== "success" ? (
        <Button
          type="submit"
          size="lg"
          className="h-12 px-6 text-base"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send a note to Bobbie"}
        </Button>
      ) : null}
    </form>
  );
}
