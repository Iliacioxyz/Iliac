"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { contactPaths } from "@/lib/site";

const field =
  "mt-3 w-full rounded-field border border-iliac-black/15 bg-white px-4 py-3.5 text-body text-near-black placeholder:text-near-black/60 focus:border-iliac-blue disabled:opacity-60";

const label = "eyebrow text-near-black/65";

const initial: ContactState = { status: "idle" };

/**
 * Posts to a server action that sends the mail. Nothing opens a mail client,
 * and the form keeps what was typed if a send fails so nobody has to write it
 * out twice.
 */
export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initial);
  const values = state.values ?? {};

  if (state.status === "sent") {
    return (
      <div
        role="status"
        className="rounded-card bg-white p-8 ring-1 ring-iliac-black/10"
      >
        <p className="font-jakarta text-h2 font-semibold text-near-black">
          Message sent.
        </p>
        <p className="mt-3 max-w-[46ch] text-body text-near-black/75">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative">
      {/* Bots complete every field they can see. This one is hidden from
          people and from screen readers; anything in it is discarded. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          autoComplete="name"
          defaultValue={values.name}
          error={state.errors?.name}
          disabled={pending}
        />
        <Field
          id="email"
          label="Work email"
          type="email"
          autoComplete="email"
          defaultValue={values.email}
          error={state.errors?.email}
          disabled={pending}
        />
        <Field
          id="company"
          label="Company"
          autoComplete="organization"
          defaultValue={values.company}
          error={state.errors?.company}
          disabled={pending}
        />
        <div>
          <label htmlFor="subject" className={label}>
            What is this about?
          </label>
          <select
            id="subject"
            name="subject"
            className={field}
            disabled={pending}
            defaultValue={values.subject ?? "Nuci demo request"}
          >
            {contactPaths.map((path) => (
              <option key={path.subject}>{path.subject}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={label}>
          Tell us what you need
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={pending}
          defaultValue={values.message}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={`${field} resize-none`}
          placeholder="What's slowing the business down, and what would it take to remove it?"
        />
        {state.errors?.message && (
          <p id="message-error" className="caption mt-2 text-error">
            {state.errors.message}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-pill bg-iliac-blue px-7 py-4 font-jakarta text-[0.9375rem] font-semibold leading-none text-white transition-colors hover:bg-iliac-black disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="caption mt-6 text-error">
          {state.message}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label: labelText,
  error,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {labelText}
      </label>
      <input
        id={id}
        name={id}
        className={field}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="caption mt-2 text-error">
          {error}
        </p>
      )}
    </div>
  );
}
