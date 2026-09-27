import { company, services } from "@/lib/site";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export default function sitemap() {
  const pages = ["", "/services", "/products", "/projects", "/blog", "/areas", "/about", "/faq", "/quote", "/contact", "/emergency", "/career", "/privacy"];

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
    ...projects.map((project) => ({
      url: `${company.url}/projects/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${company.url}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
