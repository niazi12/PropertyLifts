import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/lib/site";

export default function CtaBanner({
  title = "Need a lift installed, serviced or repaired?",
  description = "Tell us about your building and we'll arrange a free site survey and quote.",
}) {
  return (
    <section className="bg-amber-500">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
          <p className="mt-2 text-slate-800">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn-primary">
            Request a Quote
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-900/30 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-900/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
