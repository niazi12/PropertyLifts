export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}
