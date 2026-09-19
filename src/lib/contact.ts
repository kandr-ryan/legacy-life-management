export type ContactFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactFields(input: {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
}): ContactResult & { fields: ContactFields } {
  const fields: ContactFields = {
    name: asTrimmedString(input.name),
    phone: asTrimmedString(input.phone),
    email: asTrimmedString(input.email),
    message: asTrimmedString(input.message),
  };

  if (!fields.name) {
    return {
      ok: false,
      error: "Please share your name so Bobbie knows who to call back.",
      fields,
    };
  }

  if (!fields.phone && !fields.email) {
    return {
      ok: false,
      error: "Please add a phone number or email so Bobbie can reach you.",
      fields,
    };
  }

  if (fields.email && !emailPattern.test(fields.email)) {
    return {
      ok: false,
      error: "That email address does not look complete.",
      fields,
    };
  }

  if (!fields.message) {
    return {
      ok: false,
      error:
        "A short note about what you need helps Bobbie prepare for the call.",
      fields,
    };
  }

  return { ok: true, fields };
}
