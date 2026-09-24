import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { ContactForm } from "./contactform";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name} for lift installation, maintenance, repairs and 24/7 breakdown call-outs. Call ${company.phone}.`,
};

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk about your lift"
        description="Have a question or want to work together? Send us a message or give us a call."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600">
              Looking for a price?{" "}
              <Link href="/quote" className="font-semibold text-primary hover:underline">
                Request a quote
              </Link>{" "}
              instead so we get all the details we need.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl bg-amber-500 p-6 text-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wide">24/7 breakdowns &amp; call-outs</p>
              <a href={company.phoneHref} className="mt-2 block text-3xl font-bold hover:underline">
                {company.phone}
              </a>
            </div>
            <div className="space-y-5 rounded-xl border bg-white p-6 text-slate-700 shadow-sm">
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                <a href={company.phoneHref} className="hover:text-primary">
                  {company.phone}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-primary">
                  {company.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                <span>
                  {company.address.street}, {company.address.town}, {company.address.postcode},{" "}
                  {company.address.region}, {company.address.country}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                <span>Breakdown line open 24/7</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
