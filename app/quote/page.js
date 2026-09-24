import { Check, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "./QuoteForm";
import { company } from "@/lib/site";

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a free, no-obligation quote for lift installation, maintenance, repairs or modernisation in London, Essex and Kent.",
};

const promises = [
  "Free, no-obligation quotes",
  "Free site survey for most jobs",
  "Clear pricing with no hidden extras",
  "Advice from experienced lift engineers",
];

export default async function QuotePage({ searchParams }) {
  const { service } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Free quote"
        title="Request a quote"
        description="Tell us about your building and what you need. We'll get back to you to discuss your requirements and arrange a survey."
        breadcrumbs={[{ label: "Request a Quote" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <QuoteForm defaultService={typeof service === "string" ? service : ""} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl bg-slate-50 p-6">
              <h2 className="font-semibold text-slate-900">What to expect</h2>
              <ul className="mt-4 space-y-3">
                {promises.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-primary p-6 text-white">
              <h2 className="font-semibold">Lift broken down?</h2>
              <p className="mt-2 text-slate-300">Don&apos;t wait for a quote — call our 24/7 breakdown line.</p>
              <a href={company.phoneHref} className="btn-accent mt-5 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
