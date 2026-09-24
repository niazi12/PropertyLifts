import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { ServiceCard } from "@/components/Service";
import { services } from "@/lib/site";

export const metadata = {
  title: "Our Services",
  description:
    "Lift installation, maintenance, breakdown repairs, modernisation, inspection, platform and stair lifts for residential and commercial properties in London, Essex and Kent.",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Complete lift services for residential and commercial properties"
        description="From the first survey to decades of reliable running, we look after every stage of your lift's life."
        breadcrumbs={[{ label: "Services" }]}
      />
      <section className="py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner title="Not sure which service you need?" description="Call us or send a request and we'll point you in the right direction." />
    </>
  );
};

export default ServicesPage;
