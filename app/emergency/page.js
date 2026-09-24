import Link from "next/link";
import { PhoneCall } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/site";

export const metadata = {
  title: "24/7 Emergency Lift Breakdowns",
  description: `Lift broken down or someone trapped? Call ${company.phone} any time, day or night, for an emergency lift engineer in London, Essex and Kent.`,
};

const steps = [
  "If someone is trapped, reassure them that help is on the way and ask them to stay calm and use the lift alarm.",
  "Do not try to open the lift doors or release anyone yourself.",
  `Call us on ${company.phone} with the building address and a description of the problem.`,
  "If anyone is injured or unwell, call 999 immediately.",
];

export default function EmergencyPage() {
  return (
    <>
      <PageHeader
        eyebrow="24/7 emergency service"
        title="Lift broken down? We're here day and night"
        description="Breakdowns and entrapments are handled around the clock, including weekends and bank holidays."
        breadcrumbs={[{ label: "Emergency Breakdowns" }]}
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-amber-500 p-8 text-slate-900 md:p-10">
            <PhoneCall className="h-10 w-10" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-bold">Call our breakdown line</h2>
            <a href={company.phoneHref} className="mt-3 block text-4xl font-bold hover:underline md:text-5xl">
              {company.phone}
            </a>
            <p className="mt-4 text-slate-800">
              Available 24 hours a day, 7 days a week. For non-urgent enquiries, email{" "}
              <a href={`mailto:${company.email}`} className="font-semibold underline">
                {company.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">What to do if a lift breaks down</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-slate-600">
              Want fewer breakdowns in future? A{" "}
              <Link href="/services/lift-maintenance" className="font-semibold text-primary hover:underline">
                planned maintenance contract
              </Link>{" "}
              catches problems before they stop your lift.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
