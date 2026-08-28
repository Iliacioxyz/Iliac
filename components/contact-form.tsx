"use client";

import { useState, type FormEvent } from "react";
import { contactPaths, site } from "@/lib/site";

const field =
  "mt-3 w-full rounded-field border border-iliac-black/15 bg-white px-4 py-3.5 text-body text-near-black placeholder:text-near-black/60 focus:border-iliac-blue";

const label = "eyebrow text-near-black/65";

/**
 * There is no backend behind this site yet, so the form composes the enquiry
 * and hands it to the visitor's own mail client. The button says so — a form
 * that silently goes nowhere is worse than no form at all.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") ?? "Enquiry");
    const company = String(data.get("company") ?? "").trim();

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${company}`,
      `Enquiry type: ${subject}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      company ? `${subject}: ${company}` : subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="subject" className={label}>
            What is this about?
          </label>
          <select
            id="subject"
            name="subject"
            className={field}
            defaultValue="Nuci demo request"
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
          className={`${field} resize-y`}
          placeholder="What's slowing the business down, and what would it take to remove it?"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="rounded-pill bg-iliac-blue px-7 py-4 font-jakarta text-[0.9375rem] font-semibold leading-none text-white transition-colors hover:bg-iliac-black"
        >
          Open this in my mail app
        </button>
        <p className="caption text-near-black/70">Goes to {site.email}</p>
      </div>

      <p
        role="status"
        className={`caption mt-6 text-iliac-blue transition-opacity duration-300 ${
          sent ? "opacity-100" : "opacity-0"
        }`}
      >
        {sent
          ? `Your mail app should be open. If not, write to ${site.email}`
          : " "}
      </p>
    </form>
  );
}
