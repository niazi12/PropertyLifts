import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { faqs } from "@/lib/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about lift servicing, LOLER examinations, breakdown cover, installation times and modernisation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Common questions about lift servicing, compliance and our services. Can't find what you're looking for? Get in touch."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-20">
        <div className="container-page max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border bg-white p-6 shadow-sm open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {faq.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-amber-500 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner title="Still have a question?" description="Our team is happy to help. Call us or send a message." />
    </>
  );
}
