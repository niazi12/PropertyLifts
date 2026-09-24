import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Products",
  description:
    "Home lifts, commercial lifts and dumbwaiters from PROPERTY LIFTS LIMITED, tailored to residential and commercial properties.",
};

const products = [
  {
    title: "Home Lifts",
    description:
      "Elegant, compact lifts designed to fit seamlessly into your home, improving accessibility and adding a touch of sophistication. Space-efficient and energy-saving, with quiet operation and finishes to match your interior.",
    image: "/images/resident.webp",
    features: ["Space-efficient", "Quiet operation", "Modern design", "Custom finishes"],
    category: "Residential",
  },
  {
    title: "Commercial Lifts",
    description:
      "High-capacity passenger lifts engineered for demanding spaces such as offices, shopping centres and healthcare buildings. Heavy-duty construction and smart controls deliver reliable, efficient performance.",
    image: "/images/commertial.webp",
    features: ["Heavy duty", "High capacity", "Smart controls", "Low downtime"],
    category: "Commercial",
  },
  {
    title: "Dumbwaiters",
    description:
      "Streamline your operations with versatile dumbwaiters, ideal for restaurants, hotels and homes. Compact yet robust, they move goods safely between floors, saving time and effort.",
    image: "/images/dumb.png",
    features: ["Compact design", "Efficient", "Durable", "Easy to use"],
    category: "Utility",
  },
];

const Products = () => {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Lift solutions for every building"
        description="From elegant home lifts to heavy-duty commercial installations, we supply lifts tailored to your space and needs."
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="py-20">
        <div className="container-page space-y-16">
          {products.map((product, index) => (
            <article
              key={product.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow mb-3">{product.category}</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">{product.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{product.description}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-700">
                      <Check className="h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/quote?service=lift-installation" className="btn-primary mt-8">
                  Get a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner title="Looking for a custom solution?" description="Tell us about your building and we'll recommend the right lift." />
    </>
  );
};

export default Products;
