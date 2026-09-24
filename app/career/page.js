import Image from "next/image";
import { Check, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/site";

export const metadata = {
  title: "Careers",
  description: `Join ${company.name}. We're hiring a Lift Technician in London. Send your CV to ${company.email}.`,
};

const responsibilities = [
  "Planned maintenance and servicing of lifts",
  "Fault finding and repairs on breakdown call-outs",
  "Supporting new lift installations and modernisations",
  "Completing service reports and following safety procedures",
];

const requirements = [
  "Experience working on lifts (electrical/mechanical)",
  "NVQ in Lift & Escalator Engineering, or working towards it",
  "Full UK driving licence",
  "Willingness to take part in an on-call rota",
];

export default function CareerPage() {
  const applyHref = `mailto:${company.email}?subject=Lift%20Technician%20Application`;

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career with us"
        description={`At ${company.name} we believe in building not just lifts, but meaningful careers. We foster a culture of respect and professional growth, where every team member makes a real impact.`}
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          {/* Vacancy */}
          <article className="rounded-xl border bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
              Now hiring
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Lift Technician</h2>
            <p className="mt-2 text-slate-500">
              Full-time · London &amp; surrounding areas · Competitive salary
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              We&apos;re looking for a skilled Lift Technician to join our team, carrying out
              installation, servicing, repair and breakdown work on passenger and goods lifts across
              residential and commercial sites.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Responsibilities</h3>
                <ul className="mt-4 space-y-3">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Requirements</h3>
                <ul className="mt-4 space-y-3">
                  {requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center">
              <a href={applyHref} className="btn-accent">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Apply by Email
              </a>
              <p className="text-sm text-slate-600">
                Send your CV to{" "}
                <a href={applyHref} className="font-semibold text-primary hover:underline">
                  {company.email}
                </a>{" "}
                with the subject &ldquo;Lift Technician Application&rdquo;.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/images/career.webp"
                alt="Careers at PROPERTY LIFTS LIMITED"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
              <h2 className="font-semibold text-slate-900">Don&apos;t see the right role?</h2>
              <p className="mt-2 text-slate-600">
                We&apos;re always interested in hearing from talented people. Send your CV to{" "}
                <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
                  {company.email}
                </a>{" "}
                and we&apos;ll keep your details on file.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
