import PageHeader from "@/components/PageHeader";
import ReviewForm from "./ReviewForm";

export const metadata = {
  title: "Leave a Testimonial",
  description: "Tell us about your experience with PROPERTY LIFTS LIMITED.",
  robots: { index: false },
};

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Your feedback"
        title="How did we do?"
        description="Thank you for choosing us. We'd love to hear about your experience. It only takes a minute and helps other customers choose with confidence."
      />
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
