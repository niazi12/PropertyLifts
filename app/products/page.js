import Link from "next/link";
import { Check, Info } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import LiftIllustration from "@/components/LiftIllustration";

export const metadata = {
  title: "Products",
  description:
    "Passenger lifts, home lifts, platform and stair lifts, goods lifts and dumbwaiters, supplied, installed and maintained by PROPERTY LIFTS LIMITED.",
};

// Typical ranges only — exact specifications depend on the manufacturer and the building.
const products = [
  {
    id: "passenger-lifts",
    type: "passenger",
    title: "Passenger Lifts",
    category: "Residential & Commercial",
    description:
      "Traction and machine-room-less (MRL) passenger lifts for blocks of flats, offices, hotels, shops and healthcare buildings. Designed for smooth, quiet, reliable everyday use.",
    specs: [
      ["Capacity", "Approx. 450–1,600 kg (6–21 people)"],
      ["Speed", "Typically 1.0–1.6 m/s"],
      ["Drive", "Traction or hydraulic; MRL options"],
      ["Building work", "Lift shaft and pit required"],
    ],
    bestFor: ["Residential blocks", "Offices", "Hotels", "Healthcare"],
    service: "lift-installation",
  },
  {
    id: "home-lifts",
    type: "home",
    title: "Home Lifts",
    category: "Residential",
    description:
      "Compact, stylish lifts for private homes. Many models are self-supporting with little or no pit, so they can often be installed without major building work.",
    specs: [
      ["Capacity", "Typically 1–3 people, some with wheelchair access"],
      ["Speed", "Around 0.15 m/s"],
      ["Travel", "Usually 2–4 floors"],
      ["Building work", "Minimal; often no pit or shaft needed"],
    ],
    bestFor: ["Private houses", "Adapting a home for mobility", "Split-level properties"],
    service: "lift-installation",
  },
  {
    id: "platform-and-stair-lifts",
    type: "platform",
    title: "Platform & Stair Lifts",
    category: "Accessibility",
    description:
      "Vertical platform lifts and inclined stair lifts that give wheelchair users and people with limited mobility step-free access, without the space or cost of a full passenger lift.",
    specs: [
      ["Capacity", "Typically 250–500 kg"],
      ["Speed", "Up to 0.15 m/s"],
      ["Travel", "From a few steps up to several floors"],
      ["Building work", "Shallow pit or ramp; enclosed or open designs"],
    ],
    bestFor: ["Public buildings", "Schools", "Shops and offices", "Homes"],
    service: "platform-and-stair-lifts",
  },
  {
    id: "goods-lifts",
    type: "goods",
    title: "Goods Lifts",
    category: "Commercial & Industrial",
    description:
      "Heavy-duty lifts for moving stock, equipment and deliveries between floors. Built to withstand frequent loading, including by trolley or pallet truck.",
    specs: [
      ["Capacity", "Approx. 250 kg to 2,000 kg+"],
      ["Use", "Goods only, or goods with an attendant"],
      ["Drive", "Traction or hydraulic"],
      ["Building work", "Shaft and pit; heavy-duty car and doors"],
    ],
    bestFor: ["Warehouses", "Retail", "Restaurants", "Workshops"],
    service: "lift-installation",
  },
  {
    id: "dumbwaiters",
    type: "dumbwaiter",
    title: "Dumbwaiters",
    category: "Service Lifts",
    description:
      "Small service lifts for moving food, linen, documents and light goods between floors. Ideal for restaurants, hotels, care homes and larger houses.",
    specs: [
      ["Capacity", "Typically 50–300 kg"],
      ["Loading", "Counter-height or floor-level hatches"],
      ["Footprint", "Compact; fits into existing spaces"],
      ["Building work", "Small shaft or self-supporting frame"],
    ],
    bestFor: ["Restaurants", "Hotels", "Care homes", "Large houses"],
    service: "lift-installation",
  },
];

const Products = () => {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Lift solutions for every building"
        description="We supply, install and maintain a full range of lifts, from compact home lifts to heavy-duty goods lifts."
        breadcrumbs={[{ label: "Products" }]}
      />

      {/* Quick links */}
      <nav aria-label="Lift types" className="border-b bg-white">
        <ul className="container-page flex gap-2 overflow-x-auto py-4">
          {products.map((product) => (
            <li key={product.id} className="shrink-0">
              <a
                href={`#${product.id}`}
                className="inline-block rounded-full border px-4 py-2 text-sm font-medium text-slate-700 hover:border-amber-400 hover:text-primary"
              >
                {product.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="py-20">
        <div className="container-page space-y-20">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.id}
              className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`aspect-square max-h-[420px] w-full rounded-2xl bg-slate-50 p-10 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <LiftIllustration type={product.type} title={`${product.title} illustration`} />
              </div>

              <div>
                <p className="eyebrow mb-3">{product.category}</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">{product.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{product.description}</p>

                <dl className="mt-6 divide-y rounded-xl border bg-white">
                  {product.specs.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-3 gap-4 px-4 py-3 text-sm">
                      <dt className="font-medium text-slate-500">{label}</dt>
                      <dd className="col-span-2 text-slate-800">{value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {product.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/quote?service=${product.service}`} className="btn-primary">
                    Get a Quote
                  </Link>
                  <Link
                    href={`/services/${product.service}`}
                    className="inline-flex items-center justify-center rounded-md border px-6 py-3 font-semibold text-slate-700 hover:border-amber-400 hover:text-primary"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <p className="flex items-start gap-3 rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
            Specifications shown are typical ranges and vary by manufacturer and model. We&apos;ll
            confirm exact capacity, dimensions and building requirements after a site survey.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Not sure which lift is right for you?"
        description="Tell us about your building and we'll recommend the best option."
      />
    </>
  );
};

export default Products;
