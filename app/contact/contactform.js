"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 disabled:opacity-60";
const labelClass = "block text-sm font-medium text-slate-700";

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    message: "",
    success: false,
    error: false,
  });

  return (
    <form action={formAction} className="space-y-6">
      {state?.message && (
        <div
          className={`rounded-lg border p-4 ${
            state.success
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role={state.success ? "status" : "alert"}
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          Your name *
          <input type="text" name="name" autoComplete="name" required disabled={isPending} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Your email *
          <input type="email" name="email" autoComplete="email" required disabled={isPending} className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        Subject *
        <input type="text" name="subject" required disabled={isPending} className={fieldClass} />
      </label>
      <label className={labelClass}>
        Message *
        <textarea name="message" rows={6} required disabled={isPending} className={fieldClass} />
      </label>

      <button type="submit" disabled={isPending} className="btn-accent w-full sm:w-auto">
        {isPending ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
};
