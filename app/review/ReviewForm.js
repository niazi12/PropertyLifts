"use client";

import { useActionState, useState } from "react";
import { Send, Star } from "lucide-react";
import { sendTestimonial } from "@/app/actions/sendTestimonial";
import { services } from "@/lib/site";

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 disabled:opacity-60";
const labelClass = "block text-sm font-medium text-slate-700";

export default function ReviewForm() {
  const [state, formAction, isPending] = useActionState(sendTestimonial, {
    message: "",
    success: false,
    error: false,
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-green-800" role="status">
        <h2 className="text-xl font-semibold">Thank you!</h2>
        <p className="mt-2">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700" role="alert">
          {state.message}
        </div>
      )}

      {/* Star rating */}
      <fieldset>
        <legend className={labelClass}>How would you rate our service? *</legend>
        <div className="mt-2 flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="cursor-pointer" onMouseEnter={() => setHover(value)}>
              <input
                type="radio"
                name="rating"
                value={value}
                required
                disabled={isPending}
                checked={rating === value}
                onChange={() => setRating(value)}
                className="peer sr-only"
              />
              <Star
                className={`h-9 w-9 rounded transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-amber-500 ${
                  value <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"
                }`}
                aria-hidden="true"
              />
              <span className="sr-only">
                {value} star{value > 1 ? "s" : ""}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={labelClass}>
        Your testimonial *
        <textarea
          name="testimonial"
          rows={5}
          required
          disabled={isPending}
          placeholder="Tell us about your experience: the work we did, how the team was, and the result."
          className={fieldClass}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          Your name *
          <input name="name" type="text" autoComplete="name" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Email *
          <input name="email" type="email" autoComplete="email" required disabled={isPending} className={fieldClass} />
          <span className="mt-1 block text-xs font-normal text-slate-500">Never published.</span>
        </label>
        <label className={labelClass}>
          Role or company <span className="font-normal text-slate-500">(optional)</span>
          <input
            name="role"
            type="text"
            placeholder="e.g. Property Manager, ABC Housing"
            disabled={isPending}
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Location <span className="font-normal text-slate-500">(optional)</span>
          <input name="location" type="text" placeholder="e.g. Leytonstone" disabled={isPending} className={fieldClass} />
        </label>
      </div>

      <label className={labelClass}>
        Service we provided <span className="font-normal text-slate-500">(optional)</span>
        <select name="service" disabled={isPending} defaultValue="" className={fieldClass}>
          <option value="">Select…</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>

      <fieldset>
        <legend className={labelClass}>How should we show your name? *</legend>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
          {[
            ["full", "Full name"],
            ["initial", "First name and initial"],
            ["anonymous", "Anonymous"],
          ].map(([value, label]) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="radio"
                name="displayName"
                value={value}
                defaultChecked={value === "initial"}
                disabled={isPending}
                className="h-4 w-4 accent-amber-500"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          disabled={isPending}
          className="mt-0.5 h-4 w-4 shrink-0 accent-amber-500"
        />
        <span>
          I&apos;m happy for {"PROPERTY LIFTS LIMITED"} to publish this testimonial on its website and
          marketing materials. *
        </span>
      </label>

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-xs text-slate-500">
        We&apos;ll only use your details in line with our{" "}
        <a href="/privacy" className="underline hover:text-slate-700">
          privacy policy
        </a>
        .
      </p>

      <button type="submit" disabled={isPending} className="btn-accent w-full sm:w-auto">
        {isPending ? "Sending…" : "Submit Testimonial"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
