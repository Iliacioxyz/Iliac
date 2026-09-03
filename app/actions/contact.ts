"use server";

import { contactPaths, site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "company" | "message", string>>;
  /** Echoed back so a failed submission does not wipe what was typed. */
  values?: Record<string, string>;
};

const MAX = { name: 100, email: 200, company: 120, message: 5000 } as const;

const SENT_MESSAGE =
  "Thanks. That is with us, and we will come back to you shortly.";

/**
 * Server functions are reachable by direct POST, not only through the form, so
 * everything is validated again here regardless of what the browser enforced.
 */
function validate(data: FormData) {
  const read = (key: string) => String(data.get(key) ?? "").trim();
  const values = {
    name: read("name"),
    email: read("email"),
    company: read("company"),
    subject: read("subject"),
    message: read("message"),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Tell us your name.";
  else if (values.name.length > MAX.name) errors.name = "That name is too long.";

  if (!values.email) errors.email = "We need an address to reply to.";
  else if (values.email.length > MAX.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "That does not look like an email address.";

  if (values.company.length > MAX.company) errors.company = "That company name is too long.";

  if (!values.message) errors.message = "Let us know what you need.";
  else if (values.message.length > MAX.message)
    errors.message = "That is longer than we can accept. Please trim it.";

  // Only the five enquiry types the site offers.
  const allowed = contactPaths.map((path) => path.subject);
  const subject = allowed.includes(values.subject) ? values.subject : allowed[0];

  return { values, subject, errors };
}

/**
 * Naive per-address throttle. On serverless this lives only as long as the
 * instance, so it blunts repeat submissions rather than preventing abuse; the
 * honeypot and provider-side limits do the rest.
 */
const recent = new Map<string, number>();
const THROTTLE_MS = 30_000;

export async function sendContactMessage(
  _previous: ContactState,
  data: FormData,
): Promise<ContactState> {
  // Bots fill every field they find; people never see this one. The reply is
  // the same one a person gets, so a crawler learns nothing from the response.
  if (String(data.get("website") ?? "")) {
    return { status: "sent", message: SENT_MESSAGE };
  }

  const { values, subject, errors } = validate(data);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  const key = values.email.toLowerCase();
  const last = recent.get(key);
  if (last && Date.now() - last < THROTTLE_MS) {
    return {
      status: "error",
      message: "That came through already. Give it a moment before sending again.",
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Resend's shared sender works with no domain set up, but only delivers to
  // the address that owns the Resend account. Fine for testing; a verified
  // domain is needed before this goes live.
  const from = process.env.CONTACT_FROM ?? "ILIAC Website <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO ?? site.email;

  if (!apiKey) {
    console.error("Contact form is not configured: set RESEND_API_KEY.");
    return {
      status: "error",
      message: `We could not send that just now. Please email ${site.email} directly.`,
      values,
    };
  }

  // Newlines in a subject line are how header injection starts.
  const line = (text: string) => text.replace(/[\r\n]+/g, " ");
  const body = [
    `Name:     ${values.name}`,
    `Email:    ${values.email}`,
    `Company:  ${values.company || "(not given)"}`,
    `Enquiry:  ${subject}`,
    "",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Replying in the mail client goes straight back to the enquirer.
        reply_to: values.email,
        subject: line(
          values.company ? `${subject}: ${values.company}` : `${subject}: ${values.name}`,
        ),
        text: body,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      // The provider's message may name the account; keep it in the log only.
      console.error("Resend rejected the message:", response.status, await response.text());
      return {
        status: "error",
        message: `We could not send that just now. Please email ${site.email} directly.`,
        values,
      };
    }
  } catch (error) {
    console.error("Contact form send failed:", error);
    return {
      status: "error",
      message: `We could not send that just now. Please email ${site.email} directly.`,
      values,
    };
  }

  recent.set(key, Date.now());
  return {
    status: "sent",
    message: SENT_MESSAGE,
  };
}
