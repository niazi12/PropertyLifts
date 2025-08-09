"use client";

import Link from "next/link";

const MobileNavbar = ({ items, closeMenu }) => {
  return (
    <div className="md:hidden bg-background border-t shadow-md">
      <nav className="flex flex-col p-4 space-y-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-sm font-medium hover:text-accent-foreground hover:bg-accent p-2 rounded-md transition-colors"
            onClick={closeMenu} // Close when clicking link
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
