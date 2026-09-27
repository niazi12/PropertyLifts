import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { formatPostDate, posts } from "@/lib/posts";
import { company } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

function Block({ block }) {
  if (block.h2) {
    return <h2 className="mt-10 text-2xl font-bold text-slate-900">{block.h2}</h2>;
  }
  if (block.ul) {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-amber-500">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4">{block.p}</p>;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4 border-b pb-6 text-sm text-slate-500">
              <span>{formatPostDate(post.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readingTime} min read
              </span>
              <span>By the {company.shortName} team</span>
            </div>
            <div className="text-lg leading-relaxed text-slate-700">
              {post.content.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl bg-primary p-6 text-white">
              <h2 className="text-xl font-semibold">Need help with your lift?</h2>
              <p className="mt-2 text-slate-300">
                Our engineers can advise on maintenance, safety and upgrades.
              </p>
              <Link href="/quote" className="btn-accent mt-5 w-full">
                Request a Quote
              </Link>
              <a href={company.phoneHref} className="btn-outline-light mt-3 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <h2 className="font-semibold text-slate-900">More articles</h2>
              <ul className="mt-4 space-y-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <span className="text-xs font-semibold uppercase text-amber-600">{p.category}</span>
                      <span className="mt-1 block font-medium text-slate-800 group-hover:text-primary group-hover:underline">
                        {p.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="mt-5 block text-sm font-semibold text-primary hover:underline">
                View all articles →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
