import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    title: "Get in touch",
    description: "Call us or send a quote request telling us about your building and what you need.",
  },
  {
    title: "Free site survey",
    description: "An engineer visits to assess your lift or space and understand your requirements.",
  },
  {
    title: "Clear quote",
    description: "You get a written quote with a clear scope of work, timeline and price.",
  },
  {
    title: "Work & aftercare",
    description: "We carry out the work to a high standard, then keep your lift running with ongoing maintenance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-primary py-20 text-white md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 text-amber-400">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A simple, straightforward process
          </h2>
        </div>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-white/20 pt-6">
              <span className="text-4xl font-bold text-amber-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
