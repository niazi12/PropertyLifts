"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { company } from "@/lib/site";

const navigationItems = [
  { title: "Services", href: "/services" },
  { title: "Products", href: "/products" },
  { title: "Areas", href: "/areas" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Careers", href: "/career" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileOpen(false);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Emergency bar */}
      <div className="bg-primary text-white">
        <div className="container-page flex h-10 items-center justify-between text-sm">
          <span className="hidden text-slate-300 sm:inline">
            Lift specialists serving London, Essex &amp; Kent
          </span>
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 font-medium hover:text-amber-400"
          >
            <span className="rounded bg-amber-500 px-1.5 py-0.5 text-xs font-bold uppercase text-slate-900">
              24/7
            </span>
            Breakdowns: {company.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-page flex h-16 items-center gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="PROPERTY LIFTS LIMITED logo"
              width={44}
              height={44}
              className="rounded"
            />
            <span className="text-sm font-bold leading-tight tracking-wide text-slate-900 sm:text-base">
              PROPERTY LIFTS
              <span className="block text-[10px] font-medium tracking-[0.3em] text-slate-500">
                LIMITED
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary underline decoration-amber-500 decoration-2 underline-offset-8"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/quote" className="btn-accent ml-auto hidden py-2 text-sm lg:ml-0 lg:inline-flex">
            Get a Quote
          </Link>

          <button
            type="button"
            className="ml-auto rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t bg-white lg:hidden" aria-label="Mobile">
            <ul className="container-page flex flex-col py-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block rounded-md px-3 py-3 font-medium ${
                      isActive(item.href) ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="mt-3 grid grid-cols-2 gap-3">
                <Link href="/quote" onClick={closeMenu} className="btn-accent">
                  Get a Quote
                </Link>
                <a href={company.phoneHref} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
