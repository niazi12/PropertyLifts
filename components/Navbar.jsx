"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNavbar from "./mobile-navbar";

const navigationItems = [
  { title: "Services", href: "/services" },
  { title: "Products", href: "/products" },
  { title: "About us", href: "/about" },
  { title: "Careers", href: "/career" },
  { title: "Contact us", href: "/contact" },
  
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={50}
            className="rounded-lg"
          />
          <span className="hidden font-semibold sm:inline-block">
            PROPERTY LIFTS LIMITED
          </span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="ml-auto md:hidden"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && <MobileNavbar items={navigationItems} closeMenu={closeMenu} />}
    </header>
  );
};

export default Navbar;
