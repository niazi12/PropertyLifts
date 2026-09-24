"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendQuoteRequest } from "@/app/actions/sendQuoteRequest";
import { services } from "@/lib/site";

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 disabled:opacity-60";
const labelClass = "block text-sm font-medium text-slate-700";

const propertyTypes = [
  "Private home",
  "Residential block / flats",
  "Office / commercial",
  "Retail / hospitality",
  "Healthcare / education",
  "Other",
];

export default function QuoteForm({ defaultService = "" }) {
  const [state, formAction, isPending] = useActionState(sendQuoteRequest, {
    message: "",
    success: false,
    error: false,
  });

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-green-800" role="status">
        <h2 className="text-xl font-semibold">Request received</h2>
        <p className="mt-2">{state.message}</p>
      </div>
    );
  }

  const defaultTitle = services.find((s) => s.slug === defaultService)?.title ?? "";

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700" role="alert">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          Full name *
          <input name="name" type="text" autoComplete="name" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Email *
          <input name="email" type="email" autoComplete="email" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone *
          <input name="phone" type="tel" autoComplete="tel" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Property postcode *
          <input name="postcode" type="text" autoComplete="postal-code" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Property type *
          <select name="propertyType" required disabled={isPending} defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select…
            </option>
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Service needed *
          <select name="service" required disabled={isPending} defaultValue={defaultTitle} className={fieldClass}>
            <option value="" disabled>
              Select…
            </option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
            <option>Not sure / other</option>
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Lift details <span className="font-normal text-slate-500">(optional)</span>
        <input
          name="liftDetails"
          type="text"
          placeholder="e.g. make, age, number of floors"
          disabled={isPending}
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        How can we help? *
        <textarea
          name="message"
          rows={5}
          required
          disabled={isPending}
          placeholder="Tell us a little about your building and what you need."
          className={fieldClass}
        />
      </label>

      <p className="text-xs text-slate-500">
        We&apos;ll only use your details to respond to your request. See our{" "}
        <a href="/privacy" className="underline hover:text-slate-700">
          privacy policy
        </a>
        .
      </p>

      <button type="submit" disabled={isPending} className="btn-accent w-full sm:w-auto">
        {isPending ? "Sending…" : "Send Quote Request"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
