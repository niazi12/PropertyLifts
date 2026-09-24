import Link from "next/link";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { areas, company, services } from "@/lib/site";

export const metadata = {
  title: "Areas We Cover",
  description:
    "Lift installation, maintenance and 24/7 breakdown repairs across London, Essex and Kent, from our base in Hornchurch.",
};

export default function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Areas we cover"
        title="Lift services across London, Essex & Kent"
        description={`Based in ${company.address.town}, our engineers cover London and the surrounding counties for installations, maintenance contracts and emergency call-outs.`}
        breadcrumbs={[{ label: "Areas We Cover" }]}
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area.region} className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <MapPin className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  {area.region}
                </h2>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {area.places.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="text-xl font-semibold text-slate-900">Don&apos;t see your area?</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              We regularly work outside the areas listed above, especially for installations and
              larger projects. Call us on{" "}
              <a href={company.phoneHref} className="font-semibold text-primary hover:underline">
                {company.phone}
              </a>{" "}
              to check.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900">Services available in every area</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block rounded-full border px-4 py-2 text-sm font-medium text-slate-700 hover:border-amber-400 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
