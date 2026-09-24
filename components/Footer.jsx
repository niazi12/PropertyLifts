import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/lib/site";

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Products", href: "/products" },
  { title: "Areas We Cover", href: "/areas" },
  { title: "FAQ", href: "/faq" },
  { title: "Careers", href: "/career" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="PROPERTY LIFTS LIMITED logo"
              width={44}
              height={44}
              className="rounded bg-white"
            />
            <span className="font-bold leading-tight tracking-wide text-white">
              PROPERTY LIFTS
              <span className="block text-[10px] font-medium tracking-[0.3em] text-slate-400">
                LIMITED
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            Lift installation, maintenance, repairs and modernisation for residential and
            commercial properties across London, Essex and Kent since {company.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-md bg-slate-800 p-2 transition-colors hover:bg-amber-500 hover:text-slate-900"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md bg-slate-800 p-2 transition-colors hover:bg-amber-500 hover:text-slate-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-4 font-semibold text-white">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-amber-400">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="mb-4 font-semibold text-white">Company</h2>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-amber-400">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-4 font-semibold text-white">Contact Us</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={company.phoneHref} className="hover:text-amber-400">
                {company.phone}
                <span className="block text-xs text-slate-400">24/7 breakdowns</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-amber-400">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <address className="not-italic">
                {company.address.street}
                <br />
                {company.address.town}, {company.address.postcode}
                <br />
                {company.address.region}, {company.address.country}
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-amber-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
