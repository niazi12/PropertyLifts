import { company, services } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/services", "/products", "/areas", "/about", "/faq", "/quote", "/contact", "/emergency", "/career", "/privacy"];

  return [
    ...pages.map((path) => ({
      url: `${company.url}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${company.url}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
