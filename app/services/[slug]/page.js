import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ServiceIcon from "@/components/ServiceIcon";
import { company, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in London`,
    description: service.short,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={service.title}
        description={service.short}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-slate-700">{service.intro}</p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">What&apos;s included</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border bg-white p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Ideal for</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.suitedFor.map((item) => (
                <li key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl bg-primary p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-slate-900">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">Talk to an engineer</h2>
              <p className="mt-2 text-slate-300">
                Get expert advice and a free, no-obligation quote.
              </p>
              <Link href={`/quote?service=${service.slug}`} className="btn-accent mt-6 w-full">
                Request a Quote
              </Link>
              <a href={company.phoneHref} className="btn-outline-light mt-3 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <h2 className="font-semibold text-slate-900">Other services</h2>
              <ul className="mt-4 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-slate-600 hover:text-primary hover:underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
