import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site";

export function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-900">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 flex-grow leading-relaxed text-slate-600">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

const ServicesSection = ({ limit = 6 }) => {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our services"
            title="Everything your lift needs, from one team"
            description="From brand-new installations to emergency repairs, we look after lifts throughout their life."
          />
          <Link href="/services" className="btn-primary shrink-0">
            All Services
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, limit).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
