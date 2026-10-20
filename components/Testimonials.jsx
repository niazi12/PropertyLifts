import Link from "next/link";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/testimonials";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`h-4 w-4 ${value <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// Renders nothing until at least one testimonial is added to lib/testimonials.js.
export default function Testimonials({ limit = 6 }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Feedback from property managers, landlords and homeowners we've worked with."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, limit).map((t) => (
            <figure key={`${t.name}-${t.quote.slice(0, 20)}`} className="flex flex-col rounded-xl border bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-amber-400" aria-hidden="true" />
              {t.rating && (
                <div className="mt-4">
                  <Stars rating={t.rating} />
                </div>
              )}
              <blockquote className="mt-4 flex-grow leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                {(t.role || t.location) && (
                  <p className="text-sm text-slate-500">{[t.role, t.location].filter(Boolean).join(" · ")}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">
          Worked with us?{" "}
          <Link href="/review" className="font-semibold text-primary hover:underline">
            Share your experience
          </Link>
        </p>
      </div>
    </section>
  );
}
