import Link from "next/link";
import { company } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        Sorry, we couldn&apos;t find that page. If your lift has broken down, call us on{" "}
        <a href={company.phoneHref} className="font-semibold text-primary hover:underline">
          {company.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/contact" className="btn-accent">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
