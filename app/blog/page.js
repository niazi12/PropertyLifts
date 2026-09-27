import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { formatPostDate, posts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Lift safety advice, compliance guides and industry insights from the engineers at PROPERTY LIFTS LIMITED.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Lift safety, advice & industry insights"
        description="Practical guides for building owners, property managers and homeowners from our lift engineers."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-20">
        <div className="container-page">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl bg-primary p-8 text-white transition-shadow hover:shadow-lg md:p-12"
          >
            <p className="eyebrow text-amber-400">
              Latest · {featured.category}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{featured.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>{formatPostDate(featured.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {featured.readingTime} min read
              </span>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 font-semibold text-amber-400">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>

          {/* Other posts */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <span className="self-start rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {post.category}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-2 flex-grow leading-relaxed text-slate-600">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span>{formatPostDate(post.date)}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {post.readingTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
