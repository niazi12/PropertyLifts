import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { formatProjectDate, projects } from "@/lib/projects";

export const metadata = {
  title: "Our Projects",
  description:
    "Recent lift installation, refurbishment and modernisation projects completed by PROPERTY LIFTS LIMITED across London.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Recent projects"
        description="A look at some of the lift installations, refurbishments and repairs our team has completed."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-20">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {formatProjectDate(project.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {project.location}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-2 flex-grow leading-relaxed text-slate-600">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title="Planning a similar project?" description="Tell us about your lift and we'll arrange a free survey and quote." />
    </>
  );
}
