import Image from "next/image";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatsStrip from "@/components/StatsStrip";
import TeamMembers from "@/components/TeamMember";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import { company, yearsExperience } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `London-based lift specialists since ${company.founded}, providing premium lift services at competitive rates, from regular maintenance to complete installations.`,
};

const reasons = [
  "Experienced, NVQ-qualified lift engineers",
  "Lift solutions designed around your building",
  "Quality materials and workmanship",
  "24/7 breakdown support and maintenance",
];

const values = [
  {
    title: "Engineering with heart",
    content:
      "We combine deep engineering knowledge with genuine care for the people who use our lifts. We take time to understand what you need and uphold the highest standards of safety and ethics.",
  },
  {
    title: "Honesty is our compass",
    content:
      "As an independent company, we can always do what's right for you. We listen carefully, act transparently and only recommend work that's genuinely needed.",
  },
  {
    title: "A better future for all",
    content:
      "Lifts give people freedom to move around their homes, workplaces and communities. By improving access and reliability, our work makes a real difference to people's lives.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Lift specialists you can trust"
        description={`London-based ${company.name} has provided premium lift services at competitive rates for ${yearsExperience} years, from regular maintenance to complete installations.`}
        breadcrumbs={[{ label: "About" }]}
      />

      <StatsStrip />

      {/* Story */}
      <section className="py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/background.webp"
              alt="Modern lift shaft"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our story" title={`Keeping London moving since ${company.founded}`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Since our founding in {company.founded}, {company.name} has grown into a trusted name
                in lift installation, maintenance and repair. Our journey has been built on continuous
                improvement and an unwavering commitment to quality.
              </p>
              <p>
                Our mission is simple: to provide safe, efficient and innovative lift solutions, and to
                back them with service our customers can rely on. We work closely with every client to
                understand their building and deliver solutions that exceed expectations.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-20 text-white md:py-24">
        <div className="container-page">
          <p className="eyebrow mb-3 text-amber-400">Our values</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we stand for</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-amber-500 pt-6">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamMembers />
      <CtaBanner />
    </>
  );
};

export default About;
