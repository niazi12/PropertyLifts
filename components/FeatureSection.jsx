import { Clock, HardHat, ShieldCheck, BadgePoundSterling } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { yearsExperience } from "@/lib/site";

const features = [
  {
    icon: HardHat,
    title: "Qualified Engineers",
    description:
      "NVQ Level 4 qualified engineers who know lifts inside out and put safety first on every job.",
  },
  {
    icon: Clock,
    title: `${yearsExperience}+ Years' Experience`,
    description:
      "Looking after lifts across London and the South East since 2011, with a proven track record.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "Thorough servicing and clear records to help you meet your legal duties as a building owner or manager.",
  },
  {
    icon: BadgePoundSterling,
    title: "Transparent Pricing",
    description:
      "Clear, competitive quotes with no hidden extras. We explain what's needed and why before any work starts.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose us"
          title="A lift partner you can rely on"
          description="Property managers, landlords and homeowners trust us to keep their lifts running safely."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-amber-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
