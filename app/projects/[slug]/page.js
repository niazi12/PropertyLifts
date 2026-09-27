import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { formatProjectDate, projects } from "@/lib/projects";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [project.cover] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const service = services.find((s) => s.slug === project.service);

  return (
    <>
      <PageHeader
        eyebrow={`${formatProjectDate(project.date)} · ${project.location}`}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]}
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="space-y-5 text-lg leading-relaxed text-slate-700">
              {project.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Project photos</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-3 text-sm text-slate-500">{image.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">Works completed</h2>
              <ul className="mt-4 space-y-3">
                {project.worksCompleted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {service && (
              <div className="rounded-xl bg-primary p-6 text-white">
                <p className="text-sm text-slate-300">Service</p>
                <h2 className="mt-1 text-xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-slate-300">{service.short}</p>
                <Link href={`/services/${service.slug}`} className="btn-accent mt-5 w-full">
                  Learn more
                </Link>
              </div>
            )}

            <Link href="/projects" className="block text-sm font-semibold text-primary hover:underline">
              ← All projects
            </Link>
          </aside>
        </div>
      </section>

      <CtaBanner title="Planning a similar project?" description="Tell us about your lift and we'll arrange a free survey and quote." />
    </>
  );
}
