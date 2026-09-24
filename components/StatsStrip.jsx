import { yearsExperience } from "@/lib/site";

const stats = [
  { number: `${yearsExperience}+`, label: "Years in business" },
  { number: "200+", label: "Projects completed" },
  { number: "24/7", label: "Breakdown cover" },
  { number: "NVQ 4", label: "Qualified engineers" },
];

export default function StatsStrip() {
  return (
    <section className="border-b bg-white">
      <div className="container-page grid grid-cols-2 divide-slate-200 py-10 md:grid-cols-4 md:divide-x">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-3 text-center">
            <p className="text-3xl font-bold text-primary md:text-4xl">{stat.number}</p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
